import React from 'react'
import Calculator from '../components/Calculator';

const Telecom = () => {
  const [revenue, setRevenue] = React.useState(1);
  const [operating, setOperating] = React.useState(1);
  const [totalSalary, setTotalSalary] = React.useState(1);
  const [consumer, setConsumer] = React.useState(1);
  const [annualCall, setAnnualCall] = React.useState(1);

  const data = require('../assets/model.json').industries[0];
  console.log(data);

  const output = data.outputs;
  const formula = data.static;
  console.log(formula)
  let static_value_dictionary = {}
  // for(let i = 0; i < formula.length; i++){
  //    formula[i].title = formula[i].value;
  // }
  // console.log(formula[0].title)

  let telecom_one37_fraud_savings = 1;
  let telecom_fraud_for_NA = 2;
  let formulam = 'telecom_one37_fraud_savings*telecom_fraud_for_NA*revenue';
  // console.log(eval(formulam));

  return (
    <div>
      <Calculator 
        setRevenue ={setRevenue} 
        setOperating ={setOperating} 
        setTotalSalary ={setTotalSalary} 
        setConsumer ={setConsumer} 
        setAnnualCall ={setAnnualCall} 
        revenue ={revenue} 
        operating ={operating} 
        totalSalary ={totalSalary} 
        consumer ={consumer} 
        annualCall ={annualCall} 
      />
      {/* {output.map(function(object, i){
        return (
          <div key={i}>
            <span>{object.title}</span>
            <span>===Result:{eval(object.formula)}</span>
          </div>
        )
        
    })} */}
            <span>===Result:{eval(formulam)}</span>

    </div>
  )
}

export default Telecom