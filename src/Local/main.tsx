import React from 'react';
import ReactDOM from 'react-dom/client';
import Local from './Local';

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Local />
    </React.StrictMode>
);
