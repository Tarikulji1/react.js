import { useState } from 'react'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'



function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
    <div className='w-full h-screen bg-cover bg-center flex justify-center align-middle' style={{backgroundImage: `url('https://images.pexels.com/photos/730568/pexels-photo-730568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>

      <div className='bg-cover bg-center w-1/3 mr-0 mx-auto h-1/2 mt-60 rounded-tl-2xl rounded-bl-2xl' style={{backgroundImage: `url('https://images.pexels.com/photos/47344/dollar-currency-money-us-dollar-47344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`}}>
      
        <div className='bg-orange-500/5 border border-gray-60 p-3 backdrop-blur-sm rounded-tl-2xl flex flex-col justify-center text-center mt-40'>
          <h1 className='text-3xl text-black bg-orange-200 font-bold rounded-lg p-1 mb-3'>Currency Converter App</h1>
          <p className='text-xl text-black bg-orange-200 font-bold rounded-lg p-3'>Presenting new currency converter app is here. </p>
        </div>
      </div>

      <div className='w-1/2 ml-0 h-1/2 mt-60 max-w-md mx-auto border border-gray-60 rounded-tr-2xl rounded-br-2xl p-5 backdrop-blur-sm bg-white/15' >

        <h1 className='text-3xl text-center text-black font-bold bg-white/50 mx-auto border border-gray-60 rounded-lg p-3 m-5 mt-10 backdrop-blur-sm'>{from.toUpperCase()} to {to.toUpperCase()}</h1>

        <form 
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>

            <div className='w-full mb-1'>
              <InputBox 
                  label="From"
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
            </div>

            <div className='relative w-full h-0.5'>
              <button
                  type='button'
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}
              >
                  swap
              </button>
            </div>

            <div className='w-full mt-1 mb-4'>
              <InputBox 
                    label="To"
                    amount={convertedAmount}
                    currencyOptions={options.filter(option => option !== from)} // Filter out selected "From" currency
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    amountDisable
                    currencyDisable
                />
            </div>
            <button type='submit' className='w-full text-white px-4 py-3 rounded-lg bg-blue-700'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
        </form>
      

    
      </div>
    </div>
    </>
  )
}

export default App
