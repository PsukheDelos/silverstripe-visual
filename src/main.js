import React from 'react';
import ReactDom from 'react-dom'
import VisualManagerComponent from './visual-manager-component';

var wrapper = document.getElementById('visual-manager-component-wrapper');

var props = {
    source: 'https://packagist.org/packages/'+wrapper.getAttribute('vendor')+'/'+wrapper.getAttribute('package')+'.json'
};

ReactDom.render(
    <VisualManagerComponent {...props} />,
    wrapper
);
