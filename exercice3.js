function displayNbWordsPerLine(str, n) {
    let nbWords = str.split(' ').length
    let i = 0 ;
    while (i < nbWords)
    {
        console.log(str.split(' ').slice(i, i + n).join(' '))
        i += n
    }
  }