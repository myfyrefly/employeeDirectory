import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import employees from "./employees.json";
import SortButton from "./components/sortBtn";

class App extends Component {
  // Setting this.state.employees to the employees json array
  state = {
    employees
  };


  // Map over this.state.employees and render a EmployeeCard component for each employee object
  render() {
    return (
      
      <Wrapper>
        <Title>Employee Directory</Title>
        <SortButton></SortButton>
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeFriend={this.removeFriend}
            id={employee.id}
            key={employee.id}
            name={employee.name}
            image={employee.avatar}
            email={employee.email}
            role={employee.role}
            location={employee.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
