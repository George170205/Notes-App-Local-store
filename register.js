const inputName = document.getElementById("txtName");
const inputAge= document.getElementById("txtAge")
const btnRegister = document.getElementById("btnRegister")

//cosntructor
function Student(name,age){
this.name=name
this.age=age
}

function register(){
let newStudent = new Student(inputName.value,inputAge.value)
save(newStudent);
console.log(newStudent);
}
//display function
function display(){

}

function init(){
    //hook evnt
    btnRegister.addEventListener("click",register);
}
window.onload=init;