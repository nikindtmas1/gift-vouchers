import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className="menu">
        <div className="icon-close">
          <img src="https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=" />
        </div>

        {/* <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Help</a></li>
        <li><a href="#">Contact</a></li>
      </ul> */}
      </div>

      <div className="jumbotron">
        <div className="icon-menu">
          <i className="fa fa-bars"></i>
        </div>
      </div>

      <form className="form" action="#" autocomplete="off">
        <fieldset className="url">
          <input id="url" type="text" name="url" placeholder='Search voucher...' />
          {/* <label for="url"><i className="fa fa-search" aria-hidden="true"></i> Search</label> */}
          <div className="after"></div>
        </fieldset>
        <fieldset className="enterhome">
          <button className='homebutton'>Find</button>
        </fieldset>
      </form>
    </>
  );
}

export default HomePage