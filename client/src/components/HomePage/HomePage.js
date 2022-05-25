import React, { useState } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthCtx from "../../contexts/AuthCtx";
import Checkbox from "@mui/material/Checkbox";

import * as services from "../Services/data";

const HomePage = () => {
  let value = useContext(AuthCtx);
  let roles = value.user.userRoles;

  const history = useHistory();

  const [searchVoucher, setSearchVoucher] = useState();
  const [isVoucher, setIsVoucher] = useState(false);

  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData(e.currentTarget);
    let numberVoucher = formData.get("numVoucher");

    if (numberVoucher !== "" && numberVoucher !== undefined) {
      try {
        let currentVoucher = await services.getByNumber(numberVoucher);

        if (currentVoucher.checked === true) {
          setChecked(true);
        }

        window.scroll(10, 100);

        setSearchVoucher(currentVoucher);

        setIsVoucher(true);
      } catch (error) {
        alert(error.message);
        throw error;
      }
    }
  };

  const editSubmite = (e) => {
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

    let email = formData.get("email").trim();

    let data = {
      date,
      numVoucher,
      nameBuyer,
      nameOwn,
      nameEmployee,
      treatment,
      count,
      price,
      validDate,
      typeTransaction,
      usedDate,
      checked,
      email,
    };

    services
      .editVoucher(searchVoucher._id, data)
      .then(() => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const onDelete = (e) => {
    e.preventDefault();
    services.deleteVoucher(searchVoucher._id)
    .then(() => {
      history.push("/home")
    })
    .catch((error) => alert(error.message));
  };

  return (
    <>
      {isVoucher ? (
        <div className="searchDiv">
          <div className="searchcontainer">
            <form
              onSubmit={editSubmite}
              className="formSearch"
              id="contact-form"
              method="POST"
            >
              <div className="controls">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      {" "}
                      <label for="form_name">Date *</label>
                      <fieldset>
                        {" "}
                        <input
                          id="form_name"
                          type="text"
                          name="date"
                          className="form-control"
                          defaultValue={searchVoucher.date}
                          required="required"
                          data-error="Date is required."
                        />
                      </fieldset>{" "}
                    </div>
                    <div className="form-group">
                      {" "}
                      <label for="form_name">Number Voucher *</label>
                      <fieldset>
                        {" "}
                        <input
                          id="form_name"
                          type="text"
                          name="numberVoucher"
                          className="form-control"
                          defaultValue={searchVoucher.numVoucher}
                          placeholder="Enter Number Voucher *"
                          required="required"
                          data-error="Number Voucher is required."
                        />
                      </fieldset>{" "}
                    </div>
                    <div className="form-group">
                      {" "}
                      <label for="form_name">Name Buyer *</label>
                      <fieldset>
                        {" "}
                        <input
                          id="form_name"
                          type="text"
                          name="nameBuyer"
                          className="form-control"
                          defaultValue={searchVoucher.nameBuyer}
                          placeholder="Enter Name Buyer *"
                          required="required"
                          data-error="Name Buyer is required."
                        />
                      </fieldset>{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      {" "}
                      <label for="form_lastname">Name Owner *</label>
                      <fieldset>
                        {" "}
                        <input
                          id="form_lastname"
                          type="text"
                          name="nameOwner"
                          className="form-control"
                          defaultValue={searchVoucher.nameOwn}
                          placeholder="Enter Name Owner *"
                          required="required"
                          data-error="Name Owner is required."
                        />
                      </fieldset>{" "}
                    </div>
                    <div className="form-group">
                      {" "}
                      <label for="form_lastname">Name Employee *</label>
                      <fieldset>
                        {" "}
                        <input
                          id="form_lastname"
                          type="text"
                          name="nameEmployee"
                          className="form-control"
                          defaultValue={searchVoucher.nameEmployee}
                          placeholder="Enter Name Employee *"
                          required="required"
                          data-error="Name Employee is required."
                        />
                      </fieldset>{" "}
                    </div>
                    <div className="form-group">
                      {" "}
                      <label for="form_lastname">Treatment *</label>
                      <fieldset>
                        {" "}
                        <input
                          id="form_lastname"
                          type="text"
                          name="nameTreatment"
                          className="form-control"
                          defaultValue={searchVoucher.treatment}
                          placeholder="Enter Treatment *"
                          required="required"
                          data-error="Treatment is required."
                        />
                      </fieldset>{" "}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      {" "}
                      <label for="form_email">Count *</label>
                      <fieldset>
                        {" "}
                        <input
                          id="form_email"
                          type="text"
                          name="count"
                          className="form-control"
                          defaultValue={searchVoucher.count}
                          placeholder="Please enter Count *"
                          required="required"
                          data-error="Count is required."
                        />
                      </fieldset>{" "}
                    </div>
                    <div className="form-group">
                      {" "}
                      <label for="form_email">Price *</label>
                      <fieldset>
                        {" "}
                        <input
                          id="form_email"
                          type="text"
                          name="price"
                          className="form-control"
                          defaultValue={searchVoucher.price}
                          placeholder="Please enter Price *"
                          required="required"
                          data-error="Price is required."
                        />
                      </fieldset>{" "}
                    </div>
                    <div className="form-group">
                      {" "}
                      <label for="form_email">Valid Date *</label>
                      <fieldset>
                        {" "}
                        <input
                          id="form_email"
                          type="text"
                          name="validDate"
                          className="form-control"
                          defaultValue={searchVoucher.validDate}
                          placeholder="Enter valid date *"
                          required="required"
                          data-error="Valid date is required."
                        />
                      </fieldset>{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      {" "}
                      <label for="form_lastname">Type Transaction *</label>
                      <fieldset>
                        {" "}
                        <input
                          id="form_lastname"
                          type="text"
                          name="typeTransaction"
                          className="form-control"
                          defaultValue={searchVoucher.typeTransaction}
                          placeholder="Enter Type Transaction *"
                          required="required"
                          data-error="Type Transaction is required."
                        />
                      </fieldset>{" "}
                    </div>
                    <div className="form-group">
                      {" "}
                      <label for="form_lastname">Used Date *</label>
                      <fieldset>
                        {" "}
                        <input
                          id="form_lastname"
                          type="text"
                          name="usedDate"
                          className="form-control"
                          defaultValue={searchVoucher.usedDate}
                          placeholder="Please enter Used Date *"
                          required="required"
                          data-error="Used Date is required."
                        />
                      </fieldset>{" "}
                    </div>
                    <div className="form-group">
                      {" "}
                      <label for="form_lastname">Email *</label>
                      <fieldset>
                        {" "}
                        <input
                          id="form_lastname"
                          type="email"
                          name="email"
                          className="form-control"
                          defaultValue={searchVoucher.email}
                          placeholder="Please enter your email *"
                          required="required"
                          data-error="Valid email is required."
                        />
                      </fieldset>{" "}
                    </div>
                  </div>
                </div>
                {roles === "admin" ? (
                  <div className="row-btn">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          className="btnSearch"
                          value="Edit"
                        />
                      </div>
                      <div className="form-group" onClick={onDelete}>
                        <input
                          type="submit"
                          className="btnSearch"
                          value="Delete"
                        />
                      </div>
                    </div>
                  </div>
                ) : null}

                {roles === "editor" ? (
                  <div className="row-btn">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="submit"
                          className="btnSearch"
                          value="Edit"
                        />
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>

              <div style={{ margin: "20px" }}>
                <label>Used Voucher</label>
                <Checkbox
                  checked={checked}
                  onChange={
                    roles === "admin" || roles === "editor"
                      ? handleChange
                      : null
                  }
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <>
          <form
            onSubmit={onSubmit}
            className="form"
            action="#"
            autocomplete="off"
          >
            <fieldset className="url">
              <input
                id="url"
                type="text"
                name="numVoucher"
                placeholder="Search by number..."
              />
            </fieldset>
            <fieldset className="enterhome">
              <button className="homebutton">Find</button>
            </fieldset>
          </form>
          <div className="menu">
            <div className="homeimg">
              <img
                src="images/gift-voucher-3-scaled.jpg"
                alt=""
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HomePage;
