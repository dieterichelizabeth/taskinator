# taskinator

This module project is a interactive Kanban style app called Taskinator. Taskinator lets users create tasks by entering a task name, selecting a type, and clicking an "Add Task" button. Users can organize tasks into "Tasks To Do", "Tasks In Progress", and "Tasks Completed" lists by using the dropdown to change the task status. The tasks you create are persistent, so when you leave the page and return, they will still be there! This app features usage of the Document Object Model (DOM), a Web API.

## Screenshot

<img width="1253" alt="Screen Shot 2022-04-12 at 9 19 42 PM" src="https://user-images.githubusercontent.com/95142863/163086728-e387a179-12cc-4a50-9f44-4cced4c3424d.png">

## Process

Guided building of this app leveraged our existing knowledge of front-end development- and taught us new skills such as using the DOM to read, create, add, and edit content from the HTML page. We identified elements using [HTML5 data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes), and accessed the DOM using methods like addEventListener(), querySelector(), createElement(), setAttribute(), and getAttribute(). Then added user interactivity through browser event listeners (such as click, submit, and change) and the event object through [event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target) to reference the element onto which the event occured.

Tasks are stored in an organized array of objects, and saved to local storage. We serialize and de-serialize the data using [JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) and [JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) so that we can interact with them.
Lastly, we addressed technical debt by refactoring the code to create a better solution for the problem at hand.

Get/Put tasks to/from local storage examples:

```
// retrieve tasks from local storage
savedTasks = JSON.parse(savedTasks);

// create the list elements
createTaskEl(savedTasks[i]);

// create a new task, then push a new task into the task array
tasks.push(taskDataObj);

// set the tasks array of objects to local storage
localStorage.setItem("tasks", JSON.stringify(tasks));
```

## Documentation

- [console.dir()](https://developer.mozilla.org/en-US/docs/Web/API/Console/dir)
- [DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [Events](https://developer.mozilla.org/en-US/docs/Web/API/Element#events)
- [HTML Select Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
- [Submit Event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event)
- [Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/Event)
- [HTMLFormElement.reset() Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset)

## Blogs/Resources

- [Cheatsheet in Emmet](https://docs.emmet.io/cheat-sheet/)
- [Technical Debt Article](https://docs.emmet.io/cheat-sheet/)

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
