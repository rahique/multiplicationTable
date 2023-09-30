let helloBtn = document.querySelector('.hello');
let byeBtn = document.querySelector('.bye');
let dtable = document.querySelector('.table');
let input = document.querySelector('.input');

helloBtn.addEventListener('click', hello);
byeBtn.addEventListener('click', bye);

function hello() {
  let arr = [];
  for (let i = 1; i <= input.value; i++) {
    arr.push(i);
  }
  if (input !== '') {
    dtable.innerHTML = '';
  }
  arr.forEach((x) => {
    for (let i = 1; i !== 11; i++) {
      dtable.innerHTML += `<h1>${x} X ${i} = ${x * i}<br><h1>`;
      if (i === 10) {
        dtable.innerHTML += '<hr>';
      }
    }
  });
}
function bye() {
  let dtable = document.querySelector('.table');
  let input = document.querySelector('.input');
  input.value = '';
  dtable.innerHTML = '';
}
