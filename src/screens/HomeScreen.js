import React from 'react';
import { Box, Card, CardActionArea, Typography } from '@material-ui/core';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import { useStyles } from '../styles';
import Logo from '../components/Logo';
export default function HomeScreen(props) {
  const styles = useStyles();
  return (
    <Card>
      <CardActionArea onClick={() => props.history.push('/choose')}>
        <Box className={[styles.root, styles.red]}>
          <Box className={["home-section-1"]}>
            {/* <Typography variant="h6" component="h6">
              Fast & Easy
            </Typography> */}
            {/* <Typography variant="h1" component="h1" className={styles.bold}>
              Order <br />
              & pay
              <br />
              here
            </Typography> */}
            <Logo large/>
          </Box>
          <Box className={["home-section-2", styles.center]}>
            <TouchAppIcon fontSize="large"></TouchAppIcon>
            <Typography variant="h4" component="h4" className={"footer-text"}>
              Touch to start
            </Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}
