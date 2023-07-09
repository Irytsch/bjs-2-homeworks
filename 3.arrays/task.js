function compareArrays(arr1, arr2) {
   return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}


function getUsersNamesInAgeRange(users, gender) {
    const usersByGender = users.filter((user) => user.gender === gender);
    const usersByAge = usersByGender.map((user) => user.age);
    const totalAge = usersByAge.reduce((acc, age) => acc + age, 0);

    if (usersByAge.length === 0) {
        return 0;
    }
    
    return totalAge / usersByAge.length;
}