import Web3 from 'web3/dist/web3.min.js'
// import ABI from './contractABITestnet.js'

let contract
let web3 
const connectMetamask = () => {
    if (typeof window.ethereum !== 'undefined'){
        web3 = new Web3(Web3.givenProvider)
    }else{
        alert('require Metamask')
    }
    console.log("hi")
    // contract = new web3.eth.Contract(ABI, '0x698D76097a6dBCf5A17C58E9751da6a41cD46a96')
    // console.log(contract.methods)

}

export {connectMetamask, contract, web3}