import React, { useState } from 'react';
import M                   from 'materialize-css/dist/js/materialize.min.js';
import {connect}           from 'react-redux';
import {addTechs}          from '../../actions/techActions';

const AddTechModal = ({addTechs}) => {
    const [ firstName, setFirstName ] = useState( '' );
    const [ lastName, setLastName ] = useState( '' );

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast( { html : 'Please fill fields' } );
        } else {

            addTechs({
                firstName,
                lastName
            });

            M.toast( { html : `${firstName} ${lastName} was added as a tech` } );

            // clear fields
            setFirstName('');
            setLastName('');
        }
    };

    return (
        <div
            id = { 'add-tech-modal' }
            className = { 'modal' }
        >
            <div className = { 'modal-content' }>
                <h4>New Technician</h4>
                <div className = { 'row' }>
                    <div className = { 'input-field' }>
                        <input
                            type = { 'text' }
                            name = { 'firstName' }
                            value = { firstName }
                            onChange = { e => setFirstName( e.target.value ) }
                        />
                        <label
                            htmlFor = { 'firstName' }
                            className = { 'active' }
                        >
                            First Name
                        </label>
                    </div>
                </div>
                <div className = { 'row' }>
                    <div className = { 'input-field' }>
                        <input
                            type = { 'text' }
                            name = { 'lastName' }
                            value = { lastName }
                            onChange = { e => setLastName( e.target.value ) }
                        />
                        <label
                            htmlFor = { 'lastName' }
                            className = { 'active' }
                        >
                            Last Name
                        </label>
                    </div>
                </div>
            </div>
            <div className = { 'modal-footer' } style={{ backgroundColor: 'unset'}}>
                <a
                    href = { '#!' }
                    onClick = { onSubmit }
                    className = { 'modal-close waves-effect blue waves-light btn' }
                    style={{ marginRight: '15px'}}
                >
                    Enter
                </a>
            </div>
        </div>
    );
};

AddTechModal.propTypes = {};

export default connect(null, {addTechs})(AddTechModal);
