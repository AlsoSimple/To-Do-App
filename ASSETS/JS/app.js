//write js aqui...

    // Modal Code

let myData = [] // This array will contain all of my combined data.

loadData();

//-----------------------------------------------------------------------------------------------------------------
   //Controller Code

// Function to create a new list object with the typed text as the name and category.

function saveText() {
    const title = document.getElementById('myTitleInput').value;
    const category = document.getElementById('myCategoryInput').value;

    if (title.trim() === '' || category.trim() === '') {
        console.log('no text');
    } else{
        console.log('Title:', title, 'Category:', category);
        
        makeList(title, category);
    }
     // The function "makeList" is called here and the name is defined by sending a parameter to the function.
}

    /// Here i will generate my write data.
 
    // A function that creates a new variable with a data object.
    
    function makeList(myName, categoryName) {
            // let, this variable is called myList. 
            // And it is "=" a data object signified by the use of brackets "{}"
            // it contains 2 data objects and a new one is signified by the use of ","
        let myList = {
            index: myData.length,
            name: myName, // key-value pair containing the name for our created list.
            category: categoryName,
            color: 'listColor', //nice to have! but not necessary...
            listItems: ['item 1', 'item 2', 'item 3'] // empty array for future list items
        };
        console.log(myData.length);
        removeTutorial();
        myListMenu.classList.toggle('hidden')
        myData.push(myList); // The data object is then pushed into the combined data array.

        console.log(myData);

    

    
    // Saves the updated array back to localStorage
    localStorage.setItem('myData', JSON.stringify(myData));


    console.log('text saved as list name to myData'); //log to check if it works
    

    // Clears the "myTitleInput" after saving the data to localstorage.
    document.getElementById('myTitleInput').value = ''; 
    // Clears the "myCategoryInput" after saving the data to localstorage.
    document.getElementById('myCategoryInput').value = ''; 

    console.log('buildList called with:', myData[myData.length - 1]);

    //Calling the "buildList" function 
   buildList(myData[myData.length - 1]); //(length - 1) accesses the last element in the array
        console.trace();
    }

    //functionn that reads the local storage and generates cards accordingly
function loadData() {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
        myData = JSON.parse(storedData);
        myData.forEach((list) => {
            buildList(list);
        });
        //if nothing is found in the local storage, display the tutorial.
    } else {
        buildTutorial();
    }
}



// saveButton click event
document.getElementById('saveButton').addEventListener('click', saveText);



//-----------------------------------------------------------------------------

    //View Code

// Creates the new card.

function buildList(myList) {
    let myHTML = `
        <figure class="listItem" id="listItem-${myList.index}">
            <span id="label"></span>
            <figcaption>
                <div>
                    <hgroup>
                        <h1>${myList.name}</h1>
                        <h3>${myList.category}</h3>
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

    const listSection = document.getElementById('list-section');
    listSection.innerHTML += myHTML;

    // Get the figure by its unique id and add a click event listener to it
    const figure = document.getElementById(`listItem-${myList.index}`);
    figure.addEventListener('click', () => {
        displayListItems(myList, figure);
    });
}


function displayListItems(myList, figure) {
    // Clear the list section
    const listSection = document.getElementById('list-section');
    listSection.innerHTML = '';

    // Move the clicked figure to the top
    figure.classList.add('selected-figure');
    listSection.appendChild(figure);

    // Create an element to display the list items
    let itemsHTML = '<ul id="item-list">';
    myList.listItems.forEach(item => {
        itemsHTML += `<li>${item}</li>`;
    });
    itemsHTML += '</ul>';

    listSection.innerHTML += itemsHTML;
}



//Creates the tutorial h2
function buildTutorial() {
    let myHTML = `
        <h2>
        Click on the button above to add a new list...
        </h2>`;

    document.getElementById('tutorialContainer').innerHTML += myHTML;
}

//removes the tutorial h2
function removeTutorial() {
    document.getElementById('tutorialContainer').innerHTML = '';
}



// Menu

let myMenuButton = document.getElementById('menuButton')

let myListMenu = document.getElementById('listMenu')

let myCloseMenuButton = document.getElementById('closeMenuButton')

myMenuButton.addEventListener('click', (event) =>{
    myListMenu.classList.toggle('hidden')
})

myCloseMenuButton.addEventListener('click', (event) =>{
    console.log('button clicked');
    myListMenu.classList.toggle('hidden')
})



