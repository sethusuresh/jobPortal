import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import JobStatusInfo from './JobStatusInfo';
import JobPositions from './JobPositions';
import registerServiceWorker from './registerServiceWorker';

var root = (
    <div>
        <JobStatusInfo />
        <JobPositions />
    |</div>
);

ReactDOM.render(root, document.getElementById('root'));
registerServiceWorker();
