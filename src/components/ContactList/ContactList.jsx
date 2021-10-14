import s from './ContactList.module.css'
function ContactList(contacts) {
   return (
        <ul className={s.list}>
            {contacts.map(contact => (
                <li key={contact.id}>
                    <p className={s.title}>Name: { contact.name }</p>
                    <p className={s.title}>Number: {contact.number}</p>
                    <button className={s.button}  type="button">Delete</button>
                </li>   
            ))}
        </ul>
    )
}

export default ContactList;