import React , {useEffect} from 'react'
import useStorage from '../hooks/useStorage'
const ProgressBar = ({ data , setData }) => {

    const {url , progress} = useStorage(data);

    

    useEffect(() => {
      
      if(url)
      {
        setData(null)
      }


    }, [url , setData])

    console.log(progress,url);

    return (
        <div className="progress-bar" style={{width : progress + '%'}}>
         
        </div>
    )
}

export default ProgressBar
