let myLeads = []
const inputbtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-El")


let leadsFromLocalStrorage = JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStrorage)


inputbtn.addEventListener("click", function () {

    myLeads.push(inputEl.value)
    inputEl.value = ""
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    
    renderLeads()

    
})


function renderLeads() {
    let listItems = []
    for (let i = 0; i < myLeads.length; i++) {
     listItems += `<li>
        <a href = ${myLeads} target ='_blank'>
        ${myLeads} </a> 
        </li>`
    }

    ulEl.innerHTML = listItems

}
