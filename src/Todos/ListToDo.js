import React from 'react';
import './ListToDo.scss';
import AddTodos from './AddTodos';
import { toast } from 'react-toastify';



class ListTodo extends React.Component {

    state = {
        listTodos: [
            {id: 'todo1', title: 'Learning Web'},
            {id: 'todo2', title: 'Working Hard'},
            {id: 'todo3', title: 'Study New Thing'}
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {

        //let currentListTodo = this.state.listTodos;
        //currentListTodo.push(todo);
        //Same value difference syntax;


        this.setState({
            listTodos: [...this.state.listTodos, todo]
            //listTodos: currentListTodo
        })

        toast.success("Added");

    }
    
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter( item => item.id !== todo.id)
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Deleted");
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //SAVE
        if( isEmptyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];

            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Saved");

            return;
        }
        
        //EDIT
        this.setState({
            editTodo: todo
        })
        
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
            
        })
    }
    render() {
        let { listTodos, editTodo } = this.state;
        //let listTodos = this.state.listTodos;
        //sam value but difference syntax;
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('Check EMPTY OBJ : >>> ', isEmptyObj)

        return (
            <div className="list-todo-container">
                <AddTodos 
                    thisAddNewTodo={this.addNewTodo}
                />
                <div className='list-todo-content'>
                    { listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                            <div className="todo-child" key={item.id}>
                                {isEmptyObj === true ?
                                    <span>{ index + 1 } - { item.title } </span>
                                    :
                                    <>
                                    { editTodo.id === item.id ?
                                    <span>  { index + 1 } - 
                                            <input value = {editTodo.title} 
                                            onChange = {(event) => this.handleOnChangeEditTodo(event)}
                                    /></span>
                                    :
                                    <span>{ index + 1 } - { item.title }</span>
                                    }
                                    </>
                                }
                                <button className="edit-btn"
                                    onClick={() => this.handleEditTodo(item)}>
                                    { isEmptyObj === false && editTodo.id === item.id ?
                                    'Save' : 'Edit'}
                                    </button>
                                    
                                <button className="delete-btn"
                                    onClick={() => this.handleDeleteTodo(item)}>
                                    Delete</button>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo;