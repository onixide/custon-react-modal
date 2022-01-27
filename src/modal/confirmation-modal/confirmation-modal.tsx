import React, {FunctionComponent} from "react";
import logo from "../../logo.svg";
import styles from "./confirmation-modal.module.scss";

interface ConfirmationModalProps {
	onConfirm: () => void;
	onCancel: () => void;
	message: string;
}

export const ConfirmationModal: FunctionComponent<ConfirmationModalProps> = (props) => {
	return (
		<>
			<p className={styles.message}>{props.message}</p>
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
			<div className={styles.confirmationButtons}>
				<button className={styles.yesButton} onClick={props.onConfirm}>
					Yes
				</button>
				<button className={styles.noButton} onClick={props.onCancel}>
					No
				</button>
			</div>
		</>
	);
};
