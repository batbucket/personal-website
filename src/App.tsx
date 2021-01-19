import githubIcon from './icons/github.png'
import resumeIcon from './icons/resume.png'
import resume from './AndyXueResume.pdf'

import Typewriter from 'typewriter-effect'
import shuffle from 'shuffle-array'

const DESCRIPTORS = [
    'a software engineer in the tax department',
    'a game developer',
    'a georgia tech grad',
    'a legacy software retirer',
    'a two-time vgdev project lead',
    'a code janitor',
    'born and raised in chicago',
    'i write tests first (at work)',
    'i pair-program (at work)',
    'a unity developer',
    'a react developer',
    'my favorite language is c#',
    'my favorite language is typescript',
    'a socket.io enthusiast',
    "i'm trying to learn python",
    'a personal finance fanatic',
    'a passive investor',
    'an active investor',
    'this website was made with tailwind css',
    "a fantasy writer (don't ask)",
]
shuffle(DESCRIPTORS)

function App() {
    return (
        <div className='flex h-screen'>
            <div className='m-auto'>
                <h1 className='text-gray-100 text-5xl text-center m-1'>
                    hey, i'm andy
                </h1>
                <div className='text-center m-1'>
                    <Typewriter
                        onInit={() => {}}
                        options={{
                            cursor: '_',
                            strings: DESCRIPTORS,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </div>
                <div className='m-5'>
                    <div className='flex justify-center'>
                        <a
                            href='https://github.com/batbucket'
                            rel='noreferrer'
                            target='_blank'
                        >
                            <img
                                className='mx-auto mr-4 inline'
                                width={64}
                                height={64}
                                src={githubIcon}
                                alt='github logo'
                            />
                        </a>
                        <a href={resume} rel='noreferrer' target='_blank'>
                            <img
                                className='mx-auto ml-4 inline'
                                width={64}
                                height={64}
                                src={resumeIcon}
                                alt='resume icon'
                            />
                        </a>
                    </div>
                </div>
                {/* <h2>skills</h2>
            <div className='m-8'>
                <h2>experiences</h2>
                <h3>home depot</h3>
            </div>
            <h2>projects</h2> */}
            </div>
        </div>
    )
}

export default App
