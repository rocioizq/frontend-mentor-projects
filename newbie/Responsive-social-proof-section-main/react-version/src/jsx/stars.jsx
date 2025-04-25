import { starsData } from './data/starsData'

export function StarsContainer({ reviews, stars, className }) {
  return (
    <div className={`stars ${className} animate__animated animate__bounceInRight`}>
      <div className="stars-row">
        {Array.from({ length: stars }).map((_, i) => (
          <img
            key={i}
            src="/images/icon-star.svg"
            alt="5-star rating icon"
            className="star-icon"
          />
        ))}
      </div>
      <p className="rated-stars">Rated 5 Stars in {reviews}</p>
    </div>
  );
}

export function Stars() {
  return(
    <>
    {starsData.map((star) => (
      <StarsContainer key={star.id} {...star} />
    ))}
    </>
  )
}

export default Stars;