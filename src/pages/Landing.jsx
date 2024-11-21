import React from 'react'
import { Link } from 'react-router-dom'
import Landingimage from '../assets/landImages.gif'
import settings from '../assets/settings.png'
import notes from '../assets/category.png'
import Watching from '../assets/histry.png'

// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Landing() {
  return (

    <>

    {/* landing section */}
    <div className="row " style={{ padding:'50px'}}>
      <div className="col-6" style={{ marginTop:'100px'}}>
        <h4 className='myheading' style={{fontFamily:'  "Style Script", cursive;'}}>Welcome to <span className='text-warning'>Media Player</span></h4>
        <p style={{color:'white'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error sequi ex dolore! Nam fugit ducimus eaque, atque molestiae saepe quisquam impedit. Doloremque quibusdam illum provident voluptates beatae dicta dolor consequuntur.</p>
        <Link to={'/home'} className='btn btn-info'>Get Started</Link>
      </div>
      <div className="col-6">
        <img src={Landingimage} alt='' style={{height:'400px', width:'400px'}} />
      </div>
    </div>

    {/* feature */}

    <h2 style={{textAlign:'center'}}>Features</h2>

    <div className="container p-5 mt-5 d-flex justify-content-evenly">
      {/* card */}
      <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={settings}/>
      <Card.Body>
        <Card.Title>Managing videos</Card.Title>
        <Card.Text>
          Users can upload, view and remove the video
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={notes} />
      <Card.Body>
        <Card.Title>Categorize Videos </Card.Title>
        <Card.Text>
          Users can categorize the video by drag and drop features
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={Watching} />
      <Card.Body>
        <Card.Title>Managing History</Card.Title>
        <Card.Text>
          Users can manage the watch history of all video
        </Card.Text>
      </Card.Body>
    </Card>
    </div>

    {/* third part */}

    <div className='container p-10 d-flex justify-content-between'>
      <div className="col-6">
<h3 className=' text-warning'>Simple , Fast and powerful</h3>
<div className='d-flex'>
  
  <p> <h6>Play Everything:</h6>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quaerat omnis sequi unde quisquam suscipit atque in, hic soluta voluptates quod exercitationem ex illo! Dolor quasi quaerat ex laudantium iste.</p>
</div>
<div className='d-flex'>
 
  <p>  <h6>Categorize video:</h6> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore nihil soluta recusandae sit ducimus doloribus quis dicta aut dignissimos temporibus rerum quod ipsa sed eum, excepturi, exercitationem explicabo cupiditate voluptate!</p>
</div>
<div>
  
  <p> <h6>Managing History:</h6> Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laudantium veniam quo consectetur, esse dignissimos sit, amet sapiente atque id debitis vero pariatur alias itaque unde quisquam expedita cupiditate sint.</p>
</div>
      </div>
      <div className="col-6 p-10">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/8VtUB-yPDCs?si=j6MfW3yOf8B4GMUh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>



    </>
  )
}

export default Landing