function saveOldValues(userObject) {
    const oldValues = {};
  
    for (const key in userObject) {
      if (userObject.hasOwnProperty(key)) {
        oldValues[key] = userObject[key];
      }
    }
  
    return oldValues;
  }
   
  const user = {
    name: 'gigi',
    age: 45,
    email: 'blabla@mail.com',
    nom: 568898990 ,
  };
  
  const oldUser = saveOldValues(user);
  console.log(oldUser);