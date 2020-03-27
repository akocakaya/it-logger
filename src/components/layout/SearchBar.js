import React, { useRef, useState } from 'react';
import { connect }                 from 'react-redux';
import { searchLog} from '../../actions/logActions';

const SearchBar = ({ searchLog }) => {
    let text = useRef('');

    const onChange = () => {
        searchLog(text.current.value);
    };

    const onClose = () => {
        text.current.value = '';
        onChange();
    };

    return (
        <nav
            style = { { marginBottom : '30px' } }
            className = { 'blue' }
        >
            <div className = 'nav-wrapper'>
                <form>
                    <div className = 'input-field'>
                        <input
                            id = 'search'
                            type = 'search'
                            placeholder='Search Logs...'
                            ref={text}
                            onChange={onChange}
                        />
                        <label
                            className = 'label-icon'
                            htmlFor = 'search'
                        >
                            <i className = 'material-icons'>search</i>
                        </label>
                        <i className = 'material-icons' onClick={onClose}>close</i>
                    </div>
                </form>
            </div>
        </nav>
    );
};

export default connect(null, {searchLog})(SearchBar);