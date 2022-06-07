// material ui
import Button from "@mui/material/Button";

// styles
import styles from "../styles/Home.module.css";

/* replay button at the bottom of the page gives visitor opportunity
 to play again and get a new fun trivia about chuck norris */
const Replay = () => {
  return (
    <div>
      <Button
        size="large"
        variant="contained"
        type="submit"
        className={styles.replay}
        onClick={() => window.location.reload()}
      >
        Replay
      </Button>
    </div>
  );
};

export default Replay;
