// import MaterialTable from "material-table";
import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table/Table";

function App() {
  const[Data, setData] = useState([]);
  // const columns = [
  //   {title:'ID', field:'id'},
  //   {title:'Name', field:'emp_name'},
  //   {title:'E-Mail', field:'email'},
  //   {title:'Mobile', field:'mobile'},
  //   {title:'City', field:'city'},
  //   {title:'Region', field:'region'},
  //   {title:'1st Vaccine Dose', field:'first_vaccination_date'},
  //   {title:'2nd Vaccine Dose', field:'second_vaccination_date'},
  //   {title:'1st Vaccine Proof', field:'first_vaccination_proof'},
  //   {title:'2nd Vaccine Proof', field:'second_vaccination_proof'},
  // ]

  useEffect(() => {
    fetch('https://be.platform.simplifii.com/api/v1/custom/vaccinatedEmployees')
    .then(resp => resp.json())
    .then(resp => setData(resp))
  },[])
  // console.log(Data.response);

  const response = Data.response.data;
  
  // console.log(response);

  return (
    <div className="App">
      {/* <MaterialTable 
      data={response}
      columns={columns}/> */}
      <Table Data={response} />
    </div>
  );
}

export default App;