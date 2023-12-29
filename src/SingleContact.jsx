
function SingleContact({contact}) {
  return (
      <div>
          <h2>{contact.name}</h2>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <h4> Company: {contact.company.name}</h4>
          <p> Company Website: {contact.website}</p>
      </div>

  )
}

export default SingleContact