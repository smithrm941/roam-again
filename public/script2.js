const postContent = document.querySelectorAll('.post-content')

for(let i =0; i<postContent.length; i++){
  postContent[i].innerHTML = postContent[i].innerHTML.substring(0, 200)
}
