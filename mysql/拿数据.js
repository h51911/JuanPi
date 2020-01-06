// let box = document.querySelector('.eAzbYJ')[1];
let divs = document.querySelectorAll('.gCgGoL');
let arr = [];

for (let item of divs) {
  let imgurl = item.querySelector('img') ? item.querySelector('img') : '';
  let title = item.querySelector('.dFUsnh');
  let usedprice = item.querySelector('.dgjaoA') ? item.querySelector('.dgjaoA') : '';
  let newpric = item.querySelector('.gVLSd');


  let obj = {};
  obj.imgurl = imgurl.src;
  obj.title = title.innerText;
  obj.usedprice = usedprice.innerText;
  obj.newpric = newpric.innerHTML;

  arr.push(obj);
}

JSON.stringify(arr);
