import React from 'react';

const Create = (props) => (
    <div className="container create">
        <div className="card">
            <form onSubmit={props.onSubmit}>
                <div className="input-field purple-input">
                    <input className="searchbox" type="text" name="singletask" autoComplete="off" />
                </div>
                <div className="center-text">
                    <button type="submit" className="btn btn-rounded btn-outlined purple-btn">Search</button>
                </div>
            </form>
        </div>
    </div>
)

export default Create