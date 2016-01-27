function Ticket(movieName, movieTime, movieAge){
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.movieAge = movieAge;
}

Ticket.prototype.price = function(){
  if (this.movieAge >= 60) {
    return (8);
  } else if (this.movieAge <= 59 && this.movieAge > 12){
  return (10);
  } else {
    return (7);
  }
}

Ticket.prototype.matinee = function(){
  if (this.movieTime <= "4:00pm") {
    return (1);
  } else {
    return (2);
  }
}

Ticket.prototype.newRelease = function(){
  if (this.movieName === "The Forest" || this.movieName === "Pride and Prejudice and Zombies") {
    return (2);
  } else {
    return (1);
  }
}

Ticket.prototype.finalPrice = function(){
  var result = this.price() + this.matinee() + this.newRelease();
  return result;
}

$(document).ready(function() {
  $("form#ticketForm").submit(function(event){
    var movie = $("select#movie").val();
    var time = $("select#time").val();
    var age = $("select#age").val();
    var testTicket = new Ticket(movie, time, age);
    var finalPrice = testTicket.finalPrice();
    $(".display").append("<p>Total: $" + finalPrice + ".00" + "</p>");
    if(movie === "shining") {
      $("#shining").show();
    }
    if(movie === "forest") {
      $("#forest").show();
    }
    event.preventDefault()
  });
});
