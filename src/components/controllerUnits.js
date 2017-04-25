import React from 'react';

class ControllerUnit extends React.Component{
    handleClick(e){

      if (!this.props.arrange.isCenter) {
        this.props.center();
      } else {
        this.props.inverse();
      }

      e.stopPropagation();
      e.preventDefault();
    }
   render(){
     let controllerUnitsClassName = 'controller-unit';
     controllerUnitsClassName += (this.props.arrange.isCenter) ? ' is-center' : '';
     controllerUnitsClassName += (this.props.arrange.isInverse) ? ' is-inverse' : '';
      return(
          <span className = {controllerUnitsClassName} onClick = {this.handleClick.bind(this)}></span>
      );
   }
}

export default ControllerUnit;
