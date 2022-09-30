function solution(names) {
    let obj = {};
    return names.map(name => {
        let newName = name
        while (obj[newName]) {
            newName = `${name}(${obj[name]++})`;
        }
        obj[newName] = 1
        return newName
    })
}

console.log(solution(names))
