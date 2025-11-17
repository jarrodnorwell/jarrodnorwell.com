import React from "react";
import ReactDOM from "react-dom/client";
import Folium from "./Folium";

import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Folium />
    </React.StrictMode>
);