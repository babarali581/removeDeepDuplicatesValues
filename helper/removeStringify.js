function removeStringify(rr) {

    let parser  = rr.reduce((acc, val) => {

        try {
            let done = JSON.parse(val)
            return [
                ...acc,
                done
            ]
        } catch (err) {
            return [
                ...acc,
                val
            ]

        }

    }, [])
return parser
}

module.exports = removeStringify