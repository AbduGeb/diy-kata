const humanCatDogYears = number => {
  const catDog = number => {
    const humanAge = number;
    let catAge = 0;
    let dogAge = 0;
    for (let i = 1; i < humanAge.length; i++) {
      if (humanAge === 1) {
        catAge = 15;
        dogAge = 15;
      } else if (humanAge === 2) {
        catAge = 24;
        dogAge = 24;
      } else if (humanAge >= 3) {
        catAge += 4;
        dogAge += 5;
      }
    }
    return [humanAge, catAge, dogAge];
  };
};

module.exports = humanCatDogYears;
