import "./Table.css";
import MaterialTable from "material-table";

const Table = (props) => {

    // console.log("yanghe")
    console.log(props.Data);
  

  const columns = [
      {title:'ID', field:'id'},
      {title:'Name', field:'emp_name'},
      {title:'E-Mail', field:'email'},
      {title:'Mobile', field:'mobile'},
      {title:'City', field:'city'},
      {title:'Region', field:'region'},
      {title:'1st Vaccine Dose', field:'first_vaccination_date'},
      {title:'2nd Vaccine Dose', field:'second_vaccination_date'},
      {title:'1st Vaccine Proof', field:'first_vaccination_proof'},
      {title:'2nd Vaccine Proof', field:'second_vaccination_proof'},
  ]

  return (
    <MaterialTable
      title="Employee's Vaccination Details"
      data={props.Data}
      columns={columns} />
  );
};
export default Table;