import React, { Component } from "react";
// import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import employees from "./employees.json";
import Table from "./components/Table.jsx";

// class App extends Component {
//   // Setting this.state.employees to the employees json array
//   state = {
//     employees,
//   };

// Map over this.state.employees and render a EmployeeCard component for each employee object
//   render() {
//     return (
//       <Wrapper>
//         <Table />
//         {/* <Title>Employee Directory</Title> */}
//         {/* <SortButton></SortButton> */}
//         {/* {this.state.employees.map((employee) => ( */}
//         {/* <EmployeeCard
//           employees={this.state.employees} */}
//         {/* // id={employee.id}
//           // key={employee.id}
//           // name={employee.name}
//           // email={employee.email}
//           // department={employee.department}
//           // location={employee.location}
//         /> */}
//         {/* ))} */}
//       </Wrapper>
//     );
//   }
// }
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          id: 1,
          email: "douglas.reynholm@reqres.in",
          name: "Douglas Reynholm",
          department: "Manager",
          location: "Sacramento, CA",
        },
        {
          id: 2,
          email: "matthew.patel@reqres.in",
          name: "Matthew Patel",
          department: "Accountant",
          location: "Sacramento, CA",
        },
        {
          id: 3,
          email: "tobias.funke@reqres.in",
          name: "Tobias Funke",
          department: "Scrum Master",
          location: "Sacramento, CA",
        },
        {
          id: 4,
          email: "larry.deardorff@reqres.in",
          name: "Larry Deardorff",
          department: "IT Specialist",
          location: "San Antonio, TX",
        },
        {
          id: 5,
          email: "sean.frizzell@reqres.in",
          name: "Sean Frizzell",
          department: "Software Engineer",
          location: "Chicago, IL",
        },
        {
          id: 6,
          email: "breen.heath@reqres.in",
          name: "Breen Heath",
          department: "Manager",
          location: "Dallas, TX",
        },
        {
          id: 7,
          email: "jonathan.irvin@reqres.in",
          name: "Jonathan Irvin",
          department: "Software Engineer",
          location: "Tulsa, OK",
        },
        {
          id: 8,
          email: "danielle.garcia@reqres.in",
          name: "Danielle Garcia",
          department: "SEO Specialist",
          location: "Austin, TX",
        },
        {
          id: 9,
          email: "maurice.moss@reqres.in",
          name: "Maurice Moss",
          department: "IT Specialist",
          location: "New York, NY",
        },
        {
          id: 10,
          email: "roy.trenneman@reqres.in",
          name: "Roy Trenneman",
          department: "IT Specialist",
          location: "New York, NY",
        },
        {
          id: 11,
          email: "kelly.weeran@reqres.in",
          name: "Kelly Weeran",
          department: "Game Developer",
          location: "Dallas, TX",
        },
        {
          id: 12,
          email: "will.cooper@reqres.in",
          name: "Will Cooper",
          department: "Accountant",
          location: "Tulsa, OK",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Employee Directory</h1>
        <br />
        <Table data={this.state.employees} />
      </div>
    );
  }
}
