import React from 'react'
import {motion} from 'framer-motion';
import { Opacity } from '@material-ui/icons';

function Model({image , setImage}) {

    const handleCancel  = (e) =>{

        if(e.target.classList.contains('backdrop'))
        {
            setImage(null)
        }
    }



    return (
        <motion.div className="backdrop" onClick={handleCancel}
        initial={{opacity:0}}
        animate={{opacity:1}}>
            <motion.img src={image} alt="high-quality pic"
            initial={{y:"-100vh"}}
            animate={{y:0}} />
        </motion.div>
    )
}

export default Model
