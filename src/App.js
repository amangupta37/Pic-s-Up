import React , {useState}from "react";
import './App.css';
import Header from './components/Header';
import UploadForm from "./components/UploadForm";
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';
function App() {

  const [image,setImage]=useState(null);

  return (
    <div className="App">
        <Header />
        <UploadForm / >
        <ImageGrid  setImage={setImage} />
        <Modal  image={image} />
   </div>
  );
}

export default App;
