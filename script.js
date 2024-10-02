document.querySelector('.mybutton').addEventListener('click', addTask); // addTask IS A FUNTION WHICH IS TRIGGERED WHEN WE CLICK ON THE BUTTON

const taskInput = document.getElementById('inputtext');

taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        addTask(); // THE SAME FUNCTION IS CALLED WHEN WE HIT ENTER KEY
    }
});

// FUNCTION TO ADD li ELEMENTS TO THE LIST

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }

    const li = document.createElement('li'); //CREATE A NEW li ELEMENT

    // CREATE CHECKBOX
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('click', function() {
        li.remove(); // REMOVE THE TASK WHEN CHECKBOX IS CLICKED
    });

    // APPEND CHECKBOX AND TASK TEXT TO THE LIST ITEM
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));


    // APPEND THE LIST ITEM TO THE content DIV
    const contentDiv = document.getElementById('content');
    let ul;
    if (!contentDiv.querySelector('ul')) {
        ul = document.createElement('ul');
        contentDiv.appendChild(ul);
    } else {
        ul = contentDiv.querySelector('ul');
    }
    ul.appendChild(li);


    // SCROLL TO THE NEWLY CREATED LIST ITEM
    li.scrollIntoView({ behavior: 'smooth', block: 'start' });

    taskInput.value = ''; // CLEAR THE INPUT
}
