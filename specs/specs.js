describe('Ticket', function() {
  it("will create a new Ticket based off given specifications", function() {
    var testTicket = new Ticket("Up", "4:00pm", "64");
    expect(testTicket.movieName).to.equal("Up");
    expect(testTicket.movieTime).to.equal("4:00pm");
    expect(testTicket.movieAge).to.equal("64");
  });

  it("will assign price to an age", function() {
    var testTicket = new Ticket("Terminator", "6:00pm", "8");
    expect(testTicket.price()).to.equal("$7.00");
  });

  it("will assign price to a movie time", function() {
    var testTicket = new Ticket("Terminator", "6:00pm", "8");
    expect(testTicket.matinee()).to.equal("$2.00");
  });

  it("will assign price to a movie name", function() {
    var testTicket = new Ticket("The Revenant", "6:00pm", "18");
    expect(testTicket.newRelease()).to.equal("$2.00");
  });

  it("will calculate a price based on selection", function() {
    var testTicket = new Ticket("The Revenant", "6:00pm", "18");
    expect(testTicket.finalPrice()).to.equal("$14.00");
  });

});
