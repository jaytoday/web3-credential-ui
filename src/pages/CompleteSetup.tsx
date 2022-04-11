import * as React from "react";
import { Dialog } from '@headlessui/react'
import { ClipboardListIcon } from '@heroicons/react/outline'
import { Issuer, Credential } from '../types/models'

interface ModalProps {
    setPage: (i: number) => void;
    issuer: Issuer;
    credential: Credential;
}

const CompleteSetup = (props: ModalProps) => {
    const { setPage, issuer, credential } = props;
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
                      <ClipboardListIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                       Complete {issuer.name} Credential Setup
                      </Dialog.Title>
                      <div className="my-8">
                      <div>
                            <span className="text-sm font-semibold inline-block py-1 px-2 uppercase rounded text-gray-600 bg-gray-200 uppercase last:mr-0 mr-1">
                              <a href={credential.id}>{credential.name}</a>
                            </span>
                      </div>
                        <ol className="list-decimal ml-6">
                        {issuer?.instructions.map((instruction: string, i) => (
                          <li key={i} className="text-md  mt-4 text-gray-500">
                            {instruction}
                         </li>
                        ))}
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() =>setPage(1)}
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
                  <span className="w-52"></span>
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() =>setPage(2)}
                  >
                    Back
                  </button>
                </div>
              </div>
          </div>
        </Dialog>
  
    )
  }

  export default CompleteSetup;