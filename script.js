// alert  function
function resumeAlert() {
  alert("This section will be uploaded soon.Thank you");
}

function contactInfo() {
  alert(" Contact no: 91+ 7501000248");
}

function showCertificate() {
  alert("adding soon.Thank you");
}

function getEmail() {
  alert("email: bhattacherjeedebojyoti1176@gmail.com");
}

function submitbtn() {
  alert(
    "Thank you for reaching out and showing interest in connecting with me."
  );
}

function home() {
  const element = document.getElementById("home");
  element.scrollIntoView({ behavior: "smooth" });
}

function about() {
  const element = document.getElementById("about");
  element.scrollIntoView({ behavior: "smooth" });
}
function projects() {
  const element = document.getElementById("projects");
  element.scrollIntoView({ behavior: "smooth" });
}

//

function toggleContent() {
  const content = document.getElementById("hiddenDiv");
  const button = document.getElementById("toggleButton");

  const isHidden = content.classList.contains("hidden");

  if (isHidden) {
    content.classList.remove("hidden");
    button.textContent = "Show Less";
  } else {
    content.classList.add("hidden");
    button.textContent = "Show More";
  }

  // Toggle button movement
  button.classList.toggle("translate-y-120");
  const div = document.getElementById("skill_div");
  div.classList.toggle("translate-y-[30rem]");
}

function skill_div() {
  const element = document.getElementById("skill_div");
  element.scrollIntoView({ behavior: "smooth" });
}
function achivement() {
  const element = document.getElementById("achivement");
  element.scrollIntoView({ behavior: "smooth" });
}

function contact() {
  const element = document.getElementById("contact");
  element.scrollIntoView({ behavior: "smooth" });
}

function adjustContainer() {
  const textarea = document.getElementById("myTextarea");

  // Auto-expand the textarea height
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}
