<template>
<div dir="rtl" class="flex justify-center mt-[30px] w-full h-screen">

  <div class="form hidden sm:flex flex-col justify-center items-center w-[80%] bg-slate-400/70 rounded-xl">
    <h1 class="w-full flex font-bold mb-6 justify-center items-center text-3xl">فرم ثبت نام</h1>
    <form id="myform">
    <div class="flex gap-x-[30px]">
      <span>
        <label class="label">نام</label><br>
        <input id="name" class="input" type="text">
        <p id="warnname" class="texttel mt-1 pr-1 hidden"> نباید کمتر از سه حرف باشد</p>


      </span>
      <span>
        <label class="label">نام خانوادگی</label><br>
        <input id="lname" class="input" type="text">
        <p id="warnlname" class="texttel mt-1 pr-1 hidden">نباید کمتر از سه حرف باشد</p>

      </span>
    </div>
    <div class="flex mt-5 gap-x-[30px]">
      <span>
        <label class="label">ایمیل</label><br>
        <input id="ingmail" dir="ltr" class="input pl-[5px]" type="email" placeholder="-----@gmail.com">
        <p id="gmailwarn" class="texttel textgmail mt-1 hidden">لطفا ایمیل را به صورت صحیح وارد کنید</p>

      </span>
      <span>
        <label class="label">شماره تماس</label><br>
        <input id="phonenumber" class="input pl-[5px]" type="tel" autocomplete="mobile" value="+98 " maxlength="14">
        <p id="warntel" class="texttel mt-1 hidden ">لطفا فرمت صحیح را وارد کنید</p>

      </span>      
    </div>
    <div class="flex gap-x-[30px] mt-5">
      <span>
        <label class="label">رمز عبور</label><br>
        <input dir="ltr" id="myinput" class="input inputpass pl-[5px]" type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" autocomplete="current-password">
        <div id="message" class="passtext hidden mt-2 w-full items-center">
      <h3 class="border-[1px] border-white">رمز عبور باید شامل موارد زیر باشد:</h3>
      <p class="invalid" id="letter">حداقل شامل یک حرف</p>
      <p class="invalid" id="capital">حداقل شامل یک حرف بزرگ</p>
      <p class="invalid" id="number">حداقل شامل یک عدد</p>
      <p class="invalid" id="length">طول ان حداقل 8 کاراکتر</p>
    </div>
      </span>
      <span>
        <label class="label">تکرار رمز عبور</label><br>
        <input id="myinputrepeat" class="input inputpass2 pl-[5px]" dir="ltr" type="password" name="password2" autocomplete="current-password">
        <p id="repeatpass" class="invalidpass hidden">لطفا رمز عبور خود را تکرار کنید</p>
      </span>      
    </div>

    <button id="subform" type="submit" class="subform mt-3 w-full">submit</button>

    </form>
  </div>
</div>







</template>