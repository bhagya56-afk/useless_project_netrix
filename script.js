// script.js
const plate = document.getElementById("plate");
const resetBtn = document.getElementById("reset-btn");

// Sounds for specific items
const itemSounds = {
  "item-chips": new Audio("nirthi.mp3"),
  "item-pizza": new Audio("nirthi.mp3"),
  "item-burger": new Audio("nirthi.mp3")
};

const messages = {
  "item-rice": "✅ Rice added – Sadya without rice? Impossible! 🍚 / ചോറില്ലെങ്കിൽ സദ്യയോ?",
  "item-kichadi": "✅ Kichadi placed – Cool and crunchy! 🥒 / കിച്ചടി അടിപൊളി!",
  "item-kalan": "✅ Kalan joins the leaf – Tangy and thick! 🥘 / കലൻ വന്നേ!",
  "item-chips": "✅ Chips added – Crunch crunch! 🍟 / ഓ ഹോ! പപ്പടം ഇല്ലാതെ പോകുമോ?",
  "item-payasam": "✅ Sweet Payasam! Sadya is complete now. 🍮 / പായസം തന്നെയാണ് കിംഗ്!",
  "item-sambar": "✅ Sambar splashed in! 🍛 / സാമ്പാർ അടിമാളൻ!",
  "item-rasam": "✅ Rasam poured in – spicy and nice! 🥣 / റസം വന്നാൽ വേറെ ലെവൽ!",
  "item-pickle": "✅ Pickle added – the tangy kick! 🥫 / ഉപ്പിലിട്ടത് പോരേൽ?",
  "item-thoran": "✅ Thoran time! 🥬 / തോരൻ ഇല്ലെങ്കിൽ കള്ളം!",
  "item-avial": "✅ Avial is here – a real mixed treat! 🥗 / അവിയൽ ഇട്ട് പോടി!!",
  "item-pizza": "❌ Pizza? What is this, Onam in Italy? 🍕 / ഓണസദ്യയിലേക് പിസ്സയോ? ഹേ ഹേ!",
  "item-burger": "❌ Burger? This is not McSadya! 🍔 / ബർഗറോ? അതും ഓണസദ്യയിലോ? 😂"
};

document.querySelectorAll(".draggable").forEach((item) => {
  item.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
  });
});

plate.addEventListener("dragover", (e) => {
  e.preventDefault();
});

plate.addEventListener("drop", (e) => {
  e.preventDefault();
  const id = e.dataTransfer.getData("text/plain");
  const original = document.getElementById(id);

  const clone = original.cloneNode(true);
  clone.classList.add("placed");
  clone.style.left = e.offsetX - 18 + "px";
  clone.style.top = e.offsetY - 18 + "px";
  clone.setAttribute("draggable", false);
  plate.appendChild(clone);

  // Play sound if defined
  if (itemSounds[id]) {
    itemSounds[id].play();
  }

  showMessage(messages[id] || "🤔 Unknown item dropped.");
});

resetBtn.addEventListener("click", () => {
  document.querySelectorAll(".placed").forEach((el) => el.remove());
  document.getElementById("message-box").textContent = "";
});

function showMessage(text) {
  const box = document.getElementById("message-box");
  box.textContent = text;
}