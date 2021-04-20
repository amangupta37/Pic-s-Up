import React from 'react'

function Model({image}) {
    return (
        <div className="backdrop">
            <img src={image} alt="high-quality pic" />
        </div>
    )
}

export default Model
