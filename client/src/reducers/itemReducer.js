import {v4 as uuid4} from 'uuid';
import {GET_ITEMS,ADD_ITEM,DELETE_ITEM} from '../actions/types';

const initialState = {
    items:[
        {id:uuid4(), name:'Egg'},
        {id:uuid4(), name:'Milk'},
        {id:uuid4(), name:'Steack'},
        {id:uuid4(), name:'Water'},
        {id:uuid4(), name:'Suger'}
    ]
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_ITEMS:
            return{
                ...state
            };
        
        case DELETE_ITEM:
            return{
                ...state,
                items: state.items.filter(item=>item.id !== action.payload)
            };
        default:
            return state;
    }
}