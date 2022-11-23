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
        <h1 className='main_heading'>SendETH</h1>
        <div>
          {!currentAccount ? (
            <button className="connectButton" type="button" onClick={connectWallet}>
              Connect to Wallet
            </button>
          ) : (
            <div>
              <p className='connectedMessage'>
                <u>{currentAccount}</u> connected
              </p>
              <input name="addressTo" type="text" placeholder="0x address" onChange={e => handle_change(e, 'addressTo')} />
              <input name="amount" type="number" placeholder="0.0" onChange={e => handle_change(e, 'amount')} />
              <br />
              <button className="sendButton" type="button" onClick={handleSubmit}>Send</button>
            </div>
          )}
        </div>
        <br />
        <p className='myName'>Built by Varshith</p>
        &nbsp; <br /><br />
        <p id="tx_message"></p>
        <p id="tx_hash"></p>
        <p id="link_to_verify"></p>
      </div>
    </div>
  );

}

export default App;