function main() {
  _fadeEffects();
  $("#skip").click(skip);
  checkMainPageVisit();
  randomColors();
  pageOut();
}

/*I dont entirely understand how this works*/
function pageOut() {
  $('a').click(function(e) {
    e.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(1000, function() {
      window.location = newLocation;
    });
  });
}
/*end of not sure entirely how this works*/

function randomColors() {
  var changeArray = $("#randomColors").html();
  changeArray = changeArray.split("");
  var newString = "";

  function randomNumber() {
    return parseInt(Math.random() * 360)
  }
  for (element in changeArray) {
    newString += "<span style=\"color: rgb(" + randomNumber() + ", " + randomNumber() + ", " + randomNumber() + ");\">" + changeArray[element] + "</span>";
  }
  $("#randomColors").html(newString);
}


function checkMainPageVisit() {
  var theirLocation = window.location.pathname;
  var theEndingOfTheirLocation = theirLocation.substr(-5);
  if (Boolean(window.location.hash)) {
    skip();
  }
}


function skip() {
  $("#intro").hide();
  $("#page ._1").show();
  $("#page ._2").show();
  $("#page ._3").show();
}


function _fadeEffects() {
  $("#intro img").delay(1000).fadeIn(2000, function() {
    $("#intro ._1").fadeIn(2000, function() {
      $("#intro ._2").fadeIn(2000, function() {
        $("#intro").fadeOut(2000);
      });
    })
  })
  $("#page ._1").delay(9000).fadeIn(2000, function() {
    $("#page ._2").fadeIn(2000, function() {
      $("#page ._3").fadeIn(2000);
    });
  });
}


$(main);
