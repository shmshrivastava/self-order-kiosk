import React, { useContext, useState } from 'react';

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  TextField
} from '@material-ui/core';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
import { setPaymentType, addCheatCodeToOrder } from '../actions';
import { Store } from '../Store';
export default function HomeScreen(props) {

  const { dispatch } = useContext(Store);
  const styles = useStyles();

  const [code, setCode] = useState("");

  const selectHandler = (paymentType) => {
    setPaymentType(dispatch, paymentType);
    addCheatCodeToOrder(dispatch, code);

    if (paymentType === 'Pay here') {
      props.history.push('/payment');
    } else {
      props.history.push('/complete');
    }
  };
  return (
    <Box className={["select-payment-container", styles.root]}>
      <Box className={[styles.main, styles.center]}>
        <Logo large></Logo>
        {/* <Typography
          className={styles.center}
          gutterBottom
          variant="h3"
          component="h3"
        >
          Select payment type
        </Typography> */}
        <Box className={styles.cards}>
          {/* <Card className={[styles.card, styles.space]}>
            <CardActionArea onClick={() => selectHandler('Pay here')}>
              <CardMedia
                component="img"
                alt="Pay here"
                image="/images/payhere.png"
                className={styles.media}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  color="textPrimary"
                  component="p"
                >
                  PAY HERE
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card> */}
          <div>
            <Card className={[styles.card, styles.space, "pay-now-card"]}>
              <CardActionArea onClick={() => selectHandler('At counter')}>
                <CardMedia
                  component="img"
                  alt="At counter"
                  image="/images/atcounter.png"
                  className={styles.media}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    color="textPrimary"
                    component="p"
                  >
                    PAY NOW
                  </Typography>
                </CardContent>

              </CardActionArea>

            </Card>

            <TextField
              className={"code-box"}
              type="text"
              variant="filled"
              placeholder={"Use cheat code"}
              value={code}
              onChange={e => setCode(e.target.value)}
              />
          </div>
          
        </Box>
      </Box>
    </Box>
  );
}
