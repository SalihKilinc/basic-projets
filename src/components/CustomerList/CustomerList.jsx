

import CustomerItem from '../CustomerItem/CustomerItem'
import "./CustomerList.css"




function CustomerList  ({customers})  {
// app js icinde tanimladik customersi ordan child olarak buraya aktardik
  
  return (
<ul className='customer-list'>

{customers.map((customer)=>(
 <CustomerItem  customer={customer} key={customer.id} />
))}


</ul>
  )
}

export default CustomerList