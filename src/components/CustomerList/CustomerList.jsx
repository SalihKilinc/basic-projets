
import CustomerItem from '../CustomerItem/CustomerItem'
import "./CustomerList.css"

const customerData=[
  {
    id:1,
    customerName1: "Garfield Tarcin",
  },
  {
    id:2,
    customerName1: "Dante",
  },
  {
    id:3,
    customerName1: "Birds",
  },
  {
    id:4,
    customerName1: "Bayern ",
  },
];


function CustomerList  ()  {
  return (
<ul className='customer-list'>

{customerData.map((customer)=>(
 <CustomerItem  customer={customer} key={customer.id} />
))}


</ul>
  )
}

export default CustomerList