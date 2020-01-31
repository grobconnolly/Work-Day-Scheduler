

$(document).ready(function() {
  $("#currentDay").text( moment().format('ddd MMM Do, YYYY') );
});
// Background Color Set Function

// define row is time in 24 hour time format
const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

// lets make sure we are getting expected output
console.log(currentHour);


Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour)){
      setColor(row, "green");
    } else {
      setColor(row, "lightgrey");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

//6am
function save_data() {
  var input = document.getElementById('textArea6').value;
  localStorage.setItem('text6', input);
}
document.getElementById('textArea6').value = localStorage.getItem('text6');


//7am

function save_data(e){
  var number = $(e).data('num');
  var input = document.getElementById('textArea' + number).value;
  localStorage.setItem('text' + number, input);
}

for(var i = 6; i <= 14; i++){
  document.getElementById('textArea' + i).value = localStorage.getItem('text' + i);
}