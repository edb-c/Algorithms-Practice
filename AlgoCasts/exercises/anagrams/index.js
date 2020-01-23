// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Need regex /[^\w]/g, "").toLowerCase();
//.toLowerCase()
//Possible use of building character maps

function anagrams(stringA, stringB) {
	const aCharMap = buildCharMap(stringA);
	const bCharMap = buildCharMap(stringB);

	if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
		console.log('false');
		return false;
	} //end if

	for (let char in aCharMap) {
		if (aCharMap[char] !== bCharMap[char]) {
			console.log('false');
			return false;
		}
	}
	console.log('true');
	return true;
} //end function anagrams

//Helper function - pass string and iterate through string
//add every character to character map
//Clean the string using regex (if not a number, or upper/lower case character, replace
//with empty), change to lowercase
//

function buildCharMap(str) {
	const charMap = {};

	for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
		console.log('charMap[char]', charMap[char]);
		charMap[char] = charMap[char] + 1 || 1;
		console.log('charMap[char]', charMap[char]);
	}

	return charMap;
} //end buildCharMap

anagrams('rail safety', 'fairy tales');

module.exports = anagrams;
