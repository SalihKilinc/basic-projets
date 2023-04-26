import React, { useState } from 'react'
import CustomerForm from './components/CustomerForm/CustomerForm'
import CustomerList from './components/CustomerList/CustomerList'
import { Container } from 'react-bootstrap';


function App  () {

  const  [customers , setCustomers] = useState([]);

  const addNewCustomer = (newCustomer)=>{
   setCustomers([...customers, newCustomer])
  // setCustomers((prevState) => [newCustomer, ...prevState]);  // spret operatorunun gelismis hali
  }

  return (
    <Container>
      <h1>Customer Manege System</h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
      {customers.length === 0 && "There are no customer ......"}
      <CustomerList  customers={customers}  setCustomers={setCustomers} />  
   
    </Container>
  )
}

export default App
// 18. satirda parentten childe gonderdik