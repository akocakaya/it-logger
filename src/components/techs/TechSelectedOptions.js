import React, { useEffect } from 'react';
import { connect }          from 'react-redux';
import { getTechs }         from '../../actions/techActions';

const TechSelectedOptions = ( { getTechs, tech, tech : { techs, loading } } ) => {
    useEffect( () => {
        getTechs();
        // eslint-disable-next-line
    }, [tech] );

    return (
        !loading && techs !== null && techs.map( tech => (
            <option key={tech.id} value={tech.firstName + ' ' + tech.lastName}>
                { tech.firstName } { tech.lastName }
            </option>
        ) )
    );
};

TechSelectedOptions.propTypes = {};

const mapStateToProps = ( state ) => ( {
    tech : state.tech,
} );

export default connect( mapStateToProps, { getTechs } )( TechSelectedOptions );