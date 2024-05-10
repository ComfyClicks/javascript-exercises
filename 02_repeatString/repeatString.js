// const repeatString = function(string, num) {
//   let result = '';
//   if (num < 0) return 'ERROR'; 
//   while (num > 0) {
//     result += string;
//     num--;
//   }
//   return result;
// };


const repeatString = (string, num) => {
  if (num < 0) return 'ERROR';
  return string.repeat(num);
}

// Do not edit below this line
module.exports = repeatString;
