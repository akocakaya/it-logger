import axios                                                         from 'axios';
import { GET_TECHS, LOGS_ERROR, SET_LOADING, ADD_TECH, DELETE_TECH } from './types';

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

export const addTechs = ( tech ) => async ( dispatch ) => {
    try {
        setLoading();

        const res = await axios.post( '/techs', tech );

        dispatch( {
            type    : ADD_TECH,
            payload : res.data,
        } );
    } catch (e) {
        dispatch( {
            type    : LOGS_ERROR,
            payload : e.response.data,
        } );
    }
};

export const deleteTech = ( id ) => async ( dispatch ) => {
    try {
        setLoading();

        const res = await axios.delete( '/techs/' + id);

        dispatch( {
            type    : DELETE_TECH,
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
        type : SET_LOADING,
    };
};