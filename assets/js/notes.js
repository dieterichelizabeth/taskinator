/*
Goals for the challenge (4): 
Create variables to store the quiz questions
Use mouse-click events to start the quiz
Write for loops to cycle through quiz questions
Use key-press events to receive user input in the form of answers to quiz questions
Create a time limit for the game using time functions
Write conditional statements to determine wrong and right answers
Use client-side storage to store high scores
Use GitHub Pages to publish the page to the web
*/

/*
Learning points for the module
Explain and identify the document object and its relationship to HTML
Use the window object for local and session storage
Use DOM API methods to select and dynamically generate HTML elements and content
Use DOM API methods to handle events such as key presses and mouse clicks
Set time-based events using time functions
Write event-driven functions
Research Web API documentation to implement new and unfamiliar interfaces
*/

// USING JAVASCRIPT TO CREATE INTERACTIVITY ON WEB PAGES
// Reference the document object model
// add function for listening
// "click" is an event (there are many other events which can be used!)
document.getElementById("box2").addEventListener("click", changeColor);
// function, name, curly braces we're placing the code to run
function changeColor (); {
    // add another reference to document object model, and property method to reference I.d.
    // changes the box text to "button was clicked!"
    document.getElementById("box2").innerHTML ="button was clicked!"; 
    // another change to the object - changes the background style to orange
    document.getElementById("box2").style.backgroundColor = "orange";
}

// USING LOCAL STORAGE TO SAVE AND DISPLAY DATA
// We can leave the page and come back since it is saved in storage
// format the data in the way local storage will understand. 
// local storage uses key value pairs to store data and only accepts string values
var carList = [
    "accord", 
    "CR-V",
    "HR-V",
    "Pilots",
]

// SAVING DATA TO LOCAL STORAGE
// convert car list array into a string w/ method JSON.stringify
var stringCars = JSON.stringify(carList)
// Use local storage method "setItem". and provide key name, followed by value to be stored
localStorage.setItem("carList", stringCars);

// DISPLAY THE ITEM TO THE PAGE 
var displayCars = function() {
    var text = "";
    // retrieves the carList from storage using the .getItem method and include key name of ojbect in local storage
    var cars = localStorage.getItem("carList");
    // use JSON.parse method to parse the string into an object (does the opposite of .stringify)
    var carsArray = JSON.parse(cars);
    // loop through elements to display on the page
    for (var i = 0; i < carsArray.length; i++) {
        text += carList[i] + "<br>";
    };
    document.getElementById("list").innerHTML = text;
}

displayCars();

/*
    STEPS
Step 1: Build the HTML and CSS. 
    - We'll use HTML and CSS to create the basic Taskinator structure and design.
Step 2. Create a DOM element. 
    - We'll learn about the DOM and create a DOM element for the "Add Task" button.
        In the index.html file, add the id="save-task" attribute to the button element
        Use .querySelector method to select the id of element in the DOM
        document.querySelector("#save-task");
        set the variable to the selected DOM element
        var buttonEl = document.querySelector("#save-task");
Step 3. Capture the button click. 
    - We'll observe the user's click of the <button> element and create a response from that click.
        -use event listener method to "observe" clicks of the element object (formEl submit button)
         pass two arguments "submit" - type of event we're listening for, and taskFormHandler - event response to execute function (callback function)
         formEl.addEventListener("submit", taskFormHandler);
Step 4. Add task items by clicking a button. (dynamically generated HTML through JavaScript)
    - Step 4.1: Create a new task item 
        - create a new DOM <li> element,
        - In the function, use the createElement() method to create a DOM element object. (document.createElement("li");)
        - Create a variable to store the reference to this new object. (var taskItemEl = document.createElement("li");)
    - Step 4.2: Style the new task item
        - Use dynamic styling to style the element
        - add a class attribute by targeting the class name: taskItemEl.className = "task-item";
    - Step 4.3: Add the text
        - assign some text content to this <li>. Use the textContent property (taskItemEl.textContent = "hello"; taskItemEl;)
    - Step 4.4: Append the element 
        - use querySelector method to select the element where you want to add the new item
        - create a variable reference to the task list (var tasksToDoEl = document.querySelector("#tasks-to-do");)
        - use the appendChild() method (tasksToDoEl.appendChild(taskItemEl);) to append the new list item as a child to <ul> elemnet
    - Step 4.5: wrap everything in a fucntion for optimization (clarity/organization)
        - createTaskHandler() function
        - change event listener to pass the information to this new function 
            - buttonEl.addEventListener("click", createTaskHandler);

--- BREAK: we want to allow the user to create custom tasks by entering the tak name and type in HTML form fields
    The form will have the following features:
    The user will be able to create a task by filling out a form with the task name and choosing what type of task it is.
    The user will be able to submit a task by pressing either the "Add Task" button or the Enter key.
    If either form field is empty, the task won't be created.

Step 1: Add a task form to HTML. We'll add an HTML form that will allow the user to enter the task name and type.
    - Step 1.1: add form elements to accompany the button.
        - add form element to the header in HTML with an id attribute
        - wrap the button element in a div with a class of form-group (for styling purposes)
        - add the input element w/in a div tag
        - add element to lets the user set up what type of task it is
            - add option values w/in a task type "select" element. Wrapped in a div
        - add a class for styling the HTML element
Step 2: Handle form submission. We'll use JavaScript to add a task to the list when the "Add Task" button is clicked.
    - Step 2.1: move the event listener from the button element to the form element 
        - this will store form information
        - so that we can interact with the form and access some of its child HTML elements
    - Step 2.2: replace the click event listener with a onsubmit 
        - This listener listens for:
            -When a user clicks a <button> element with a type attribute that has a value of "submit"
             like the button we currently have in the form
            -When a user presses Enter on their keyboard
    - Step 2.3: add a preventDeafault method to prevent the page from refreshing (deleting the form content)
        - you can console.log events to see their properties
Step 3: Capture form field values. We'll use JavaScript to capture the unique information the user enters (the task name and type).
    - Step 3.1: Target the HTML elements with the pertinent data. (get the data)
        - create a variable which selects the input 
            - var taskNameInput = document.querySelector("input[name='task-name']");
        - use console.dir to target the variable's value
        - update the variable to display
            - var taskNameInput = document.querySelector("input[name='task-name']").value;
    - Step 3.2: Read and store the content that those elements hold. (set the data)
        - get the task name and add it to the listItemEl variable
            - listItemEl.textContent = taskNameInput;
        - repeat the steps with task type input
    - Step 3.3: Use that content to create a new task.
    - Step 3.4: append the <li> to the parent <ul> element
Step 4: Organize functionality. We'll refactor the code to make it more maintainable.
    - Step 4.1: seperate the createTaskHandler into two different function
        - one to handle for submission
        - the other to accept the form values as arguments (taskFormHandler) and use them to create the new task item's HTML (createTaskHandler)
Step 5: Address usability concerns. We'll improve the user experience by validating form input and resetting the form 
        after the user clicks the "Add Task" button.


*/