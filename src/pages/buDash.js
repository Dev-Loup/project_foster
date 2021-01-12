import React, { useState, useEffect } from 'react';
import axios from 'axios';

//Page Component
const Budash = () => {
    const [resp, setResp] = useState([])
    const [project, setProject] = useState('')
    useEffect(() => {
        const getAPI = async () => {
            const { data } = await axios.get('https://rickandmortyapi.com/api/location/3,20,50,65')
            setResp(data)
        }
        getAPI()
    }, [])
    const handleClick = event => {
        setProject(event.target.outerText)
    }
    let [ task ] = project ? resp.filter(item => item.name.includes(project)): '';
    return (
        <div className='body-container'>
            <div className='m-2'>
                <p>Software Division</p>
            </div>
            <div className='flex flex-row'>
                <div className='flex flex-col bg-gray-50 rounded-2xl m-2 w-1/4'>
                    <div className='m-2'>
                        <div className='text-gray-500 m-2 flex flex-row'>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
                            Projects Box
                        </div>
                    </div>
                    <div className='m-2'>
                        {resp ? resp.map((item) => (<div key={item.id} onClick={handleClick} className='proy-item'>{item.name}</div>)) : <h1>loading</h1>}
                    </div>
                </div>
                <div className='flex flex-col m-2 w-3/4'>
                    <div className='flex flex-row '>
                        <div className= 'flex flex-col bg-gray-50 rounded-2xl w-1/2'>
                            <div className='m-2 text-2xl flex flex-row'>
                                <svg className="w-6 h-6 m-1" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                ><path strokeLinecap="round" strokeLinejoin="round" 
                                strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                /></svg>
                                {task ? task.name : ''}
                            </div>
                            <h2 className='m-2'>{task ? task.type : ''}</h2>
                            <p className='m-2'>{task ? task.created : ''}</p>
                            <h2 className='text-gray-500 m-2'>Objectives</h2>
                            <div className='proy-item'>{task ? task.residents[0] : ''}</div>
                            <div className='proy-item'>{task ? task.residents[1] : ''}</div>
                            <div className='proy-item'>{task ? task.residents[2] : ''}</div>
                            <div className='proy-item'>{task ? task.residents[3] : ''}</div>
                            <div className='proy-item'>{task ? task.residents[4] : ''}</div>
                        </div>
                        <div className= 'flex flex-col m-2 w-1/2'>
                            <p className='py-3'>Objectives Milestone Resume</p>
                            <p className= 'bg-gray-50 rounded-2xl py-3 m-2'>item 1</p>
                            <p className= 'bg-gray-50 rounded-2xl py-3 m-2'>item 2</p>
                            <p className= 'bg-gray-50 rounded-2xl py-3 m-2'>item 3</p>
                            <p className= 'bg-gray-50 rounded-2xl py-3 m-2'>item 4</p>
                            <p className= 'bg-gray-50 rounded-2xl py-3 m-2'>item 5</p>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <p className= 'bg-gray-50 rounded-2xl m-2 w-1/3'>slot 1</p>
                        <p className= 'bg-gray-50 rounded-2xl m-2 w-1/3'>slot 2</p>
                        <p className= 'bg-gray-50 rounded-2xl m-2 w-1/3'>slot 3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budash
