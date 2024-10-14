  document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addTaskBtn = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  // Add task
  addTaskBtn.addEventListener("click", () => addTask());

  // Press Enter to add task
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") addTask();
  });

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText) {
      const taskItem = document.createElement("li");

      const taskTextNode = document.createTextNode(taskText);
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.className = "remove-btn";
      removeBtn.onclick = () => taskList.removeChild(taskItem);

      taskItem.appendChild(taskTextNode);
      taskItem.appendChild(removeBtn);
      taskList.appendChild(taskItem);

      taskInput.value = "";
    }
  }
});
