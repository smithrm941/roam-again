const deleteButton = document.getElementById('delete-post-button')
const deleteConfirmation = document.getElementById('delete-confirmation')

deleteButton.addEventListener("click", () => {
  deleteConfirmation.style.display = "block";
})
