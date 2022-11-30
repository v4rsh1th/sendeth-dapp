The DApp is fully functional.

Frontend of the project is in the "frontend" directory.
-- "public" folder has all the files such as index.html and favicon
index.html is the main file in the React ecosystem, it renders the React code.

-- "src" is the root folder of the project, it consists of all the components and CSS stylings
App.css is the stylesheet file for the application, it includes the design and style of each component.
1. App.js is the main file in src, it is the root file and every operation and component can be incorporated in the "className=App". It contains the main function App() that is the whole root function.
2. index.js encompasses the code from App.js and sends it to the rendering process. It creates a constant "root" that interacts with the class in the index.html to render whatever is sent by the App.js component
3. TransactionContext.jsx file is the bread and butter of the DApp that we built, it used Ethers library to perform processes related to Blockchain and Ethereum. It contains a number of functions that perform seperate tasks at each step of the execution of the DApp. The main function is the TransactionProvider(), it defines the current account that is connected to the DApp. And performs a subfunction handlechange() that watches every modification that is happened.
The other functions: checkIfWalletIsConnected() performs the check when the users enter the DApp, it checks if the user has the Metamask wallet installed on their computer, if not installed an alert message will pop up.
connectWallet() function is embedded into the "Connect to Wallet" button. It defaults to the first account that is on the Metamask and also gives user the privilege to select the account they would want to connect.
sendTransaction() is where the magic begin, interacts with the Smart contract we have on the backend. const { addressTo, amount } = formData; const transactionContract = getEthereumContract(); const parsedAmount = ethers.utils.parseEther(amount); lines of codes fills the input data, and sends it to the contract and the rest is contract's work. This function returns a few parameters that are to be imported in the other files to establish the calls.
4. In utils folders, we have two files: constants.js is where we stored out smart contract address that was generated.
-- package.json shows all the npm libraries we used in the frontend


Backend of the project is in the "backend" directory
-- contracts folder has the smart contract we have written for the DApp
The file Transactions.sol is where our smart contract is written. The smart contract automatically takes the address of the wallet we are connected with. And push() function pushes our transaction to the blockchain.

-- scripts folder has a JavaScript that was used to deploy our smart contract
The file deploy.js has the script that uses ethers library and generates the contract address on the network we prefer. It has an async main() function that takes in hre.ethers and deploy the smart contract file name "Transactions".