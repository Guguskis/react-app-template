import React, { useEffect } from "react";
import useAxios from "axios-hooks";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./app.less";

const App = () => {

    return (
        <>
            <div>This is react app template with hot reloading, less and typescript</div>
        </>
    );
};

export { App };
