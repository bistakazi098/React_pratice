import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";


const getLocalStorage = ()=>{
  let list =localStorage.getItem('list');
  if(list){
    return JSON.parse(localStorage.getItem('list'))
  }
  else 
  return [];
}

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({
     show: false,
      msg: "", 
      type: "" });

  const handleClick = (e) => {
    e.preventDefault();
    console.log("hellow");
    if (!name) {
      showAlert(true,'danger','please enter The Value')
  
      //display alert
      setAlert({show: true, msg: 'Please Enter value',type:'danger'})


    } else if (name && isEditing) {
      // deal with edit
      setList(list.map((item)=>{
        if(item.id === editId){
        return{...item,title:name}
        }
        return item;
      }));
      setName('');
      setEditId(null);
      setEditing(false);
      showAlert(true,"success","value changed")
    } else {
      // show alert
      showAlert(true,'success','item added to the list')
      const newItem = { id: new Date().getTime.toString(), title: name };
      setList([...list, newItem]);
      setName('');
    }
  };
  const showAlert=(show=false,type="",msg="")=>{
    setAlert(show,type,msg);
  }

  // for clear list
  const clearList= ()=>{
    showAlert(true,'danger','empty list')
    setList([]);
  }
  // removing item
  const removeItem = (id)=>{
        showAlert(true,'danger','empty list');
        setList(list.filter((item)=>item.id!==id));
  }

  // editing item
  const editItem = (id)=>{
    const specificItem= list.find((item)=>item.id===id);
    setEditing(true);
    setEditId(id);
    setName(specificItem.title);
  };


  // we overwrite and save the latest value of list
  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list));
  },[list])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleClick}>
        {alert.show && <Alert  {...alert} removeAlert={showAlert}  list={list}/>}
        <h3>glocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g eggs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn" type="submit">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>
      </form>
      {list.length>0 && (
         <div className="grocery-container">
         {/* passing items as a props */}
         <List items={list} removeItem={removeItem} editItem={editItem}/>
         <button className="clear-btn" onClick={clearList}>clear items</button>
       </div>)}
     
    </section>
  );
}

export default App;
