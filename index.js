const name = ['Lisa','Kaitlin','Jan'];
const event = ['birthday'];

function writeCards(name, event) {
  let newArr = [];
  for (let i = 0; i < name.length; i++) {
    newArr.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
    debugger;
  }
  return newArr;
}

function countDown() {
  let countDown = 10;
  while (countDown >= 0) {
    console.log(countDown--);
  } 
}