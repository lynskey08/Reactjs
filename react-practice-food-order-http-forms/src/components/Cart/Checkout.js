import classes from './Checkout.module.css';
import React,{useRef,useState} from 'react';
 
const isEmpty=value=>value.trim()===''
const isFiveChars=value=>value.trim().length===5
 
 
const Checkout = (props) => {
  
  const [formInputValidity,setFormInputValidity]=useState({
    name:true,
    street:true,
    postalCode:true,
    city:true
  })
  const nameInputRef  = useRef()
  const streetInputRef  = useRef()
  const postalCodeInputRef  = useRef()
  const cityInputRef  = useRef()
 
  
  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value
    const enteredStreet=streetInputRef.current.value
    const enteredPostalCode=postalCodeInputRef.current.value
    const enteredCity=cityInputRef.current.value
 
 
    const enteredNameIsValid=!isEmpty(enteredName)
    const enteredStreetIsValid=!isEmpty(enteredStreet)
    const enteredPostalCodeIsValid=isFiveChars(enteredPostalCode)
    const enteredCityIsValid=!isEmpty(enteredCity)
 
 
    setFormInputValidity({
      name:enteredNameIsValid,
      street:enteredStreetIsValid,
      postalCode:enteredPostalCodeIsValid,
      city:enteredCityIsValid
    })
    
    console.log(formInputValidity)
 
 
    const formIsValid=enteredNameIsValid&&
                      enteredStreetIsValid&&
                      enteredPostalCodeIsValid&&
                      enteredCityIsValid
 
    if(formIsValid){
      return;
    }

    props.onConfirm({
        name: enteredName,
        street: enteredStreet,
        city: enteredCity,
        postalCode: enteredPostalCode
    });
  };
 
  const nameClasses=`${classes.control} ${!formInputValidity.name&& classes.invalid}`
  const streetClasses=`${classes.control} ${!formInputValidity.street&& classes.invalid}`
  const postalClasses=`${classes.control} ${!formInputValidity.postalCode&& classes.invalid}`
  const cityClasses=`${classes.control} ${!formInputValidity.city&& classes.invalid}`
 
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputValidity.name&& <p>name is not valid</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputValidity.street&& <p>street is not valid</p>}
      </div>
      <div className={postalClasses}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef}/>
        {!formInputValidity.postalCode&& <p>postal Code is not valid</p>}
      </div>
      <div className={cityClasses}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formInputValidity.city&& <p>city is not valid</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
 
export default Checkout;