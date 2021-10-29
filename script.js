const students = [
    "Emily", 
    "Ramon", 
    "Eduardo", 
    "Michael", 
    "Kelly", 
    "Paulina", 
    "Hannah", 
    "Shuzel", 
    "Steven", 
    "Christos", 
    "Isaac N.", 
    "Isaac W.", 
    "Lawrence",
    "Cory", 
    "Hector", 
    "Galyver", 
    "Dagem", 
    "Devin", 
    "Derrick", 
    "Lindsay", 
    "Jason", 
    "Goro", 
    "Dino", 
    "Jonathan", 
    "Mackenzie", 
    "Ana", 
    "Jerry"
]

const benched = [
    "Devonte", 
    "Juan",
    "Justin",
    "Timothy"
]

const newRandomStudent = () => {
    return students[Math.floor(Math.random()*students.length)]
}

document.addEventListener('DOMContentLoaded', () => {
    students.forEach((student)=>{
        let liSTudent = document.createElement("li")
        liSTudent.textContent = student
        roster.appendChild(liSTudent)
    })
    console.log(`Number of students: ${students.length}`)
    button.addEventListener('click', ()=>{
        console.log("hullo")
        result.innerText = newRandomStudent()
    })
})
newRandomStudent()