import React from 'react'

const CreateTwo = () => {
  return (
    <div className="containercreate">
        <div className=" text-centercreate ">
        <h1>Create Voucher Form</h1>
        </div>
    <div className="rowcreate ">
        <div className="colcreate">
            <div className="cardcreate">
                <div className="card-bodycreate">
                    <div className="containercreate">
                        <form id="contact-formcreate" >
                            <div className="controlcreate">
                                <div className="rowcreate">
                                    <div className="col-mdcreate">
                                        <div className="form-groupcreate"> <label for="form_name">Date *</label> <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." /> </div>
                                        <div className="form-groupcreate"> <label for="form_name">Number Voucher *</label> <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." /> </div>
                                        <div className="form-groupcreate"> <label for="form_name">Name Buyer *</label> <input id="form_name" type="text" name="name" className="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." /> </div>
                                    </div>
                                    <div className="col-mdcreate">
                                        <div className="form-groupcreate"> <label for="form_lastname">Name Owner *</label> <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." /> </div>
                                        <div className="form-groupcreate"> <label for="form_lastname">Name Employee *</label> <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." /> </div>
                                        <div className="form-groupcreate"> <label for="form_lastname">Treatment *</label> <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." /> </div>
                                    </div>
                                </div>
                                <div className="rowcreate">
                                    <div className="col-mdcreate">
                                        <div className="form-groupcreate"> <label for="form_email">Count *</label> <input id="form_email" type="text" name="name" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." /> </div>
                                        <div className="form-groupcreate"> <label for="form_email">Price *</label> <input id="form_email" type="text" name="name" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." /> </div>
                                        <div className="form-groupcreate"> <label for="form_email">Valid Date *</label> <input id="form_email" type="text" name="name" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." /> </div>
                                    </div>
                                    <div className="col-mdcreate">
                                    <div className="form-groupcreate"> <label for="form_lastname">Type Transaction *</label> <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." /> </div>
                                    <div className="form-groupcreate"> <label for="form_lastname">Used Date *</label> <input id="form_lastname" type="text" name="surname" className="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." /> </div>
                                    <div className="form-groupcreate"> <label for="form_lastname">Email *</label> <input id="form_lastname" type="email" name="surname" className="form-control" placeholder="Please enter your email *" required="required" data-error="Lastname is required." /> </div>
                                    </div>
                                </div>
                                <div className="rowcreate">
                                   
                                    <div className="col-mdcreate"> <input type="submit" className="btn btn-success btn-send pt-2 btn-block " value="Create Voucher" /> </div>
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

export default CreateTwo