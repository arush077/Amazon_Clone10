//add to cart wala button click hone pe the item goes into redux and from here it can be pulled into any component
//this is just a piece of code which you dont need to stress over
//reducer is used to push the item into the redux



export const initialState={
    basket:[],
};


// Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);



const reducer=(state,action)=>{
    console.log(action);
switch(action.type){
    case 'ADD_TO_BASKET':
        return{
            ...state,
            basket:[...state.basket,action.item],

        };

        default:
            return state;
}
}

export default reducer;