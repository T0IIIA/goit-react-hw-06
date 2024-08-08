import s from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux'
import { selectContacts, selectNameFilter } from '../../redux/selectors'
import NoContacts from './NoContacts'




const ContactList = () => {
  const contacts = useSelector(selectContacts)
  const filter = useSelector(selectNameFilter)


  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  )
  console.log(filterContacts)
  

  if (filterContacts.length === 0) {
    return <NoContacts />
  }
  return (
    <ul className={s.list}>
      {filterContacts.map((obj) => (
        <li className={s.item} key={obj.id}>
          <Contact contacts={obj} />
        </li>
      ))}
    </ul>
  )
}

export default ContactList





