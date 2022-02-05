elsFaqBtns = document.querySelectorAll('.faq__button');
elsFaqItem = document.querySelectorAll('.faqs__item');

elsFaqBtns.forEach(function (btn) {
  btn.addEventListener('click', function (evt) {console.log('hello');
    btn.closest('.faqs__item').classList.toggle('faq--active');
})
})