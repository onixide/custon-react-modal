import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ConfirmationModal} from "./modal/confirmation-modal/confirmation-modal";
import {Modal} from "./modal/modal";
import {useModal} from "./modal/useModal";

function App() {
  const {isShown, toggle} = useModal();

  const onConfirm = () => toggle();
  const onCancel = () => toggle();

  return (
    <div className="App">

        <button onClick={toggle}>Open modal</button>
        <Modal
            isShown={isShown}
            hide={toggle}
            headerText="Confirmation"
            modalContent={
              <ConfirmationModal
                  onConfirm={onConfirm}
                  onCancel={onCancel}
                  message="Are you sure you want to delete element?"
              />
            }
        />
    </div>
  );
}

export default App;
