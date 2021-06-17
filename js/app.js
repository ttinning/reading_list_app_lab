document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleNewForm); 
  
  const deleteAll = document.querySelector('#delete-button');
  deleteAll.addEventListener('click', handleDeleteAll);
});

const handleNewForm = function(event) {
  event.preventDefault();
  const readingList = document.querySelector('#reading-list');
  const readingListItem = document.createElement('li');
  readingList.appendChild(readingListItem);
  const title = document.createElement('h2');
  title.textContent = event.target.title.value;
  readingListItem.appendChild(title);
  const author = document.createElement('h3');
  author.textContent = event.target.author.value;
  readingListItem.appendChild(author)
  const category = document.createElement('h4');
  category.textContent = event.target.category.value;
  readingListItem.appendChild(category);
  this.reset();
};

const handleDeleteAll = function() {
  const list = document.querySelector('#reading-list');
  list.innerHTML = '';
};
