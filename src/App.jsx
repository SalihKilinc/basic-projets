import React from 'react'
import CustomerForm from './components/CustomerForm/CustomerForm'
import CustomerList from './components/CustomerList/CustomerList'
import CustomerItem from './components/CustomerItem/CustomerItem'

const App = () => {
  return (
    <div>
      <h1>Customer Manege System</h1>
      <CustomerForm/>
      <CustomerList/>
      <CustomerItem/>
    </div>
  )
}

export default App