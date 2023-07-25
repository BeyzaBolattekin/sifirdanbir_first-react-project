import "./App.css";

function App() {
  const carContent = [
    {
      value: "volvo",
      brand: "volvo",
    },
    {
      value: "fiat",
      brand: "fiat",
    },
    {
      value: "mercedes",
      brand: "mercedes",
    },
    {
      value: "audi",
      brand: "audi",
    },
  ];
  return (
    <main>
      <div class="container">
        <label id="text">Choose a car:</label>
        <select name="cars" id="cars">
          {carContent.map((car) => (
            <option class="option" value={car.value}>
              {car.brand}
            </option>
          ))}
        </select>
      </div>
    </main>
  );
}

export default App;
