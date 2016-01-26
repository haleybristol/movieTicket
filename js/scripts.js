function Ticket(movieName, movieTime, movieAge){
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.movieAge = movieAge;
}

Ticket.prototype.price = function(){
  if (this.movieAge >= 60) {
    return ("$8.00");
  } else if (this.movieAge <= 59 && this.movieAge > 12){
  return ("$10.00");
  } else {
    return ("$7.00");
  }
}

Ticket.prototype.matinee = function(){
  if (this.movieTime <= "4:00pm") {
    return ("$1.00");
  } else {
    return ("$2.00");
  }
}

Ticket.prototype.newRelease = function(){
  if (this.movieName === "The Revenant" || this.movieName === "Star Wars" ) {
    return ("$2.00");
  } else {
    return ("$1.00");
  }
}

Ticket.prototype.finalPrice = function(){
  Ticket.price() + Ticket.matinee() + Ticket.newRelease();
}
