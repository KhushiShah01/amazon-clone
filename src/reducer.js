// reducer is how we are able to dispatch into data layer ie when we click on add to basket, how it gets dispatched to the data layer

//create the initital state
export const initialState = {
  basket: [],
  user: null,
};

//selector
// total amount to be displayed
//reduce maps through basket and tallys up the total
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      // don't use this as this will remove all occurences of the item added  ie if 2 of same things are added and want to remove 1, it will remove all
      {
        /* return{
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }  */
      }
      // not the most useful way but does the work
      // this finds the 1st match and returns it
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      // this means it found an item in the basket
      if (index >= 0) {
        // going to the place in basket and cutting it by 1
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "Cant remove product [id: ${action.id}] as it is not in the basket!"
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
