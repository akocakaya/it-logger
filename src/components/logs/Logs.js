import React, { useEffect, useState } from 'react';
import axios                          from 'axios';

const Logs = props => {
    const [ logs, setLogs ]       = useState( [] );
    const [ loading, setLoading ] = useState( false );

    useEffect( () => {
        getLogs();
        //es-lint disable next-line
    }, [] );

    const getLogs = async () => {
        setLoading( true );

        let res = await axios.get( `/logs` );

        setLogs( res.data );
        setLoading( false );
    };

    if (loading) {
        return <h4>Loading....</h4>;
    }

    return (
        <ul className = { 'collection-with-header' }>
            <li className = { 'collection-header' }>
                <h4 className = { 'center' }>System Logs</h4>
            </li>
            {
                !loading && logs.length === 0
                ? ( <p className = { 'center' }>No logs to show</p> )
                : ( logs.map( ( log ) => {
                    return <li key = { 'log' + log.id }>{ log.message }</li>;
                } ) )
            }
        </ul>
    );
};

Logs.propTypes = {};

export default Logs;