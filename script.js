let myLeads = []
const inputbtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-El")
const deleteEl = document.getElementById("delete-btn")
const tabbtn = document.getElementById("tab-btn")

const leadsFromLocalStrorage = JSON.parse(localStorage.getItem("myLeads"))



tabbtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        myLeads.push(tabs[0].URL)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })

})

deleteEl.addEventListener("click", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
    // location.reload()
})


if (leadsFromLocalStrorage) {
    myLeads.push(leadsFromLocalStrorage)
    render(myLeads)
}


function render(Leads) {
    let listItems = []
    for (let i = 0; i < Leads.length; i++) {
        listItems += `<li>
        <a href = ${Leads} target ='_blank'>
        ${Leads[i]} </a> 
        </li>`
    }

    ulEl.innerHTML = listItems

}


inputbtn.addEventListener("click", function () {

    myLeads.push(inputEl.value)
    inputEl.value = ""

    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    render(myLeads)


})



