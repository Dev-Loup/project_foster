import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Budash = () => {
    const [resp, setResp] = useState([])
    const [project, setProject] = useState('')
    const [chars, setChar] = useState([])
    const [info, setInfo] = useState()

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
    const handleClick2 = (char) => {
        setInfo(char)
    }
    let [ task ] = project ? resp.filter(item => item.name.includes(project)): '';
    useEffect(() => {
        if (!task) return
        setInfo()
        if (task.residents.length === 0) {
            setChar([])
            return
        }
        let resident_list=[]
        for (let count =0; count < task.residents.length && count < 5; count++) {
            const res_num = task.residents[count].replace('https://rickandmortyapi.com/api/character/','')
            resident_list.push(res_num);
        }
        const getAPI = async () => {
            const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${resident_list.join(',')}`)
            setChar(data)
        }
        getAPI()
    }, [task])
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
                                <svg className="w-6 h-6 m-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                {task ? task.name : ''}
                            </div>
                            <h2 className='m-2'>{task ? task.type : ''}</h2>
                            <p className='m-2'>{task ? 
                            <>
                            {
                                new Date(task.created).toLocaleString('en-US')
                            }
                            </> : ''}</p>
                            <h2 className='text-gray-500 m-2'>Objectives</h2>
                            {
                                chars.length === 0 ? <div className='proy-item'>No People in here</div> :
                                    chars.map(char => <div className='proy-item' onClick={() => handleClick2(char)} key={char.name + char.id}>{char.name}</div>)
                            }
                        </div>
                        <div className= 'flex flex-col m-2 w-1/2'>
                            <p className='py-3'>Objectives Milestone Resume</p>
                            {!info ? 'seleccione personaje': 
                            <>
                                <img src={info.image} alt={info.name}/>
                            </>
                            }
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        {!info ? 
                        <>
                            <p className= 'bg-gray-50 rounded-2xl m-2 w-1/3'>Gender</p>
                            <p className= 'bg-gray-50 rounded-2xl m-2 w-1/3'>Species</p>
                            <p className= 'bg-gray-50 rounded-2xl m-2 w-1/3'>status</p> 
                        </>: 
                            <>
                                <p className= 'bg-gray-50 rounded-2xl m-2 w-1/3'>Gender: {info.gender}</p>
                                <p className= 'bg-gray-50 rounded-2xl m-2 w-1/3'>Species: {info.species}</p>
                                <p className= 'bg-gray-50 rounded-2xl m-2 w-1/3'>Status: {info.status}</p> 
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Budash
