
document.getElementById('memeForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var topText = document.getElementById('topText').value;
  var bottomText = document.getElementById('bottomText').value;
  var imageURL = document.getElementById('imageURL').value;

  // Validate input values
  if (!topText || !bottomText || !imageURL) {
    alert('Please fill in all fields');
    return;
  }

  // Create meme container
  var memeContainer = document.createElement('div');
  memeContainer.classList.add('meme');

  // Create image element
  var memeImage = document.createElement('img');
  memeImage.src = imageURL;
  memeContainer.appendChild(memeImage);

  // Create top text element
  var topTextElement = document.createElement('p');
  topTextElement.innerText = topText;
  memeContainer.appendChild(topTextElement);

  // Create bottom text element
  var bottomTextElement = document.createElement('p');
  bottomTextElement.innerText = bottomText;
  memeContainer.appendChild(bottomTextElement);

  // Create remove button
  var removeButton = document.createElement('button');
  removeButton.innerText = 'Remove';
  removeButton.addEventListener('click', function() {
    memeContainer.remove();
  });
  memeContainer.appendChild(removeButton);

  // Append meme to container
  var memesContainer = document.getElementById('memesContainer');
  memesContainer.appendChild(memeContainer);

  // Clear form fields
  document.getElementById('topText').value = '';
  document.getElementById('bottomText').value = '';
  document.getElementById('imageURL').value = '';
});
