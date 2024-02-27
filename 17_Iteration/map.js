const complexArray = [
  {
    id: 1,
    name: "John",
    age: 30,
    hobbies: ["Reading", "Hiking"],
    address: {
      street: "123 Main St",
      city: "Cityville",
      country: "Countryland",
    },
    friends: [
      {
        name: "Alice",
        age: 32,
        occupation: "Engineer",
      },
      {
        name: "Bob",
        age: 29,
        occupation: "Artist",
      },
    ],
  },
  {
    id: 2,
    name: "Jane",
    age: 25,
    hobbies: ["Painting", "Traveling"],
    address: {
      street: "456 Elm St",
      city: "Townsville",
      country: "Countryland",
    },
    friends: [
      {
        name: "David",
        age: 27,
        occupation: "Doctor",
      },
      {
        name: "Eva",
        age: 24,
        occupation: "Teacher",
      },
    ],
  },
];

function isObject(check_obj) {
  return (
    typeof check_obj === "object" &&
    check_obj !== null &&
    !Array.isArray(check_obj)
  );
}
complexArray.map((values) => {
  Object.values(values).map((item) => {
    //   console.log(`${key},${item}`)
    if (Array.isArray(item)) {
      for (const key in item) {
        console.log(`${item[key]}`);
      }
    } else if (isObject(item)) {
      Object.values(item).map(([value]) => {
            console.log(`${value}`);
      })
    } else {
      console.log(`${item}`);
    }
  });
});
