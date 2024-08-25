        // Function to save the text from the textarea into an array in localStorage
        function saveText() {
            const text = document.getElementById('myTextarea').value;
            if (text.trim() === '') {
                console.log('no text');
                return;
            }

            // Retrieve the existing array from localStorage or create a new one if it doesn't exist
            let textArray = JSON.parse(localStorage.getItem('textArray')) || [];


            textArray.push(text);

            // Save the updated array back to localStorage
            localStorage.setItem('textArray', JSON.stringify(textArray));

            console.log('text saved to local storage');;
            document.getElementById('myTextarea').value = ''; // Clear textarea after saving
        }

        // Attach the saveText function to the saveButton click event
        document.getElementById('saveButton').addEventListener('click', saveText);
        
