document.querySelectorAll(".light").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".light").forEach(button =>{
            button.style.backgroundColor = "gray";
            button.classList.remove("active");
        });
        button.classList.add("active");
        button.style.backgroundColor = button.id;
    });
});