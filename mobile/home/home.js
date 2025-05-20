document.addEventListener("DOMContentLoaded", function() {
    // Typing effect for the intro section
    const element = document.getElementById("auto-type");
    const text = element.innerHTML;
    element.innerHTML = "";

    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 200); // Adjust typing speed here (milliseconds)
        }
    }

    type();

});
