class CredentialDialogLoader  {
    _then: () => void;
    _else: () => void;
    setPage: (i: number) => void;
    constructor(setPage: (i: number) => void) {
       this.setPage = setPage;
       this._then = () => {};
       this._else = () => {};
    }
    if(_then: () => void) {
        this._then = _then;
        return this;
    }
    else(_else: () => void) {
        this._else = _else;
        return this;
    }
    initialize() {
        this.setPage(0);
    }
}
export async function useCredentialDialog(credential: string, setPage: (i: number) => void): Promise<CredentialDialogLoader>{
    const credentialDialogLoader = new CredentialDialogLoader(setPage);
    return credentialDialogLoader;
}
