import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

const vuetify = createVuetify({
  ssr: true,
})

{/* <div class="form sm:hidden w-[80%] bg-slate-400/70 rounded-xl">
<h1 class="w-full flex justify-center items-center font-bold mb-6 mt-2 text-3xl">فرم ثبت نام</h1>
<form id="myform">
<div class="flex flex-col justify-around items-center w-[80%]">
  <span class="w-full flex justify-between items-center mb-5">
    <label class="label">نام</label>
    <input id="name" class="input" type="text">
    <!-- <p id="warnname" class="texttel mt-1 pr-1 hidden"> نباید کمتر از سه حرف باشد</p> -->

  </span>
  <span class="w-full flex justify-between items-center mb-5">
    <label class="label">نام خانوادگی</label>
    <input id="lname" class="input" type="text">
    <!-- <p id="warnlname" class="texttel mt-1 pr-1 hidden">نباید کمتر از سه حرف باشد</p> -->

  </span>
</div>
<div class="flex flex-col justify-around items-center w-[80%]">
  <span class="w-full flex justify-between items-center mb-5">
    <label class="label">ایمیل</label><br>
    <input id="ingmail" dir="ltr" class="input pl-[5px]" type="email" placeholder="-----@gmail.com">
  </span>
  <span class="w-full flex justify-between items-center mb-5">
    <label class="label">شماره تماس</label><br>
    <input id="phonenumber" class="input pl-[5px]" type="tel" autocomplete="mobile" value="+98 " maxlength="14">
    <!-- <p id="warntel" class="texttel mt-1 hidden ">لطفا فرمت صحیح را وارد کنید</p> -->

  </span>      
</div>
<div class="flex flex-col justify-around items-center w-[80%]">
  <span class="w-full flex justify-between items-center mb-5">
    <label class="label">رمز عبور</label><br>
    <input dir="ltr" id="myinput" class="input inputpass pl-[5px]" type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" autocomplete="current-password">
    <!-- <p class="warn text-sm pr-[2px] text-red-800 pt-1">طول رمز عبور نباید کمتر از 8 کاراکتر باشد</p> -->
  </span>
  <span class="w-full flex justify-between items-center mb-5">
    <label class="label">تکرار رمز عبور</label><br>
    <input id="myinputrepeat" class="input inputpass2 pl-[5px]" dir="ltr" type="password" name="password2" autocomplete="current-password">
    <!-- <p id="repeatpass" class="invalidpass hidden">لطفا رمز عبور خود را تکرار کنید</p> -->
  </span>      
</div>
<!-- <div id="message" class="hidden mt-2 w-full items-center">
  <h3 class="border-[1px] border-white">رمز عبور شما باید شامل موارد زیر باشد:</h3>
  <p class="invalid" id="letter">حداقل شامل یک حرف باشد</p>
  <p class="invalid" id="capital">حداقل یک حرف بزرگ در ان به کار رفته باشد</p>
  <p class="invalid" id="number">حداقل شامل یک عدد باشد</p>
  <p class="invalid" id="length">طول ان حداقل 8 کاراکتر باشد</p>
</div> -->
<div class="flex justify-center items-center w-full">
<button id="subform" type="submit" class="subform w-[80%] mt-3">submit</button>
</div>
</form>
</div> */}