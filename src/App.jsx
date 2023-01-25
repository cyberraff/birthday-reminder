import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import data from './data'

function App() {
    const [count, setCount] = useState(data)

    return (
        <main className='bg-rose-400 flex justify-center content-center w-screen h-screen '>
            <div className='App bg-white text-black w-[19rem] h-[30rem] p-8 flex m-auto flex-col shadow-2xl rounded-lg'>
                <h3 className='pb-4'>{count.length} Birthdays Today</h3>
                {count.map((person) => {
                    const { id, name, image, age } = person
                    return (
                        <div className='text-slate-800'>
                            <article className='py-2 flex content-center'>
                                <img
                                    src={image}
                                    alt=''
                                    className='w-12 h-12 rounded-full'
                                />
                                <div className='pl-3 '>
                                    <h5 className='text-sm'>{name}</h5>
                                    <p className='text-xs'>{age} years</p>
                                </div>
                            </article>
                        </div>
                    )
                })}
                <div className='flex justify-around pt-5 text-white'>
                    <button
                        className='capitalize px-6 py-3 rounded-lg mr-4 bg-gradient-to-r from-pink-500 to-rose-400 shadow-xl text-sm'
                        onClick={() => {
                            setCount(data)
                        }}>
                        view all
                    </button>
                    <button
                        className='capitalize  bg-gradient-to-r from-pink-500 to-rose-400 px-6 py-3 rounded-lg shadow-xl text-sm'
                        onClick={() => {
                            setCount([])
                        }}>
                        clear all
                    </button>
                </div>
            </div>
        </main>
    )
}

export default App
