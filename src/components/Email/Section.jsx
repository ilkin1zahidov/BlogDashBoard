import React from 'react';
import "../../assets/css/section.css"
const Section = ({Icon, title,color, selected}) => {
  return (
    <div className={`section ${selected && "section--selected"}`} 
    style={{
        borderBottom:`3px solid ${color}`,
        color: `${selected && color}`,
    }}
    >
        <Icon/>
        <h4 className='sectionTitle'>{title}</h4>
    </div>
  )
}
export default Section