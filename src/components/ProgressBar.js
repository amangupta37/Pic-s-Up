import React , {useEffect} from 'react'
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';

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
      // style={{width : progress + '%'}}
        <motion.div className="progress-bar" 
          initial= {{width:0}}
          animate= {{width: progress + '%'}}    >
        </motion.div>
    )
}

export default ProgressBar
