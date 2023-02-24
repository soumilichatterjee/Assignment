import classes from './ButtonPage.module.css'



const ButtonPage=()=>{
  const buttonClickHandler = ()=>{
    alert('Welcome To The App')
  }
return(
  
  <div className={classes.buttondiv}>
  <button className={classes.redbutton} onClick={buttonClickHandler}>Click Me For Alert</button>
  </div>
  
  
  
)
}
export default ButtonPage