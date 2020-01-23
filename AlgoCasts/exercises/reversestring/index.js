// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'


//function reverse(str) {
//  return str.split('').reduce((rev, char) => char + rev, '');
// }
function reverse(str) {
	let reversed = '';

	for (let character of str) {
		reversed = character + reversed;
	}
	//
	debugger;
	console.log(reversed);
	return reversed;
}
reverse('apple');
module.exports = reverse;

// function reverse(str) {
//  return str
//    .split('')
//    .reverse().join(''); }
//   reverse('Greetings!') === '!sgniteerG'