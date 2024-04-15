import React from 'react'

const Header=() =>{
  return(
  <div className='flex flex-row bg-green-300 justify-between h-20 rounded-2xl' >
<p className='text-3xl mt-5 pl-5'>Contacts</p>
<p className='mt-5 text-xl'>Home</p>
<p className='text-white rounded-2xl bg-black h-10 w-20 mt-5 mr-5' >sign out</p>
  </div>
  )
}

export default Header