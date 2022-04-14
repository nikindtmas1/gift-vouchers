import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';


  
  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

const Navigation = () => {

    

    //const [value, setValue] = React.useState('one');

//   const handleChange = (event: React.SyntheticEvent, newValue: string) => {
//     setValue(newValue);

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs  aria-label="nav tabs example">
        <LinkTab label="Page One" href="/drafts" />
        <LinkTab label="Page Two" href="/trash" />
        <LinkTab label="Page Three" href="/spam" />
      </Tabs>
    </Box>
  )
}

export default Navigation