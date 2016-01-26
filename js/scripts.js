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
  if (this.movieName === "The Revenant" || this.movieName === "Star Wars" ) {
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
  var testTicket = new Ticket("The Revenant", "6:00pm", "18");
  var finalPrice = testTicket.finalPrice();

});
