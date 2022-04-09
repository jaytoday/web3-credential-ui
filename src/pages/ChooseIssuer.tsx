import * as React from "react";
import { Dialog } from '@headlessui/react'
import { KeyIcon } from '@heroicons/react/outline'

interface ModalProps {
    setPage: (i: number) => void;
}

const SELECTED_BUTTON_CLASSES = `mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-center text-white px-6 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-600`;
const DEFAULT_BUTTON_CLASSES = `mx-2 my-2 bg-white transition duration-150 ease-in-out focus:outline-none hover:bg-gray-200 text-center rounded text-indigo-700 px-6 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-indigo-70`;

const ChooseIssuer = (props: ModalProps) => {
    const [selected, setSelected] = React.useState<string>('valora');
    const { setPage } = props;
    return (
        <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto"  onClose={() => setPage(-1)} open={true}>
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
  
            {/* This element is to trick the browser into centering the modal contents. */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>
              <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                      <KeyIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Choose Credential Issuer
                      </Dialog.Title>
                      <div className="my-8">
                        <div className="flex flex-wrap justify-center">
                        <button onClick={() => setSelected('valora')} className={selected === 'valora' ? SELECTED_BUTTON_CLASSES : DEFAULT_BUTTON_CLASSES}>Valora</button>
                            <button onClick={() => setSelected('circle')} className={selected === 'circle' ? SELECTED_BUTTON_CLASSES : DEFAULT_BUTTON_CLASSES}>Circle</button>
                            <button onClick={() => setSelected('coinbase')} className={selected === 'coinbase' ? SELECTED_BUTTON_CLASSES : DEFAULT_BUTTON_CLASSES}>Coinbase</button>
                            <button onClick={() => setSelected('ftx')} className={selected === 'ftx' ? SELECTED_BUTTON_CLASSES : DEFAULT_BUTTON_CLASSES}>FTX</button>
                            <button onClick={() => setSelected('block')} className={selected === 'block' ? SELECTED_BUTTON_CLASSES : DEFAULT_BUTTON_CLASSES}>Block</button>
                            <button onClick={() => setSelected('alkemi')} className={selected === 'alkemi' ? SELECTED_BUTTON_CLASSES : DEFAULT_BUTTON_CLASSES}>Alkemi</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() =>setPage(3)}
                  >
                    Continue
                  </button>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() =>setPage(-1)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
          </div>
        </Dialog>
  
    )
  }

  export default ChooseIssuer;