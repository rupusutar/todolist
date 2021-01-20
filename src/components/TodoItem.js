import React from 'react'

export default function TodoItem(props) {
    const {title, onDelete} = props;
    
    return (
        <div className='list-group-item text-capitalize d-flex justify-content-between my-2'>
            <h6>{title}</h6>
            <div>
                <span className='mx-2 text-success'>
                    <i className='fas fa-pen'></i>
                </span>
                <span className='mx-2 text-danger' onClick={onDelete}>
                    <i className='fas fa-trash'></i>
                </span>
            </div>
        </div>
    )
}
