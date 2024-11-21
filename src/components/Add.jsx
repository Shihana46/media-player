import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from '../service/allAPI';


function Add({setAddVideoResponse}) {
  const [videoDetails,setVideoDetails]=useState({caption:"",imageUrl:"",youTubeUrl:""})
  console.log(videoDetails);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[isInvalidUrl,setIsInvalidUrl]=useState(false)

  // use to get the url directly from theutube
  const getEmbedUrl=(link)=>{
    // to check whether it is included
    if(link.includes("v=")){

      // 
      let videoid=link.split("v=")[1].slice(0,11)
      setVideoDetails({...videoDetails,youTubeUrl:`https://www.youtube.com/embed/${videoid}`})
      console.log(videoid);
      
setIsInvalidUrl(false)

    }
    else{
      setVideoDetails({...videoDetails,youTubeUrl:""})

      setIsInvalidUrl(true)
    }
  }
// handleUpload  used to upload data when the upload btn is clicked
const handleUpload=async()=>{

  // desrtucture : used to select the stored data for api call

  const{caption,imageUrl,youTubeUrl}=videoDetails
  if(caption && imageUrl && youTubeUrl){

    // console.log("do api call");

    try{
      const result=await addVideo(videoDetails)
      console.log(result);
      if(result.status>=200 && result.status<300){
        setAddVideoResponse(result.data)
        setVideoDetails({caption:"",imageUrl:"",youTubeUrl:""})
        toast.success(`${result.data.caption} added to your collection`)
        handleClose()
      }
      

    }
    catch(err){
      console.log(err);
      
    }
    
  }
  else{
    // alert("please enter the field")
    toast.warning("enter the field completely")
  }
}


  return (
    <>
    <div className="d-flex align-items-center">
      <h5 className='text-warning'>Upload New Video</h5>
      <button onClick={handleShow} className='btn btn-warning fs-5 rounded-circle ms-3 fw-bolder'>+</button>
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>please fill the following details..</p>

         <div className='border border-3 border-info rounded p-3'>

          {/* {/caption/} */}
      <FloatingLabel controlId="floatingInputcaption" label="Video Caption" className="mb-3">
       <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} type="text" placeholder="Enter video caption" />
      </FloatingLabel>

      {/* {// image url/} */}
      <FloatingLabel controlId="floatingInputimage" label="Image url" className="mb-3">
       <Form.Control onChange={e=>setVideoDetails({...videoDetails,imageUrl:e.target.value})} type="text" placeholder="Enter video caption" />
      </FloatingLabel>

      {/*utube url */}
      <FloatingLabel controlId="floatingInputurl" label="Youtube url" className="mb-3">
       <Form.Control onChange={e=>getEmbedUrl(e.target.value)} type="text" placeholder="Enter video caption" />
      </FloatingLabel>
    
      {
        isInvalidUrl &&

       <div className='text-danger fw-bold'>Invalid Url</div>

      }


         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="info" onClick={handleUpload}>Upload</Button>
        </Modal.Footer>
      </Modal>
    
   

    </>
  )
}

export default Add

