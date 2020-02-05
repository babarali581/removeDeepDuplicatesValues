function getSortedObjectKeys(o) {
       let a = [];

    for (let key in o) {
        if (o.hasOwnProperty(key)) {
            a.push(key);
        }
    }

    a.sort();

    const sortObj = a.reduce((acc, key) => {
        let getVal = o[key]

        let eachVal = typeof getVal === "string"
            ? "String"
            : typeof getVal === "number"
                ? "Number"
                : Array.isArray(getVal)
                    ? "Array"
                    : "Object"

        if (eachVal === "String" || eachVal === "Number") {
            acc[key] = getVal

            return acc

        } else if (eachVal === "Object") {
            acc[key] = getSortedObjectKeys(getVal)

            return acc

        } else if (eachVal === "Array") {
            acc[key] = getVal.sort()

            return acc

        }

    }, {})

    return sortObj;
}
module.exports = getSortedObjectKeys
