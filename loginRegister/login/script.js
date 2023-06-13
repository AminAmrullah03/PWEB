function animateForm() {
    var form = document.querySelector('form');
    form.classList.add('animate');
    setTimeout(function() {
      form.classList.remove('animate');
    }, 1000);
  }
  