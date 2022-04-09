import * as React from 'react'
import Intro from './pages/Intro'
import Verify from './pages/Verify'
import CompleteSetup from './pages/CompleteSetup'
import ChooseIssuer from './pages/ChooseIssuer'

interface Props {
    setPage: (i: number) => void;
    page: number;
}

export function CredentialDialog(props: Props)  {
    const { page, setPage } = props;
    const [status, setStatus] = React.useState<string>('pending');
    const [completedSetup, setCompletedSetup] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (page === 0){
            // temporary demo code 
            setCompletedSetup(false);
        }
        if (page === 1){
            // temporary demo code 
            setStatus('pending');
            setTimeout(() => { setStatus(completedSetup ? 'verified' : 'failed') }, 5000);
        }
        if (page === 3){
            // temporary demo code 
            setCompletedSetup(true);
        }
    }, [page]);

    switch(page){
        case -1: return null;
        case 0: return <Intro setPage={setPage} />;
        case 1: return <Verify status={status} setPage={setPage} />;
        case 2: return <ChooseIssuer setPage={setPage} />;
        case 3: return <CompleteSetup  setPage={setPage} />;
        default: return null;
    }
}


