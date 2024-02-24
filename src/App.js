import logo from "./logo.svg";
import "./App.css";
import DataTable from "./component/Table";
import { useEffect, useState } from "react";
import BasicModal from "./component/Modal";

function App() {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState({});
  const [id, setId] = useState(null);
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
  const handleOpen = () => {
    setOpenModal(true);
  };
  const handleClose = () => {
    setOpenModal(false);
  };
  const handleDelete = (params) => {
    console.log(params);
    if (params?.field === "delete") {
      data?.filter((item)=>item?.id !== params?.id)
    }
  };
  return (
    <div className="App">
      <h1>Test Ui</h1>
      <DataTable
        handleDelete={handleDelete}
        selected={selected}
        setSelected={setSelected}
        setOpenModal={() => setOpenModal(true)}
        rows={data}
      />
      <BasicModal
        data={selected}
        open={openModal}
        handleOpen={() => handleOpen()}
        handleClose={() => handleClose()}
      />
    </div>
  );
}

export default App;
