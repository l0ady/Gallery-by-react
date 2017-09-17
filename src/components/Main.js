require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

let yeomanImage = require('../images/yeoman.png');

var imageDatas = require('../data/imageDatas.json');

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
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
