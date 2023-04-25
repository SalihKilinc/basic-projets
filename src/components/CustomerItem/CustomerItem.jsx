

const CustomerItem = (props) => {

  return (
 
    <li className='customer-item'> 
    <div className='customer-info'>
  <img src="https://i.pravatar.cc/300" alt="" className='customer-avatar'/>
  <span className='customer-name'>{props.customerName}</span>
    </div>
    <button className='delete-button'>
      delete
   
    </button>
      </li>

  )
}

export default CustomerItem