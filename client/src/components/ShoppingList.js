import React,{Component} from 'react';
import {Container,ListGroup, ListGroupItem,Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
// import uuid from 'uuid';
import { v4 as uuid4 } from 'uuid';


class ShoppingList extends Component{
    state={
        items:[
            {id:uuid4(), name:'Egg'},
            {id:uuid4(), name:'Milk'},
            {id:uuid4(), name:'Steack'},
            {id:uuid4(), name:'Water'}
        ]
    }

    render() {
        const {items} = this.state;

        return (
            <Container>
                <Button color='dark' style={{marginBottom:'2rem'}}
                onClick={()=>{
                    const name = prompt('Enter Item!');
                    if(name){
                        this.setState(state=>({
                            items:[...state.items,{id:uuid4(),name}]
                        }));
                    }
                }}
                >Add Item</Button>
            </Container>
        );
    }
}

export default ShoppingList;