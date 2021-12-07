import { useState, useEffect } from "react";
import axios from "axios";
import { UpdateTodo } from "./updateTodo";
import Backdrop from "./backdrops";
// import Card from "../view/Card";

// function TodoCard({data, handleEdit, handleDelete}) {
//   const {_id, title, description} = data;

//   return (
//     <li key={_id}>
//       <Card title={title} description={description} buttonId={id} updateOnClick={handleEdit} deleteOnClick={handleDelete} />
//     </li>
//   )
// }

function Card({data, handleEdit, handleDelete}) {
  const {id, title, description} = data;

  return (
  <li key={id}>
    <div className='justify-around bg-white flex flex-row mx-4 mt-4 rounded-lg'>
        <div className='w-full md:w-56 justify-center items-center shadow-md px-6 py-4 flex flex-col'>
          <h3 className='text-blue-600 text-3xl border-b-2'>
            {title}
          </h3>
          <div className='my-4 text-sm'>
            <p>{description}</p>
          </div>
        <div>
          <button className='bg-blue-400 text-base text-white mx-2 px-2 py-2 rounded-sm hover:bg-blue-700 mt-8 w-16' name={id} onClick={handleEdit}>Edit</button>
          <button className='bg-blue-400 text-base text-white mx-2 px-2 py-2 rounded-sm hover:bg-blue-700 mt-8 w-16' name={id} onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  </li>
  )
}

export function ShowTodo() {
  const [todo, setTodo] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");
  const [update, setUpdate] = useState(false);


  useEffect(
    function() {
      axios
        .get(`https://pawtodoserver.herokuapp.com/api/todo`)
        .then((res) => {
          console.log(res.data);
          setTodo(res.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  );

  function handleEdit(e) {
    setId(e.target.name);
    setOpen(true);
    console.log(e.target.name);
  }

  function handleUpdate() {
    console.log("update:", update, !update);
    setUpdate(!update);
  }

  function handleDelete(e) {
    axios.delete(`https://pawtodoserver.herokuapp.com/api/todo/${e.target.name}`);

    setTodo((data) => {
        return data.filter((todo) => todo.id !== e.target.name);
    });
    console.log(e.target.name);
  }

  function handleClose() {
    setId("");
    setOpen(false);
  }


  return (

      <div>
        <div className='w-screen mx-auto flex justify-center items-center mt-20 mb-48 overflow-hidden'>
          <ul className='top-96 transform flex flex-wrap justify-center items-center'>
          {todo.map((data) => (
              <Card
                  data={data}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
              />
          ))}
          </ul>
        </div>
        {open ? (
          <div>
          <div className='absolute top-20vh left-calc z-20 h-auto w-auto flex justify-center items-center'>
            <div className='relative'>
              <p className='absolute top-16 right-4 text-3xl mb-16 text-red-500 cursor-pointer' onClick={handleClose}>
                  &times;
              </p>
              <UpdateTodo
                id={id}
                handleClose={handleClose}
                handleUpdate={handleUpdate}        
              />

            </div>

          </div>
          <Backdrop onCancel={handleClose}/>
          </div>
        ): ("")}
      </div>     
  )
}