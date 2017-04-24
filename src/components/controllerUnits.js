import React from 'react';

class ControllerUnits extends React.Component{
    handleClick(e){


      e.stopPropagation();
      e.preventDefault();
    }
   render(){


      return(
          <span className = "controller-unit" onClick = "this.handleClick"></span>
      );
   }
}

export default ControllerUnits;
