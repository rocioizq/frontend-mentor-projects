import "./App.css"
import CarsCard from "./components/CarsCard";

const cars = [
  {
    id: 1,
    type: "Sedans",
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    button: "Learn more",
    className: "sedan",
    image:
      "https://3-column-preview-card-component-main.vercel.app/images/icon-sedans.svg",
  },
  {
    id: 2,
    type: "Suvs",
    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    button: "Learn more",
    className: "suv",
    image:
      "https://3-column-preview-card-component-main.vercel.app/images/icon-suvs.svg",
  },
  {
    id: 3,
    type: "Luxury",
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
    button: "Learn more",
    className: "luxury",
    image:
      "https://3-column-preview-card-component-main.vercel.app/images/icon-luxury.svg",
  },
];

export default function App() {
  return (
    <div className="container">
      {cars.map((car) => (
        <CarsCard key={car.id} {...car} />
      ))}
    </div>
  );
}