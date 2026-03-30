import photo from "../assets/photo.jpg"

function Accueil() {
  return (
    <section className="hero">

      <img src={photo} alt="Mariama" className="profile-img" />

      <h1>Bonjour, je suis Mariama Sadio</h1>
      <p>Développeuse Web et Mobile</p>

      <div className="hero-buttons">
        <a href="/projects" className="btn">Voir mes projets</a>
        <a href="/contact" className="btn-outline">Me contacter</a>
      </div>

    </section>
  )
}

export default Accueil