function hello() {
  let dtable = document.querySelector('.table');
  let input = document.querySelector('.input').value;
  let arr = [];
  let i = 1;

  for (i; i <= input; i++) {
    arr.push(i);
  }
  if (input !== 0 || '') {
    dtable.innerHTML = '';
  }
  arr.forEach((x) => {
    for (let i = 1; i !== 11; i++) {
      dtable.innerHTML += `<h1 style="text-align: center">${x} X ${i} = ${
        x * i
      }<br><h1>`;
      // dtable.appendChild(table);
      if (i === 10) {
        dtable.innerHTML += '<hr>';
      }
    }
  });
}
function bye() {
  let dtable = document.querySelector('.table');
  let inputVal = document.querySelector('.input').value;
  dtable.innerHTML = '';
  inputVal = '';
}
