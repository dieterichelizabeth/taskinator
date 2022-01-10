//Button interactivity
// 1. Create a new task item.
// 2. Style the new task item.
// 3. Add the text.
// 4. Append this element to the task list.
  var buttonEl = document.querySelector("#save-task");
  var tasksToDoEl = document.querySelector("#tasks-to-do");
  
  
  var createTaskHandler = function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(listItemEl);
  };

  buttonEl.addEventListener("click", createTaskHandler);