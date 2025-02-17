const generatorPanel = document.querySelector(".generator-panel");
if (generatorPanel) {
  const btn = generatorPanel.querySelector(".wp-element-button");
  const taskList = generatorPanel.querySelector(".quick-tasks");
  const tasks = taskList.querySelectorAll("li");
  btn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * tasks.length);
    let randomTask = tasks[randomIndex].textContent.trim();
    const resultParagraph = generatorPanel.querySelector(".random-task");
    resultParagraph.textContent = randomTask;
  });
} else {
  console.log("No generator panel found!");
}
