import React, { useEffect, useState } from 'react';
import axios                          from 'axios';
import {connect}                      from 'react-redux';
import {getTechs}                     from '../../actions/techActions';
import TechItem                       from './TechItem';

const TechListModal = ({ getTechs, tech: {techs, loading} }) => {

    useEffect( () => {
        getTechs();
        //es-lint disable next-line
    }, [] );

    return (
        <div
            id = { 'tech-list-modal' }
            className = { 'modal' }
        >
            <div className = { 'modal-content' }>
                <h4>Technician List</h4>
                <ul className = { 'collection' }>
                    {
                        !loading && techs != null && techs.map( ( tech ) =>
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

const mapStateToProps = (state) => ({
    tech : state.tech
});
export default connect(mapStateToProps, {getTechs})(TechListModal);