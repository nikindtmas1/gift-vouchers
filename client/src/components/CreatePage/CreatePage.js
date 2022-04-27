import React from 'react';
import * as services from '../Services/data';
import {useHistory} from 'react-router-dom';

const CreatePage = () => {

    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let date = formData.get("date").trim();
        let numVoucher = Number(formData.get("numberVoucher"));
        let nameBuyer = formData.get("nameBuyer").trim();
        let nameOwn = formData.get("nameOwner").trim();
        let nameEmployee = formData.get("nameEmployee").trim();
        let treatment = formData.get("nameTreatment").trim();
        let count = Number(formData.get("count"));
        let price = Number(formData.get("price"));
        let validDate = formData.get("validDate").trim();
        let typeTransaction = formData.get("typeTransaction").trim();
        let usedDate = formData.get("usedDate").trim();
        let checked = false;
        let email = formData.get("email").trim();

        const data = { date, numVoucher, nameBuyer, nameOwn,
            nameEmployee, treatment, count, price, validDate,
            typeTransaction, usedDate, checked, email }

        services.createVoucher(data)
            .then(history.push('/home'))
            .catch(err => alert(err.message))

        // console.log(date, numberVoucher, nameBuyer, nameOwner,
        //      nameEmployee, nameTreatment, count, price, validDate,
        //      typeTransaction, usedDate, email);
    }

  return (
    <div className="containerCreate"><div className=" text-center mt-5 ">
        <h1>Create Voucher Form</h1>
    </div>
    <div className="row ">
        <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
                <div className="card-body bg-light">
                    <div className="containercreate">
                        <form id="contact-form" method='POST' onSubmit={onSubmit}>
                            <div className="controls">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_name">Date *</label> <input id="form_name" type="text" name="date" className="form-control" placeholder="Please enter Date *" required="required" data-error="Firstname is required." /> </div>
                                        <div className="form-group"> <label for="form_name">Number Voucher *</label> <input id="form_name" type="text" name="numberVoucher" className="form-control" placeholder="Enter Number Voucher *" required="required" data-error="Firstname is required." /> </div>
                                        <div className="form-group"> <label for="form_name">Name Buyer *</label> <input id="form_name" type="text" name="nameBuyer" className="form-control" placeholder="Enter Name Buyer *" required="required" data-error="Firstname is required." /> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_lastname">Name Owner *</label> <input id="form_lastname" type="text" name="nameOwner" className="form-control" placeholder="Enter Name Owner *" required="required" data-error="Lastname is required." /> </div>
                                        <div className="form-group"> <label for="form_lastname">Name Employee *</label> <input id="form_lastname" type="text" name="nameEmployee" className="form-control" placeholder="Enter Name Employee *" required="required" data-error="Lastname is required." /> </div>
                                        <div className="form-group"> <label for="form_lastname">Treatment *</label> <input id="form_lastname" type="text" name="nameTreatment" className="form-control" placeholder="Enter Treatment *" required="required" data-error="Lastname is required." /> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_email">Count *</label> <input id="form_email" type="text" name="count" className="form-control" placeholder="Please enter Count *" required="required" data-error="Valid email is required." /> </div>
                                        <div className="form-group"> <label for="form_email">Price *</label> <input id="form_email" type="text" name="price" className="form-control" placeholder="Please enter Price *" required="required" data-error="Valid email is required." /> </div>
                                        <div className="form-group"> <label for="form_email">Valid Date *</label> <input id="form_email" type="text" name="validDate" className="form-control" placeholder="Enter valid date *" required="required" data-error="Valid email is required." /> </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group"> <label for="form_lastname">Type Transaction *</label> <input id="form_lastname" type="text" name="typeTransaction" className="form-control" placeholder="Enter Type Transaction *" required="required" data-error="Lastname is required." /> </div>
                                    <div className="form-group"> <label for="form_lastname">Used Date *</label> <input id="form_lastname" type="text" name="usedDate" className="form-control" placeholder="Please enter Used Date *" required="required" data-error="Lastname is required." /> </div>
                                    <div className="form-group"> <label for="form_lastname">Email *</label> <input id="form_lastname" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Lastname is required." /> </div>
                                    </div>
                                </div>
                                <div className="row">
                                   
                                    <div className="col-md-12"> <input type="submit" className="btn btn-success btn-send pt-2 btn-block " value="Create Voucher" /> </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
        </div> 
    </div>
</div>
  )
}

export default CreatePage