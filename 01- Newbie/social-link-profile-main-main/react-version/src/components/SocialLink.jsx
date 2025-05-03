export default function SocialLink({ label, url }) {
    return (
      <a className="social-button" href={url} target="_blank" rel="noreferrer">
        {label}
      </a>
    );
}
  