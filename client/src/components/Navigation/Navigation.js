import * as React from 'react';
import {Link} from 'react-router-dom';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';


  
  // function LinkTab(props) {
  //   return (
  //     <Tab
  //       component="a"
  //       onClick={(event) => {
  //         event.preventDefault();
  //       }}
  //       {...props}
  //     />
  //   );
  // }

const Navigation = () => {

    

    //const [value, setValue] = React.useState('one');

//   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//     setValue(newValue);

  return (
    // <Box sx={{ width: '100%' }}>
    //   <Tabs  aria-label="nav tabs example">

    //   </Tabs>
    // </Box>

    <ul className='navbar'>
      <div></div>
      <div className='navdiv'>
      <li className='navli'>
        <Link to="/home">Home Page</Link>
      </li>
      </div>
      <div className='navdiv'>
      
      <li className='navli'>
        <Link to="/create">Create Page</Link>
      </li>
     
      </div>
      <div className='navdiv'>
      <li className='navli'>
        <Link to="/login">Login</Link>
      </li>
      </div>
      <div></div>
    </ul>
  );
}

export default Navigation