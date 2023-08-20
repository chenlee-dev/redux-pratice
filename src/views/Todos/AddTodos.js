import React from 'react';
import { toast } from 'react-toastify';



class AddTodos extends React.Component {

    state = {
        title: ''
    }
    
    handleOnChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddTodo = () => {
        if(!this.state.title){
            //undefined/null/empty => false
            toast.error('Missing Something')
            return;

        }
            let todo = {
            id: 'todo' + Math.floor(Math.random() * 1001),
            title: this.state.title
        }

        this.props.thisAddNewTodo(todo);
        this.setState({
            title: ''
        })
    }
    render () {
        let { title } = this.state;
        return (
            <div className="add-todo">
                    <input type="text" value = {title} 
                        onChange = {(event) => this.handleOnChangeTitle(event)}
                    />
                    <button type="button" 
                            className="add-btn"
                            onClick = {() => this.handleAddTodo()}>
                        Add
                    </button>
            </div>
        )
    }
}

export default AddTodos;
