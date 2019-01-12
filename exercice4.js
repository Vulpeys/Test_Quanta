function anagram(a, b) {
    if (a.replace(' ', '').toLowerCase().split("").sort().join('') === b.replace(' ','').toLowerCase().split("").sort().join(''))
        return true
    return false
  }