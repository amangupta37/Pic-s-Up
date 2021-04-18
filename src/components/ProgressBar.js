import React from 'react'
import useStorage from '../hooks/useStorage'
function ProgressBar({ data , setData }) {

    const {url , progress} =useStorage(data);

    console.log(progress, url);

    return (
        <div className="progress-bar">
          <h1>progress is now </h1>
        </div>
    )
}

export default ProgressBar
