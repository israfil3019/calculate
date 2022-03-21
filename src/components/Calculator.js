import React from "react";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";

export default function Calculator({
  setRevenue,
  setOperating,
  setTotalSalary,
  setConsumer,
  setAnnualCall,
  revenue,
  operating,
  totalSalary,
  consumer,
  annualCall,
  setClaim,
  claim,
  setEmergency,
  emergency,
  setTransaction,
  transaction,
  setFlight,
  flight,
  setEducation,
  education
}) {
  const handleRevenue = (event) => {
    setRevenue(parseInt(event.target.value));
  };
  const handleOperating = (event) => {
    setOperating(parseInt(event.target.value));
  };
  const handleTotalSalary = (event) => {
    setTotalSalary(parseInt(event.target.value));
  };
  const handleConsumer = (event) => {
    setConsumer(parseInt(event.target.value));
  };
  const handleAnnualCall = (event) => {
    setAnnualCall(parseInt(event.target.value));
  };
  const handleClaim = (event) => {
    setClaim(parseInt(event.target.value));
  };
  const handleEmergency = (event) => {
    setEmergency(parseInt(event.target.value));
  };
  const handleTransaction = (event) => {
    setTransaction(parseInt(event.target.value));
  };
  const handleFlight = (event) => {
    setFlight(parseInt(event.target.value));
  };
  const handleEducation = (event) => {
    setEducation(parseInt(event.target.value));
  };

  return (
    <div className="calculator-wrapper">
      <Box sx={{ width: 250, margin: 5 }}>
        <Typography id="non-linear-slider" gutterBottom>
          Revenue:{revenue}
        </Typography>
        <Slider
          value={revenue}
          min={1}
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
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          value={revenue}
          onChange={handleRevenue}
        />
      </Box>
      <Box sx={{ width: 250, margin: 5 }}>
        <Typography id="non-linear-slider" gutterBottom>
          Operating Expenses:{operating}
        </Typography>
        <Slider
          value={operating}
          min={1}
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
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          value={operating}
          onChange={handleOperating}
        />
      </Box>
      <Box sx={{ width: 250, margin: 5 }}>
        <Typography id="non-linear-slider" gutterBottom>
          Total Salary Of Employees:{totalSalary}
        </Typography>
        <Slider
          value={totalSalary}
          min={1}
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
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          value={totalSalary}
          onChange={handleTotalSalary}
        />
      </Box>
      <Box sx={{ width: 250, margin: 5 }}>
        <Typography id="non-linear-slider" gutterBottom>
          Number of Consumers:{consumer}
        </Typography>
        <Slider
          value={consumer}
          min={1}
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
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          value={consumer}
          onChange={handleConsumer}
        />
      </Box>
      <Box id='telecom-last' sx={{ width: 250, margin: 5 }}>
        <Typography id="non-linear-slider" gutterBottom>
          Number of Annual Calls:{annualCall}
        </Typography>
        <Slider
          value={annualCall}
          min={1}
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
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          value={annualCall}
          onChange={handleAnnualCall}
        />
      </Box>

      <Box id='health-last' sx={{ width: 250, margin: 5 }}>
        <Typography id="non-linear-slider" gutterBottom>
            Number of Emergency Visits:{emergency}
        </Typography>
        <Slider
          value={emergency}
          min={1}
          step={1}
          max={10000}
          onChange={handleEmergency}
          valueLabelDisplay="auto"
          aria-labelledby="linear-slider"
        />
        <TextField
          id="outlined-start-adornment"
          label="Number of Emergency Visits"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          value={emergency}
          onChange={handleEmergency}
        />
      </Box>
      <Box id='insurance-last' sx={{ width: 250, margin: 5 }}>
        <Typography id="non-linear-slider" gutterBottom>
          Number of Claims:{claim}
        </Typography>
        <Slider
          value={claim}
          min={1}
          step={1}
          max={10000}
          onChange={handleClaim}
          valueLabelDisplay="auto"
          aria-labelledby="linear-slider"
        />
        <TextField
          id="outlined-start-adornment"
          label="Number of Claims"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          value={claim}
          onChange={handleClaim}
        />
      </Box>
      <Box id='travel-last' sx={{ width: 250, margin: 5 }}>
        <Typography id="non-linear-slider" gutterBottom>
            Number of Passenger Flights:{flight}
        </Typography>
        <Slider
          value={flight}
          min={1}
          step={1}
          max={10000}
          onChange={handleFlight}
          valueLabelDisplay="auto"
          aria-labelledby="linear-slider"
        />
        <TextField
          id="outlined-start-adornment"
          label="Number of Passenger Flights"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          value={flight}
          onChange={handleFlight}
        />
      </Box>
      <Box id='finance-last' sx={{ width: 250, margin: 5 }}>
        <Typography id="non-linear-slider" gutterBottom>
          Number of Transactions:{transaction}
        </Typography>
        <Slider
          value={transaction}
          min={1}
          step={1}
          max={10000}
          onChange={handleTransaction}
          valueLabelDisplay="auto"
          aria-labelledby="linear-slider"
        />
        <TextField
          id="outlined-start-adornment"
          label="Number of Transactions"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          value={transaction}
          onChange={handleTransaction}
        />
      </Box>
      <Box id='education-last' sx={{ width: 250, margin: 5 }}>
        <Typography id="non-linear-slider" gutterBottom>
          Number of Educations:{education}
        </Typography>
        <Slider
          value={education}
          min={1}
          step={1}
          max={10000}
          onChange={handleEducation}
          valueLabelDisplay="auto"
          aria-labelledby="linear-slider"
        />
        <TextField
          id="outlined-start-adornment"
          label="Number of Educations"
          type="number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          value={education}
          onChange={handleEducation}
        />
      </Box>
    </div>
  );
}
