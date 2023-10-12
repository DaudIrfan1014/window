let menu = document.querySelector(".menu");
let fileEx = document.querySelector(".fileEx");
let vscode = document.querySelector(".vscode");
let git = document.querySelector(".gitbash");
let edge = document.querySelector(".edge");
let flag = true;
let flag1 = true;
let flag2 = true;
let flag3 = true;
let flag4 = true;
let flag5 = true;
document.querySelector(".window").addEventListener("click", function () {
  if (flag) {
    menu.style.display = "block";
    flag = false;
  } else {
    menu.style.display = "none";
    flag = true;
  }
});
document
  .querySelector(
    ".icon img[src='https://qph.cf2.quoracdn.net/main-qimg-d010604bb18fe7cf3fc86286a3c7de89']"
  )
  .addEventListener("click", function () {
    if (flag1) {
      fileEx.style.display = "block";
      flag1 = false;
    } else {
      fileEx.style.display = "none";
      flag1 = true;
    }
  });
document
  .querySelector(
    ".icon img[src='https://code.visualstudio.com/assets/apple-touch-icon.png']"
  )
  .addEventListener("click", function () {
    if (flag2) {
      vscode.style.display = "block";
      flag2 = false;
    } else {
      vscode.style.display = "none";
      flag2 = true;
    }
  });
document
  .querySelector(
    ".icon img[src='https://avatars.githubusercontent.com/u/4571183?s=280&v=4']"
  )
  .addEventListener("click", function () {
    if (flag3) {
      git.style.display = "block";
      flag3 = false;
    } else {
      git.style.display = "none";
      flag3 = true;
    }
  });
document
  .querySelector(
    ".icon img[src='https://static-00.iconduck.com/assets.00/microsoft-edge-icon-2048x2048-c1i8mtto.png']"
  )
  .addEventListener("click", function () {
    if (flag4) {
      edge.style.display = "block";
      flag4 = false;
    } else {
      edge.style.display = "none";
      flag4 = true;
    }
  });
