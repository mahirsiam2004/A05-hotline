// dynamic copy
const copyBtn = document.getElementsByClassName("copy-btn");
let copyCount = 0;
for (let i = 0; i < copyBtn.length; i++) {
  copyBtn[i].addEventListener("click", function () {
    console.log("Clicked!");
    copyCount++;
    this.style.color = "gray";
    document.getElementById("show-copy").innerText = copyCount;
    console.log(document.getElementsByClassName("call-number"));
  });
}

// dynamic heart

const heart = document.getElementsByClassName("fa-heart");
let heartClicked = 0;
for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    console.log("Clicked!");
    heartClicked++;
    this.style.color = "red";
    document.getElementById("heart").innerText = heartClicked;
  });
}

// Copy buttons
var copyButtons = document.getElementsByClassName("copy-btn");
for (var i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
    var number =
      this.parentNode.parentNode.parentNode.querySelector(
        ".call-number"
      ).innerText;
    navigator.clipboard.writeText(number);
    alert("📋 নম্বার কপি হয়েছে " + number);
  });
}

// Call buttons

let coin = 100;
var calls = document.getElementsByClassName("call-btn");
var historyContainer = document.querySelector(".history-container");

for (var i = 0; i < calls.length; i++) {
  calls[i].addEventListener("click", function () {
    if (coin < 20) {
      alert("⚠️ Not enough coins!");
      return;
    }

    var box = this.closest(".boxes"); // get parent box
    var name = box.querySelector(".service-name").innerText;
    var number = box.querySelector(".call-number").innerText;

    alert("📞 Calling " + name + " " + number + "...");

    coin -= 20;
    document.getElementById("coin").innerText = coin;

    let entry = document.createElement("div");
    entry.className = "bg-[#FAFAFA] flex justify-between items-center mx-[24px] mb-2";
    entry.innerHTML = `
      <div class="flex flex-col justify-center items-center gap-2">
        <h2 class="text-[18px]">${name}</h2>
        <h3 class="text-[18px] text-gray-400">${number}</h3>
      </div>
      <h3 class="font-bold">${new Date().toLocaleTimeString()}</h3>
    `;
    historyContainer.appendChild(entry); 
  });
}



