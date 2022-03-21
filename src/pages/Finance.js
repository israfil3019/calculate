import React from "react";
import Calculator from "../components/Calculator";

const Finance = () => {
  const [revenue, setRevenue] = React.useState(1);
  const [operating_expenses, setOperating] = React.useState(1);
  const [total_salary_of_employees, setTotalSalary] = React.useState(1);
  const [num_of_consumers, setConsumer] = React.useState(1);
  const [num_of_transactions, setTransaction] = React.useState(1);

  const data = require("../assets/model.json").industries[4];

  const output = data.outputs;
  const formula = data.static;

  let static_value_dictionary = {};

  for (let i = 0; i < formula.length; i++) {
    static_value_dictionary[formula[i].title] = formula[i].value;
  }
  console.log(static_value_dictionary);
  return (
    <div className="finance">
      <h1>Finance</h1>
      <Calculator
        setRevenue={setRevenue}
        setOperating={setOperating}
        setTotalSalary={setTotalSalary}
        setConsumer={setConsumer}
        setTransaction={setTransaction}
        revenue={revenue}
        operating={operating_expenses}
        totalSalary={total_salary_of_employees}
        consumer={num_of_consumers}
        transaction={num_of_transactions}
      />
      <section className="output-container">
        {output.map(function (object, i) {
          return (
            <div className="output" key={i}>
              <span>{object.title}</span>
              <span>{parseFloat(eval(object.formula)).toFixed(2)}</span>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Finance;
