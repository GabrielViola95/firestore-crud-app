import React, { useState } from 'react'
import add_link from '../assets/add_link.svg';
import edit_black from '../assets/edit_black.svg';

    const initialStateValues = {
        url: "",
        name: "",
        description: "",
    }

const LinkForm = ({addTask, data}) => {

    const [values, setValues] = useState(initialStateValues);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(values);
        addTask(values);
        setValues(data.docs.map((doc)=>({...doc.data(), id: doc.id
        })))
    };

    const handleInputChange = (e)=> {
        const {name, value} = e.target;
        setValues({...values, [name]:value})
    }

  return (
    <form className='card card-body' onSubmit={handleSubmit}>
        <div className="m-1 form-group input-group">
            <div className="input-group-text bg-light">
                <img className='material-icons' src={add_link} alt="add" />
            </div>
            <input type="text" className='form-control' placeholder='https://ejemplo.com' name='url' onChange={handleInputChange} />
        </div>
        <div className="m-1 form-group input-group">
            <div className="input-group-text bg-light">
                <img className='material-icons' src={edit_black} alt="edit" />
            </div>
            <input type="text" className='form-control' placeholder='Nombre del sitio' name='name' onChange={handleInputChange} />
        </div>
        <div className="m-1 form-group">
            <textarea name="description" rows="3" className='form-control' placeholder='Escribe una descripción' onChange={handleInputChange}></textarea>
        </div>
        <button className='btn btn-primary btn-block'>
            Guardar
        </button>
    </form>
  )
}

export default LinkForm