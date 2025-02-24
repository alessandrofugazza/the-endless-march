const generatorPanel = document.querySelector(".generator-panel");
if (generatorPanel) {
  const taskCounterParagraph = generatorPanel.querySelector(".task-counter");
  let taskCounter = parseInt(localStorage.getItem("taskCounter")) || 0;
  taskCounterParagraph.textContent = taskCounter;
  const generateTaskBtn = generatorPanel.querySelector(".generate-task-btn");
  const resetTaskCounterBtn = generatorPanel.querySelector(".reset-counter-btn");
  const taskList = generatorPanel.querySelector(".quick-tasks");
  const tasks = taskList.querySelectorAll("li");
  const resultParagraph = generatorPanel.querySelector(".random-task");
  //   TODO better spacing you amateur
  generateTaskBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    let randomTask = tasks[randomIndex].textContent.trim();
    resultParagraph.textContent = randomTask;
    taskCounter += 1;
    localStorage.setItem("taskCounter", taskCounter);
    taskCounterParagraph.textContent = taskCounter;
  });
  resetTaskCounterBtn.addEventListener("click", () => {
    taskCounter = 0;
    localStorage.setItem("taskCounter", taskCounter);
    taskCounterParagraph.textContent = taskCounter;
  });
} else {
  console.log("No generator panel found!");
}
