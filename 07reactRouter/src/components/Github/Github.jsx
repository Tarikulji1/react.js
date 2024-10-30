import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData() 
    /*
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/tarikulji1')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    }, [])
    */
  return (
    <>
        <div className='flex flex-col justify-center items-center bg-gray-200'>    
            <img src={data.avatar_url} alt="Git picture" width={300} className='' />
            <div className='flex'>
                <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
                    Github followers: {data.followers}
                </div>
                <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
                    Github Repositories: {data.public_repos}
                </div>
            </div>
        </div>
    </>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/tarikulji1')
    return response.json();
}