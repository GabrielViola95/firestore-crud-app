import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { useParams, useNavigate } from "react-router-dom";
import add_link from '../assets/add_link.svg';
import edit_black from '../assets/edit_black.svg';
import { savevalues, getvalues, updatevalues } from "../firebase/firebaseApi";

    const initialStateValues = {
        url: "",
        name: "",
        description: "",
    }

const LinkForm = ({addTask, data}) => {

    const [values, setValues] = useState(initialStateValues);

    const params = useParams();
  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) =>
    setValues({ ...values, [name]: value });

  const validURL = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(str);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validURL(values.url))
      return toast("invalid url", { type: "warning", autoClose: 1000 });

    if (!params.id) {
      await savevalues(values);
      toast("New Link Added", {
        type: "success",
      });
    } else {
      await updatevalues(params.id, values);
      toast("Updated", {
        type: "success",
      });
    }

    // Clean Form
    setValues(initialState);
    navigate("/");
  };

  const getLinkById = async (id) => {
    try {
      const doc = await getvalues(id);
      setValues({ ...doc.data() });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      getLinkById(params.id);
    }
  }, [params.id]);

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