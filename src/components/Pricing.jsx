import React from 'react'
import { CheckIcon } from '@heroicons/react/solid'


export const Pricing = () => {
  return (
    <div className='w-full text-white'>
        <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-slate-300'>
                <h2 className='text-3xl uppercase'>Pricing</h2>
                <h3 className='text-5xl font-bold text-white py-8'>The right price for your research.</h3>
                <p className='text-3xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam minima non cum dolorem magni.</p>
            </div>
            <div className='grid md:grid-cols-2'>
                <div className='bg-white text-slate-300 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Standard</span>
                    <div>
                        <p className='text-6xl text-black font-bold py-4 flex'>$49 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className='text-black'>
                        <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolar.</p>
                        <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolar.</p>
                        <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolar.</p>
                        <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolar.</p>
                        <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolar.</p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
                <div className='bg-white text-slate-300 m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-indigo-200 text-indigo-900 rounded-2xl text-sm'>Premium</span>
                    <div>
                        <p className='text-6xl text-black font-bold py-4 flex'>$99 <span className='text-xl text-slate-500 flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-2xl py-8 text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <div className='text-black'>
                        <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolar.</p>
                        <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolar.</p>
                        <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolar.</p>
                        <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolar.</p>
                        <p className='flex py-3'><CheckIcon className='w-8 mr-5 text-green-600'/> Lorem, ipsum dolar.</p>
                        <button className='w-full py-4 my-4'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing