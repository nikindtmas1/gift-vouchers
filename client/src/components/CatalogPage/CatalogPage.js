import React, {useState, useEffect} from "react";
import * as services from '../Services/data';

const CatalogPage = () => {

  const [allVouchers,setAllVouchers] = useState([]);

  useEffect(() => {
    services.getAll()
    .then((result) => setAllVouchers(result))
    .catch((err) => alert(err.message))
  },[]);


  return (
    <div>
      <table>
        <tr>
          <th>Check</th>
          <th>Date</th>
          <th>Number Voucher</th>
          <th>Name Buyer</th>
          <th>Name Owner</th>
          <th>Name Employee</th>
          <th>Treatment</th>
          <th>Count</th>
          <th>Price</th>
          <th>Valid Date</th>
          <th>Type Transaction</th>
          <th>Used Date</th>
          <th>Email</th>
        </tr>
        {allVouchers.map((row) => 
         <tr>
         <td><input type="checkbox" /></td>
         <td>{row.date}</td>
         <td>{row.numVoucher}</td>
         <td>{row.nameBuyer}</td>
         <td>{row.nameOwn}</td>
         <td>{row.nameEmployee}</td>
         <td>{row.treatment}</td>
         <td>{row.count}</td>
         <td>{row.price}</td>
         <td>{row.validDate}</td>
         <td>{row.typeTransaction}</td>
         <td>{row.usedDate}</td>
         <td>{row.email}</td>
       </tr>
        )}
       
        {/* <tr>
          <td><input type="checkbox" /></td>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr> */}
      </table>
    </div>
  );
};

export default CatalogPage;
