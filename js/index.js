var openCloseTab = document.getElementsByClassName('accordion-item__header');
var openCloseIcon = document.getElementsByClassName('open-close-icon');

for (var i = 0; i < openCloseTab.length; i++) {

  openCloseTab[i].addEventListener('click', function() {
    var textBlock = this.nextElementSibling;

    if (textBlock.style.maxHeight) {
      textBlock.style.maxHeight = null;
      this.style.backgroundColor = '#A2B3AF';
      this.firstElementChild.classList.remove('open');

    } else {
      this.style.backgroundColor = '#B5C2BF';
      textBlock.style.maxHeight = textBlock.scrollHeight + 'px';
      this.firstElementChild.classList.add('open');
    }
  });
}
