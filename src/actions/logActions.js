import axios                                                                                   from 'axios';
import {
    GET_LOGS,
    SET_LOADING,
    LOGS_ERROR,
    ADD_LOGS,
    DELETE_LOG,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_LOG,
    SEARCH_LOGS
} from './types';

export const getLogs = () => async ( dispatch ) => {
    try {
        setLoading();

        const res = await axios.get( '/logs' );

        dispatch( {
            type    : GET_LOGS,
            payload : res.data,
        } );
    } catch (e) {
        dispatch( {
            type    : LOGS_ERROR,
            payload : e.response.data,
        } );
    }
};

export const addLog = ( log ) => async ( dispatch ) => {
    try {
        setLoading();

        const res = await axios.post( '/logs', log );

        dispatch( {
            type    : ADD_LOGS,
            payload : res.data,
        } );
    } catch (e) {
        dispatch( {
            type    : LOGS_ERROR,
            payload : e.response.data,
        } );
    }
};

export const deleteLog = ( id ) => async ( dispatch ) => {
    try {
        setLoading();

        await axios.delete( '/logs/' + id );

        dispatch( {
            type    : DELETE_LOG,
            payload : id,
        } );

    } catch (e) {
        dispatch( {
            type    : LOGS_ERROR,
            payload : e.response.data,
        } );
    }
};

export const updateLog = ( log ) => async ( dispatch ) => {
    try {
        setLoading();

        const res = await axios.put( '/logs/' + log.id, log );

        dispatch( {
            type    : UPDATE_LOG,
            payload : res.data,
        } );

    } catch (e) {
        dispatch( {
            type    : LOGS_ERROR,
            payload : e.response.data,
        } );
    }
};

export const searchLog = ( text ) => async ( dispatch ) => {
    try {
        setLoading();

        const res = await axios.get( '/logs?q=' + text );

        dispatch( {
            type    : SEARCH_LOGS,
            payload : res.data,
        } );

    } catch (e) {
        dispatch( {
            type    : LOGS_ERROR,
            payload : e.response.data,
        } );
    }
};

export const setCurrent = ( log ) => {
    return {
        type    : SET_CURRENT,
        payload : log,
    };
};

export const clearCurrent = () => {
    return {
        type : CLEAR_CURRENT,
    };
};

export const setLoading = () => {
    return {
        type : SET_LOADING,
    };
};