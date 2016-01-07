import React from 'react';
import ReactDom from 'react-dom'
import VisualManagerComponent from './visual-manager-component';

var wrapper = document.getElementById('visual-manager-component-wrapper');

var props = {
    source: 'https://api.github.com/repos/'+wrapper.getAttribute('vendor')+'/'+wrapper.getAttribute('repo')
};

ReactDom.render(
    <VisualManagerComponent {...props} />,
    wrapper
);
