function revNum(num) {
    const numberString = Math.abs(num).toString(); 
    if(numberString.length === 3) {
      const result =  numberString.split('').reverse().join('')
      return (num > 0)? +result: (+result) *(-1);
    } else {
      return 0
    }
  }

  function getMax(num1, num2, num3) {
    return Math.max(num1, num2, num3)
  }

  function sumDigit(num) {
    let result = 0;
    Math.abs(num).toString().split('').map(item => {
      result = result + +item;
    })
    return result
  }

  export {sumDigit, getMax, revNum} 