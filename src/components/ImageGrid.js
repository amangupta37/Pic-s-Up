import React from 'react'
import useFirestore from '../hooks/useFirestore';
function ImageGrid({setImage}) {

    const {docs} = useFirestore('images');
    console.log(docs);
    return (
        <div className="photo-grid">
          {docs && docs.map(doc => (
              <div className="img-wrap" key={doc.id} 
                 onClick={() =>{

                    setImage(doc.imageUrl)

                 }}  >
                    <img src={doc.imageUrl} alt="user-img" />
              </div>
          )) }
        </div>
    )
}

export default ImageGrid
