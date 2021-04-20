import {useState, useEffect} from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';

/* 

 useStorage() Function is for handlig file upload and returning some useful value about 
 that upload like :-

1. upload Progress
2. any errors 
3. image url

*/

const useStorage = (data) => {

    // states for storing data 

    // 1. state responsible for storing progress of file which we upload  
    const [progress,setProgress] = useState(0);
    //2. state responsible for storing any errors while uploading
    const [error,setError] = useState(null);
    //3. state responsible for storing image url comming back from server
    const [url,setUrl] = useState(null);


    useEffect(() => {
        
        // 1. get a reference(path)  where a file should be save

        const storageRef = projectStorage.ref(data.name); //path at which file will be uploaded
         
        const collectionRef = projectFirestore.collection('images');
            //put() method will upload the file in the above reference (path)
            storageRef.put(data).on('state_changed' , 
        
                        //1 . function for tracking and giving  % of data uploaded on db
                        (snap) =>{
                               let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;

                               setProgress(percentage);
                        } ,

                         // 2. function for returning if any errro occured while uploading file (like image other than png or jpg selected)
                        (err) =>{
                                setError(err);
                        } ,

                        // 3. this fun will trigger when file is completely uploaded 
                        // this fun will return the uploded image url for displaying the stored image on web page
                        async () =>{
                            const url = await storageRef.getDownloadURL();
                            const createdUrl = timestamp();
                            collectionRef.add({
                                imageUrl :url,
                                urlcreated : createdUrl
                            })
                            setUrl(url);
                        }

            )


       
    }, [data])


    return {progress ,error , url } 


}

export default useStorage;