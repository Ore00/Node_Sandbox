const { getPremutations } = require("./arrays");
/**
 * Return an array of the starting indices
 * of all the concatenated substrings in str in any order
 * list size < 5000 and  length words in list <= 30
 * @param {string} str The string to seach for all substrings  
 * @param {string[]} list Each substring that must be included in the substrings found
 * @return {number[]}
 */
const findSmallerSubstrings = function (str, list) {
    let size = str.length, listSize = list.length,
        finalWordSize = list.join("").length;
    if (size < 1 || size > 10 ** 4) return [];
    if (listSize < 1 || listSize > 5000) return [];
    if (finalWordSize / listSize < 1 || finalWordSize / listSize > 30) return [];

    list = getPremutations(list);
    listSize = list.length;

    let results = [];

    for (let i = 0; i < listSize; i++) {
        const regex = new RegExp(`${list[i].join("")}`, 'g');
        let match;
        while ((match = regex.exec(str)) !== null) {
            if (results.indexOf(match.index) === -1) {
                results.push(match.index);
            }
            regex.lastIndex = match.index + 1;

        }
    }
    return results;
}
/**
 * Return an array of the starting indices
 * of all the concatenated substrings in str in any order
 * @param {string} str The string to seach for all substrings  
 * @param {string[]} list Each substring that must be included in the substrings found
 * @return {number[]}
 */
const findSubstring = function (str, list) {
    let used = Array.from(list), results = [];
    let size = str.length, listSize = list.length;
    let wordSize = list[0].length, finalWordSize = list.join("").length;
    let occurrances, prevWord, sub, substrings = "";
    let regex = new RegExp(`^${str[0]}+$`);

    //if the str and list contains only one charater
    if (str.match(regex) && list.join("").match(regex)) {
        for (let i = 0; i <= size - finalWordSize; i++) {
            results.push(i);
        }
        return results;
    }

    if ((wordSize <= 4 && size <= 100) || listSize < 3) {
        return findSmallerSubstrings(str, list);
    }

    //determine the first index of a word in the list
    let startingIndexes = list.map(element => str.indexOf(element));
    let min = Math.min(...startingIndexes);

    for (let i = min < 0 ? 0 : min; i < size; i += wordSize) {
        sub = str.substring(i, i + wordSize);
        occurrances = list.filter(x => x == sub).length;

        if (used.length > 0 && used.includes(sub)) {
            //used array still has values and includes the (sub) substring being checked
            used.splice(used.indexOf(sub), 1);

            substrings = substrings.concat(sub);

            if (used.length == 0 && substrings.length == finalWordSize) {

                //record starting index of substrings
                results.push((i + wordSize) - substrings.length);

                //reset substring, used array and i (index)
                substrings = "";
                used = Array.from(list);
                i -= wordSize * (listSize - 1);
            }
        } else {
            //used array is empty or doesn't contain he (sub) substring being checked
            //reset used array
            used = Array.from(list);
            prevWord = substrings.substring(substrings.length - wordSize);

            if (list.includes(sub) && sub == prevWord) {
                //(sub) substring found in original list and sub equals the previous substring
                if (sub + "" + sub == substrings.substring(
                    substrings.length - (wordSize * occurrances)
                )) {
                    //(sub) substring equals the previous two substrings
                    i = i - (wordSize * occurrances);
                } else if (sub == prevWord && wordSize > 1) {
                    i = i - wordSize == 0 ? (i - wordSize) - wordSize - 1 : i - wordSize;
                } else {
                    i = wordSize == 1 ? i + wordSize : i - wordSize;
                }
            }
            substrings = "";
        }

    }
    return results;
};

/**
 * Test whether a string matches a specific pattern
 * @param {string} str the string to check if it conforms to a pattern
 * @param {str} pattern the pattern to check the str 
 * @returns {boolean}
 */
const isMatch = function (str, pattern) {
    const checkPattern = new RegExp(/\*/g);
    //catch multiple occurrances of `*`  
    if (checkPattern.test(pattern)) {
        pattern = pattern.replace(/\*\*\*/g, '*');
    }
    const createRE = (pattern) => {
        let re = new RegExp(`^${pattern}$`);
        return re;
    }
    let re = createRE(pattern);
    return re.test(str);

};

/**
 * Return the longest palindrome within a given string
 * @param {string} s is the string to check
 * @return {string} longest palindrome
 */
const longestPalindrome = (s) => {
    let matched = s[0], size, program_max = 1000;

    if (size < 1 || size > program_max) return;

    const reverseString = (str) => {
        return str.split("").reverse().join("");
    }

    const isPalindrome = (str) => {
        return str === reverseString(str);
    }

    const getLettersAndNumbers = (str) => {
        return str.replace(/[^a-zA-Z0-9]/g, '');
    }

    const locatePalindrome = (s, left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.substring(left, right);
    }

    s = getLettersAndNumbers(s);

    if (isPalindrome(s)) {
        return s;
    }

    size = s.length;

    //check each position in the string to see if it's palindrome
    for (let i = 0; i < size; i++) {

        const odds = locatePalindrome(s, i, i);
        const evens = locatePalindrome(s, i, i + 1);


        if (odds.substring(1).length > evens.substring(1).length) {
            if (isPalindrome(odds)) {
                matched = isPalindrome(odds) && odds.length > matched.length ?
                    odds : matched;
                continue;
            }
            if (isPalindrome(odds.substring(1))) {
                matched = isPalindrome(odds.substring(1)) && odds.substring(1).length > matched.length ?
                    odds.substring(1) : matched;
                continue;
            }
        } else {

            if (isPalindrome(evens)) {
                matched = isPalindrome(evens) && evens.length > matched.length ?
                    evens : matched;
                continue;
            }
            if (isPalindrome(evens.substring(1))) {
                matched = evens.substring(1).length > matched.length ?
                    evens.substring(1) : matched;
                continue;
            }
        }

    }
    return matched;
};

/**
 * For a given string, starting with the intermost string, reverse all strings within a set of parentheses
 * @param {*} str the str in which all strings within parenthesis should be reversed
 * @returns {string} a string where the string that were in parenthesis are now reversed
 */
const reverseInParentheses = (str) => {
    // const xregex = /\(.*?\)/g;    
    const regex = /\([^()]*\)/g;

    let matches = str.match(regex);

    if (matches) {
        str = str.replace(matches[0], matches[0].split("").reverse().join("").replace(/[()]/g, ''));
        return reverseInParentheses(str);
    }

    return str;
}

exports.findSmallerSubstrings = findSmallerSubstrings;
exports.findSubstring = findSubstring;
exports.isMatch = isMatch;
exports.longestPalindrome = longestPalindrome;
exports.reverseInParentheses = reverseInParentheses;