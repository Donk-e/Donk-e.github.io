// Image change listener
document.querySelectorAll('[dataImage]').forEach(element => {
    element.addEventListener('click', function() {
        const image = this.dataset.image;
        document.body.style.backgroundImage = image;
    });
});


//start menu button

// const btn = document.getElementById("startButton");
// const menu = document.getElementById("startMenu");

// btn.addEventListener("click", () => {menu.classList.toggle("hidden")});

// document.addEventListener("click", (e) => {
//     if (!btn.contains(e.target) && !menu.contains(e.target)) {
//       menu.classList.add("hidden");
//     }
//   });

