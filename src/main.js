import { createApp } from 'vue'
// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')

var myinput = document.getElementById('myinput')
var msgtitle = document.getElementById('message')

myinput.onfocus = function () {
  msgtitle.style.display = 'block'
}
myinput.onblur = function () {
  msgtitle.style.display = 'none'
}

var length = document.getElementById('length')
var capital = document.getElementById('capital')
var number = document.getElementById('number')
var letter = document.getElementById('letter')
var upperletter = /[A-Z]/
var lowerletter = /[a-z]/
var numberrange = /[0-9]/


myinput.onkeyup = function () {
if (myinput.value.match(lowerletter)){
  letter.classList.remove("invalid")
  letter.classList.add("valid")
}else {
  letter.classList.add('invalid')
  letter.classList.remove('valid')
}
if (myinput.value.match(upperletter)){
  capital.classList.remove("invalid")
  capital.classList.add("valid")
}else {
  capital.classList.add('invalid')
  capital.classList.remove('valid')
}
if (myinput.value.match(numberrange)){
  number.classList.remove("invalid")
  number.classList.add("valid")
}else {
  number.classList.add('invalid')
  number.classList.remove('valid')
}
if (myinput.value.length >= 8){
  length.classList.remove("invalid")
  length.classList.add("valid")
}else {
  length.classList.add('invalid')
  length.classList.remove('valid')
}
}

var myinputrepeat = document.getElementById('myinputrepeat')
var repeatpass = document.getElementById('repeatpass')

myinputrepeat.onfocus = function () {
  repeatpass.style.display = 'block'
}
myinputrepeat.onblur = function () {
  repeatpass.style.display = 'none'
}
myinputrepeat.onkeyup = function (){
  if (myinput.value != myinputrepeat.value ) {

    repeatpass.classList.add('invalidpass')
    repeatpass.classList.remove ('validpass')
  }else {
    repeatpass.classList.remove('invalidpass')
    repeatpass.classList.add ('validpass')
  }
}

var phoneNumberPattern = / [0-9]{10}/
const phoneNumber = document.getElementById('phonenumber')
var warnTel = document.getElementById('warntel')

phoneNumber.onkeyup = function (){
  if (phoneNumber.value.match(phoneNumberPattern)){
    warnTel.style.display = 'none'
  }else {
    warnTel.style.display = 'block'
  }
}

const Name = document.getElementById('name')
const Lname = document.getElementById('lname')
const warnName = document.getElementById('warnname')
const warnLname = document.getElementById('warnlname')
var gmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const inGmail = document.getElementById('ingmail')
const gmailwarn = document.getElementById('gmailwarn')

inGmail.onkeyup = function (){
  if (inGmail.value.match(gmail)){
    gmailwarn.style.display = 'none'
  }else {
    gmailwarn.style.display = 'block'

  }
}
  inGmail.onfocus = function (){
      gmailwarn.style.display = 'block'
    }
    inGmail.onblur = function (){
      gmailwarn.style.display = 'none'
    }

Name.onkeyup = function (){
  if (Name.value.length<3){
    warnName.style.display = 'block'
  }else {
    warnName.style.display = 'none'

  }
}
Name.onfocus = function () {
  warnName.style.display = 'block'
}
Name.onblur = function () {
  warnName.style.display = 'none'
}

Lname.onkeyup = function (){
  if (Lname.value.length<3){
    warnLname.style.display = 'block'
  }else {
    warnLname.style.display = 'none'

  }
}
Lname.onfocus = function () {
  warnLname.style.display = 'block'
}
Lname.onblur = function () {
  warnLname.style.display = 'none'
}

function validateForm (){
if ( Name.value == '' || Name.value.length < 3 ) {
  warnName.style.display = 'block'

}
 if (Lname.value == '' || Lname.value.length < 3){
  warnLname.style.display = 'block'
}
 if (!inGmail.value.match(gmail)){
  gmailwarn.style.display = 'block'

}
 if (!phoneNumber.value.match(phoneNumberPattern)){
  warnTel.style.display = 'block'
}
if (myinput.value == '' || !myinput.value.match(lowerletter) || !myinput.value.match(upperletter) || !myinput.value.match(numberrange) || !myinput.value.length >= 8)
  {
    msgtitle.style.display = 'block'
  }
  if (myinputrepeat.value == '' || myinputrepeat.value != myinput.value) {
    repeatpass.style.display = 'block'
  
  }


 else {
  return true
}
}

const subForm = document.getElementById('subform')



subForm.addEventListener('click', (event) => {
  event.preventDefault();
  if (!validateForm()){
    return
  } 
})


