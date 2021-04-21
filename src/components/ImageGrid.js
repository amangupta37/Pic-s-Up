import React from 'react'
import useFirestore from '../hooks/useFirestore';
import {motion} from 'framer-motion';
function ImageGrid({setImage}) {

    const {docs} = useFirestore('images');
    console.log(docs);
    return (
        <div className="photo-grid">
          {docs && docs.map(doc => (
              <motion.div className="img-wrap" key={doc.id} 
                layout
                whileHover={{opacity:1}}
                 onClick={() =>{

                    setImage(doc.imageUrl)

                 }}  >
                    <motion.img src={doc.imageUrl} alt="user-img" 

                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        transition={{delay:1}}
                    
                    />
               </motion.div>
          )) }
        </div>
    )
}

export default ImageGrid
