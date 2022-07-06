function boldPhrase() {
  const getPhrase = document.getElementsByTagName("b");
  for (let i=0; i < getPhrase.length; i++) {
      getPhrase[i].style.color= "red";
  }
  console.log(getPhrase);
}