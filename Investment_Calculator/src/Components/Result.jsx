import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result({ input }) {
  const updatedInput = {
    initialInvestment: input.initial,
    annualInvestment: input.annual,
    expectedReturn: input.return,
    duration: input.duration
  };
  const annualData = calculateInvestmentResults(updatedInput);
  const initialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;
  return (
    <section >
      <table id="result">
        <thead className="center">
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest(Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map(rowData => {
          const totalInterest = rowData.valueEndOfYear - rowData.annualInvestment * rowData.year - initialInvestment;
          const totalAmountInvested = rowData.valueEndOfYear - totalInterest;
          return(
          <tr key={rowData.year}>
            <td>{rowData.year}</td>
            <td>{formatter.format(rowData.annualInvestment)}</td>
            <td>{formatter.format(rowData.interest)}</td>
            <td>{formatter.format(totalInterest)}</td>
            <td>{formatter.format(totalAmountInvested)}</td>
          </tr>)
        })}
        </tbody>
      </table>
    </section>
  )
}