

// Check if MetaMask is installed
if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    window.ethereum.enable(); // Request user authorization
} else {
    console.log('MetaMask is not installed');
}

const contractAddress = '0x0EbBA9D5F7a1091dca1C82CC50B906e74491742c'; // Provide your contract address here
const contractABI =[
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "_from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "TransferReceived",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "percentages1Ether",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "percentages3Ether",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "recipients1Ether",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "recipients3Ether",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const providerOptions = {
    // Configure provider options as needed
};


// Create a new instance of Web3Modal
const Web3Modal = window.Web3Modal.default;

const web3Modal = new Web3Modal({
    providerOptions // required
  });

  export async function connectWallet() {
    const sepoliaNetworkId = "11155111"; // Replace '11155111' with the actual network ID of Sepolia testnet
    const sepoliaChainId = "0xaa36a7"; // Replace '0xaa36a7' with the actual chain ID of Sepolia testnet

    try {
        // Check if MetaMask is installed and connected
        if (!window.ethereum || !window.ethereum.isConnected()) {
            throw new Error("MetaMask is not installed or not connected.");
        }

        // Check if MetaMask is already connected to the correct network
        const networkId = await window.ethereum.request({
            method: "net_version",
        });

        if (networkId === sepoliaNetworkId) {
            console.log("Already connected to Sepolia testnet.");
        } else {
            // Prompt the user to switch to Sepolia testnet
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: sepoliaChainId }],
            });
            console.log("Switched to Sepolia testnet.");
        }
    } catch (error) {
        console.error("Error connecting to Sepolia testnet:", error);
    }
}


const loader = document.querySelector('.loaderforpayment');


const contract = new window.web3.eth.Contract(contractABI, contractAddress);

console.log(contract);
// Function to make payment
export async function makePayment(amount) {
    try {
        loader.style.display = 'block';

        // Get the connected wallet provider
        const provider = await web3Modal.connect();

        // Create a new instance of Web3 using the provider
        const web3 = new window.Web3(provider);

        // Get the selected account
        const accounts = await web3.eth.getAccounts();
        const sender = accounts[0];

        const amountToSend = web3.utils.toWei(amount.toString(), 'ether');



console.log(sender);
        // Calculate the amount to send in wei
console.log(amountToSend);
        const transactionObject = {
            from: sender,
            to: contract.options.address, // Use your contract address here
            value: amountToSend,
        };
console.log(transactionObject);
        // Send the transaction
        const transaction = await web3.eth.sendTransaction(transactionObject);
        loader.style.display = 'none';
    } catch (error) {
        console.error('Error:', error);
        loader.style.display = 'none';

    }
}