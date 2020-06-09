import React from "react";
// import "./button.css";

function SortButton(props) {
  return (
    <div>
      <button variant="primary" className="btn-primary">Sort Employees</button>
    </div>
  );
}

export default SortButton;

// export const Button = ({
//   children,
//   type,
//   onClick,
//   buttonStyle,
//   buttonSize,
// }) => {
//     return (
//       <button onClick={onClick} type={type}>
//           {children}
//           </button>  
//     )
// };
