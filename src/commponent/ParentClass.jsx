import React from "react";


// Define the ChildClass component
const ChildClass = ({ customItems }) => {
  // Options array
  const options = [
    { label: "green", value: "green" },
    { label: "blue", value: "blue" },
    { label: "red", value: "red" },
    { label: "yellow", value: "yellow" },
  ];

  return (
    <div>
      <span>Child class</span>
      {/* Iterate over options and render using customItems */}
      {options.map((item, index) => (
        <div key={index}>{customItems(item)}</div>
      ))}
    </div>
  );
};

// Define the ParentClass component
const ParentClass = () => {
  return (
    <ChildClass customItems={(props) => (
        <div>
          <div>{props.label}</div>
        </div>
      )}
    />
  );
};

export default ParentClass;
