import {useState} from 'react';

export const useLoanCalculator = () => {
  const [quota, setQuota] = useState(0);

  const [redemption, setRedemption] = useState([])

  const calculateQuota = (interestRate: number, mount: number, rate: number) => {

    const i = ((interestRate / 100) / ((360 * 2)) / 365);

    i.toFixed(2);

    const power = Math.pow((1 - i), rate);
    
    const denominator = (1 - power) / i;

    const total = (mount / denominator);

    setQuota(total);

  }

  const calculateRedemption = (interestRate: number, mount: number, rate: number) => {

    const i = interestRate / 100;

    const power = Math.pow((1 + i), rate);

    const numerator = i * power;

    const denominator = power - 1;

    const redemQuota = mount * (numerator / denominator);

    for (let index = 1; index <= rate; index++) {
      const inter = mount * i * index;

      const cap = redemQuota - inter;

      const balance = mount - cap;
      
      const data = {
        capital: cap,
        interes: redemQuota,
        cuota: inter,
        saldo: balance
      }


    }

  };

  return {

    quota,
    calculateQuota,

  };
};
