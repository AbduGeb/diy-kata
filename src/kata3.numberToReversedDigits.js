const numberToReversedDigits = number => {
    const myArr = String(number).split("").map((number)=>{
        return Number(number)
      })
      return myArr.reverse();
};

module.exports = numberToReversedDigits;
