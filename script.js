const students = ["Timothy", "Emily", "Ramon", "Eduardo", "Azikoue", "Michael", "Kelly", "Paulina", "Hannah", "Shuzel", "Steven", "Christos", "Isaac", "Juan", "Lawrence", "Rafal", "Devonte", "Cory", "Justin", "Hector", "Galyver", "Dagem", "Devin", "Derrick", "Lindsay", "Jason", "Goro", "Dino", "Jonathan", "Mackenzie", "Ana", "Isaac", "Jerry"]

const newRandomStudent = () => {
    return students[Math.floor(Math.random()*students.length)]
}

document.addEventListener('DOMContentLoaded', () => {
    button.addEventListener('click', ()=>{
        console.log("hullo")
        result.innerText = newRandomStudent()
    })
})
newRandomStudent()