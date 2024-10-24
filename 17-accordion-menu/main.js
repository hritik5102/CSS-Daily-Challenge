const containers = document.getElementsByClassName("container");

// We can't directly apply forEach on the HTMLCollection, you have first convert them into an array
Array.from(containers).forEach((container) => {
  container.addEventListener("click", () => {
    container.classList.toggle("is-active");
  });
});
