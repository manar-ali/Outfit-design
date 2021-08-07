document.querySelector('.img__btn').addEventListener('click', function () {
  document.querySelector('.cont').classList.toggle('s--signup');
});

var nameReg = /([a-z]|[A-Z]){3,}/
var emailReg = /^\S+(@)\S+(.com)$/
var phoneReg = /(010|011|012|015)+[0-9]{8}/

function signUp() {
  var name = document.getElementById("name").value
  var email = document.getElementById("email").value
  var phone = document.getElementById("phone").value
  var password = document.getElementById("pass").value
  if (!(nameReg.test(name))) {
    document.getElementById("n").style = ""
  }

  if (!(emailReg.test(email))) {
    document.getElementById("e").style = ""
  }

  if (!(phoneReg.test(phone))) {
    document.getElementById("ph").style = ""
  }

  if (password == "")
  {
    document.getElementById("p").style = ""
  }

  if (nameReg.test(name) && emailReg.test(email) && phoneReg.test(phone) && password != "")
  {
    window.open("../index.html")
  }
}

function check() {
  var name = document.getElementById("name").value
  var email = document.getElementById("email").value
  var phone = document.getElementById("phone").value
  var password = document.getElementById("pass").value
  if (nameReg.test(name)) {
    document.getElementById("n").innerHTML = ""
  }

  if (emailReg.test(email)) {
    document.getElementById("e").innerHTML = ""
  }

  if (phoneReg.test(phone)) {
    document.getElementById("ph").innerHTML = ""
  }

  if (password != "")
  {
    document.getElementById("p").innerHTML = ""
  }
}