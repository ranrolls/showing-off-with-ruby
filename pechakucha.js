var pechaKuchaSetUp = false;
var pechaKuchaRunning = false;

function setUpPechaKucha()
{
  if (pechaKuchaSetUp) { return; }

  pechaKuchaSetUp = true;

  $("#slideInfo").after('<span id="pechaKuchaInfo"></span>');

  $(document).keydown(function(event) {
    var key = event.keyCode;

    if (event.ctrlKey || event.altKey || event.metaKey) { return; }

    // p for a pecha-kucha 20x20 talk http://www.pecha-kucha.org/
    if (key == 80)
    {
      togglePechaKucha();
    }
  });
}

// For a pecha-kucha 20x20 talk
//
// Will go to the next slide every 20 seconds
//
// See http://www.pecha-kucha.org/ for more details
var seconds = 0;
var timerRunning = false;

function togglePechaKucha()
{
  if (!pechaKuchaRunning) {
    pechaKuchaRunning = true
    $("#pechaKuchaInfo").text(pechaKuchaStatus(0));
    seconds = 0
    if(!timerRunning) {
      setInterval(function() {
        timerRunning = true
        if (!pechaKuchaRunning) { return; }
        seconds++;
        $("#pechaKuchaInfo").text(pechaKuchaStatus(seconds));
        if (seconds == 20) {
          seconds = 0;
          nextStep();
        }
      }, 1000);
    }
  } else {
    pechaKuchaRunning = false
    $("#pechaKuchaInfo").text('')
  }
}

function pechaKuchaStatus(seconds) {
  return ' - 20x20 mode (' + (20 - seconds) + 's)';
}

$(function(){
  setUpPechaKucha();
});