var i=0
var speed=100


function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i=i+=1;
      setTimeout(typeWriter, speed);
    } else {
        i=0
    }
  }

function t(_a) {
    document.getElementById("demo").innerHTML=('')
    txt = _a
    typeWriter()
}

function b(a) {
    document.getElementById("b").innerHTML=(a)
}

b('<button onclick="aaa()">START</button>')
function aaa() {
    t('What would you like to do?')
    b('<button onclick="window.open(\'https://www.jacobdrath.co\')">Go to my site</button> <button onclick="abt()">Learn about me</button>')
}

function abt() {
    t('Okay! Please note that this site is in beta, and some things may not work right.')
    b('<button onclick="abt_a()">I understand!</button>')
}

function abt_a() {
    t('What is your name?')
    b('>  <input autofocus type="text" id="name" autocomplete="off"><button onclick="abt_b()">Done</button>')
}
function abt_b() {
    sessionStorage.setItem('name', document.getElementById('name').value)
    abt_c()
}

function abt_c() {
    t('Hey, '+sessionStorage.getItem('name')+', nice to meet you.')
    b('<button onclick="abt_d()">Nice to meet you!</button>')
}

function abt_d() {
    t('Lets start with basic about info: My name is Jacob, I like to code and a bunch of other stuff.')
    b('<button onclick="abt_e()">Okay!</button>')
}
function abt_e() {
    t('What you are seeing right now is one of my projects.')
    b('<button onclick="abt_f()">Cool!</button>')
}

function abt_f() {
    t('I have a lot more which you can view on my site. Would you like to see?')
    b('<button onclick="window.open(\'https://www.jacobdrath.co\')">Yes!</button> <button onclick="abt_g()">No, Thanks!</button>')
}

function abt_g() {
    t('No problem! Thats enough about me. What is your favorite hobby?')
    b('>  <input autofocus type="text" id="hobby" autocomplete="off"><button onclick="abt_i()">Done</button>')
}
function abt_i() {
    sessionStorage.setItem('hobby', document.getElementById('hobby').value)
    abt_t()
}
function abt_t() {
    t('Wow, '+sessionStorage.getItem('name')+', '+sessionStorage.getItem('hobby')+' sounds interesting')
    b('<button onclick="end()">It is!</button> <button onclick="end()">It\'s okay</button>')
}

function end() {
    t('Well... that looks like its the end of our conversation. What do you want to do now?')
    b('<button onclick="window.open(\'https://www.jacobdrath.co\')">Go to my site</button> <button onclick="aaa()">Restart</button>')
}