import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard'

function App() {
  const coffees = useLoaderData()
  
  return (
    <>
      
     <div className=' m-12'>
     <h1>Coffee Master {coffees.length}</h1>
      <div className=' grid md:grid-cols-2 gap-6'>
      {
        coffees.map(coffee => <CoffeeCard
        key ={coffee._id}
        coffee={coffee}
        ></CoffeeCard>)
      }
      </div>
     </div>
      
    </>
  )
}

export default App
