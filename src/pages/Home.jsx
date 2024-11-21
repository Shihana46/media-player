import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/Views'
import Category from '../components/Category'

function Home() {

  const [addVideoResponse,setAddVideoResponse]=useState("")
  const [deleteVideoCategoryResponce,setDeleteCategoryResponce]=useState("")
  const [deleteVideoViewResponce,setDeleteVideoViewResponce]=useState("")

  return (
    <>
    <div className='container m-5 d-flex justify-content-between'>
      <Add setAddVideoResponse ={setAddVideoResponse} />
      <Link to={"/history"} className='text-info fw-bold fs-5' style={{textDecoration:"none"}}>Watch History</Link>
    </div>

     <div className='row m-5'>
      <div className='col-lg-6'>
        <h3 className='text-warning'>All Videos</h3>
        < View addVideoResponse={addVideoResponse} deleteVideoCategoryResponce={deleteVideoCategoryResponce} setDeleteVideoViewResponce={setDeleteVideoViewResponce}  />
      </div>

      <div className='col-lg-6'>
        < Category setDeleteCategoryResponce={setDeleteCategoryResponce} deleteVideoViewResponce={deleteVideoViewResponce}/>
      </div>
    </div> 

    </>
  )
}

export default Home