//Button interactivity
// 1. Create a new task item.
// 2. Style the new task item.
// 3. Add the text.
// 4. Append this element to the task list.
  var formEl = document.querySelector("#task-form");
  var tasksToDoEl = document.querySelector("#tasks-to-do");
  
  var createTaskHandler = function (event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
  
    // create list item
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
  
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    taskInfoEl.className = "task-info";
  
    // add HTML content to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
    listItemEl.appendChild(taskInfoEl);
  
    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);
  };

  formEl.addEventListener("submit", createTaskHandler);

  //console.log(taskNameInput);
//console.dir(taskNameInput);
