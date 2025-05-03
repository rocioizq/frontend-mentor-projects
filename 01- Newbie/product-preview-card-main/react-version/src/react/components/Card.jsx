import Image from "./Image"
import Info from "./Info"

function Card() {
    return (
        <main className="product-main">
            <Image />
            <div className="container">
                <Info />
            </div>
        </main>
    )
}

export default Card;