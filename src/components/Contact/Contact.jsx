import s from './Contact.module.css'
import { FaSquarePhone, FaCircleUser } from 'react-icons/fa6'

const Contact = ({ contacts, onDelete }) => {
  const { id, name, number} = contacts

  return (
    <>
      <div className={s.contact}>
        <p className={s.name}> <FaCircleUser className={s.user_icon} /> {name}</p>
        <a href={`tel:${number}`} className={s.phoneNumber}> <FaSquarePhone className={s.phone_icon} /> {number}</a>
      </div>
      <button type='submit' className={s.deleteBtn} onClick={() => onDelete(id)}> Delete </button>
    </>
  )
}

export default Contact