import React from "react";

export default function Alert(props) {
    const capitalize = (word)=> {
        const lower = word.toLowerCase();
        return ( lower.charAt(0).toUpperCase() + lower.slice(1) );
    }
    

  return (
    <div style={{height:'3.7em'}}> 
      {props.alert && <div className={`alert alert-${props.alert.type === 'success: '?'success':'warning'} d-flex align-items-center`} role="alert">
      <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"></svg>
      <div>
        {capitalize(props.alert.type) + props.alert.msg} 
      </div>
    </div>}
    </div>
  );
}
