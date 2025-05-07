export default function CarsCard(props) {
    return (
      <div className={`card ${props.className}`}>
        <img src={props.image} alt={props.type} />
        <h2>{props.type}</h2>
        <p>{props.description}</p>
        <button>{props.button}</button>
      </div>
    );
}