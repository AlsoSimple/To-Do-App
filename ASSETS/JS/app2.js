//write js aqui!..
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
// Modal Code (Model)

// This array will contain all of my combined data.
let myData = [];

// Function that raeads the local storage myData.
function loadData() {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
        myData = JSON.parse(storedData);
    }
}

// Function to save data to local storage
function saveData() {
    localStorage.setItem('myData', JSON.stringify(myData));
}

// Add new list
function addList(myName, categoryName) {
    let myList = {
        index: myData.length,
        name: myName, // key-value pair containing the name for our created list.
        category: categoryName,
        color: 'listColor', // nice to have! but not necessary...!!!!
        listItems: [] // empty array for future list items
    };
    myData.push(myList);
    saveData();
    return myList;
}

// Add item to the selected lists listItems array[]
function addItemToList(myItemName, listIndex) {
    const myItem = {
        name: myItemName, // key-value pair containing the name for the new item
        status: false
    };

    myData[listIndex].listItems.push(myItem);
    saveData();
    return myItem;
}


//-------------------------------------------------------------------------------
// Controller Code

// Function to handle the values from my input box and sending them to (buildList)
function saveText() {
    const title = document.getElementById('myTitleInput').value;
    const category = document.getElementById('myCategoryInput').value;

    if (title.trim() === '' || category.trim() === '') {
        console.log('no text');
    } else {
        console.log('Title:', title, 'Category:', category);
        const newList = addList(title, category);





        buildList(newList);
    }

    // Clear input fields
    document.getElementById('myTitleInput').value = ''; 
    document.getElementById('myCategoryInput').value = ''; 
}

// Function to handle saving a new item to the selected list
function saveItem() {
    const itemTitle = document.getElementById('myItemTitleInput').value;

    if (itemTitle.trim() === '') {
        console.log('Item name cannot be empty');
    } else {
        const listIndex = document.querySelector('.selected-figure').id.split('-')[1]; // Extract the list index from the selected figure's id
        addItemToList(itemTitle, listIndex);
        const myList = myData[listIndex];
        displayListItems(myList, document.getElementById(`listItem-${listIndex}`));
    }

    // Clear the input field after saving the item
    document.getElementById('myItemTitleInput').value = '';
}

// Home Button functionality to reset the view
let myHomeButton = document.getElementById('homeButton');

myHomeButton.addEventListener('click', () => {
    console.log('Home button clicked');
    const listSection = document.getElementById('list-section');
    listSection.innerHTML = ''; // Clear the current content

    // Rebuild the lists
    myData.forEach(list => {
        buildList(list);
    });

    // Make menu button visible
    const myMenuButton = document.getElementById('menuButton');
    myMenuButton.classList.remove('hidden');

    removeTutorial();
});

// Menu functionality setup
function setupMenu() {
    let myItemMenuButton = document.getElementById('itemMenuButton');
    let myItemMenu = document.getElementById('itemMenu');
    let myCloseItemMenuButton = document.getElementById('closeItemMenuButton');
    let myMenuButton = document.getElementById('menuButton');
    let myListMenu = document.getElementById('listMenu');
    let myCloseMenuButton = document.getElementById('closeMenuButton');

    // ITEM MENU

    myItemMenuButton.addEventListener('click', () => {
        myItemMenu.classList.toggle('hidden');
    });

    myCloseItemMenuButton.addEventListener('click', () => {
        console.log('Close item menu clicked');
        myItemMenu.classList.toggle('hidden');
    });

    //LIST MENU

    myMenuButton.addEventListener('click', () => {
        myListMenu.classList.toggle('hidden');
    });

    myCloseMenuButton.addEventListener('click', () => {
        console.log('Close menu clicked');
        myListMenu.classList.toggle('hidden');
    });

    document.getElementById('saveItemButton').addEventListener('click', saveItem);
}

// Initialize the app
function init() {
    loadData();
    myData.forEach((list) => {
        buildList(list);
    });
    
    setupMenu();

    document.getElementById('saveButton').addEventListener('click', saveText);
    
    // If nothing is found in local storage, display the tutorial :))
    if (myData.length === 0) {
        buildTutorial();
    } else {
        removeTutorial();
    }
}

init();

//-------------------------------------------------------------------------------
// View Code

// Creates the new card.
function buildList(myList) {
    // Determine the first item in the listItems array or provide a default if the array is empty
    const firstItem = myList.listItems.length > 0 ? myList.listItems[0].name : 'No items available';

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
                  <h4>${firstItem}</h4>
              </hgroup>
          </div>
            <div">
                <svg id="delete" onclick="deleteList(${myList.index}) width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M1.64618 4.38971H18.2358M14.0884 4.38971L13.8078 3.55193C13.5359 2.74005 13.3998 2.33412 13.1477 2.034C12.9249 1.76897 12.639 1.56383 12.3159 1.43739C11.95 1.29419 11.5201 1.29419 10.6602 1.29419H9.22183C8.36187 1.29419 7.93199 1.29419 7.56609 1.43739C7.24302 1.56383 6.95702 1.76897 6.73431 2.034C6.48211 2.33412 6.34614 2.74005 6.0742 3.55193L5.79359 4.38971M16.1621 4.38971V14.9145C16.1621 16.6482 16.1621 17.5149 15.8231 18.1771C15.5249 18.7596 15.049 19.2331 14.4637 19.5299C13.7983 19.8673 12.9273 19.8673 11.1852 19.8673H8.69677C6.95469 19.8673 6.08365 19.8673 5.41828 19.5299C4.83298 19.2331 4.35713 18.7596 4.05891 18.1771C3.71988 17.5149 3.71988 16.6482 3.71988 14.9145V4.38971M12.0147 8.51707V15.7399M7.86729 8.51707V15.7399" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>

      </figcaption>
  </figure>
    `;

    const listSection = document.getElementById('list-section');
    listSection.insertAdjacentHTML('beforeend', myHTML);

    // Get the figure by its unique id and add a click event listener to it
    const figure = document.getElementById(`listItem-${myList.index}`);
    figure.addEventListener('click', () => {
        displayListItems(myList, figure);
    });
}

// Function to handle the display of list items
function displayListItems(myList, figure) {
    let myMenuButton = document.getElementById('menuButton');
    const listSection = document.getElementById('list-section');
    listSection.innerHTML = '';

//move figure up
    figure.classList.add('selected-figure');
    listSection.appendChild(figure);
    myMenuButton.classList.add('hidden');

    
    let itemsHTML = '<ul id="item-list">';
    myList.listItems.forEach((item, index) => {
        const checked = item.status ? 'checked' : '';
        itemsHTML += `
                      <div id="item-container">
        <ul>
          <li>
            <label for="checkbox-${index}">${item.name}</label>
            <button onclick="deleteItem(${myList.index}, ${index})">X</button> <!-- Delete button -->
            <input class="checkboxclass" type="checkbox" id="checkbox-${index}" ${checked} onclick="toggleItemStatus(${myList.index}, ${index})">
          </li>
        </ul>
      </div>`;
    });
    itemsHTML += '</ul>';

    listSection.innerHTML += itemsHTML;

    removeTutorial();
}


function toggleItemStatus(listIndex, itemIndex) {

    myData[listIndex].listItems[itemIndex].status = !myData[listIndex].listItems[itemIndex].status;

    // Save the updated data to localStorage
    saveData();

    // Optionally, you can refresh the displayed items to reflect the change immediately
    const myList = myData[listIndex];
    const figure = document.getElementById(`listItem-${listIndex}`);
    displayListItems(myList, figure);
}

function deleteList(listIndex) {
    // Remove the list from the myData array
    myData.splice(listIndex, 1);

    // Update the index for all lists in myData
    myData.forEach((list, index) => {
        list.index = index;
    });

    // Save the updated data to localStorage
    saveData();

    // Refresh the list display
    const listSection = document.getElementById('list-section');
    listSection.innerHTML = ''; // Clear the current content

    // Rebuild the lists
    myData.forEach(list => {
        buildList(list);
    });

    // Make menu button visible
    const myMenuButton = document.getElementById('menuButton');
    myMenuButton.classList.remove('hidden');
}


function deleteItem(listIndex, itemIndex) {
    // Remove the item from the list's listItems array
    myData[listIndex].listItems.splice(itemIndex, 1);

    // Save the updated data to local storage
    saveData();

    // Refresh the displayed items in the selected list
    const myList = myData[listIndex];
    displayListItems(myList, document.getElementById(`listItem-${listIndex}`));
}

// Creates the tutorial h2
function buildTutorial() {
    let myHTML = `
        <h2>
        Click on the button above to add a new list...
        </h2>`;

    document.getElementById('tutorialContainer').innerHTML += myHTML;
}

// Removes the tutorial h2
function removeTutorial() {
    document.getElementById('tutorialContainer').innerHTML = '';
}
