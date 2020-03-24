import axios                                 from 'axios';
import { GET_LOGS, SET_LOADING, LOGS_ERROR } from './types';

export const getLogs = () => async (dispatch) => {
    try {
        setLoading();

        const res = await axios.get( '/logs' );

        dispatch( {
            type    : GET_LOGS,
            payload : res.data,
        } );
    } catch (e) {
        dispatch( {
            type : LOGS_ERROR,
            payload : e.response.data
        } );
    }
};

export const setLoading = () => {
    return {
        type : SET_LOADING,
    };
};