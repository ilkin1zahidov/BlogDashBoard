import React from "react";
import "../../assets/css/sidebarOption.css";

function SidebarOption({ Icon, title, number, selected }) {
  return (
    <div className={`sidebarOption ${selected  && "sidebarOption--active"}
    `}>
      <Icon />
      <h3 className="title">{title}</h3>
      <p className="number">{number}</p>
    </div>
  );
}
export default SidebarOption;
