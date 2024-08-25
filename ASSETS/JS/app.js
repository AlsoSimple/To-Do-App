//write js aqui...


let myData = [] // This array will contain all of my combined data.


// Function to create a new list object with the typed text as the name
function saveText() {
    const text = document.getElementById('myTextarea').value;
    if (text.trim() === '') {
        console.log('no text');
        return;
    }

    /// Here i will generate my write data.


    // A function that creates a new variable with a data object.
    
    function makeList(myName) {
            // let, this variable is called myTodoList. 
            // And it is "=" a data object signified by the use of brackets "{}"
            // it contains 2 data objects and a new one is signified by the use of ","
        let myList = {
            name: myName, // key-value pair containing the name for our created list.
            listItems: [] // empty array for future list items
        };

        myData.push(myList); // The data object is then pushed into the combined data array.

        console.log(myData);

    }

    makeList(text); // The function "makeList" is called here and the name is defined by sending a parameter to the function.

    // Saves the updated array back to localStorage
    localStorage.setItem('myData', JSON.stringify(myData));


    console.log('text saved as list name to myData'); //log to check if it works
    

    // Clears the "textarea" after saving the data to localstorage.
    document.getElementById('myTextarea').value = ''; 

    console.log('buildList called with:', myData[myData.length - 1]);

    //Calling the "buildList" function 
    buildList(myData[myData.length - 1]); //(length - 1) accesses the last element in the array
}

// saveButton click event
document.getElementById('saveButton').addEventListener('click', saveText);



// Creates the new card.
function buildList(myList) {
    let myHTML = `
        <figure>
            <span id="label"></span>
            <figcaption>
                <div>
                    <hgroup>
                        <h1>${myList.name}</h1>
                        <h3>Personal</h3>
                    </hgroup>
                    <hgroup id="bullet-group">
                        <span id="bullet"></span>
                        <h4>Make breakfast...</h4>
                    </hgroup>
                </div>
                <div id="options">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </figcaption>
        </figure>
    `;

    document.getElementById('list-section').innerHTML += myHTML;
}