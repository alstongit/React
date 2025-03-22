import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
  const[data, setData] = useState([]);
  useEffect(()=>{
    fetch('https://api.github.com/users/alstongit')
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setData(data)
    })
  }, [])
  return (
    <div className='text-center m-4 bg-gray-600  text-white p-4 text-3xl'>
      Github Followers:   {data.followers}
      <img src={data.avatar_url} alt="Git profile photo"  width={300}/>
    </div>
  )
}

export default Github
