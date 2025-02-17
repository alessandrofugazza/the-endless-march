const generatorPanel = document.querySelector(".generator-panel");
if (generatorPanel) {
  let taskCounter = 0;
  const generateTaskBtn = generatorPanel.querySelector(".generate-task-btn");
  const resetTaskCounterBtn = generatorPanel.querySelector(".reset-counter-btn");
  const taskList = generatorPanel.querySelector(".quick-tasks");
  const tasks = taskList.querySelectorAll("li");
  const resultParagraph = generatorPanel.querySelector(".random-task");
  //   TODO better spacing you amateur
  const taskCounterParagraph = generatorPanel.querySelector(".task-counter");
  generateTaskBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    let randomTask = tasks[randomIndex].textContent.trim();
    resultParagraph.textContent = randomTask;
    taskCounter += 1;
    taskCounterParagraph.textContent = taskCounter;
  });
  resetTaskCounterBtn.addEventListener("click", () => {
    taskCounter = 0;
    taskCounterParagraph.textContent = taskCounter;
  });
} else {
  console.log("No generator panel found!");
}
