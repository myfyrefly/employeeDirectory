import React from "react";
import Table from "./components/Table.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        {
          id: 1,
          email: "douglas.reynholm@reqres.in",
          name: "Douglas Reynholm",
          role: "Manager",
          location: "Sacramento, CA",
        },
        {
          id: 2,
          email: "matthew.patel@reqres.in",
          name: "Matthew Patel",
          role: "Accountant",
          location: "Sacramento, CA",
        },
        {
          id: 3,
          email: "tobias.funke@reqres.in",
          name: "Tobias Funke",
          role: "Engineer",
          location: "Sacramento, CA",
        },
        {
          id: 4,
          email: "larry.deardorff@reqres.in",
          name: "Larry Deardorff",
          role: "IT Specialist",
          location: "San Antonio, TX",
        },
        {
          id: 5,
          email: "sean.frizzell@reqres.in",
          name: "Sean Frizzell",
          role: "Software Engineer",
          location: "Chicago, IL",
        },
        {
          id: 6,
          email: "breen.heath@reqres.in",
          name: "Breen Heath",
          role: "Manager",
          location: "Dallas, TX",
        },
        {
          id: 7,
          email: "jonathan.irvin@reqres.in",
          name: "Jonathan Irvin",
          role: "Software Engineer",
          location: "Tulsa, OK",
        },
        {
          id: 8,
          email: "danielle.garcia@reqres.in",
          name: "Danielle Garcia",
          role: "SEO Specialist",
          location: "Austin, TX",
        },
        {
          id: 9,
          email: "maurice.moss@reqres.in",
          name: "Maurice Moss",
          role: "Game Developer",
          location: "New York, NY",
        },
        {
          id: 10,
          email: "roy.trenneman@reqres.in",
          name: "Roy Trenneman",
          role: "IT Specialist",
          location: "New York, NY",
        },
        {
          id: 11,
          email: "kelly.weeran@reqres.in",
          name: "Kelly Weeran",
          role: "Game Developer",
          location: "Dallas, TX",
        },
        {
          id: 12,
          email: "will.cooper@reqres.in",
          name: "Will Cooper",
          role: "Accountant",
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
