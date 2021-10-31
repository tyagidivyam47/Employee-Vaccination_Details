import "./Table.css";
import MaterialTable from "material-table";

const Table = (props) => {

    // console.log("yanghe")
    // console.log(props.response.data[0])
  

  const columns = [
      {title:'ID', field:'id'},
      {title:'Name', field:'emp_name'},
      {title:'E-Mail', field:'email'},
      {title:'Mobile', field:'mobile'},
      {title:'City', field:'city'},
      {title:'Region', field:'region'},
      {title:'1st Vaccine Dose', field:'first-vaccination_date'},
      {title:'2nd Vaccine Dose', field:'second-vaccination_date'},
      {title:'1st Vaccine Proof', field:'first-vaccination_proof'},
      {title:'2nd Vaccine Proof', field:'second-vaccination_proof'},
  ]

  return (
    <MaterialTable
      title="Employee's Vaccination Details"
      data={props.Data}
      columns={columns} />
  );
};
export default Table;