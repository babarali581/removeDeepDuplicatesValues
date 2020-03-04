const getSortNestedArray = require("./helper/getSortNestedArray")
const getSortedObjectKeys = require('./helper/getSortObject')
const removeStringify = require('./helper/removeStringify')
function removeDeepDuplicate(arr) {
    try {
        if (Array.isArray(arr)) {
            let finalResp = arr.reduce((acc, val) => {

                let eachVal = typeof val === "string"
                    ? "String"
                    : typeof val === "number"
                        ? "Number"
                        : Array.isArray(val)
                            ? "Array"
                            : "Object"

                /* In case of string */
                if (eachVal === "String" || eachVal === "Number") {
                    // return acc.concat(val)
                    return !acc.includes(val)
                        ? [
                            ...acc,
                            val
                        ]
                        : acc
                } else if (eachVal === "Object") {

                    val = JSON.stringify(getSortedObjectKeys(val))
                    return !acc.includes(val)
                        ? [
                            ...acc,
                            val
                        ]
                        : acc

                } else if (eachVal === "Array") {

                    val = JSON.stringify(getSortNestedArray(val))

                    return !acc.includes(val)
                        ? [
                            ...acc,
                            val
                        ]
                        : acc

                }

            }, [])
            return removeStringify(finalResp.sort())

        } else {
            return new Error("Array is require in argymrnt")
        }

    } catch (err) {
        return new Error(err)

    }
}

module.exports = removeDeepDuplicate