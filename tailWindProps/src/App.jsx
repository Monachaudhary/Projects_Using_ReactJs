import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  let myobj = {
    username : "hitesh",
    age : 21
  }
  let newArr = [1,2,3];
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
    {/* hamare props ki kahani yahi se suru hoti hai vo components ko reusable banata hai */}
    {/* ham normally kya karte hai ki css hlml javascript ko alg rakhte hai pr react hamare ye nahi bolta vo bolta hai ki technology ke base pr alg mat karo reusability ke base pr karo */}

    {/* <div class="relative h-[400px] w-[300px] rounded-md m-4">
  <img
    src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
    alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"
  />
  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
  <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-lg font-semibold text-white">Delba</h1>
    <p class="mt-2 text-sm text-gray-300">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p>
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
      View Profile →
    </button>
  </div>
</div> */}

    {/* ab ye jo card import kiya ha ye html ki trah behave karega th ham tage mai enclose karege */}
    <Card username="Manu Chaudhary" someobj = {myobj} btnText = "click me"/>
    <Card username="chai aur Code" someobj = {newArr} btnText = "visit me"/>


    </>
  )
}

export default App
