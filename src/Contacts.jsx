//will display all contacts
function Contacts({allContacts, hash}) {
  return (
      <ul>
          {allContacts.map((contact) => {
              return (
                  <li key={contact.id} className={contact.id === hash ? 'selected' : ""}>
                    <a href={`#${contact.id ===hash? "" : contact.id}`}>
                          {contact.name}
                      </a>
                  </li>
              )       
          })}
      </ul>
  )
}

export default Contacts