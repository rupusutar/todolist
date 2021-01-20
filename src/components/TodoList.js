import React from 'react'
import TodoItem from './TodoItem'

const TodoList =(props)=> {
    const {list, clearAll, handleDeleteItem, handleEditItem} = props;

    return (
        <ul className='list-group my-5'>
            <h3 className='text-center text-capitalize'>todo List</h3>
            {
                list.map( item => {
                    return <TodoItem 
                        key={item.id} 
                        title={item.title} 
                        onDelete={()=>handleDeleteItem(item.id)}
                        enableEdit={()=>handleEditItem(item.id)}    
                    />
                })
            }
            <button type='button' className='btn btn-danger text-capitalize' onClick={clearAll}>Clear all</button>
        </ul>
    )
}

export default TodoList;
