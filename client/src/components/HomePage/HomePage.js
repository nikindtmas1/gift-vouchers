import React, {useState} from 'react';
import { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import AuthCtx from '../../contexts/AuthCtx';
import Checkbox from '@mui/material/Checkbox';

//import SearchPage from '../SearchPage/SearchPage';

import * as services from '../Services/data';



const HomePage = () => {

  let value = useContext(AuthCtx);
  let vouchers = value.vouchers;

  const history = useHistory();
 
  const [searchVoucher, setSearchVoucher] = useState();
  const [isVoucher, setIsVoucher] = useState(false);

  const [checked, setChecked] = useState(true);

const handleChange = (e) => {
  setChecked(e.target.checked);
};

  const onSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let numberVoucher = formData.get('numVoucher');
    //let ownerName = formData.get('ownName');

    if(numberVoucher !== '' && numberVoucher !== undefined){
      
      let foundVoucher = vouchers.filter((x) => x.numVoucher === Number(numberVoucher));
     
      setSearchVoucher(foundVoucher[0]);

      setIsVoucher(true)
      
    }    

  }

  const editSubmite = (e) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    let date = formData.get('date').trim();
    let numVoucher = Number(formData.get('numberVoucher'));
    let nameBuyer = formData.get('nameBuyer').trim();
    let nameOwn = formData.get('nameOwner').trim();
    let nameEmployee = formData.get('nameEmployee').trim();
    let treatment = formData.get('nameTreatment').trim();
    let count = Number(formData.get('count'));
    let price = Number(formData.get('price'));
    let validDate = formData.get('validDate').trim();
    let typeTransaction = formData.get('typeTransaction').trim();
    let usedDate = formData.get('usedDate').trim();
    let email = formData.get('email').trim();

    let data = {date, numVoucher, nameBuyer, nameOwn, nameEmployee,
       treatment, count, price, validDate, typeTransaction, usedDate, email};
     console.log(data);
    services.editVoucher(searchVoucher._id, data)
    .then(() => {history.push('/')})
    .catch(error => alert(error.message))
   
  }



  return (
    <>
      <div className="menu">
        <div className="homeimg">
          <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" alt='' />
        </div>

       
      </div>



      <form onSubmit={onSubmit} className="form" action="#" autocomplete="off">
        <fieldset className="url">
          <input id="url" type="text" name="numVoucher" placeholder='Search by number...' />
          {/* <label for="url"><i className="fa fa-search" aria-hidden="true"></i> Search</label> */}
          {/* <div className="after"></div> */}
        </fieldset>
        <fieldset className="enterhome">
          <button className='homebutton'>Find</button>
        </fieldset>
        {/* <fieldset className="url">
          <input id="url" type="text" name="ownName" placeholder='Search by Owner Name...' />
          <label for="url"><i className="fa fa-search" aria-hidden="true"></i> Search</label>
          <div className="after"></div>
        </fieldset>
        <fieldset className="enterhome">
          <button className='homebutton'>Find</button>
        </fieldset> */}
        {/* <fieldset className="url">
          <input id="url" type="text" name="url" placeholder='Search voucher...' />
        </fieldset>
        <fieldset className="enterhome">
          <button className='homebutton'>Find</button>
        </fieldset> */}
      </form>
      {isVoucher ?
      <div className='searchDiv'>
      <div className='searchcontainer'>
          {/* <div className=" text-center mt-5 ">
              <h1>Search Page</h1>
          </div> */}
          <form onSubmit={editSubmite} className='formSearch' id="contact-form" method='POST'>
              <div className='controls'>
              <div className='row'>
                  <div className="col-md-6">
                      <div className="form-group"> <label for="form_name">Date *</label><fieldset> <input id="form_name" type="text" name="date" className="form-control" defaultValue={searchVoucher.date}  required="required" data-error="Date is required." /></fieldset> </div>
                      <div className="form-group"> <label for="form_name">Number Voucher *</label><fieldset> <input id="form_name" type="text" name="numberVoucher" className="form-control" defaultValue={searchVoucher.numVoucher} placeholder="Enter Number Voucher *" required="required" data-error="Number Voucher is required." /></fieldset> </div>
                      <div className="form-group"> <label for="form_name">Name Buyer *</label><fieldset> <input id="form_name" type="text" name="nameBuyer" className="form-control" defaultValue={searchVoucher.nameBuyer} placeholder="Enter Name Buyer *" required="required" data-error="Name Buyer is required." /></fieldset> </div>
                  </div>
                  <div className="col-md-6">
                      <div className="form-group"> <label for="form_lastname">Name Owner *</label><fieldset> <input id="form_lastname" type="text" name="nameOwner" className="form-control" defaultValue={searchVoucher.nameOwn} placeholder="Enter Name Owner *" required="required" data-error="Name Owner is required." /></fieldset> </div>
                      <div className="form-group"> <label for="form_lastname">Name Employee *</label><fieldset> <input id="form_lastname" type="text" name="nameEmployee" className="form-control" defaultValue={searchVoucher.nameEmployee} placeholder="Enter Name Employee *" required="required" data-error="Name Employee is required." /></fieldset> </div>
                      <div className="form-group"> <label for="form_lastname">Treatment *</label><fieldset> <input id="form_lastname" type="text" name="nameTreatment" className="form-control" defaultValue={searchVoucher.treatment} placeholder="Enter Treatment *" required="required" data-error="Treatment is required." /></fieldset> </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-6">
                      <div className="form-group"> <label for="form_email">Count *</label><fieldset> <input id="form_email" type="text" name="count" className="form-control" defaultValue={searchVoucher.count} placeholder="Please enter Count *" required="required" data-error="Count is required." /></fieldset> </div>
                      <div className="form-group"> <label for="form_email">Price *</label><fieldset> <input id="form_email" type="text" name="price" className="form-control" defaultValue={searchVoucher.price} placeholder="Please enter Price *" required="required" data-error="Price is required." /></fieldset> </div>
                      <div className="form-group"> <label for="form_email">Valid Date *</label><fieldset> <input id="form_email" type="text" name="validDate" className="form-control" defaultValue={searchVoucher.validDate} placeholder="Enter valid date *" required="required" data-error="Valid date is required." /></fieldset> </div>
                  </div>
                  <div className="col-md-6">
                      <div className="form-group"> <label for="form_lastname">Type Transaction *</label><fieldset> <input id="form_lastname" type="text" name="typeTransaction" className="form-control" defaultValue={searchVoucher.typeTransaction} placeholder="Enter Type Transaction *" required="required" data-error="Type Transaction is required." /></fieldset> </div>
                      <div className="form-group"> <label for="form_lastname">Used Date *</label><fieldset> <input id="form_lastname" type="text" name="usedDate" className="form-control" defaultValue={searchVoucher.usedDate} placeholder="Please enter Used Date *" required="required" data-error="Used Date is required." /></fieldset> </div>
                      <div className="form-group"> <label for="form_lastname">Email *</label><fieldset> <input id="form_lastname" type="email" name="email" className="form-control" defaultValue={searchVoucher.email} placeholder="Please enter your email *" required="required" data-error="Valid email is required." /></fieldset> </div>
                  </div>
              </div>
              <div className="row">       
                  <div className="col-md-12">
                       <input type="submit" className="btnSearch" value="Edit" /> 
                  </div>
              </div>
              
              </div>
          </form>
          <div style={{'margin': '20px'}}>
            <label>Used Voucher</label>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          </div>
          
      </div>
      
  </div>
  : null
    }
      
    </>
  );
}

export default HomePage