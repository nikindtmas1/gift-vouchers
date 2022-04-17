import React from 'react'

const CreatePage = () => {


  return (
    <div className="containerCreate"><div className=" text-center mt-5 ">
        <h1>Create Voucher Form</h1>
    </div>
    <div className="row ">
        <div className="col-lg-7 mx-auto">
            <div className="card mt-2 mx-auto p-4 bg-light">
                <div className="card-body bg-light">
                    <div className="containercreate">
                        <form id="contact-form" >
                            <div className="controls">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_name">Date *</label> <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." /> </div>
                                        <div className="form-group"> <label for="form_name">Number Voucher *</label> <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." /> </div>
                                        <div className="form-group"> <label for="form_name">Name Buyer *</label> <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." /> </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_lastname">Name Owner *</label> <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." /> </div>
                                        <div className="form-group"> <label for="form_lastname">Name Employee *</label> <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." /> </div>
                                        <div className="form-group"> <label for="form_lastname">Treatment *</label> <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." /> </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="form-group"> <label for="form_email">Count *</label> <input id="form_email" type="text" name="name" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." /> </div>
                                        <div className="form-group"> <label for="form_email">Price *</label> <input id="form_email" type="text" name="name" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." /> </div>
                                        <div className="form-group"> <label for="form_email">Valid Date *</label> <input id="form_email" type="text" name="name" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." /> </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group"> <label for="form_lastname">Type Transaction *</label> <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." /> </div>
                                    <div className="form-group"> <label for="form_lastname">Used Date *</label> <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." /> </div>
                                    <div className="form-group"> <label for="form_lastname">Email *</label> <input id="form_lastname" type="email" name="surname" className="form-control" placeholder="Please enter your email *" required="required" data-error="Lastname is required." /> </div>
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