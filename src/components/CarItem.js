import "./CarItem.css";

function CarItem(props) {
  return (
    <option class="carItem" value={props.value}>
      {props.brand}
    </option>
  );
}

export default CarItem;
