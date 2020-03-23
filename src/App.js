import 'materialize-css/dist/css/materialize.min.css';
import M                    from 'materialize-css/dist/js/materialize.min';
import React, { useEffect } from 'react';
import './App.css';

const App = () => {

    useEffect( () => {
        // init materialize js
        M.AutoInit();
    } );

    return (
        <div className = 'App'>
            Asdfgh
        </div>
    );
};

export default App;
