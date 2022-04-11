import * as React from 'react'
import Intro from './pages/Intro'
import Verify from './pages/Verify'
import CompleteSetup from './pages/CompleteSetup'
import ChooseIssuer from './pages/ChooseIssuer'
import credentials from './data/credentials.json'
import issuers from './data/issuers.json'
import { Issuer } from './types/models'

interface Props {
    setPage: (i: number) => void;
    page: number;
    account: string;
    credentialId: string;
    verifyAccount: (account: string, setStatus: (status: string) => void, completedSetup: boolean) => void;
    onCancel: () => void;
    onVerify: () => void;
}



export function CredentialDialog(props: Props)  {
    const { page, setPage, account, verifyAccount, onCancel, onVerify, credentialId } = props;
    const [status, setStatus] = React.useState<string>('pending');
    const [completedSetup, setCompletedSetup] = React.useState<boolean>(false);
    const [selectedIssuer, setSelectedIssuer] = React.useState<Issuer>(issuers[0]);


    const credential = credentials?.[credentialId];
    credential.id = credentialId;
    React.useEffect(() => {
        if (page === -1){
            if (status === 'verified'){
                onVerify();
            } else if (status === 'failed') {
                onCancel();
            }
        }
        if (page === 0){
            setCompletedSetup(false);
        }
        if (page === 1){
            setStatus('pending');
            verifyAccount(account, setStatus, completedSetup);
        }
        if (page === 3){
            setCompletedSetup(true);
        }
    }, [page]);


    switch(page){
        case -1: return null;
        case 0: return <Intro credential={credential} setPage={setPage} />;
        case 1: return <Verify status={status} setPage={setPage} />;
        case 2: return <ChooseIssuer selectedIssuer={selectedIssuer} setSelectedIssuer={setSelectedIssuer} issuers={issuers} setPage={setPage} />;
        case 3: return <CompleteSetup credential={credential} issuer={selectedIssuer} setPage={setPage} />;
        default: return null;
    }
}


