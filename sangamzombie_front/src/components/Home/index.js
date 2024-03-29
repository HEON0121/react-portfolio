import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png'
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import './index.css';
import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['e','h','e','o','n',',']
    const jobArray = ['a','','w','e','b',' ', 'd','e','v','e','l', 'o','p','e','r','.']
    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 4000)
      }, [])
    

    return(
      <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className={`${letterClass} _1`}>H</span>
                    <span className={`${letterClass} _2`}>i</span>
                    <span className={`${letterClass} _3`}>,</span> 
                    <br/>
                    <span className={`${letterClass} _4`}>I</span>
                    <span className={`${letterClass} _5`}>'</span>
                    <span className={`${letterClass} _6`}>m</span>
                <img src={LogoTitle} alt='developer'/>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={7}/>
                
                <br/>
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={12}/>
                </h1>
                <h2>FullStack Developer / Spring Boot / MyBatis / JPA / React</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo />            
        </div>
        <Loader type='pacman'/>
      </>
        
    );
}

export default Home