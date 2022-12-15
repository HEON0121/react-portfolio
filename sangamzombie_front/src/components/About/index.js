import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    return (
    <div className='container about-page'>
        <div className='text-zone'>
            <h1>
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}


                />
            </h1>
            <p>
            I'm a very ambitious FullStack developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
            </p>
            <p align="LEFT">
                I'm quiet confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
            </p>
            <p>
                If I need to define myself in one sentence that would be a family
                person, father of a beautiful daughter, a sports fanatic,
                photography enthusiast, and tech-obsessed!!!
            </p>
            <p>I'm prepared to be hard worker</p>

        </div>
    </div>
    )
}

export default About