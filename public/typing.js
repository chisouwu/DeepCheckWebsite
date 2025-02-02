document.addEventListener("DOMContentLoaded", function() {
    const typingElement = document.getElementById('typing-slogan');
    const textToType = typingElement.textContent;
    typingElement.textContent = '';  // Clear the text initially

    const descriptionElement = document.getElementById('deepcheck-description');
    descriptionElement.style.display = 'none';  // Initially hide the description

    let index = 0;

    function typeWriter() {
        if (index < textToType.length) {
            typingElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, 45); // Delay for typing effect, adjust time for speed
        } else {
            // Show the #deepcheck-description text after typing is complete
            descriptionElement.style.display = 'block';  // Make description visible
        }
    }

    // Start the typing effect
    typeWriter();
});
