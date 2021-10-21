import React from "react";


function DetailsPopup({ handleClose,hospital_name,detailspopup, type_of_treatment, available_doctors}) {
  return (
    <div className="detailsPopup">
      <div className="btnClose">
        <p onClick={handleClose}><i className="fas fa-times"></i></p>
      </div>
      <h3>{hospital_name}</h3>
     
        <div className="detailsPopup_flex">
          <div className="detailsPopup_doctorName">
            <h4>Doctors Name</h4>
            <p>-------------------</p>
            <p>{available_doctors}</p>
          </div>
          <div className="detailsPopup_treatment">
            <h4>Treatment</h4>
            <p>----------------</p>
            <p>{type_of_treatment}</p>
          </div>
          </div>
          <div className="para">
            <h4>About</h4>
        <p>
         {detailspopup}
        </p>
        </div>
      
      
    </div>
  );
}

export default DetailsPopup;
