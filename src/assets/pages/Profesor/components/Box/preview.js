import React, { Component } from "react";

export const App = ()=> {


    return (
        
        <div className='container'>
            <form className='form-group'>
                <input type="file" className='form-group'
                 required
                />
                <br></br>
                <button type="submit" className='btn btn-submit btn-lg'>
                    UPLOAD
                </button>
            </form>
            <br></br>
            <h4>View PDF</h4>
            <div className='pdf-container'>

            </div>
 

        </div>
    )
}