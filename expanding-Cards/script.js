const movieContainers = document.querySelectorAll(".movieContainer");

movieContainers.forEach((movie) => {
  movie.addEventListener("click", () => {
    removeActive();
    movie.classList.add("active");
  });
});

function removeActive() {
  movieContainers.forEach((movie) => {
    movie.classList.remove("active");
  });
}
