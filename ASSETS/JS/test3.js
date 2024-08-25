//write js aqui


let myData = [] // This array will contain all of my combined data.


// Here i will generate my write data.


// let, this variable is called myTodoList. 
// And it is "=" a data object signified by the use of brackets "{}"
// it contains 2 data objects and a new one is signified by the use of ","
let myTodoList = {
    name: 'list 1', // A KEY/VALUE pair. name/'list1'
    itemList: [] // An array within the data object
}

let myItem = {
    name: 'Do thing', // A KEY/VALUE pair. name/'eat ass'
    status: true // A bolean, will be used to determine wether an item is checked off or not.
}

myTodoList.itemList.push(myItem); // Pushes the item into the "itemList[]" which is an array.

myData.push(myTodoList); // Pushes the "myTodoList" into the combined data array



//-------------------------------------------------------------------------------------------

// A function that creates a new variable with a data object.

function makeList(myListName){
    let newList = {
        name: myListName,
        itemList: []
    }
    myData.push(newList) // The data object is then pushed into the combined data array.


    console.log(newList);
}

makeList('list 2'); // The function "makeList" is called here and the name is defined by sending a parameter to the function.



// A function that creates a new variable with a data object.


function makeItem(myItemName){
    let newItem = {
        name: myItemName,
        status: true
    }

    myTodoList.itemList.push(newItem) // The data object is then pushed into the List's "itemList" Array.

}

makeItem('Do another thing!') //// The function "makeitem" is called here and the name is defined by sending a parameter to the function.

console.table(myData);