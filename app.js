var todolist = document.querySelector('.todo-list');

document.getElementById('filters').style.visibility = 'hidden';
document.getElementById('clearComplete').style.visibility = 'hidden';

// Creating and appending elements in form of list of elements.

document.getElementById('new-todo').addEventListener('keyup', function () {
  if (event.keyCode === 13) {
    var newitem = document.getElementById('new-todo').value;
    if (newitem !== '') {
      var node = document.createElement('LI');

      var check = document.createElement('INPUT');
      check.setAttribute('class', 'checkbox');
      check.setAttribute('type', 'checkbox');

      var spann = document.createElement('SPAN');
      spann.setAttribute('class', 'works');
      spann.setAttribute('ondblclick', 'editfunction()');
      spann.append(newitem);

      var button = document.createElement('BUTTON');
      button.setAttribute('class', 'dlt-btn');
      button.textContent = 'X';

      node.append(check, spann, button);
      list.append(node);

      event.currentTarget.value = '';
      document.getElementById('filters').style.visibility = 'visible';
    }
  }
});

// To edit the list items.

function editfunction() {
  var newElement = document.createElement('INPUT');
  newElement.setAttribute('class', 'newElem');
  var span = event.target.parentElement.children[1];
  var parent = event.target.parentElement;
  editableSpan(parent, span, newElement);
}

function editableSpan(parent, span, newElement) {
  parent.replaceChild(newElement, span);
  newElement.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      var content = newElement.value;
      span.textContent = content;
      if (span.textContent !== '') {
        parent.replaceChild(span, newElement);
      }
    }
  });
}

// To remove elements

todolist.addEventListener('click', dlttodo);

function dlttodo(event) {
  if (event.target.classList[0] === 'dlt-btn') {
    event.target.parentElement.remove();
  }

  if (event.target.classList[0] === 'checkbox') {
    document.getElementById('clearComplete').style.visibility = 'visible';
  }

  if (todolist.hasChildNodes() === false) {
    document.getElementById('filters').style.visibility = 'hidden';
    document.getElementById('clearComplete').style.visibility = 'hidden';
  }
}

// footer buttons
var cboxes = document.getElementsByClassName('checkbox');
function showCompleted() {
  for (let i = 0; i < cboxes.length; i++) {
    if (cboxes[i].checked === true) {
      cboxes[i].parentElement.style.display = 'block';
    } else {
      cboxes[i].parentElement.style.display = 'none';
    }
  }
}

function showActive() {
  for (let i = 0; i < cboxes.length; i++) {
    if (cboxes[i].checked === true) {
      cboxes[i].parentElement.style.display = 'none';
    } else {
      cboxes[i].parentElement.style.display = 'block';
    }
  }
}

function showAll() {
  for (let i = 0; i < cboxes.length; i++) {
    cboxes[i].parentElement.style.display = 'block';
  }
}

function clearCompleted() {
  for (let i = 0; i < cboxes.length; i++) {
    if (cboxes[i].checked === true) {
      cboxes[i].parentElement.remove();
      i--;
    }
  }
  if (todolist.hasChildNodes() === false) {
    document.getElementById('filters').style.visibility = 'hidden';
    document.getElementById('clearComplete').style.visibility = 'hidden';
  }
}
