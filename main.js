window.addEventListener("DOMContentLoaded", () => {
    const intro = document.getElementById("intro");
    const first = document.getElementById("first_text");
    const second = document.getElementById("second_text");

    setTimeout(()=>{
        intro.style.opacity = 1;
        setTimeout(()=>{
            first.style.transform = "translateY(0)";
            second.style.transform = "translateY(0)";
        },300)
    },2000)
})