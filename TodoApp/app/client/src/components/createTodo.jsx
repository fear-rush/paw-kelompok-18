import { useState } from 'react';
import axios from 'axios';
require('dotenv').config()

export function CreateTodo(props) {
  const [data, setData] = useState({ title: "", description: "" });

  function handleChange(e) {
      setData((data) => ({ ...data, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
      e.preventDefault();

      axios
          .post(`https://pawtodoserver.herokuapp.com/api/todo`, data)
          .then((res) => {
              setData({ title: "", description: "" });
              console.log(res.data.message);
              props.onCancel();
          })
          .catch((err) => {
              console.log("Error couldn't create TODO");
              console.log(err.message);
          });
  }

  return (
    //<div className='flex items-center justify-center overflow-hidden'>
    <div className='flex items-center justify-center overflow-hidden shadow rounded-md bg-white p-px  fixed w-auto h-auto z-20  top-20vh left-calc'>
      <div>
        <p className='absolute top-4 right-4 text-3xl mb-16 text-red-500 cursor-pointer' onClick={props.onCancel}>
                  &times;</p>
      </div>
      
      <form className='flex flex-col bg-white rounded-md shadow-md p-10' 
            onSubmit={handleSubmit} 
            noValidate>

          <label className='font-semibold text-lg' htmlFor='titleField'>Title</label>  
          <textarea className='flex items-center h-24 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 resize-none' 
                    type='text' 
                    onChange={handleChange} 
                    value={data.title} 
                    name="title"
                    placeholder="cth. Pergi ke pasar"></textarea>
          
          <label className='font-semibold text-lg mt-3'>Description</label>
          <textarea className='flex items-center h-24 px-4 w-80 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2 resize-none' 
                    onChange={handleChange} 
                    type='text' 
                    value={data.description} 
                    name="description"
                    placeholder="cth. Beli telur, sayur, dll"></textarea>
          <button className='flex items-center justify-center h-11 px-6 w-auto bg-blue-600 mt-8 rounded font-semibold text-sm text-white hover:bg-blue-700 ' 
                  type="submit">Submit</button>
      </form>
      <div className='flex absolute flex-wrap justify-center align-center transform translate-y-2/4 bottom-56'>
      </div>
    </div>
  );

}