import React from 'react';

class ImgFigure extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    if (this.props.arrange.isCenter) {
        this.props.inverse()
    }else {
        this.props.center();
    }

    e.stopPropagation();
    e.preventDefault();
  }



  render(){
     let styleObj = {};

     /*  if the position of picture exist then set position */
     if (this.props.arrange.pos) {
          styleObj = this.props.arrange.pos;
      }

      /*if the rotate not 0 then do rotate*/
      if(this.props.arrange.rotate){
          styleObj['MozTransform', 'msTransform', 'WebkitTransform', 'OTransform', 'transform'] = 'rotate('+ this.props.arrange.rotate+'deg)';
      }

      let imgFigureClassName = 'img-figure';
      imgFigureClassName += this.props.arrange.isInverse ? ' is-inverse ' : ' ';
      if(this.props.arrange.isCenter){
        styleObj.zIndex = 11;
      }

     return(
        <figure className={ imgFigureClassName } style={styleObj} onClick = {this.handleClick}>
            <img src={this.props.data.imageURL}
                 alt={this.props.data.title}
            />
            <figcaption>
                <h2 className="img-title">{this.props.data.title}</h2>
                <div className="img-back" onClick={this.handleClick}>
                    <p>
                      {this.props.data.desc}
                    </p>
                </div>
            </figcaption>
        </figure>
     )
  }
}

export default ImgFigure;
