// Retrieve items from local storage or initialize empty array
    let items = JSON.parse(localStorage.getItem('items')) || [];
    console.log(items)

    let islogin =  JSON.parse(localStorage.getItem('islogin'))

    if(islogin == "0"){
        let hiddenele = document.querySelector("#hidden")
        hiddenele.style.visibility = "hidden";


    }

    // Function to render items in the table
    function renderItems() {
        const itemList = document.getElementById('itemList');
        itemList.innerHTML = '';

        items.forEach((item, index) => {
            const row = itemList.insertRow();
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.description}</td>
                <td>${item.price}</td>
                <td>
                    <button onclick="updateItem(${index})">Update</button>
                    <button onclick="deleteItem(${index})">Delete</button>
                </td>
            `;
        });
    }

    // Function to add a new item
    function addItem() {
        const name = document.getElementById('nameInput').value;
        const description = document.getElementById('descInput').value;
        const price = document.getElementById('priceInput').value;

        const newItem = { name, description, price };
        items.push(newItem);
        localStorage.setItem('items', JSON.stringify(items));
        renderItems();
        
    }

    // Function to update an existing item
    function updateItem(index) {

        if(islogin != "0"){

        const newName = prompt('Enter new name:');
        const newDescription = prompt('Enter new description:');
        const newPrice = prompt('Enter new price:');

        items[index] = { name: newName, description: newDescription, price: newPrice };
        localStorage.setItem('items', JSON.stringify(items));
        renderItems();
        }else{
            alert("you need to login ")
        }
        
    }


    function sayhello(){
        console.log("hello");
    }
    function login(){
        window.location.href="file:///C:/Users/aayus/OneDrive/Desktop/MERN/Project_00/codeQ/same/index2.html"

    }
    function signup(){
        window.location.href="file:///C:/Users/aayus/OneDrive/Desktop/MERN/Project_00/codeQ/same/index2 copy.html"

    }
    function logout(){
        localStorage.setItem("islogin" ,"0");
        window.location.href="file:///C:/Users/aayus/OneDrive/Desktop/MERN/Project_00/codeQ/same/index.html"

    }
    // Function to delete an item
    function deleteItem(index) {
        if(islogin =="1"){
            items.splice(index, 1);
            localStorage.setItem('items', JSON.stringify(items));
            renderItems();
        }
        else{
            alert("you need to login")
        }
    }


    document.getElementById('addItemBtn').addEventListener('click', addItem);

    renderItems();
