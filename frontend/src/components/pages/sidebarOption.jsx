import React from "react";
import "../css/sidebarOption.css";

function SidebarOption({ Icon, title, number, selected, click }) {

  return (
    <div
      className={`sidebarOption ${selected && "sidebarOption--active"}`}
      onClick={click}
    >
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
}

export default SidebarOption;
