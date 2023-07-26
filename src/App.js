import "./App.css";
import CarItem from "./components/CarItem";

const carItems = createCarItems();

function createCarItems() {
  const carContent = [
    {
      value: "volvo",
      brand: "Volvo",
    },
    {
      value: "fiat",
      brand: "Fiat",
    },
    {
      value: "mercedes",
      brand: "Mercedes",
    },
    {
      value: "audi",
      brand: "Audi",
    },
  ];

  const carItems = carContent.map((car) => (
    <CarItem value={car.value} brand={car.brand}></CarItem>
  ));

  return carItems;
}

function App() {
  return (
    <main>
      <div class="container">
        <label id="chooseText" class="text">
          Choose a car:
        </label>
        <select class="cars">{carItems}</select>
      </div>
    </main>
  );
}

export default App;
