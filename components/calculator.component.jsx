import { useState } from "react";
import styles from "./calculator.module.css";

const Calculator = () => {
  const [coffeeGrams, setCoffeeGrams] = useState(15);
  const [waterGrams, setWaterGrams] = useState(250);
  const [isRatioLocked, setIsRatioLocked] = useState(false);

  // Calcular el ratio actual
  const calculateRatio = (coffee, water) => {
    if (coffee === 0 || water === 0) return "1:0";
    const ratio = water / coffee;
    return `1:${ratio.toFixed(1)}`;
  };

  const currentRatio = calculateRatio(coffeeGrams, waterGrams);

  const handleCoffeeChange = (e) => {
    const newCoffee = Number(e.target.value) || 0;

    if (isRatioLocked && newCoffee > 0) {
      // Si el ratio está bloqueado, recalcular agua
      const ratio = waterGrams / coffeeGrams;
      const newWater = Math.round(newCoffee * ratio * 10) / 10;
      setWaterGrams(newWater);
    }
    setCoffeeGrams(newCoffee);
  };

  const handleWaterChange = (e) => {
    const newWater = Number(e.target.value) || 0;

    if (isRatioLocked && newWater > 0) {
      // Si el ratio está bloqueado, recalcular café
      const ratio = waterGrams / coffeeGrams;
      const newCoffee = Math.round((newWater / ratio) * 10) / 10;
      setCoffeeGrams(newCoffee);
    }
    setWaterGrams(newWater);
  };

  const toggleRatioLock = () => {
    setIsRatioLocked(!isRatioLocked);
  };

  return (
    <div className={styles.calculator}>
      <div className={styles.inputGroup}>
        <label className={styles.label}>
          <span className={styles.labelText}>Café (gramos)</span>
          <input
            className={styles.input}
            type="number"
            min="0"
            step="0.1"
            value={coffeeGrams}
            onChange={handleCoffeeChange}
            placeholder="15"
          />
        </label>
      </div>

      <div className={styles.inputGroup}>
        <label className={styles.label}>
          <span className={styles.labelText}>Agua (gramos)</span>
          <input
            className={styles.input}
            type="number"
            min="0"
            step="0.1"
            value={waterGrams}
            onChange={handleWaterChange}
            placeholder="250"
          />
        </label>
      </div>

      <div className={styles.ratioDisplay}>
        <div className={styles.ratioValue}>{currentRatio}</div>
        <button
          type="button"
          className={`${styles.lockButton} ${isRatioLocked ? styles.locked : ""}`}
          onClick={toggleRatioLock}
          title={isRatioLocked ? "Ratio bloqueado - Click para desbloquear" : "Click para bloquear ratio"}
        >
          {isRatioLocked ? "🔒 Ratio Bloqueado" : "🔓 Bloquear Ratio"}
        </button>
        {isRatioLocked && (
          <p className={styles.lockInfo}>
            Al cambiar café o agua, el otro valor se ajustará automáticamente
          </p>
        )}
      </div>
    </div>
  );
};

export default Calculator;
