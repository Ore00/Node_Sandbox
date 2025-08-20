/**
 * Find the Symmetric Difference
 * The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements 
 * which are in either of the two sets but not in both. 
 * For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}
 * So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. 
 * Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}
 * @param {arguments[]} args 
 * @returns array as a sorted list of unique values
 */
const symmetricDiff = (...args) => {

    let current = Object.values(args), _difference, setA, setB;

    while(current.length > 1) {
      setA = current[0];
      setB = current[1];  

      _difference = new Set(setA);
      for (const elem of setB) {
        if (_difference.has(elem)) {
          _difference.delete(elem);
        } else {
          _difference.add(elem);
        }
      }
      current.shift();
      current.shift();
      current.unshift(_difference);
    }
    return Array.from(_difference).sort((a,b) => a - b);
}

exports.symmetricDiff = symmetricDiff;  