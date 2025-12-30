let myLeads = ["www.awesomelead.com","www.epiclead.com","www.greatlead.com"]
const inputbtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-El")
let listItems = []


inputbtn.addEventListener("click", function() {

    myLeads.push(inputEl.value)
    console.log(myLeads)
})


for(let i=0;i<myLeads.length;i++){
    listItems += "<li>" + myLeads[i] + "</li>"
}
console.log(listItems)
ulEl.innerHTML = listItems


