import React from 'react'

function Form(props) {
    // Here ı can write js code and function
    const inputTextHandler = (e) => {
        // e.target.value
        props.setInputText(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(props.inputText !== ''){
          props.setTodos([...props.todos, {text: props.inputText, id: Math.random()*1000, completed : false }])
          props.setInputText("")
        }else{
          alert('Please input something !')
        }   
    }

    // For Filter Area
    const statusHandler = (e) => {
      // console.log(e.target.value);
      props.setStatus(e.target.value)
    }

    return (
        <form  >
        <input value={props.inputText} onChange={inputTextHandler} type="text" className="todo-input" />
        <button onClick={submitHandler} className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}

export default Form
