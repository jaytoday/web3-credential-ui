# Web3 Credential Dialog

A React library that simplifies integration of a decentralized credential standard such as Verite. 

![screenshot](https://user-images.githubusercontent.com/17043/162880121-203fa430-ee3a-4067-986b-b3588f970682.png)

\
&nbsp;


Web3 Credential Dialog renders a dialog that does the following:


**Prompts for Credential Requirement:**
- Prompts users that a certain credential is required
- Explains why the credential is required and the basics of decentralized credentials such as they preserve user privacy.
- Links to more information about decentralized credentials
 
 
 **Verifies Credential Requirement:**
- Allows user to specify their choice of supported credential issuer
- Can check on-chain registry or verify credential JWT


 **Assists with Credential Setup:**
- Includes instructions for credential setup for the issuer chosen by the user

 \
&nbsp;
 
 ## Getting Started

First, run `yarn` and `yarn build` from the project root directory.

Next, run `yarn dev` from the `demo` directory to try the demo at https://localhost:3000. [Or try a hosted version of the demo application](https://web3-credential-ui.vercel.app/).

 \
&nbsp;

## Using CredentialDialog

To use the `CredentialDialog` component, import it and include it in a parent component's `render` function:

```
import { CredentialDialog } from "web3-credential-ui"; 
```

```
<CredentialDialog 
    page={credentialDialogPage} 
    setPage={setCredentialDialogPage} 
    onCancel={() => console.log('cancelled credential dialog')}
    onVerify={() => console.log('verfied credential')}
/>
</div>
```

While the parent component rendering `CredentialDialog` is required to pass in `page` and `setPage` props to facilititate handling of page state, the component will be refactored to not require state to be handled by the parent component.

The `onVerify` and `onCancel` props accept functions that respectively handle when the dialog successfully verifies the user has the required credential, or when the user closes the dialog without completing verification. 

 \
&nbsp;

## TODO

- Use web3.js to verify contract using `isVerified` method in credential registry.
- Implement example registry and instructions for testing locally using [hardhat](https://github.com/NomicFoundation/hardhat)
- Fix a [bug](https://stackoverflow.com/questions/66488492/solve-having-more-than-one-copy-of-react-in-the-same-app) that requires removing `react` and `react-dom` from `demo/node_modules` for the demo to load.
