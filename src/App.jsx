import React from 'react'

const App = () => {
  return (
    <div className='max-w-[1250px] mx-auto flex items-center justify-center h-screen w-full'>
      <div className="grid gap-5">
        <h1 className='text-4xl font-medium text-center text-blue-700'>Are you a Student or a Teacher?</h1>
        <div className='flex items-center justify-center gap-5'>
          <a href='https://aifuuga0p8ygasfsas.vercel.app/' className='transition-all px-5 py-2 rounded-xl bg-blue-700 text-white hover:shadow-md hover:shadow-blue-600 active:bg-blue-800'>Student</a>
          <h1 className='text-2xl font-bold text-blue-700'>|</h1>
          <a href='https://liasufosydgasfassfasasdgdf.vercel.app/' className='transition-all px-5 py-2 rounded-xl bg-blue-700 text-white hover:shadow-md hover:shadow-blue-600 active:bg-blue-800'>Teacher</a>
        </div>
      </div>
    </div>
  )
}

export default App