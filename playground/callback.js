const add = (num1, num2, cb1)=>{
    setTimeout(()=>{
        const total = num1+num2;
        return cb1(total)
    }, 3000)
}

const cb = (tot)=>{
    console.log(`sum of 2 number is `, tot)
}

// add(45, 15, (tot1)=>{
//     console.log(`sum of 2 number is `, tot1)
// })

add(50, -40, cb)