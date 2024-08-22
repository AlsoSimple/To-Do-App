// JS JS JS

let myData = []; //Array der indeholder alle list descriptions


//Create Data

let myTodoList={
name: "List 1", //Key value pair
listItems: []
};


let myListItem={
    name: "get out of bed",
    status: false
};

myTodoList.listItems.push(myListItem);

myData.push(myTodoList)

myData[0].name; 





// console.log(myData[0].listItems[0].status);



function makeList(myName) {
    let myList = {
        name: myName,
        listItems: [] 
    }

    myData.push(myList)

    console.table(myData);
}


makeList('list 2')


// Create lsit item

// function makeListItem(myItemName) {
//     let myListItem = {
//         name: myItemName,
//         status: false
//     }

//     myTodoList.listItems.push(myListItem)

    
// }

// function makeItem() {

// }



// makeListItem('stå op')

// makeListItem('gå i seng')

// console.table(myData);


// deleteListItem()

function makeItem(index, myName) {

    let myListItem = {
        name: myName,
        status: true
    }

    myData[index].listItems.push(myListItem)

    console.table(myData);
}

makeItem(1, 'vask op')


// modtager et index for listen, og et index for item, og fjerner dette item fra listen.

function removeItem(listIndex, itemIndex) {
    let myList = myData[listIndex]

    console.log(myList.listItems);



}

// removeItem(0, 0){
// }