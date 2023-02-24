import { useState } from "react";
import classes from './CalculatorScreen.module.css'
import Card from './Card/Card'

function CalculatorScreen() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("addition");
  const [result, setResult] = useState("");

  const firstNumHandler=(e)=>{
setNum1(Number(e.target.value))
  }

  const secondNumHandler = (e)=>{
setNum2(Number(e.target.value))
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = "https://rainbow-liger-ba6aa0.netlify.app/.netlify/functions/api/calculate";
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ num1, num2, operation })
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.log(error);
    }
    setNum1("")
    setNum2("")
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.control}>
      <label htmlFor="Num1">Num1</label>
      <input
      type="number"
      placeholder="Enter first number"
      value={num1}
      onChange={firstNumHandler}
    />
      </div>

<div className={classes.control}> 
<label>Select Operation</label>
<select
value={operation}
onChange={(e) => setOperation(e.target.value)}
>
<option value="addition">Addition+</option>
<option value="subtraction">Subtraction-</option>
<option value="multiplication">Multiplication*</option>
</select>


</div>
<div className={classes.control}>
<label>Num2</label>
<input
type="number"
placeholder="Enter second number"
value={num2}
onChange={secondNumHandler}
/>
</div>
    <div>
    <button  className={classes.button}type="submit">Calculate</button>
    </div>
      </form>
      {result && (
        <div className={classes.control}>
          <p>Result: {result}</p>
        </div>
      )}



    </Card>

  );
}

export default CalculatorScreen;
