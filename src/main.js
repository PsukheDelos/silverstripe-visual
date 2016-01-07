import React from 'react';
import VisualManagerComponent from './visual-manager-component';

var wrapper = document.getElementById('visual-manager-component-wrapper');

var props = {
    source: 'https://packagist.org/packages/'+wrapper.getAttribute('vendor')+'/'+wrapper.getAttribute('package')+'.json'
};

React.render(
    <VisualManagerComponent {...props} />,
    wrapper
);
