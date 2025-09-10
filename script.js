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
document.querySelectorAll(".copy-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    let number = this.closest(".boxes").querySelector(".call-number").innerText;
    navigator.clipboard.writeText(number);
    alert("📋 নম্বার কপি হয়েছে " + number);
  });
});

let coin = 100;
let historyContainer = document.querySelector(".history-container");

// Call buttons
document.querySelectorAll(".call-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    if (coin < 20) return alert("⚠️ Not enough coins!");

    let box = this.closest(".boxes");
    let name = box.querySelector(".seba").innerText;
    let number = box.querySelector(".call-number").innerText;

    alert(`📞 Calling ${name} ${number}...`);

    coin -= 20;
    document.getElementById("coin").innerText = coin;

    let entry = document.createElement("div");
    entry.className =
      "bg-[#FAFAFA] flex justify-between items-center mx-[24px] mb-2";
    entry.innerHTML = `
      <div class="flex flex-col justify-center items-start gap-1">
        <h2 class="text-[16px] font-semibold">${name}</h2>
        <h3 class="text-[14px] text-gray-500">${number}</h3>
      </div>
      <h3 class="text-[14px] font-bold text-gray-600">${new Date().toLocaleTimeString()}</h3>
    `;
    historyContainer.appendChild(entry);
  });
});

const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function () {
  historyContainer.innerHTML = `
    <div class="flex justify-between items-center p-4 sm:p-6">
      <div class="flex justify-center items-center gap-2">
        <i class="fa-solid fa-clock-rotate-left text-[20px] sm:text-[24px]"></i>
        <h1 class="font-bold text-[16px] sm:text-[20px]">Call History</h1>
      </div>
      <div
        id="clear-btn"
        class="px-6 py-2 bg-[#00A63E] rounded-[50px] w-[90px] sm:w-[114px] h-[40px] sm:h-[52px] flex justify-center items-center text-white font-bold cursor-pointer"
      >
        <h3>Clear</h3>
      </div>
    </div>
  `;

  clearBtn.style.textTransform;
  document
    .getElementById("clear-btn")
    .addEventListener("click", arguments.callee);
});
