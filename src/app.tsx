import React, { useEffect } from "react";
import useAxios from "axios-hooks";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "./app.less";

const App = () => {

    return (
        <>
            <div>This is an empty react hooks project with Axios, hot reloading, less, typescript and lint.</div>
        </>
    );
};

export { App };
