import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import './scripts/bootstrap/css/bootstrap.min.css';
import './scripts/bootstrap/css/bootstrap-responsive.min.css';
import './scripts/icons/general/stylesheets/general_foundicons.css';
import './scripts/icons/social/stylesheets/social_foundicons.css';
import './scripts/fontawesome/css/font-awesome.min.css';
import './scripts/carousel/style.css';
import './scripts/camera/css/camera.css';
import './styles/custom.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

