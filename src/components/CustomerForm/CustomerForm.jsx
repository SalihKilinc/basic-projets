import "./CustomerForm.css"
import React from 'react'

const CustomerForm = () => {
  return (
<form className='customer-form'>
  <input type="text" className='customer-input' placeholder='Add a new customer' />

<button >
  <i className='bi bi-plus-lg' ></i>
  Add
</button>

</form>
  )
}

export default CustomerForm