import Form from "./Form";
import { useState } from 'react';

const Todo = () => {
          //receiver setter  
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    
    const [sum, setSum] = useState('');
    const [product, setProduct] = useState('');
    const [quotient, setQuotient] = useState('');
    const [difference, setDifference] = useState('');

    
    const handleFormSubmit = (e)=> {
    e.preventDefault();
    
      
      //Addition
      let sum = parseInt(num1) + parseInt(num2);
      setSum(sum);  

      //Multiplication
      let product = parseInt(num1) * parseInt(num2);
      setProduct(product);  


      
      //Division
      let quotient = parseInt(num1) / parseInt(num2);
      setQuotient(quotient);  


      //Substraction
      let difference = parseInt(num1) - parseInt(num2);
      setDifference(difference);  

    }   

    return (
        <div className='Todo'>
         Total Sum is : { (sum !== 0) ? sum : 'no result yet'}  
         <br />
         Total Product is : { (product !== 0) ? product : 'no result yet'} 
         <br />
         Total Quotient is : { (quotient !== 0) ? quotient : 'no result yet'} 
         <br />
         Total Difference is : { (difference !== 0) ? difference : 'no result yet'} 
         
           <Form 
            numero_uno = {num1}
            numero_dos = {num2}
            setNum1 = {setNum1}
            setNum2 = {setNum2}
            handleFormSubmit = {handleFormSubmit} 
           /> 

        </div>
    )

}


export default Todo