import React from 'react'

export default function TodoInput(props) {
    return (
        <div className='card card-body my-3'>
            <form onSubmit={props.handleSubmit}>
            <div className='input-group'>
                <div className='input-group-prepend'>
                    <div className='input-group-text bg-primary text-white'>
                        <i className='fas fa-book'></i>
                    </div>
                </div>
                <input type='text' placeholder='Add new todo item' className='form-control' 
                        value = {props.item} onChange={props.onAddItem}/>
            </div>
            <button type='submit' className='btn btn-block btn-primary mt-3'>Add</button>
            </form>
        </div>
    )
}
