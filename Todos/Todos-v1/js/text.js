var text_add = document.getElementById('textput');
var list_add = document.getElementById('list');


text_add.addEventListener('keyup', function(e) {

  if (e.keyCode !== 13) {
    return;
  } else {
    list_add.innerHTML += '<li>' + text_add.value + '</li>'
  }
  text_add.value = '';
});

list_add.addEventListener('click', function(e) {
  if (e.target && e.target.nodeName == 'LI')
    list_add.removeChild(e.target);
})