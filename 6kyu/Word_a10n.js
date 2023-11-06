// function abbreviate(string) {
//   let word = ''
//   const sentence = []

//   for (i = 0; i < string.length; i++) {
//     const char = string[i]
//     if (char.toLowerCase() != char.toUpperCase()) {
//       word += char
//     } else {
//       sentence.push(word)
//       sentence.push(char)
//       word = ''
//     }
//   }
//   if (word.length !== 0) {
//     sentence.push(word)
//   }

//   const result = sentence
//     .map((str) => {
//       if (str.length < 4) {
//         return str
//       } else {
//         return [str[0], str.slice(1, str.length - 1).length, str[str.length - 1]].join(
//           ''
//         )
//       }
//     })
//     .join('')

//   return result
// }

// =============  Easier way  ===============

const find = /[a-z]{4,}/gi

function replace(match) {
  return match[0] + (match.length - 2) + match[match.length - 1]
}

function abbreviate(string) {
  return string.replace(find, replace)
}

console.log(
  abbreviate(
    'Lorem ipsum dolor sit amet-consectetur adipisicing elit. Quos, earum.'
  )
)

