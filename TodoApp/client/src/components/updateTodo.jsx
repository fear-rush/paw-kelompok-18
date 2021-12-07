import { useState } from 'react';
import axios from 'axios';

export function UpdateTodo({ id, handleClose, handleUpdate}) {
  const [data, setData] = useState({
    title: "",
    description: ""
  });

  function handleChange(e) {
    setData((data) => ({
      ...data,
      [e.target.name]: e.target.value
    }));
  }

   // const handleForm = useCallback(
    //   e => {
    //     handleSubmit(e);
    //     handleUpdate();
    //   }
    // )
    function handleSubmit(e) {
      e.preventDefault();

      console.log({ id }, { data });

      axios
          .put(`https://pawtodoserver.herokuapp.com/api/todo/${id}`, data)
          .then((res) => {
              setData({ title: "", description: "" });
              console.log(res.data.message);
              
          })
          .catch((err) => {
              console.log("Gagal update todo");
              console.log(err.message);
          });
  }


  return (
    <div className='fflex items-center justify-center overflow-hidden shadow rounded-md bg-white p-px fixed w-auto h-auto z-20 top-80 left-1/2 transform -translate-x-1/2'>
    <form className='flex flex-col bg-white rounded-md shadow-md p-14 mt-8' 
      onSubmit={(e) => {
        handleSubmit(e);
        handleUpdate();
        handleClose();
      }}
    >
        <label className='font-semibold text-lg' htmlFor='titleField'>Title</label>  
        <textarea className='flex items-center h-24 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 resize-none'
         type='text'
         onChange={handleChange} 
         name="title"
         placeholder='Ganti Title'></textarea>
        
        <label className='font-semibold text-lg mt-3'>Description</label>
        <textarea className='flex items-center h-24 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 resize-none' 
        onChange={handleChange} 
        type='text' 
        name="description"
        placeholder='Ganti Deskripsi'></textarea>

        <button className='flex items-center justify-center h-12 px-6 w-80 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700' 
        type="submit">Submit</button>
    </form>
    <div className='flex absolute flex-wrap justify-center align-center transform translate-y-2/4 bottom-56'>
    </div>
  </div>
  )

}