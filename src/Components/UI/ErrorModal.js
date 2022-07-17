import Button from "./Button";
import Card from "./Card";
import classes from "./errorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card class={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.message}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>OK</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
