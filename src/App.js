import './App.css';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import {useState} from 'react';
import {v4 as uuid} from 'uuid';


function App() {

  const [list, setList] =useState([]);
  const [item, setItem] = useState('');

  const handleAddItem = e => {
    const newItem = e.target.value;
    setItem(newItem);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: uuid(),
      title: item,
    }
    setList([...list, newItem]);
    setItem('')
  }

  const handleDeleteItem = id =>{
    const filterdList = list.filter(itm => itm.id !== id)
    setList(filterdList)
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 col-md-8 mx-auto mt-4'>
          <h3 className='text-capitalize text-center'>Todo Input</h3>
          <TodoInput item ={item} onAddItem={handleAddItem} handleSubmit={handleSubmit}/>
          <TodoList list={list} clearAll={()=>setList([])} handleDeleteItem={handleDeleteItem}/>
        </div>  
      </div>
    </div>

  );
}

export default App;
