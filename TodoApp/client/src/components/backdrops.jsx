function Backdrop(props){
  return <div className='fixed z-10 bg-black bg-opacity-50 w-full h-screen top-0 left-0' onClick={props.onCancel}/>
  //<div class='fixed z-10 bg-black bg-opacity-75 h-screen top-0 left-0'/>;
}

export default Backdrop;