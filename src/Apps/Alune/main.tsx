import React from 'react';
import ReactDOM from 'react-dom/client';
import Alune from './Alune';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Alune />
    </React.StrictMode>
);