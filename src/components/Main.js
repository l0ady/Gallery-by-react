require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

var imageDatas = require('../data/imageDatas.json');

var ImgFigure = React.createClass({
  render:function(){
    return (
        <figure className="img-figure">
          <img src={this.props.data.url} alt={this.props.data.title}/>
          <figcaption>
            <h2 className="img-title">{this.props.data.title}</h2>
          </figcaption>
        </figure>
      );
  }
});

imageDatas = (function(imageList){
  for (var i = imageList.length - 1; i >= 0; i--) {
    var singleImage = imageList[i];
    singleImage.url = require('../images/' + singleImage.fileName);
    imageList[i] = singleImage;
  }
  return imageList;
})(imageDatas)

class AppComponent extends React.Component {
  render() {
    var controllerUnits = [], imgFigures = [];
    let i = 0;
    imageDatas.forEach(function(value){
      imgFigures.push(<ImgFigure key={i++} data={value}/>);
    })

    return (
      <section className="stage">
        <section className="img-sec">{imgFigures}</section>
        <nav className="controller-nav">{controllerUnits}</nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
