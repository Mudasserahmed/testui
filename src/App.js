import logo from "./logo.svg";
import "./App.css";
import DataTable from "./component/Table";
import { useEffect, useState } from "react";
import BasicModal from "./component/Modal";

function App() {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const handleDelete =()=>{
      data.filter((item,index)=> item!=index )
  }
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      });
  };
  return (
    <div className="App">
      <h1>Test Ui</h1>
      <DataTable handleDelete={handleDelete} setOpenModal={setOpenModal} rows={data} />
      {openModal === true && <BasicModal data={data} />}
    </div>
  );
}

export default App;
