        // Function to save the text from the textarea into an array in localStorage
        function saveText() {
            const text = document.getElementById('myTextarea').value;
            if (text.trim() === '') {
                alert('Please enter some text.');
                return;
            }

            // Retrieve the existing array from localStorage or create a new one if it doesn't exist
            let textArray = JSON.parse(localStorage.getItem('textArray')) || [];

            // Add the new text to the array
            textArray.push(text);

            // Save the updated array back to localStorage
            localStorage.setItem('textArray', JSON.stringify(textArray));

            alert('Text saved to LocalStorage array!');
            document.getElementById('myTextarea').value = ''; // Clear textarea after saving
        }

        // Function to show all saved entries in the array
        function showEntries() {
            const entriesList = document.getElementById('entriesList');
            entriesList.innerHTML = ''; // Clear the list before showing

            // Retrieve the array from localStorage
            const textArray = JSON.parse(localStorage.getItem('textArray')) || [];

            // Iterate over the array and display each entry
            textArray.forEach((entry, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `Entry ${index + 1}: ${entry}`;
                entriesList.appendChild(listItem);
            });
        }

        // Attach the saveText function to the saveButton click event
        document.getElementById('saveButton').addEventListener('click', saveText);
        
        // Attach the showEntries function to the showEntriesButton click event
        document.getElementById('showEntriesButton').addEventListener('click', showEntries);