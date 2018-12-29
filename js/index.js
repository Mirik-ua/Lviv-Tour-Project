document.getElementById('aboutUs').addEventListener("click", about);

function about() {
  document.getElementById('dropdown1').classList.toggle("activeAbout");
};

document.getElementById('private').addEventListener("click", private);

function private() {
  document.getElementById('dropdown2').classList.toggle("activePrivate");
}

document.getElementById('contact').addEventListener("click", contact);

function contact() {
  document.getElementById('dropdown3').classList.toggle("activeContact");
}
