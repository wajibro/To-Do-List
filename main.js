const data = document.getElementById('text');
const postButton = document.getElementById('save');
const post = document.querySelector('.content .blank');

for(i = 0; i < 10; i++){
  if(getData(i) == undefined){
    localStorage.setItem(i, false);
  }
};
let count = localStorage.length+90;;

function getData(x){
  return localStorage.getItem(x);
}

function render(){
  document.querySelector('.content').innerHTML = '';
  for(i = 9; i >= 0; i--){
    let y = i+100
    
      document.querySelector('.content').innerHTML += `<div class='blank'></div>`;
      if(getData(y) != null){
        document.querySelector('.content > .blank').innerHTML += 
        `<span><input style="cursor=pointer;" type="checkbox" id="${i}" onclick=cek(${i})>${getData(y)}</span><div onclick=postRemove(${y})>x</div>`;

        if(getData(i) == 'true'){
          document.getElementById(i).setAttribute('checked', 'true');
          document.querySelector('.content > .blank').setAttribute('class', 'set');
        }else{
          document.getElementById(i).removeAttribute('checked');
          document.querySelector('.content > .blank').removeAttribute('class');
        }
      }
  }
}
render();

postButton.addEventListener('click', function(){
  if(data.value == ''){
    document.getElementById('alertPop').innerHTML +=
    '<div><div>x</div><h1>Tidak boleh kosong</h1><button onclick="removePop()">OK</button></div>';
    document.getElementById('alertPop').setAttribute('class', 'show');
  }else{
    if(count/100 > 0 && count%100 <= 10){
      localStorage.setItem(count, data.value);
      count++;
      getData[count%100] = false;
      render();
    }else{
      document.getElementById('alertPop').innerHTML +=
      '<div><div>x</div><h1>Catatan sudah melebihi batas <br> Maksimal 10</h1><button onclick="removePop()">OK</button></div>';
      document.getElementById('alertPop').setAttribute('class', 'show');
    }
  }
})

function postRemove(x){
  localStorage.removeItem(x);
  localStorage.setItem(x%100, false);
  count--;
  for(i = x+1; i < 10; i++){
    localStorage.setItem(i-1, i);
  }

  render();
}
function cek(x){
  localStorage.setItem(x%100, true);
  render();
}

function removePop(){
  document.getElementById('alertPop').innerHTML = '';
  document.getElementById('alertPop').removeAttribute('class');
}