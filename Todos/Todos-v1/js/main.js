var textAdd = document.getElementById('textput');
var listAdd = document.getElementById('list');

function keyup(e) {
  var add = textAdd.value;

  if (e.keyCode !== 13) return;
  listAdd.innerHTML += '<li>' + add + '</li>';
  textAdd.value = '';
}

textAdd.addEventListener('keyup', keyup);


function del(e) {
  if (e.target && e.target.nodeName == 'LI')
    listAdd.removeChild(e.target);
}

listAdd.addEventListener('click', del);