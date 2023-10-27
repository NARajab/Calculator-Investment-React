import "./Result.css";
import { calculateInvestmentResults, formatter } from "../util/investment";

function Result({ resultInput }) {
  const resultData = calculateInvestmentResults(resultInput);
  const initalInvestment =
    resultData[0].valueEndOfYear -
    resultData[0].interest -
    resultData[0].annualInvestment;

  console.log(resultData);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Tahun</th>
          <th>Nilai Investasi</th>
          <th>Bunga (Tahunan)</th>
          <th>Total Bunga</th>
          <th>Investasi Kapital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((data) => {
          const totalInterest =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initalInvestment;
          const totalAmountinvested = data.valueEndOfYear - totalInterest;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountinvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Result;
