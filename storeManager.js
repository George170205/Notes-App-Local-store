function save(Student){
    let students=read()
    students.push(Student)
    let val = JSON.stringify(Student)
localStorage.setItem("student",val)
}

function read(){
    let data = localStorage.getItem("student")
    if(!data){
        return []
    }else{
        return JSON.parse(data);
    }
}