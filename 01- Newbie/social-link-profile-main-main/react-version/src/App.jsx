import { user } from "./data";
import SocialLink from "./components/SocialLink";

export default function App() {

  return (
    <>
      <main className="card">
      <img src={user.avatar} alt="Foto de perfil"className="avatar"
      />
        <h1>{user.name}</h1>
        <p className="location">{user.location}</p>
        <p>{user.bio}</p>

        <div className="links">
        {user.links.map((link) => (
          <SocialLink key={link.label} label={link.label} url={link.url} />
        ))}
      </div>
      </main>
    </>
  )
}
