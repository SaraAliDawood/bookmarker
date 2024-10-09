var websiteNameInput = document.getElementById("websiteNameInput");
var urlInput = document.getElementById("urlInput");
var tableBody = document.getElementById("tableBody");
var searchInput = document.getElementById("searchInput");
var  submitArray = [] ;

function submit(){
if(websiteNameInput.classList.contains("is-valid")){
    var product = {
        name: websiteNameInput.value,
        url: urlInput.value
    };
    submitArray.push(product);
    localStorage.setItem("product" , JSON.stringify(submitArray));
    display(submitArray);
}
}


function display(arr){
    var counter = 1;
    var cartona = "";
    for(var i=0; i<arr.length; i++){
        cartona += `
          <tr>
        <td> ${counter} </td>
        <td>${arr[i].name}</td>
        <td> <a href="https://bit.ly/3NOr9nD" target="_blank"><button class="btn text-white btn-info px-4"> <i  class="fa-solid fa-eye pe-2"></i> visit</button> </a> </td>
        <td> <button onclick="deletedItem(${i})" class="btn btn-danger px-4"> <i class="fa-solid fa-trash-can pe-2"></i> delete</button> </td>
    </tr>
        `
        counter++;
    }
tableBody.innerHTML = cartona;
}


function deletedItem(deletedRow){
    submitArray.splice(deletedRow, 1);
    localStorage.setItem("product", JSON.stringify(submitArray));
  display(submitArray);
}
function search(){
    // var counter = 1;
    var word = searchInput.value;
    var searchedArray = [];
    // var cartona ="";
    for(var i = 0; i < submitArray.length; i++){
        if(submitArray[i].name.includes(word )){
            searchedArray.push(submitArray[i]);
            display(searchedArray);
    //         cartona += `
    //       <tr>
    //     <td> ${counter} </td>
    //     <td>${submitArray[i].name}</td>
    //     <td> <a href="https://bit.ly/3NOr9nD" target="_blank"><button class="btn text-white btn-info px-4"> <i  class="fa-solid fa-eye pe-2"></i> visit</button> </a> </td>
    //     <td> <button onclick="deletedItem(${i})" class="btn btn-danger px-4"> <i class="fa-solid fa-trash-can pe-2"></i> delete</button> </td>
    // </tr>
    //     `

        // counter++; 
        // tableBody.innerHTML = cartona;
        }
    }
}
function validateInputs(element){
    var regex = {
        urlInput: /^[a-z]{2,20}$/,
        websiteNameInput: /^[A-Z]{2,20}$/
    };
    if(regex[element.id].test(element.value) == true){
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
    }
    else{
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
    }

}

