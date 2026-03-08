import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>
);
