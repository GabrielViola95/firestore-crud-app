import React from 'react'
import add_link from '../assets/add_link.svg';
import edit_black from '../assets/edit_black.svg';

const LinkForm = () => {
  return (
    <form className='card card-body'>
        <div className="m-1 form-group input-group">
            <div className="input-group-text bg-light">
                <img src={add_link} alt="" />
            </div>
            <input type="text" className='form-control' placeholder='https://ejemplo.com' name='url' />
        </div>
        <div className="m-1 form-group input-group">
            <div className="input-group-text bg-light">
                <img src={edit_black} alt="" />
            </div>
            <input type="text" className='form-control' placeholder='Nombre del sitio' name='name' />
        </div>
        <div className="m-1 form-group">
            <textarea name="description" rows="3" className='form-control'></textarea>
        </div>
    </form>
  )
}

export default LinkForm