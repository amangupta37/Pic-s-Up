import { AllInclusiveRounded, MergeTypeSharp } from '@material-ui/icons';
import {React , useState } from 'react';

function UploadForm() {

    const [data,setData] = useState(null);

     const types= ['image/png','image.jpg'];

     const [error,setError] = useState(null);

    const changeHandler = (e) => {

       let selected = e.target.files[0];

       console.log(selected);

       if(selected && types.includes(selected.type))
       {
           setData(selected);
           console.log("sus")
           setError(null);
           
       }
       else{
           setData(null);
           setError('Please select png or jpg formate')
        //    setData(null);

       }

    }


    return (
        <div className="form">
            
         
                 <input type="file" onChange={changeHandler}/>
                 <div className="output">
                 {error && <div className="error">{ error }</div>}
                 {data && <div className="rror">{ data.name }</div>}
                 </div>
   
              
            
        </div>
    )
}

export default UploadForm
