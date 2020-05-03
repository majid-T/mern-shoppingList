import React,{Component} from 'react';
import {
    Button,Modal,ModalHeader,ModalBody,Form,FormGroup,Label,Input
} from 'reactstrap';
import {addItem} from '../actions/itemActions';
import { connect } from 'react-redux';
import {v4 as uuidv4} from 'uuid';

class ItemModal extends Component{
    state={
        modal:false,
        name:''
    }

    toggle = ()=> {
        this.setState({modal : !this.state.modal});
    }

    onChange = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit = (e)=>{
        e.preventDefault();
        console.log('adding')
        const newItem = {
            id: uuidv4(),
            name:this.state.name
        };

        this.props.addItem(newItem);
        this.toggle();
    }

    render(){
        return(
            <div>
                <Button color='dark' style={{marginBottom:'2rem'}} onClick={this.toggle}>
                    Add Item
                </Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Add to ShoppingList
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for='item'>Item</Label>
                                <Input type='text' name='name' id='item' placeholder='Add Shopping Item'
                                onChange={this.onChange}/>
                                <Button color='dark' style={{marginBottom:'2rem'}} block
                                >Add Item</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>                        
                </Modal>
            </div>
        );
    }
}

const  mapStateToProps = state =>({item:state.item});

export default connect(mapStateToProps,{addItem})(ItemModal);