import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./TemperatureConverter.css";

function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");
  const [degreesCelsius, setDegreesCelsius] = useState(true);

  const calculateTemperature = (e) => {
    e.preventDefault();
    if (degreesCelsius) {
      setFahrenheit((Number.parseFloat(celsius) * 1.8 + 32).toFixed(2));
    } else {
      setCelsius(((Number.parseFloat(fahrenheit) - 32) / 1.8).toFixed(2));
    }
  };

  return (
    <div className="temperatureConverter">
      <h1>Укажите температуру</h1>
      <TextField
        label="по шкале Цельсия"
        variant="outlined"
        fullWidth
        value={celsius}
        onChange={(e) => {
          setCelsius(e.target.value);
          setDegreesCelsius(true);
        }}
        margin="normal"
      />
      <TextField
        label="по шкале Фаренгейта"
        variant="outlined"
        fullWidth
        value={fahrenheit}
        onChange={(e) => {
          setFahrenheit(e.target.value);
          setDegreesCelsius(false);
        }}
        margin="normal"
      />
      <Button onClick={calculateTemperature}>Конвертировать</Button>
    </div>
  );
}

export default TemperatureConverter;
