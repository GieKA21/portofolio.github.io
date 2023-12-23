function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".hamburger-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function sendMail(){
  let parms = {
    name : document.getElementById("name").value,
    number : document.getElementById("number").value,
    email : document.getElementById("email").value,
    pesan : document.getElementById("pesan").value
  }
  
  emailjs.send("service_vnx2djr","template_d7y56he",parms).then(alert("Email sent!!!"))
}
