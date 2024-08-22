// write cool JS hwere!!
let myData = [] // array der indeholder alle list descriptions


// Create a list with a button

document.getElementById("saveListButton").addEventListener("click",() => {
    const listName = document.getElementById("myListTextarea").value;

    if (listName) {
        makeList(listName);
        document.getElementById("myListTextarea").value = "";
        console.table(myData);
    } else {
        console.log('nothing typed in field');
    }
});

// create item with button

document.getElementById("saveItemButton").addEventListener("click",() => {
    const itemName = document.getElementById("myItemTextarea").value;

    if (itemName) {
        makeItem(0, itemName);
        document.getElementById("myItemTextarea").value = "";
        console.table(myData);
    } else {
        console.log('nothing typed in field');
    }
});



// generate data write data


let myTodoList = {
    name: 'liste 1',
    listItems: []
}
// console.log(myTodoList.listItems);

let myListItem = {
    name: 'stå op',
    status: true
}

// console.log(myListItem);



myTodoList.listItems.push(myListItem) // adder item to itemlist

// console.log(myTodoList);

myData.push(myTodoList)

// console.log('my data: ' + myData);



// read data

// console.log(myData[0].listItems[0].status);



// modtager et navn,string og skaber et ny liste dataobjekt og gemmer det i myData-------------------------
function makeList(myName) {
    let myList = {
        name: myName,//key value pair
        listItems: []
    }

    myData.push(myList)

    // console.table(myData);
}

makeList('køkken liste')

// --------------------------------------------------------


// modtager et navn og opretter list item i første to do list

function makeItem(index, myName) {

    let myListItem = {
        name: myName,
        status: true
    }

    myData[index].listItems.push(myListItem)

    // console.table(myData);   
}

makeItem(1, 'vask op')


// modtager et index for listen, og et index for item, og fjerner dette item fra listen.

function removeItem(listIndex, itemIndex) {

    let myList = myData[listIndex]



    myList.listItems.splice(itemIndex, 1)

}


removeItem(1, 0)

// console.table(myData);