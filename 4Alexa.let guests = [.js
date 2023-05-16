let guests = [
  {
    FirstName: "Alice",
    LastName: "Liddell",
    Species: "Human",
  },
  // Rest of the guest objects...
];

let desserts = ["Big", "Her", "idrt"];

const currentTime = new Date().getMilliseconds();

// Loop through the guests array
for (let i = 0; i < guests.length; i++) {
  // Add the tea set for each guest
  guests[i].Teacup = true;
  guests[i].Teaplate = true;

  // Generate a random index for desserts based on current time and loop iteration
  let dessertRandom = (currentTime + i) % desserts.length;

  // Assign a random dessert to the guest
  guests[i].Dessert = desserts[dessertRandom];
}

// Loop through the guests array and print the extended output for each guest
for (let i = 0; i < guests.length; i++) {
  console.log({
    FirstName: guests[i].FirstName,
    LastName: guests[i].LastName,
    Species: guests[i].Species,
    Teacup: guests[i].Teacup,
    Teaplate: guests[i].Teaplate,
    Dessert: guests[i].Dessert,
  });
}
