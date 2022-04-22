import React from 'react';
import { useContext } from 'react';
import AuthCtx from '../../contexts/AuthCtx';
//import SearchPage from '../SearchPage/SearchPage';


const HomePage = () => {

  let value = useContext(AuthCtx);
  let vouchers = value.vouchers;

  let searchVoucher;
 
  //let voucherData
  // const [searchVoucher, setSearchVoucher] = useState('');
  // const [voucherData, setVoucherData] = useState({});

  const onSubmit = (e) => {
    // e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let numberVoucher = formData.get('numVoucher');
    //let ownerName = formData.get('ownName');

    if(numberVoucher !== '' && numberVoucher !== undefined){
      
      let foundVoucher = vouchers.filter((x) => x.numVoucher === Number(numberVoucher));
      searchVoucher = foundVoucher;

      console.log(searchVoucher);
     
        console.log(searchVoucher[0].email);
    }
    // if(ownerName !== '' && ownerName !== undefined){
    //   searchVoucher = ownerName;
    //   let foundVoucher = value.filter((x) => x.numVoucher === searchVoucher);

    //   console.log(foundVoucher);
      
    // };

    

  }

//   async function getAll(query){

//     let results = await Cube.find({}).lean();
 
//     if(query.search){
//       results = results.filter((x) => x.name.toLowerCase().includes(query.search));
//     };
 
//     if(query.from){
//         results = results.filter((x) => Number(x.difficultyLevel) >= query.from);
//     }
 
//     if(query.to){
//         results = results.filter((x) => Number(x.difficultyLevel) <= query.to);
//     }
 
 
//     return results;
//  }

  return (
    <>
      <div className="menu">
        <div className="homeimg">
          <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" alt='' />
        </div>

        {/* <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Contact</a></li>
      </ul> */}
      </div>

      {/* <div className="jumbotron">
        <div className="icon-menu">
          <i className="fa fa-bars"></i>
        </div>
      </div> */}

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
      {searchVoucher ?
      <div className='searchDiv'>
      <div className='searchcontainer'>
          {/* <div className=" text-center mt-5 ">
              <h1>Search Page</h1>
          </div> */}
          <form className='formSearch'>
              <div className='controls'>
              <div className='row'>
                  <div className="col-md-6">
                      <div className="form-group"> <label for="form_name">Date *</label> <input id="form_name" type="text" name="date" className="form-control"   required="required" data-error="Date is required." ></input> </div>
                      <div className="form-group"> <label for="form_name">Number Voucher *</label> <input id="form_name" type="text" name="numberVoucher" className="form-control" placeholder="Enter Number Voucher *" required="required" data-error="Number Voucher is required." /> </div>
                      <div className="form-group"> <label for="form_name">Name Buyer *</label> <input id="form_name" type="text" name="nameBuyer" className="form-control" placeholder="Enter Name Buyer *" required="required" data-error="Name Buyer is required." /> </div>
                  </div>
                  <div className="col-md-6">
                      <div className="form-group"> <label for="form_lastname">Name Owner *</label> <input id="form_lastname" type="text" name="nameOwner" className="form-control" placeholder="Enter Name Owner *" required="required" data-error="Name Owner is required." /> </div>
                      <div className="form-group"> <label for="form_lastname">Name Employee *</label> <input id="form_lastname" type="text" name="nameEmployee" className="form-control" placeholder="Enter Name Employee *" required="required" data-error="Name Employee is required." /> </div>
                      <div className="form-group"> <label for="form_lastname">Treatment *</label> <input id="form_lastname" type="text" name="nameTreatment" className="form-control" placeholder="Enter Treatment *" required="required" data-error="Treatment is required." /> </div>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-6">
                      <div className="form-group"> <label for="form_email">Count *</label> <input id="form_email" type="text" name="count" className="form-control" placeholder="Please enter Count *" required="required" data-error="Count is required." /> </div>
                      <div className="form-group"> <label for="form_email">Price *</label> <input id="form_email" type="text" name="price" className="form-control" placeholder="Please enter Price *" required="required" data-error="Price is required." /> </div>
                      <div className="form-group"> <label for="form_email">Valid Date *</label> <input id="form_email" type="text" name="validDate" className="form-control" placeholder="Enter valid date *" required="required" data-error="Valid date is required." /> </div>
                  </div>
                  <div className="col-md-6">
                      <div className="form-group"> <label for="form_lastname">Type Transaction *</label> <input id="form_lastname" type="text" name="typeTransaction" className="form-control" placeholder="Enter Type Transaction *" required="required" data-error="Type Transaction is required." /> </div>
                      <div className="form-group"> <label for="form_lastname">Used Date *</label> <input id="form_lastname" type="text" name="usedDate" className="form-control" placeholder="Please enter Used Date *" required="required" data-error="Used Date is required." /> </div>
                      <div className="form-group"> <label for="form_lastname">Email *</label> <input id="form_lastname" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." /> </div>
                  </div>
              </div>
              <div className="row">       
                  <div className="col-md-12">
                       <input type="submit" className="btnSearch" value="Edit" /> 
                  </div>
              </div>
              
              </div>
          </form>
      </div>
  </div>
  : null
    }
      
    </>
  );
}

export default HomePage