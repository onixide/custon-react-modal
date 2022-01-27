import React, {FunctionComponent, useEffect} from "react";
import FocusLock from "react-focus-lock";
import ReactDOM from "react-dom";
import styles from "./modal.module.scss";

export interface ModalProps {
	isShown: boolean;
	hide: () => void;
	modalContent: JSX.Element;
	headerText: string;
}

export const Modal: FunctionComponent<ModalProps> = ({isShown, hide, modalContent, headerText}) => {
	const onKeyDown = (event: KeyboardEvent) => {
		if (event.keyCode === 27 && isShown) {
			hide();
		}
	};

	useEffect(() => {
		isShown ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "unset");
		document.addEventListener("keydown", onKeyDown, false);
		return () => {
			document.removeEventListener("keydown", onKeyDown, false);
		};
	}, [isShown]);

	const modal = (
		<>
			<div className={styles.backdrop} onClick={hide} />
			<FocusLock>
				<div className={styles.wrapper} aria-modal aria-labelledby={headerText} tabIndex={-1} role="dialog">
					<div className={styles.modal}>
						<div className={styles.header}>
							<p className={styles.headerText}>{headerText}</p>
							<button className={styles.closeButton} onClick={hide}>
								X
							</button>
						</div>
						<div className={styles.content}>{modalContent}</div>
					</div>
				</div>
			</FocusLock>
		</>
	);

	return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
