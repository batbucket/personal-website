import Typewriter from 'typewriter-effect'
import shuffle from 'shuffle-array'

const DESCRIPTORS = [
    'a software engineer',
    'a georgia tech grad',
    'a legacy system retirer',
    'a code janitor',
    'i like to document things extremely thoroughly',
    'a checklist maker',
    'a context sharer',
    'an engineer enabler',
    'a leader on many projects',
    'my favorite language is ruby on rails',
    'my favorite language is typescript',
    'my favorite language is javascript (during coding interviews)',
    'next.js is pretty cool',
    'i used to develop video games',
    'this website was made with tailwind css',
    'the previous version of this website had my fitbit stats on it'
]
shuffle(DESCRIPTORS)

function App() {
    return (
        <div className="flex h-screen">
            <div className="m-auto">
                <h1 className="text-gray-100 text-5xl text-center m-1">hey i'm andy</h1>
                <div className="text-center m-1">
                    <Typewriter
                        onInit={() => {}}
                        options={{
                            cursor: '_',
                            strings: DESCRIPTORS,
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
                <div className="m-5">
                    <div className="flex justify-center">
                        <a
                            className="text-blue-400 hover:text-blue-600 visited:text-purple-400 m-5"
                            href="https://github.com/batbucket"
                            rel="noreferrer"
                            target="_blank">
                            github
                        </a>
                        <a
                            className="text-blue-400 hover:text-blue-600 visited:text-purple-400 m-5"
                            href={process.env.PUBLIC_URL + '/AndyXueResume.pdf'}
                            rel="noreferrer"
                            target="_blank">
                            resume
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
