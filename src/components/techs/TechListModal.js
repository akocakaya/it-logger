import React, { useEffect, useState } from 'react';
import axios                          from 'axios';
import TechItem                       from './TechItem';

const TechListModal = () => {
    const [ techs, setTechs ]     = useState( [] );
    const [ loading, setLoading ] = useState( false );

    useEffect( () => {
        getTechs();
        //es-lint disable next-line
    }, [] );

    const getTechs = async () => {
        setLoading( true );

        let res = await axios.get( `/techs` );

        setTechs( res.data );
        setLoading( false );
    };

    return (
        <div
            id = { 'tech-list-modal' }
            className = { 'modal' }
        >
            <div className = { 'modal-content' }>
                <h4>Technician List</h4>
                <ul className = { 'collection' }>
                    {
                        !loading && techs.map( ( tech ) =>
                            <TechItem
                                key = { 'log' + tech.id }
                                tech = { tech }
                            />,
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

TechListModal.propTypes = {};

export default TechListModal;