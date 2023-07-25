import "./App.css";
import CarItem from "./components/CarItem";

function App() {
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

  let carItems = [];
  carContent.forEach((car) => {
    carItems.push(<CarItem value={car.value} brand={car.brand}></CarItem>);
  });

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
