import React, { useState } from 'react'
import CustomerForm from './components/CustomerForm/CustomerForm'
import CustomerList from './components/CustomerList/CustomerList'
import CustomerItem from './components/CustomerItem/CustomerItem'

const App = () => {

  const  [customers , setCustomers] = useState([]);

  const addNewCustomer = (newCustomer)=>{
   // setCustomers([...customers, newCustomer])
   setCustomers((prevState) => [newCustomer, ...prevState])  // spret operatorunun gelismis hali
  }

  return (
    <div>
      <h1>Customer Manege System</h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
      <CustomerList  customers={customers}/>  
      <CustomerItem/>
    </div>
  )
}

export default App
// 18. satirda parentten childe gonderdik