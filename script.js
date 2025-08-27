// dynamic copy 
const copyBtn = document.getElementsByClassName("copy-btn");
let copyCount=0
for (let i = 0; i < copyBtn.length; i++) {
  copyBtn[i].addEventListener("click", function () {
    console.log("Clicked!");
    copyCount++;
    this.style.color = "gray"; // 'this' refers to the clicked element
    document.getElementById('show-copy').innerText=copyCount
  });
}

// dynamic heart 


const heart = document.getElementsByClassName("fa-heart");
let heartClicked=0
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    console.log("Clicked!");
    heartClicked++;
    this.style.color = "red"; // 'this' refers to the clicked element
    document.getElementById('heart').innerText=heartClicked
  });
}
