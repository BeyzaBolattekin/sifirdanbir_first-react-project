import "./App.css";

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
  return (
    <main>
      <div class="container">
        <label id="chooseText" class="text">
          Choose a car:
        </label>
        <select id="cars">
          {carContent.map((car) => (
            <option class="car" value={car.value}>
              {car.brand}
            </option>
          ))}
        </select>
      </div>
    </main>
  );
}

export default App;
