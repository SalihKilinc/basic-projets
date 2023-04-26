

import CustomerItem from '../CustomerItem/CustomerItem'
import "./CustomerList.css"




function CustomerList  ({customers ,setCustomers})  {
// app js icinde tanimladik customersi ordan child olarak buraya aktardik
  
const handleDelete = (item)=>{
setCustomers(customers.filter((customer) => customer.id !== item.id))
}


  return (
<ul className='customer-list'>

{customers.map((customer)=>(
 <CustomerItem  customer={customer} key={customer.id} />
))}


</ul>
  )
}

export default CustomerList