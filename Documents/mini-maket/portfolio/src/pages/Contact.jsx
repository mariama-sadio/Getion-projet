import { useState } from "react"

function Contact() {

  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Message envoyé ✅")
  }

  return (
    <div className="contact-container">

      <h2>Contactez-moi</h2>

      <form onSubmit={handleSubmit} className="contact-form">

        <input type="text" name="nom" placeholder="Nom" onChange={handleChange}/>
        <input type="text" name="prenom" placeholder="Prénom" onChange={handleChange}/>
        <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
        <input type="tel" name="telephone" placeholder="Téléphone" onChange={handleChange}/>

        <button type="submit">Envoyer</button>

      </form>

    </div>
  )
}

export default Contact