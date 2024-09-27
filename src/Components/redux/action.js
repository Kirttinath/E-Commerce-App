//What to Do 
export const Add = (value)=>{
    return {
        type: 'ADD',
        payload:value
    }
}

export const Dec = (value)=>{
    return {
        type: 'DEC',
        payload:value
    }
}


export const Mul = (value)=>{
    return {
        type: 'MUL',
        payload:value
        }
}