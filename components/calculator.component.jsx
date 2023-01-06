import { useState } from "react";
import CalculatorInput from "./calculatorInput.component";

const Calculator = () => {
  const [coffeeRatio, setCoffeeRatio] = useState(1);
  const [waterRatio, setWaterRatio] = useState(20);
  const [coffeeGrams, setCoffeeGrams] = useState(15);
  const [waterGrams, setWaterGrams] = useState(300);
  const [isCoffeeLocked, setIsCoffeeLocked] = useState(false);

  const onChangeHandler = (e) => {
    const currentValue = Number(e.target.value);
    let newWaterGrams, newCoffeeGrams;

    switch (e.target.name) {
      case "coffeeRatio":
        setCoffeeRatio(currentValue);
        newWaterGrams = (coffeeGrams * waterRatio) / currentValue;
        setWaterGrams(Math.round(newWaterGrams * 100) / 100);
        break;
      case "waterRatio":
        setWaterRatio(currentValue);
        newWaterGrams = (coffeeGrams * currentValue) / coffeeRatio;
        setWaterGrams(Math.round(newWaterGrams * 100) / 100);
        break;
      case "coffeeGrams":
        setCoffeeGrams(currentValue);
        newWaterGrams = (currentValue * waterRatio) / coffeeRatio;
        setWaterGrams(Math.round(newWaterGrams * 100) / 100);
        break;
      case "waterGrams":
        setWaterGrams(currentValue);
        newCoffeeGrams = (currentValue * coffeeRatio) / waterRatio;
        setCoffeeGrams(Math.round(newCoffeeGrams * 100) / 100);
        break;

      default:
        console.log(e.target.name);
        break;
    }
  };

  return (
    <form>
      <div>
        <CalculatorInput
          label="Coffee Ratio"
          name="coffeeRatio"
          value={coffeeRatio}
          onChange={onChangeHandler}
        />
        <span>:</span>
        <CalculatorInput
          name="waterRatio"
          value={waterRatio}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <CalculatorInput
          label="Coffee (grams)"
          name="coffeeGrams"
          value={coffeeGrams}
          onChange={onChangeHandler}
          lockedGroup="gramsGroup"
          selector="coffeeLocked"
          defaultChecked={true}
        />
        <CalculatorInput
          label="Water (grams)"
          name="waterGrams"
          value={waterGrams}
          onChange={onChangeHandler}
          lockedGroup="gramsGroup"
          selector="waterLocked"
        />
        {/* <label>Base coffee:</label>
        <input type="radio" name="base" value="baseCoffee" />
        <label>Base water:</label>
        <input type="radio" name="base" value="baseWater" /> */}
      </div>
    </form>
  );
};

export default Calculator;
