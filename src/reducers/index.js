import { ADD_FEATURE, REMOVE_FEATURE } from '../actions'

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    additionalFeatures: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
};

export const reducer = (state = initialState, action) => {
    console.log(state, action);
    console.log(state.additionalPrice)
    console.log('features', state.car.features)
    switch (action.type) {
        case ADD_FEATURE: {
            return {
                ...state,
                car: {...state.car,
                features: [...state.car.features, action.payload],
                }, 
                additionalPrice: state.additionalPrice + action.payload.price
            }
        }
        case REMOVE_FEATURE: {
            return {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,
                car: {...state.car,
                features: [...state.car.features.filter(feature => feature !== action.payload)]}
            }
        }
        default: return state;
    }
};

// [...state.car.features.map(feature => feature.price)].reduce((a,b)=> a+b, 0)



// const array = [
//     { id: 1, name: 'Chanis'},
//     { id: 2, name: 'Julio'},
//     { id: 3, name: 'Grandma'},
//     { id: 4, name: 'Grandpa'}
// ]

// const action_payload = 2;

// const newArray = [...array.filter(item => item.name == 'Chanis')];

// console.log(newArray);

//.filter is an array method that compares every element in the array to a statement.
//if the statement is true for that element, it keeps it. If it is false for that element,
//then it filters it out (removes it).

//action.payload is the id of the clicked 

// const array = [
//     { id: 1, name: 'V-6 engine', price: 1500 },
//     { id: 2, name: 'Racing detail package', price: 1500 },
//     { id: 3, name: 'Premium sound system', price: 500 },
//     { id: 4, name: 'Rear spoiler', price: 250 }
//   ]

//   const newArr = [...array.map(item=> item.price)].reduce((a,b)=> a+b, 0);
//   console.log(newArr);
  
//   I'm having issues adding the total amount for the Car Sales project. When I first add an additional feature, it doesnt add the price. 
//   But, when I add additional ones, it adds those prices properly. Then, when I remove all features, my total amount does not equal to the 
//   original amount.

//   here is the code for adding the total. I have this code in two cases: my ADD_FEATURE and REMOVE_FEATURE.
  
