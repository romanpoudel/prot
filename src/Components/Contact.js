import React,{useRef} from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import IconButton from '@mui/material/IconButton';
import emailjs from '@emailjs/browser';

function Contact() {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rd08irs', 'template_kvk2y4n',e.target, 'EdwGe7zHSYQMJdTdK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <div id="contact" className="w-screen h-screen p-14 flex flex-col justify-start items-center" style={{backgroundColor:"#072238"}}>
   <div className="text-center font-kdam text-white text-4xl  font-bold">CONTACTS</div>
   <div className="flex flex-col justify-between w-1/3">
   <div className='h-1/2'>

   <form  ref={form} onSubmit={sendEmail}>
   <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label text-white">Name</label>
    <input type="text" name="name" className="form-control"  />
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-white">Email</label>
    <input type="email" className="form-control" name="email" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label text-white">Message</label>
    <textarea className="form-control" name="message" aria-label="With textarea"></textarea>
  </div>
  
  <button type="submit" className="btn btn-primary"> Submit</button>
</form>
</div>
   <div className="text-white pt-48 flex items-center justify-around">
    <IconButton href="https://www.facebook.com/poudel.roman.1">
    <FacebookIcon style={{color:"white"}} fontSize="large" />
    </IconButton>
    <IconButton href="https://www.instagram.com/poudel.roman/">
    <InstagramIcon style={{color:"white"}} fontSize="large" />
    </IconButton>
    <IconButton href="https://github.com/romanpoudel">
    <GitHubIcon style={{color:"white"}} fontSize="large"/>
    </IconButton>
    <IconButton href="https://www.linkedin.com/in/roman-poudel-5a415118a/">
    <LinkedInIcon style={{color:"white"}} fontSize="large"/>
    </IconButton>
    <IconButton href="tel:9861948036">
    <PhoneIcon style={{color:"white"}} fontSize="large"/>
    </IconButton>
   </div>
   </div>
   <footer>
   <small className="text-white">&copy; Copyright 2022,romanpoudel</small>
    </footer>
  </div>
  )
}

export default Contact