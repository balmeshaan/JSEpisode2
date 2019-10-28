/**************************************************************
* pairs(names):
*
* - It accepts an array of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
*
* - It returns a randomized pairing of names:
*       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
*
* - It can handle an odd number of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
*       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
*
* - It returns an empty array if it gets passed an empty array:
*       pairs([]) returns []
*
* - It returns an empty array if it gets passed nothing:
*       pairs() returns []
****************************************************************/
function pairs(names) {
  if (names === undefined || names.length < 1){
    return [];
  }
  let groups = names.length /2;
    if (names.length % 2 !== 0) {
      groups = Math.ceil(groups);
    } 

    let grps = [];
    for (let index = 0; index < groups; index++){
      let pair1 = names.getRandom();
      if (names.length < 1){
        let duo = [pair1]
        grps.push(duo)
      }
      else {let pair2 = names.getRandom();
        let duo = [pair1, pair2];
        grps.push(duo)
      }
      console.log(pair1)
   }
    return grps;
  }
  
  const nams = ['barak', 'nada', 'majed', 'hussain', 'sara']
  // console.log (pairs(nams))
  
  // console.log(pair1)

module.exports = pairs;

/**********************************************
* READ ME!!!!
*
* We've included this handy method for you.
* It will remove a random element from an array
* and return it to you.
*
* Example Usage:
*
* let numbers = [1, 2, 3, 4];
* let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
* console.log(random); // 3 (the random element)
* console.log(numbers);  // [1, 2, 4] (missing the random element)
************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random()*this.length), 1)[0];
}

console.log(pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein', 'Lailz', 'Mr Potato']));
