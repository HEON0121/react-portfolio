import { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

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
                    I was freelancer when I was in Korea 
                    I was freelancer when I was in Korea
                    I was freelancer when I was in Korea 
            

                </p>
                <div className='contact-form'>
                    <form>
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
                            <li>
                                <textarea placeholder='Message' name='message'/>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND'></input>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Contact