// Display the selected file name
document.getElementById('file').addEventListener('change', function(event) {
    const fileName = event.target.files[0].name;
    document.getElementById('fileName').textContent = `Selected file: ${fileName}`;
});

// Handle the form submission
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const formData = new FormData();
    const fileInput = document.getElementById('file');
    formData.append('file', fileInput.files[0]);

    // Send the file to the server using fetch
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('result').textContent = `Error: ${data.error}`;
        } else {
            document.getElementById('result').textContent = `Result: ${data.result}`;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'An error occurred while processing the file.';
    });
});