import s from './App.module.css'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'
import NoContacts from './ContactList/NoContacts'
import contactsData from '../data/contacts.json'
import { useEffect, useState } from 'react'


const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('phonebook')
    return storedContacts ? JSON.parse(storedContacts) : contactsData
  })
  const [search, setSearch] = useState('')
  
  const filterContacts = contacts.filter((contact) =>
     contact.name.toLowerCase().includes(search.toLowerCase())
  )

  const addContact = (newContact) => {
    setContacts((prev) => {
      return [...prev, newContact]  
    })
  }

  const deleteContact = (idContact) => {
    setContacts(prev => {
      return prev.filter(items => items.id !== idContact)
    })
  }


  useEffect(() => {
    localStorage.setItem('phonebook', JSON.stringify(contacts))
  },[contacts])


  return (
    <div className={s.container}>

      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={search} setSearch={setSearch} />
      {filterContacts.length === 0 
        ? <NoContacts />
        : <ContactList contacts={filterContacts} onDelete={deleteContact} />}
      
    </div>
  )
}

export default App