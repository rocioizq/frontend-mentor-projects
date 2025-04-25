import { reviewsData } from './data/reviewsData.jsx'

export function ReviewsContainer({ image, userName, userReview, className }) {
    return (
        <>
            <div className={`reviews-container ${className} animate__animated animate__flipInY animate__delay-1s`}>
                <div className="user">
                    <img src={image} alt={userName} />
                    <div className="user-data">
                        <h2>{userName}</h2>
                        <h3>Verified Buyer</h3>
                    </div>
                </div>
                <p>
                    {userReview}
                </p>
            </div>
        </>
    );
}

export function Reviews() {
    return (
        <>
        {reviewsData.map((review) => (
            <ReviewsContainer key={review.id} {...review} />
        ))}
        </>
    )
}

export default Reviews;

