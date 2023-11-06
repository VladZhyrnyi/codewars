function abbreviate(string) {
  let word = ''
  const sentence = []

  for (i = 0; i < string.length; i++) {
    const char = string[i]
    if (char.toLowerCase() != char.toUpperCase()) {
      word += char
    } else {
      sentence.push(word)
      sentence.push(char)
      word = ''
    }
  }
  if (word.length !== 0) {
    sentence.push(word)
  }

  console.log(sentence.join(''))

  const result = sentence
    .map((str) => {
      if (str.length < 4) {
        return str
      } else {
        return [str[0], str.slice(1, str.length - 1).length, str[str.length - 1]].join(
          ''
        )
      }
    })
    .join('')

  return result
}

abbreviate('qwewq-wqeq dsrg dsfsd sdf')
