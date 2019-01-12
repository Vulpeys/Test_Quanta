function logIndexTimes(a) {
    a.map((x, i) => {
        let o = 0
        while (o <= i)
        {
            console.log(x)
            o++
        }
    })
}