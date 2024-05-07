import React, { useEffect, useState } from "react"
import SideBar from "./Components/SideBar"
import Main from "./Components/Main"
import Footer from "./Components/Footer"

function App() {
  
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleToggleModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY
      const url = "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`
      try{
        const res = await fetch(url)
        const apiData = await res.json()
        setData(apiData)
        console.log('Data\n', apiData)
      } catch(err){
        console.log(err.message)
      }
    }
    fetchAPIData();
  }, [])


  return (
  <>
    {data ? (<Main/>): (
      <div className="loadingState">
        <i>Gear loading icon</i>
      </div>
    )}
    {showModal && (
      <SideBar data={data} handleToggleModal={handleToggleModal}/>
    )}
    {data && (
      <Footer data={data} showModal={showModal} handleToggleModal={handleToggleModal}/>
    )}
    
  </>
  )
}

export default App
