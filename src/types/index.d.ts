export {};

declare global {
  interface Window {
    updateCredentialDialogPage: (i: number) => void;
  }
}