import { useState, useEffect } from 'react'
import Contacts from './Contacts'
import './App.css'
import SingleContact from "./SingleContact";

function App() {

  const [allContacts, setAllContacts] = useState([]);
  const [hash, setHash] = useState(window.location.hash.slice(1)*1)

  useEffect(() => {
    const fetchAllContacts= async()=>{
      
        const response= await fetch('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users')
        const data= await response.json()
        console.log(data)
        setAllContacts(data)
    }
    fetchAllContacts ()
  }, [])

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setHash(window.location.hash.slice(1)*1)
    })
  }, [])

  const contact = allContacts.find((contact) => {
    return hash === contact.id
  })
  console.log(contact)
  
  return (
    <div>
      <h1> All Contacts : ({allContacts.length})</h1>
      <Contacts allContacts={allContacts} hash={hash}/>
      <br></br>
      {
        contact ? (<SingleContact contact= {contact}/>) : null
      }
      </div>
  )
}

export default App



   