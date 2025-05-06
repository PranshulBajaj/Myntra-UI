let myDate = new Date();
let greet = document.querySelector('#greet');
let hour = myDate.getHours(); // FIX: add () to call the function
let naam = 'Pranshul';

if (hour >= 5 && hour < 12) {
  greet.innerText = `Good Morning ${naam}`; // FIX: use = to assign value
} else if (hour >= 12 && hour < 18) {
  greet.innerText = 'Good Afternoon ' + naam;
} else {
  greet.innerText = 'Good Night ' + naam;
}


let count=localStorage.getItem('number')||0;
let number=document.querySelector('#pressed');
function clicked(){
  count++;
  update();
}
function update(){
  if(count%2==0){
    number.classList.remove('js-odd');
    number.classList.add('js-even');
  }
  else {
    number.classList.remove('js-even');
    number.classList.add('js-odd');
  }
  number.innerText=`Clicked ${count} times`;
  localStorage.setItem('number',count);
}
update();

