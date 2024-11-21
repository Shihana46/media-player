import React, { useEffect, useState } from 'react'
import VideoCard from './Videocards'
import { Col, Row } from 'react-bootstrap'
import { addVideo,  getAllVideos, getSingleCategory, updateCategory } from '../service/allAPI'



function View({ addVideoResponse, deleteVideoCategoryResponce,setDeleteVideoViewResponce }) {

  const [allVideos, setAllVideos] = useState([])
  const [deleteRespose, setDeleteResponse] = useState("")

  // inside useeffect we call the function get video
  useEffect(() => {

    getVideo()


  }, [addVideoResponse, deleteRespose, deleteVideoCategoryResponce])

  console.log(allVideos);


  // we create a function outside the useffect bcs we cant use async await directly inside use effect
  const getVideo = async () => {


    try {
      const result = await getAllVideos()
      // here the all datas are stored inside the data
      console.log(result.data);
      setAllVideos(result.data)

    }
    catch (err) {
      console.log(err);

    }

  }
  const dragOverView = (e) => {
    e.preventDefault()
  }
  const dropCategoryVideo =async (e) => {
    const { videoDetails, categoryId } = JSON.parse(e.dataTransfer.getData("dataShare"))
    console.log(videoDetails, categoryId);
    try{
      const{data}=await getSingleCategory(categoryId)
      console.log(data);
      
      // here remove the video from the category by storing the the other videos

      const updatedCategoryVideoList=data.allVideos.filter(item=>item.id!=videoDetails.id)
      console.log(updatedCategoryVideoList);

      const {id,categoryName}=data
      const categoryResult=await updateCategory(id,{id,categoryName,allVideos:updatedCategoryVideoList})
      setDeleteVideoViewResponce(categoryResult.data)
      await addVideo(videoDetails)

      getVideo()






    }
    catch(err){
      console.log(err);
      
    }
  }


    return (
      <>



        <Row droppable={true} onDrop={e=>dropCategoryVideo(e)} onDragOver={(e)=>dragOverView(e)} className="border border-3 p-3">
          {
            allVideos.length > 0 ?
              // optional chaining operator(?)
              allVideos?.map(video => (

                <Col key={video?.id} lg={4} md={6} sm={12}>

                  < VideoCard displayData={video} setDeleteResponse={setDeleteResponse} />

                </Col>
              ))
              :
              <div className='text-danger fs-3 fw-bold'> Nothing to Display</div>
          }

        </Row>

        {/* // if condition is no */}







      </>
    )
  
}

export default View