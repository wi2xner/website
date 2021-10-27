...
import (injected) from "../componnents/wallet/connectors"
 export default function Home() {
 const {active, account, library, connector, activate, deactivate} = useWeb3React()

async function connect () {
	try {
		await activate(injected)
	} catch(ex){
		console.log (ex)
	}

} return (
 <div>
 <button onClick = {connect} class ="CONNECT">Connect</button>
 {active ? <span>Connected with <b>{account}</b></span> : <span>Not Connected</span>}
 </div>
 )}