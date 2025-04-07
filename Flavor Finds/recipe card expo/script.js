// Rating Feature
const stars = document.querySelectorAll('.star');
const ratingOutput = document.getElementById('rating-output');

stars.forEach((star) => {
  star.addEventListener('click', () => {
    const rating = star.getAttribute('data-value');
    stars.forEach((s) => s.classList.remove('selected'));
    for (let i = 0; i < rating; i++) {
      stars[i].classList.add('selected');
    }
    ratingOutput.textContent = `You rated this recipe ${rating} stars!`;
  });
});

// Comment Section
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('comment-list');
const submitComment = document.getElementById('submit-comment');

submitComment.addEventListener('click', () => {
  const commentText = commentInput.value.trim();
  if (commentText) {
    const commentItem = document.createElement('li');
    commentItem.textContent = commentText;
    commentList.appendChild(commentItem);
    commentInput.value = '';
  }
});
