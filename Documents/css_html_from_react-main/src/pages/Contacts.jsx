import React from 'react'

const Contacts = () => {
  const [formData, setFormData] = React.useState({
    nom: '',
    email: '',
    sujet: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <div className="contact-form">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              name="nom"
              placeholder="Mariama Sadio"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="mariamasadio796@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Sujet</label>
          <input
            type="text"
            name="sujet"
            placeholder="Objet du message"
            value={formData.sujet}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Votre message..."
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Envoyer</button>
      </form>
    </div>
  )
}

export default Contacts