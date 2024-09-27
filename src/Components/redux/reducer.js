//How to Do 
let initialState ={
    count : 0
}

export const CountReducer = (state = initialState,action)=>{
   switch(action.type){
    case 'ADD':
        return {
            count: state.count + action.payload
        }

    case 'DEC':
        return {
            count : state.count - action.payload
        }

    case 'MUL':
        return{
            count : state.count * action.payload
        }
        default:
            return state
   }

}