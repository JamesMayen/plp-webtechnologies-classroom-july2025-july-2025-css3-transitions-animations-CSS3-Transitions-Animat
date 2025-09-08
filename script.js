// === Demonstrating Local vs Global Scope ===

// Global variable
let isLoaderVisible = false;

// Function with local scope variables
function toggleLoader() {
  let loader = document.querySelector(".loader"); // local variable
  isLoaderVisible = !isLoaderVisible;

  if (isLoaderVisible) {
    loader.classList.remove("hidden");
  } else {
    loader.classList.add("hidden");
  }
}

// Reusable function with parameters and return values
function toggleClass(element, className) {
  // Local variable
  let hasClass = element.classList.contains(className);
  if (hasClass) {
    element.classList.remove(className);
    return false;
  } else {
    element.classList.add(className);
    return true;
  }
}

// === Box Animation ===
document.getElementById("animateBoxBtn").addEventListener("click", () => {
  let box = document.getElementById("box");
  // Use reusable toggle function
  toggleClass(box, "box-animate");
});

// === Loader Animation ===
document.getElementById("toggleLoaderBtn").addEventListener("click", toggleLoader);

// === Modal Popup ===
let modal = document.getElementById("modal");
document.getElementById("openModalBtn").addEventListener("click", () => {
  modal.classList.add("show");
  modal.classList.remove("hidden");
});

document.getElementById("closeModalBtn").addEventListener("click", () => {
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("hidden"), 500); // wait for fade out
});
