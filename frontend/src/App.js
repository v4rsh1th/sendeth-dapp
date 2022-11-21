import React, {
  useContext
} from 'react';
import { TransactionContext } from "./TransactionContext";
import "./App.css";

function App() {
  const {
    connectWallet,
    formData,
    currentAccount,
    sendTransaction,
    handle_change
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount } = formData;
    e.preventDefault();
    if (!addressTo || !amount) return;
    sendTransaction();
  };

  return (
    <div className="App">
      <div className="content">
        <h1>SendETH DApp</h1>
        <div>
          {!currentAccount ? (
            <button className="connectButton" type="button" onClick={connectWallet}>
              Connect to Wallet
            </button>
          ) : (
            <p className='connectedMessage'>
              <strong>{currentAccount}</strong> connected.
            </p>
          )}

          <input name="addressTo" type="text" placeholder="0x address" onChange={e => handle_change(e, 'addressTo')} />
          <input name="amount" type="number" placeholder="0.0" onChange={e => handle_change(e, 'amount')} />
          <br />
          <button className="sendButton" type="button" onClick={handleSubmit}>Send</button>
        </div>
      </div>
    </div>
  );

}

export default App;