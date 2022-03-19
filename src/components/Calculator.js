import React from 'react'
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';



export default function Calculator({setRevenue,setOperating,setTotalSalary,setConsumer,setAnnualCall,revenue,operating,totalSalary,consumer,annualCall}) {
    const data = require('../assets/model.json').industries;
   

    const handleRevenue = (event, newValue) => {
        setRevenue(parseInt(event.target.value));
        if (typeof newValue === 'number') {
            setRevenue(newValue);
        }
    };
    const handleOperating = (event, newValue) => {
        setOperating(parseInt(event.target.value));
        if (typeof newValue === 'number') {
            setOperating(newValue);
        }
    };
    const handleTotalSalary = (event, newValue) => {
        setTotalSalary(parseInt(event.target.value));
        if (typeof newValue === 'number') {
            setTotalSalary(newValue);
        }
    };
    const handleConsumer = (event, newValue) => {
        setConsumer(parseInt(event.target.value));
        if (typeof newValue === 'number') {
            setConsumer(newValue);
        }
    };
    const handleAnnualCall = (event, newValue) => {
        setAnnualCall(parseInt(event.target.value));
        if (typeof newValue === 'number') {
            setAnnualCall(newValue);
        }
    };

    return (
        <div className='calculator-wrapper' >
            <Box sx={{ width: 250, margin:5}}>
                <Typography id="non-linear-slider" gutterBottom>
                    Revenue:{revenue}
                </Typography>
                <Slider
                    value={revenue}
                    min={0}
                    step={1}
                    max={10000}
                    onChange={handleRevenue}
                    valueLabelDisplay="auto"
                    aria-labelledby="linear-slider"
                />
                <TextField
                    id="outlined-number"
                    label="Revenue"
                    type="number"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                        ),
                    }}
                    
                    value={revenue}
                    onChange={handleRevenue}
                />
            </Box>
            <Box sx={{ width: 250, margin:5 }}>
                <Typography id="non-linear-slider" gutterBottom>
                    Operating Expenses:{operating}
                </Typography>
                <Slider
                    value={operating}
                    min={0}
                    step={1}
                    max={10000}
                    onChange={handleOperating}
                    valueLabelDisplay="auto"
                    aria-labelledby="linear-slider"
                />
                <TextField
                    id="outlined-number"
                    label="Operating Expenses"
                    type="number"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                        ),
                    }}
                    
                    value={operating}
                    onChange={handleOperating}
                />
            </Box>
            <Box sx={{ width: 250, margin:5 }}>
                <Typography id="non-linear-slider" gutterBottom>
                   Total Salary Of Employees:{totalSalary}
                </Typography>
                <Slider
                    value={totalSalary}
                    min={0}
                    step={1}
                    max={10000}
                    onChange={handleTotalSalary}
                    valueLabelDisplay="auto"
                    aria-labelledby="linear-slider"
                />
                <TextField
                    id="outlined-number"
                    label="Total Salary"
                    type="number"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">$</InputAdornment>
                        ),
                    }}
                    
                    value={totalSalary}
                    onChange={handleTotalSalary}
                />
            </Box>
            <Box sx={{ width: 250, margin:5 }}>
                <Typography id="non-linear-slider" gutterBottom>
                    Number of Consumers:{consumer}
                </Typography>
                <Slider
                    value={consumer}
                    min={0}
                    step={1}
                    max={10000}
                    onChange={handleConsumer}
                    valueLabelDisplay="auto"
                    aria-labelledby="linear-slider"
                />
                <TextField
                    id="outlined-number"
                    label="Number of Consumers"
                    type="number"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start"><AccountCircle /></InputAdornment>
                        ),
                    }}
                    
                    value={consumer}
                    onChange={handleConsumer}
                />
            </Box>
            <Box sx={{ width: 250, margin:5 }}>
                <Typography id="non-linear-slider" gutterBottom>
                    Number of Annual Calls:{annualCall}
                </Typography>
                <Slider
                    value={annualCall}
                    min={0}
                    step={1}
                    max={10000}
                    onChange={handleAnnualCall}
                    valueLabelDisplay="auto"
                    aria-labelledby="linear-slider"
                />
                <TextField
                    id="outlined-start-adornment"
                    label="Number of Annual Calls"
                    type="number"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start"><AccountCircle /></InputAdornment>
                        ),
                    }}
                    value={annualCall}
                    onChange={handleAnnualCall}
                />
            </Box>
        </div>
    );
}
