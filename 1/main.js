

let people = [
    { name: "Temo", age: 25 },
    { name: "Lasha", age: 21 },
    { name: "Ana", age: 28 }
  ];
  
  function findYoungest(people) {
    let youngest = people[0]; 
  
    for (let i = 1; i < people.length; i++) {
      if (people[i].age < youngest.age) {
        youngest = people[i];
      }
    }
  
    return youngest;
  }
  
  let youngestPerson = findYoungest(people);
  console.log("The youngest person is:", youngestPerson.name);


  