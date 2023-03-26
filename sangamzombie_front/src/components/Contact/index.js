import { useState, useEffect, useRef} from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser';
import emailJSKey from '../../security/email.json';
import './index.scss'
// import { MapContainer, TileLayer} from 'react-leaflet';
const Contact = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const SERVICE_ID = emailJSKey.serviceID;
    const TEMPLATE_ID = emailJSKey.templateID; 
    const PUBLIC_KEY = emailJSKey.publicKey;
    
    const form = useRef();
    const [message, setMessage] = useState('')

    const handleInputMessageChange = (e) => {
        setMessage(e.target.value);
    }
    const sendEmail = (e) => {
        e.preventDefault();
        if(!message) {alert('please ensure you write the message'); return}
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
          .then((result) => {
              console.log(result.text);
              alert('Message successfuly sent');
              window.location.reload(false);
          }, (error) => {
              console.log(error.text);
              alert('Failed to send the Message please try again');
              alert('templ : ' + TEMPLATE_ID);
              
          });
    }
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    return (
        <>
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n','t','a','c','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I was freelancer when I was in Korea 
            
            

                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li className='half'>
                                <input type='text' name='subject' placeholder='Subject' required/>
                            </li>
                            <li id='message'>
                                <textarea placeholder='Message' name='message' value={message} onChange={handleInputMessageChange}/>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'></input>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <div className='info-map'>
                Seheon Kim,
                <br/>
                <span>seheon.emma@gmail.com</span>
            </div>
            {/* <div className='map-wrap'>
                <MapContainer center={[44.96366, 19.61045]} zoom={13}>
                    <TileLayer></TileLayer>
                </MapContainer>
                                 
            </div> */}
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact