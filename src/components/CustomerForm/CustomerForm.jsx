import { useState } from "react"
import "./CustomerForm.css"


const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");


const handleSubmit=(e)=>{
e.preventDefault(); // sayfanin tiklandiginda yenilenmesinin onune gectik
const newCustomer={
  id: Math.random(),
  customerName,
}   
// random olacak sekilde id ile yeni kullanici olusturduk
//input degerine isim yazdik resimi boylece cagirma  alani olusturduk

addNewCustomer(newCustomer);
setCustomerName("") ;
// inputun icine veriyi elde ettikten sonra icini temizledik 24 satirdan gelen value ile
}

  return (

    
<form className='customer-form' onSubmit={handleSubmit} >
  <input type="text" className='customer-input' placeholder='Add a new customer' 
  onChange={(e) => setCustomerName (e.target.value)}
  value={customerName}
  />

<button >
  <i className='bi bi-plus-lg' ></i>
  Add
</button>

</form>
  )
}

export default CustomerForm