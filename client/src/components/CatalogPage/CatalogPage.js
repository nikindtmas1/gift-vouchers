import React from "react";

const CatalogPage = () => {
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
        <tr>
          <td><input type="checkbox" /></td>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td><input type="checkbox" /></td>
          <td>Centro comercial Moctezuma</td>
          <td>Francisco Chang</td>
          <td>Mexico</td>
        </tr>
      </table>
    </div>
  );
};

export default CatalogPage;
