import { Box } from '@material-ui/core';
import { useStyles } from '../styles';

function SummaryFooter({ itemsCount, totalPrice }) {
  const styles = useStyles();
  return (
    <Box className={[styles.bordered, styles.space, "summary-footer"]}>
      <span className="summary-footer-item summary-items">Items: {itemsCount}</span>
      <span className="summary-footer-item summary-total">Total: €{totalPrice} </span>
    </Box>
  )
}

export default SummaryFooter;