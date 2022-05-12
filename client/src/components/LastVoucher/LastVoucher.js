import React, {useState, useEffect} from 'react';

import * as services from '../Services/data';

const LastVoucher = () => {


    const [vouchers, setVaouchers] = useState([]);
    const [searchVoucher, setSearchVoucher] = useState([]);
    const [isVoucher, setIsVoucher] = useState(false);

     useEffect(() => {

    services.getAll()
    .then((result) => setVaouchers(result))
    .catch(err => alert(err.message))  
    },[null]);

    
    const onClick = (e) => {
        e.preventDefault();

        const foundVoucher = vouchers.filter((x) => x.numVoucher === vouchers.length)
        setSearchVoucher(foundVoucher)

        setIsVoucher(true)
        
    }

  return (
      <div className='searchDiv'>
            <div className="row" onClick={onClick}>       
                        <div className="col-md-12">
                             <input type="submit" className="btnSearch" value="Find" /> 
                        </div>
                    </div>
      {isVoucher ?
        <div className='searchcontainer'>
               
            <form  className='formSearch'>
       
                <div className='controls'>
                      
                <div className='row'>
                    <div className="col-md-6">
                        <div className="form-group"> <label for="form_name">Date *</label> <input id="form_name" type="text" name="date" className="form-control"  required="required" data-error="Date is required." defaultValue={searchVoucher[0].date} ></input> </div>
                        <div className="form-group"> <label for="form_name">Number Voucher *</label> <input id="form_name" type="text" name="numberVoucher" className="form-control" placeholder="Enter Number Voucher *" required="required" data-error="Number Voucher is required." defaultValue={searchVoucher[0].numVoucher} /> </div>
                        <div className="form-group"> <label for="form_name">Name Buyer *</label> <input id="form_name" type="text" name="nameBuyer" className="form-control" placeholder="Enter Name Buyer *" required="required" data-error="Name Buyer is required." defaultValue={searchVoucher[0].nameBuyer} /> </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group"> <label for="form_lastname">Name Owner *</label> <input id="form_lastname" type="text" name="nameOwner" className="form-control" placeholder="Enter Name Owner *" required="required" data-error="Name Owner is required." defaultValue={searchVoucher[0].nameOwn} /> </div>
                        <div className="form-group"> <label for="form_lastname">Name Employee *</label> <input id="form_lastname" type="text" name="nameEmployee" className="form-control" placeholder="Enter Name Employee *" required="required" data-error="Name Employee is required." defaultValue={searchVoucher[0].nameEmployee} /> </div>
                        <div className="form-group"> <label for="form_lastname">Treatment *</label> <input id="form_lastname" type="text" name="nameTreatment" className="form-control" placeholder="Enter Treatment *" required="required" data-error="Treatment is required." defaultValue={searchVoucher[0].treatment} /> </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group"> <label for="form_email">Count *</label> <input id="form_email" type="text" name="count" className="form-control" placeholder="Please enter Count *" required="required" data-error="Count is required." defaultValue={searchVoucher[0].count} /> </div>
                        <div className="form-group"> <label for="form_email">Price *</label> <input id="form_email" type="text" name="price" className="form-control" placeholder="Please enter Price *" required="required" data-error="Price is required." defaultValue={searchVoucher[0].price} /> </div>
                        <div className="form-group"> <label for="form_email">Valid Date *</label> <input id="form_email" type="text" name="validDate" className="form-control" placeholder="Enter valid date *" required="required" data-error="Valid date is required." defaultValue={searchVoucher[0].validDate} /> </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group"> <label for="form_lastname">Type Transaction *</label> <input id="form_lastname" type="text" name="typeTransaction" className="form-control" placeholder="Enter Type Transaction *" required="required" data-error="Type Transaction is required." defaultValue={searchVoucher[0].typeTransaction}/> </div>
                        <div className="form-group"> <label for="form_lastname">Used Date *</label> <input id="form_lastname" type="text" name="usedDate" className="form-control" placeholder="Please enter Used Date *" required="required" data-error="Used Date is required." defaultValue={searchVoucher[0].usedDate} /> </div>
                        <div className="form-group"> <label for="form_lastname">Email *</label> <input id="form_lastname" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." defaultValue={searchVoucher[0].email} /> </div>
                    </div>
                </div>   
                </div>
            </form>
        </div>
        :null}
    </div>
   
  )
}

export default LastVoucher