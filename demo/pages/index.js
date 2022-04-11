import { useWeb3React } from "@web3-react/core"
import { useEffect, useState } from "react"
import { injected } from "../components/wallet/connectors"
import { CredentialDialog } from "web3-credential-ui"; 

export default function Home() {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
      localStorage.setItem('isWalletConnected', true)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
      localStorage.setItem('isWalletConnected', false)
    } catch (ex) {
      console.log(ex)
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected)
          localStorage.setItem('isWalletConnected', true)
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])

  // TODO: adjust credential dialog to not require parent component state 
  const [credentialDialogPage, setCredentialDialogPage] = useState(-1);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-3xl mb-5">Web3 Credential UI Demo</h1>
      {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}
      {active ? <button onClick={disconnect} className="py-2 mt-5 mb-4 text-sm font-bold text-white rounded-lg w-32 bg-indigo-600 hover:bg-indigo-800">Disconnect</button>
      : <button onClick={connect} className="py-2 mt-5 mb-4 text-sm font-bold text-white rounded-lg w-32 bg-indigo-600 hover:bg-indigo-800">Connect to MetaMask</button>
      }
      
      {active && (
        <div className="my-10">
         <div className="flex flex-column space-x-2 justify-center">
            <div  className="mt-10">
              <div>
                When depositing funds using the button below, a <a href="https://github.com/jaytoday/web3-credential-ui">Web3 Credential UI dialog</a> will assist with the following:
              </div>
              <div className="mt-5">
              <ul className="list-disc px-12">
                <li>Specifying what credential is required to successfully complete the requested web3 transaction</li>
                <li>Verify whether the credential has already been setup</li>
                <li>Provide instructions for how to setup the required credential with a supported issuer</li>
              </ul>
              </div>
            </div>
          </div>
          <div className="flex space-x-2 justify-center">
             <button  onClick={() => { setCredentialDialogPage(0); }}  type="button" className="py-2 mt-10 mb-4 text-lg font-bold text-white rounded-lg w-56 bg-indigo-600 hover:bg-indigo-800">
                Deposit Funds
              </button>
          </div>
          <CredentialDialog 
            account={account}
            page={credentialDialogPage} 
            setPage={setCredentialDialogPage} 
            onCancel={() => console.log('cancelled credential dialog')}
            onVerify={() => console.log('verfied credential')}
            credentialId={'0xe1e5170b2df5840bb2103ad1180361841397DE2'}
            verifyAccount={(account, setStatus, completedSetup) => { setTimeout(() => { setStatus(account && completedSetup ? 'verified' : 'failed') }, 5000); }}
          />
        </div>
      )}
      
    </div>
  )
}
