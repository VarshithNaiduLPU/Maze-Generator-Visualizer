var startBtn = document.querySelector(".start");
var resetBtn = document.querySelector(".reset");

startBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (done == undefined && !grid[0].visited) {
    done = false;
  }
});

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.reload();
});
