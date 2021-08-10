// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('list');
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')



// edit option
let editElement; 
let editFlag = false;
let editId = "";
// ****** EVENT LISTENERS **********
//submit form
form.addEventListener('submit', addItem) //Gotta prevent is from submitting and going away
//clear items
clearBtn.addEventListener('click', clearItems)
window.addEventListener('DOMContentLoaded', setupItems)

// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault(); //e would be the event of Evenlistener()????
    const value = grocery.value;
    const id = new Date().getTime().toString()
    if(value !== '' && editFlag == false){ //Add the item to a ist if not empty 
        createListItem(id, value)
        //Display Alert
        displayAlert('Item added to the list', 'success');
        //Show Container
        container.classList.add('show-container')
        //add to local storage
        addToLocalStorage(id, value);
        //Set back to default
        setBackToDefault()

    }
    else if(value != '' && editFlag == true){
        editElement.innerHTML = value //Value comes from the grocery-value
        displayAlert('Value Changed', 'success');
        //edit local storage
        editLocalStorage(editID, value)
        setBackToDefault()
    }
    else{
        displayAlert("Please Enter Value", "danger")


    }
}
//Display alert
function displayAlert(text, action){
    alert.textContent = text
    alert.classList.add(`alert-${action}`)
    //Remove Alert
    setTimeout(function(){
        alert.textContent = ""
        alert.classList.remove(`alert-${action}`)
    }, 1000)
    

}

//set back to default
function setBackToDefault(){
    grocery.value = ''
    editFlag = false;
    editId = ''
    submitBtn.textContent = 'submit';
    
}
//clear items
function clearItems(){
    const items = document.querySelectorAll('.grocery-item')
    if(items.length > 0 ){
        items.forEach(function(item){
            list.removeChild(item); //List is the parent and we are removing the child
        })
    }
    container.classList.remove("show-container")
    displayAlert('empty list', "danger");
    setBackToDefault();
    localStorage.removeItem('list')
} 

function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement; //Look for button then go up two parents to remove from grocery list check html syntax on console to see more
    const id = element.dataset.id //FIGURE OUT WHAT THIS DOES I'M LOWKEY CONFUSED ON THIS BUT
    list.removeChild(element)
    if(list.children.length === 0 ){
        container.classList.remove('show-container')
    }
    displayAlert('item removed', 'danger')
    setBackToDefault();
    //Remove from local storage
    removeFromLocalStorage(id);


}
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement; //Access the grocery item
    //set edit Item
    editElement = e.currentTarget.parentElement.previousElementSibling; // Looking for title which is sibling to his b/c it is a dynamic thing also u are editing the text
    //set form Value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit";
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
    const grocery = {id: id, value: value};
    let items = getLocalStorage(); //If no then setup as an empty array 
    items.push(grocery);
    localStorage.setItem('list', JSON.stringify(items))
}
function removeFromLocalStorage(id){
    let items = getLocalStorage();
    items = items.filter(function(item){
        if(item.id !== id){
            return item;
        }
    })
    localStorage.setItem('list', JSON.stringify(items))

}
function getLocalStorage(){
    return localStorage.getItem('list')?JSON.parse(localStorage.getItem('list')):[];
}

// ****** SETUP ITEMS **********

function editLocalStorage(id, value){
    let items = getLocalStorage();
    items = items.map(function(item){
        if(item.id === id){
            item.value = value;
        }
        return item;
    })

    //localStorage API --> Default into JS
    //localStorage.setItem('Orange', JSON.stringify(['item','item2'])) //Save it as a string
    //setItem
    //getItem
    //removeItem
    //save as strings
    localStorage.setItem('list', JSON.stringify(items))

}
function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach(function(item){
            createListItem(item.id, item.value)
        })
        container.classList.add('show-container')
    }
}
function createListItem(id,value){
    const element = document.createElement('article');
    //add class
    element.classList.add('grocery-item')
    //add ID
    const attr = document.createAttribute('data-id')
    attr.value = id 
    element.setAttributeNode(attr);
    element.innerHTML = `                      <p class = "title"> ${value} </p>
    <div class="btn-container">
        <button type = "button" class = "edit-btn">
            <i class = "fas fa-edit"></i>
        </button>
        <button type = "button" class = "delete-btn"> 
            <i class = "fas fa-trash"></i>
        </button>
    </div>`
    //edit funtion (has to be after the code because it'll be loaded in after not before)
    const deleteBtn = element.querySelector('.delete-btn')
    const editBtn = element.querySelector('.edit-btn')
    deleteBtn.addEventListener('click', deleteItem);
    editBtn.addEventListener('click', editItem);


    //delete function 
    //Append Child
    list.appendChild(element);

}