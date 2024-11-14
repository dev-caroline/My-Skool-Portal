// var register = []
var register = JSON.parse(localStorage.getItem('data')) || [];

function toast(message = 'Welcome', colour = 'red', duration = 3000) {
    Toastify({
        text: message,
        duration: duration,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: colour
        },
        onClick: function () { }
    }).showToast();
}

function addStudent(){
    if(studentName.value == '' ){
        toast('Kindly fill in the input!','red',1500)
    }
    else{
        register.push (studentName.value)
        console.log(register);
            noStudent.style.display = 'none'
            studentName.value= ''
            updateLocalStorage()
            show()
        toast('Student successfully registered!','blue',1500)

}
}

function deleteStudent(index){
    var sure = confirm('Are you sure you want to delete this ?')
    console.log(index);
    if(sure){
    register.splice(index,1)
    updateLocalStorage()
    show()
    toast('Successfully deleted!', 'black', 2000)
    }
    else{
        show()
    }
}


function editStudent(index) {
    var update = prompt('Input the updated name');
    
    if (update) {
        register.splice(index, 1, update); 
        updateLocalStorage()
        show(); 
        toast('Updated!','green',1500)
    } else {
        toast('No new changes!','red',1500)
    }
}


function show(){
    displayStudent.innerHTML = ''
    info.style.display = 'none'
    noStudent.style.display = 'none'
    displayStudent.innerHTML = ` <p class = "text-center text-primary fw-bold fs-3">STUDENT'S DATA</p>       
    <table class = "table table-bordered table-striped table-hover table-info text-capitalize text-center fw-bold border border-3 border-primary" id="table">
                <tr class = "border border-3 border-primary">
                    <td style = "color: #083374;">STUDENT ID</td>
                    <td style = "color: #083374;">FULL NAME</td>
                    <td style = "color: #083374;">ACTIONS</td>
                </tr>
        </table>`
    for (var i = 0;i<register.length;i++){
        console.log(register[i]);
        table.innerHTML += `
            <tr class = "border border-3 border-primary">
                <td>2024${i + 1}AB</td>
                <td>${register[i]}</td>
                <td>
                    <button onclick="editStudent(${i})" class="btn btn-sm btn-primary">Edit</button>
                    <button onclick="deleteStudent(${i})" class="btn btn-sm btn-dark">Delete</button>
                </td>
            </tr>
        `
}
}

function updateLocalStorage() {
    localStorage.setItem('data', JSON.stringify(register));
}

function about(){
    info.style.display = 'block'
}