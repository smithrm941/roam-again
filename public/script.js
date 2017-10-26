const deleteButton = document.getElementById('delete-post-button')
const deleteConfirmation = document.getElementById('delete-confirmation')

deleteButton.addEventListener("click", () => {
  deleteConfirmation.style.display = "block";
})

// const postContent = document.querySelectorAll('.post-content')
//
// for(let i =0; i<postContent.length; i++){
//   postContent[i].innerHTML = postContent[i].innerHTML.substring(0, 200)
// }
