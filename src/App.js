
import React, { useState }  from "react";
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import data from './data.json';

const PeopleCard = (props) => {
 
  return (
    <Box sx={{display: 'flex', width:'500px', height:'100px', m:"5px"}}>
        <Box sx={{display: 'flex', borderRadius: '2rem 0rem 0rem 2rem', backgroundColor: '#6dce8c', width:'20%'}} alignItems="center" justifyContent="center">
        <Box sx={{ fontWeight: 'bold', fontSize: 38, color:'#ffffff'}}>{props.counter}</Box>
        </Box>
        <Box sx={{display: 'flex', alignItems: 'left', height:'100%', width:'100%', justifyContent: "space-between", flexDirection: 'column', backgroundColor: '#d2e6f9', borderRadius: '0rem 2rem 2rem 0rem'}}>
        <Box sx={{p:1, display: 'flex', flexGrow:1, backgroundColor: '#d2e6f9', alignItems: 'center', borderRadius: '0rem 2rem 0rem 0rem', height:'50%'}}>
            Name: {props.data.name}
        </Box>
        <Box sx={{p:1, display: 'flex', flexGrow:1, alignItems: 'center', backgroundColor: '#ffffff', borderRadius: '0rem 0rem 2rem 0rem', height:'50%'}}>
            Location: {props.data.location}
        </Box>
        </Box>
    </Box>   
  );
};

function App() {

  const [peopleList, setPeopleList] = useState([]);
  const [counter, setCounter] = useState(1);

  const onAddBtnClick = event => {
    if (data[counter] !== undefined){
      setPeopleList(peopleList.concat(<PeopleCard key={counter} data={data[counter]} counter={counter+1} />));
      setCounter(counter + 1);
    } else{
      alert('No more people!');
    };
  };

  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: "space-between"}}>
          <Box sx={{fontWeight: 'bold', color: 'white', fontSize: '28px'}}>PEOPLE DATA</Box>
          <Button sx={{ backgroundColor: '#FF8C00', borderRadius: '5rem', margin: '1.5rem' }} variant="contained"  onClick={onAddBtnClick}>NEXT PERSON</Button>
        </Box> 
        <PeopleCard data={data[0]} counter={1} />       
        {peopleList}
        <Box sx={{color: 'white', fontSize: '20px'}}>CURRENTLY {counter} PEOPLE SHOWING</Box>
    </Box>
  );
}

export default App;
