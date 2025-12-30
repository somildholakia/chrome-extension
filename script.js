let myLeads = []
const inputbtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-El")



inputbtn.addEventListener("click", function () {

    myLeads.push(inputEl.value)
    console.log(myLeads)
    renderLeads()
})


function renderLeads() {
    let listItems = []
    for (let i = 0; i < myLeads.length; i++) {
        listItems += "<li>" + myLeads[i] + "</li>"
    }

    ulEl.innerHTML = listItems

}
