import axios                                  from 'axios';
import { GET_TECHS, LOGS_ERROR, SET_LOADING } from './types';

export const getTechs = () => async ( dispatch ) => {
    try {
        setLoading();

        const res = await axios.get( '/techs' );

        dispatch( {
            type    : GET_TECHS,
            payload : res.data,
        } );
    } catch (e) {
        dispatch( {
            type    : LOGS_ERROR,
            payload : e.response.data,
        } );
    }
};

export const setLoading = () => {
    return {
        type : SET_LOADING
    }
};