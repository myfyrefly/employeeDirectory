import React from "react";
import "./style.css";

function EmployeeCard({ employees }) {
  // console.log(employees);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Dept.</th>
          <th>Email</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((e) => {
          return (
            <tr>
              <td>{e.name}</td>
            </tr>
          );
        })}
      </tbody>

      {employees.map((d) => {
        return (
          <tr>
            <td>{d.department}</td>
          </tr>
        );
      })}
    </table>
    // <div className="card">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>
    //         <strong>Name:</strong> {props.name}
    //       </li>
    //       <li>
    //         <strong>Email:</strong> {props.email}
    //       </li>
    //       <li>
    //         <strong>Role:</strong> {props.role}
    //       </li>
    //       <li>
    //         <strong>Location:</strong> {props.location}
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default EmployeeCard;
