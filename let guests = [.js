let guests = [
  {
    FirstName: "Alice",
    LastName: "Liddell",
    Species: "Human",
  },
  {
    FirstName: "Cheshire",
    LastName: "Cat",
    Species: "Cat",
  },
  {
    FirstName: "White",
    LastName: "Rabbit",
    Species: "Rabbit",
  },
  {
    FirstName: "Mad",
    LastName: "Hatter",
    Species: "Human",
  },
  {
    FirstName: "March",
    LastName: "Hare",
    Species: "Rabbit",
  },
  {
    FirstName: "Dormouse",
    LastName: "",
    Species: "Mouse",
  },
  {
    FirstName: "Queen",
    LastName: "of Hearts",
    Species: "Human",
  },
  {
    FirstName: "King",
    LastName: "of Hearts",
    Species: "Human",
  },
  {
    FirstName: "Mock",
    LastName: "Turtle",
    Species: "Turtle",
  },
  {
    FirstName: "Gryphon",
    LastName: "",
    Species: "Gryphon",
  },
  {
    FirstName: "Jabberwocky",
    LastName: "",
    Species: "Monster",
  },
  {
    FirstName: "Tweedledee",
    LastName: "",
    Species: "Human",
  },
  {
    FirstName: "Tweedledum",
    LastName: "",
    Species: "Human",
  },
  {
    FirstName: "Walrus",
    LastName: "",
    Species: "Walrus",
  },
  {
    FirstName: "Carpenter",
    LastName: "",
    Species: "Human",
  },
  {
    FirstName: "Humpty",
    LastName: "Dumpty",
    Species: "Egg",
  },
  {
    FirstName: "Duchess",
    LastName: "",
    Species: "Human",
  },
  {
    FirstName: "Cook",
    LastName: "",
    Species: "Human",
  },
  {
    FirstName: "Frog",
    LastName: "",
    Species: "Frog",
  },
  {
    FirstName: "Gnat",
    LastName: "",
    Species: "Gnat",
  },
];

// Loop through the guests array and add the tea set for each guest
for (let i = 0; i < guests.length; i++) {
  guests[i].Teacup = true;
  guests[i].Teaplate = true;
  guests[i].Smalldesert = "Macarons";
}

// Print out the extended output for each guest
for (let i = 0; i < guests.length; i++) {
  console.log({
    Firstname: guests[i].FirstName,
    Lastname: guests[i].LastName,
    Species: guests[i].Species,
    Teacup: guests[i].Teacup,
    Teaplate: guests[i].Teaplate,
    Smalldesert: guests[i].Smalldesert,
  });
}
