# about removeDeepDuplicatesValues

`You can pass array in argument if any two values are same wether different indexing it will appear single time`



# Example
```
let x = ['a' ,'b' ,'c' ,'b' ,{d:'d' , e:'e' ,f:'f'} , {f:'f' , e:'e' ,d:'d'} , ['g' , 'h' ,'i'] , ['i' , 'h' ,'g']]

let y = remove-deep-duplicate-from-array(x)

// output
// [ [ 'g', 'h', 'i' ], 'a', 'b', 'c', { d: 'd', e: 'e', f: 'f' } ] 

```