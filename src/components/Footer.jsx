import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
   <div className='container mt-5 w-100' style={{height:'300px'}}>
    <div className="row">
      <div className='col-lg-5'>
   <h5> <i class="fa-solid fa-music" ></i>&nbsp;
    Media Player</h5>
    <p className='mt-5' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Suscipit minus,  ad doloremque iusto voluptate cupiditate temporibus reprehenderit perspiciatis exercitationem,  quod omnis  enim itaque sequi ipsum, harum velit. Sunt, molestiae enim.</p> 
    <p>code is liscenced by luminar </p> 
    <p>currently v5.3.2</p>
    </div>
   
    <div  className='col-lg-2 text-center'>
      <h4 className='mb-5'>Links</h4>
      <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing</Link></div>
      <div><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link></div>
      <div><Link to={'/history'} style={{textDecoration:'none',color:'white'}}>Watch History</Link></div>
    </div>
    <div className='col-lg-2'>
      <h4 className='mb-5'>Guides</h4>
      <div><Link to={'/'} style={{textDecoration:'none',color:'white'}}>React</Link></div>
      <div><Link to={'/home'} style={{textDecoration:'none',color:'white'}}>React bootstrap</Link></div>
     <div>
      <a href="" style={{textDecoration:'none',color:'white'}}>React Router</a>
     </div>
    </div>
    <div className='col-lg-3'>
      <h4>Contact Us</h4>
      <div className="d-flex justify-content-between mt-5">
      <input type="text" className='form-control'  placeholder='enter your email'/>
      <button className='btn btn-info ms-3'><i class="fa-solid fa-arrow-right"></i></button>
      </div>
      <div className="d-flex justify-content-between mt-5">
      <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-brands fa-facebook"></i></a>
      <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-brands fa-twitter"></i></a>
      <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-brands fa-instagram"></i></a>
      <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-brands fa-linkedin"></i></a>
      <a href="" style={{fontSize:'20px',color:'white'}}> <i class="fa-solid fa-headphones"></i></a>
      <a href="" style={{fontSize:'20px',color:'white'}}><i class="fa-solid fa-phone"></i></a>
      </div>
    </div>
   </div>
   <p className='text-center mt-4'>Copyright © july 2024 Batch,Media player ,Built with React</p>
   </div>
  )
}

export default Footer