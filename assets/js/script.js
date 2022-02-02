// use the querySelector() method to find specific elements by id within the DOM
  var formEl = document.querySelector("#task-form");
  var tasksToDoEl = document.querySelector("#tasks-to-do");
  var taskIdCounter = 0;
  var pageContentEl = document.querySelector("#page-content");
  var tasksInProgressEl = document.querySelector("#tasks-in-progress");
  var tasksCompletedEl = document.querySelector("#tasks-completed");

  // WHAT IS THIS?
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput,
    status: "to do"
  }
  
  // WHAT IS THIS?
  var tasks = [];
  
  // WHAT IS THIS?
  var taskFormHandler = function (event) {
    // prevents browser form refreshing
    event.preventDefault();
    // gets the value input to the task-name form field
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    // gets the value selected to the task-type form field
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
  
    // check if input values are empty strings (validate)
    if (!taskNameInput || !taskTypeInput) {
        alert("You need to fill out the task form!");
        return false;
    }

    // resets the form so the user does not have to manually erase to add new task
    formEl.reset();
    // check if task is new or one being edited by seeing if it has a data-task-id attribute
    var isEdit = formEl.hasAttribute("data-task-id");

    // has data attribute, so get task id and call function to complete edit process
    if (isEdit) {
        var taskId = formEl.getAttribute("data-task-id");
        completeEditTask(taskNameInput, taskTypeInput, taskId);
    } 
    // no data attribute, so create object as normal and pass to createTaskEl function
    // package up data as an object
        else {
            var taskDataObj = {
            name: taskNameInput,
            type: taskTypeInput
            };
    // send it as an argument to createTaskEl
    createTaskEl(taskDataObj);
        }
  };

  var createTaskEl = function(taskDataObj) {
    // create list item
    var listItemEl = document.createElement("li");
    // sets the class
    listItemEl.className = "task-item";

    // add DATA task id as a custom attribute
    listItemEl.setAttribute("data-task-id", taskIdCounter);

    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // sets the class
    taskInfoEl.className = "task-info";
    // add HTML content to div (changing the inner HTML)
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

    // append taskActionesEl to listItemEl
    var taskActionsEl = createTaskActions(taskIdCounter);
    listItemEl.appendChild(taskActionsEl);

    listItemEl.appendChild(taskInfoEl);

    // pass the TaskIDCounter to create buttons that correspond to the current task id
    var taskActionsEl = createTaskActions(taskIdCounter);
    console.log(taskActionsEl);

    // add HTML content to div/add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

    // increase task counter for next unique Data id
    taskIdCounter++;
  };

  var createTaskActions = function(taskId) {
    var actionContainerEl = document.createElement("div");
    actionContainerEl.className = "task-actions";

    // create edit button
    var editButtonEl = document.createElement("button");
    editButtonEl.textContent = "Edit";
    editButtonEl.className = "btn edit-btn";
    editButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(editButtonEl);

    // create delete button
    var deleteButtonEl = document.createElement("button");
    deleteButtonEl.textContent = "Delete";
    deleteButtonEl.className = "btn delete-btn";
    deleteButtonEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(deleteButtonEl);

    // drop down and selection elements?
    var statusSelectEl = document.createElement("select");
    statusSelectEl.className = "select-status";
    statusSelectEl.setAttribute("name", "status-change");
    statusSelectEl.setAttribute("data-task-id", taskId);

    actionContainerEl.appendChild(statusSelectEl);

    var statusChoices = ["To Do", "In Progress", "Completed"];
    for (var i = 0; i < statusChoices.length; i++) {
        // create option element
        var statusOptionEl = document.createElement("option");
        statusOptionEl.textContent = statusChoices[i];
        statusOptionEl.setAttribute("value", statusChoices[i]);
      
        // append to select
        statusSelectEl.appendChild(statusOptionEl);
      }

    return actionContainerEl;
  };

  var completeEditTask = function(taskName, taskType, taskId) {
    // find the matching task list item
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

    // set new values
    taskSelected.querySelector("h3.task-name").textContent = taskName;
    taskSelected.querySelector("span.task-type").textContent = taskType;

    alert("Task Updated!");

    formEl.removeAttribute("data-task-id");
    document.querySelector("#save-task").textContent = "Add Task";
  };

  var taskButtonHandler = function(event) {
    // get target element from event
    var targetEl = event.target;
  
    // edit button was clicked
    if (targetEl.matches(".edit-btn")) {
      var taskId = targetEl.getAttribute("data-task-id");
      editTask(taskId);
    } 
    // delete button was clicked
    else if (targetEl.matches(".delete-btn")) {
      var taskId = targetEl.getAttribute("data-task-id");
      deleteTask(taskId);
    }
  };

  var taskStatusChangeHandler = function(event) {
    console.log(event.target.value);

    // find task list item based on event.target's data-task-id attribute
    // get the task item's id
    var taskId = event.target.getAttribute("data-task-id");

    // find the parent task item element based on the id
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

    // get the currently selected option's value and convert to lowercase
    var statusValue = event.target.value.toLowerCase();

    // change parent task id to move the selected item
    if (statusValue === "to do") {
        tasksToDoEl.appendChild(taskSelected);
      } 
      else if (statusValue === "in progress") {
        tasksInProgressEl.appendChild(taskSelected);
      } 
      else if (statusValue === "completed") {
        tasksCompletedEl.appendChild(taskSelected);
      }
  };

  // edit a task function
  var editTask = function(taskId) {
    console.log("editing task #" + taskId);
  
    // get task list item element
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

     // get content from task name and type
    var taskName = taskSelected.querySelector("h3.task-name").textContent;
    console.log(taskName);

    var taskType = taskSelected.querySelector("span.task-type").textContent;
    console.log(taskType);

    // write values of taskname and taskType to form to be edited
    document.querySelector("input[name='task-name']").value = taskName;
    document.querySelector("select[name='task-type']").value = taskType;

    // data attribute to the form with a value of the task's id so it knows which one is being edited
    formElAttribute("data-task-id", taskId);
    // update form's button to reflect editing a task rather than creating a new one
    formEl.querySelector("#save-task").textContent = "Save Task";
  };

  // delete a task function 
  var deleteTask = function(taskId) {
    console.log (taskId);
    // find task list element with taskID value and remove it
    var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
    taskSelected.remove();
  };

// Create a new task
// uses event listener method to "observe" clicks of the element object (formEl submit button)
// pass two arguments "submit" - type of event we're listening for, and taskFormHandler - event response to execute function 
formEl.addEventListener("submit", taskFormHandler);

// for edit and delete buttons
pageContentEl.addEventListener("click", taskButtonHandler);

// for changing the status
pageContentEl.addEventListener("change", taskStatusChangeHandler);



// NOTES
//console.log(taskNameInput);
//console.dir(taskNameInput);

// Button interactivity
// 1. Create a new task item.
// 2. Style the new task item.
// 3. Add the text.
// 4. Append this element to the task list.