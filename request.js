function createContent (){
fetch('http://localhost:3000'+ link)
.then((response) => response.json())
.then((result) => {
  title.innerHTML = result.title;
  content.innerHTML = result.content;
})}