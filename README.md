# about removeDeepDuplicatesValues

`You can pass array in argument if any two values are same wether different indexing it will appear single time`


# Example 1

```
const deepDuplicate = require("remove-deep-duplicate-from-array")

    let x = ['a' ,'b' , 'c' ,'a' , 'd' , 'b']

    let y = deepDuplicate(bab)

    //output
    //y =  [ 'a', 'b', 'c', 'd' ]  

```
`If we wants to remove the repeated values but values have complex structered objects and arrays it can remove repeated ones like ... `
# Example 2
```
const deepDuplicate = require("remove-deep-duplicate-from-array")

let x = ['a' ,'b' ,'c' ,'b' ,{d:'d' , e:'e' ,f:'f'} , {f:'f' , e:'e' ,d:'d'} , ['g' , 'h' ,'i'] , ['i' , 'h' ,'g']]

let y = deepDuplicate(x)

// output
// [ [ 'g', 'h', 'i' ], 'a', 'b', 'c', { d: 'd', e: 'e', f: 'f' } ] 

```