import s from './App.module.css'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import ContactList from './ContactList/ContactList'

const App = () => {

  return (
    <div className={s.container}>

      <h1>Phonebook</h1>
      <ContactForm /> 
      <SearchBox />
      <ContactList />

    </div>
  )

}

export default App