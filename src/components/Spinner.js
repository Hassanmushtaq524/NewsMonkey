import React from 'react'
import loading from './loading.gif'
const Spinner = (props) => {
    return (
        <>
            <div className="text-center">
                <img style={{ width: "50px" }} src={loading} alt="Loading" />
            </div>

        </>
    )
}

export default Spinner;