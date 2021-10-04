$(document).ready(function(){
  $('.header').height($(window).height());

  $(".navbar a").click(function(){
    $("body,html").animate({
      scrollTop:$("#" + $(this).data('value')).offset().top
    },1000)
    
  })

})

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  
  if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "See more";
      moreText.style.display = "none";
  } else {
      dots.style.display = "none";
      btnText.innerHTML = "See less";
      moreText.style.display = "inline";
  }
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxnGTEZfx_kSK1dzujpHBsMQyjF22cMdGUIIjfmtNBPpuXs2kZiWgZ5KkVtxVqQxDFXwA/exec';
      const form = document.forms['halip26-contact-me'];
      const btnKirim = document.querySelector('.btn-kirim');
      const btnLoading = document.querySelector('.btn-loading');
      const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      // tampilkan alert
      myAlert.classList.toggle('d-none');
      // reset formnya
      form.reset();
      console.log('Success!', response);
    })
    .catch((error) => console.error('Error!', error.message));
});