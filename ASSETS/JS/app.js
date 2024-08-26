//write js aqui...

    // Modal Code

let myData = [] // This array will contain all of my combined data.

loadData();

//-----------------------------------------------------------------------------------------------------------------
   //Controller Code

// Function to create a new list object with the typed text as the name
function saveText() {
    const text = document.getElementById('myTextarea').value;
    if (text.trim() === '') {
        console.log('no text');
        

    } else{
        console.log(text);
        
        makeList(text);
    }
     // The function "makeList" is called here and the name is defined by sending a parameter to the function.
}
    /// Here i will generate my write data.
 
    // A function that creates a new variable with a data object.
    
    function makeList(myName) {
            // let, this variable is called myList. 
            // And it is "=" a data object signified by the use of brackets "{}"
            // it contains 2 data objects and a new one is signified by the use of ","
        let myList = {
            name: myName, // key-value pair containing the name for our created list.
            category: '',
            listItems: [] // empty array for future list items
        };

        myData.push(myList); // The data object is then pushed into the combined data array.

        console.log(myData);

    

    
    // Saves the updated array back to localStorage
    localStorage.setItem('myData', JSON.stringify(myData));


    console.log('text saved as list name to myData'); //log to check if it works
    

    // Clears the "textarea" after saving the data to localstorage.
    document.getElementById('myTextarea').value = ''; 

    console.log('buildList called with:', myData[myData.length - 1]);

    //Calling the "buildList" function 
   buildList(myData[myData.length - 1]); //(length - 1) accesses the last element in the array
        console.trace();
    }

function loadData() {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
        myData = JSON.parse(storedData);
        myData.forEach((list) => {
            buildList(list);
        });
    }
}



// saveButton click event
document.getElementById('saveButton').addEventListener('click', saveText);



//-----------------------------------------------------------------------------

    //View Code

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

// Menu

let myMenuButton = document.getElementById('menuButton')

let myListMenu = document.getElementById('listMenu')

let myCloseMenuButton = document.getElementById('closeMenuButton')

myMenuButton.addEventListener('click', (event) =>{
    myListMenu.classList.toggle('hidden')
})

myCloseMenuButton.addEventListener('click', (event) =>{
    myListMenu.classList.toggle('hidden')
})