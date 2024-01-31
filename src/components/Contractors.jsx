import React from 'react';
import Header from './Header';
import Card from './Card';
import ContracterSidebar from './ContracterSidebar';
import worker from '../assets/worker.png';
import Cookie from 'js-cookie';

const totalAmount = 5000000;
const amountPaid = 200000;


const Contractors = () => {

    const [contractors, setContractors] = React.useState([]);


    const handleSubmit = async () => {
        const response = await fetch('https://tsec-backend.onrender.com/api/v1/contractors', {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${Cookie.get('token')} `,
          },
        });
        const data = await response.json();
  
  
        console.log(data);
        setContractors(data.data.contracts);
        // setFamilies(data.data.contracts);
      }
  
      React.useEffect(() => {
        handleSubmit();
      }, []);
  

    return (
       
            <div className='flex flex-row'>
                <div>
                    <ContracterSidebar />
                </div>

                <div className="ml-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {contractors.map((contractorItem, index) => {
                      console.log(contractorItem);
                      return <Card image={worker} firstName={contractorItem.userId.firstName} lastName={contractorItem.userId.lastName}/>
                    })}
                </div>

                
            </div>

    );
};

export default Contractors;
