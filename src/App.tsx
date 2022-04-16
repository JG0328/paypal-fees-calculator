import { Button, Container, CssBaseline, Divider, Grid, Paper, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import logo from "./paypal-logo.png";
import GitHubIcon from '@mui/icons-material/GitHub';

const App = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fee, setFee] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => setAmount(Number(event.target.value));

  useEffect(() => {
    if (amount >= 0) {
      // Applying fees
      setResult((amount / (1 - 0.054)) + 0.3);
    }
  }, [amount]);

  useEffect(() => {
    if (result >= 0) {
      // Getting fee
      setFee(result - amount);
    }
  }, [result, amount]);

  return (
    <Container component={"main"} maxWidth={"md"}>
      <CssBaseline />
      <Stack sx={{ margin: 4 }}>
        <Paper elevation={3} sx={{ width: "100%", padding: 4 }}>
          <Grid container spacing={3} direction={"column"}>
            {/* Top Section */}
            <Grid container item>
              <Grid container spacing={1} direction={"column"}>
                <Grid container item>
                  <Grid container item spacing={3} alignItems={"center"}>
                    <Grid item>
                      <img alt={"PayPal Logo"} src={logo} width={48} />
                    </Grid>
                    <Grid item>
                      <Typography variant={"h6"}>
                        Fees Calculator
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Divider />
                </Grid>
              </Grid>
            </Grid>
            {/* Calculator */}
            <Grid container item>
              <Grid container item spacing={3} alignItems={"center"}>
                <Grid item xs={12} sm>
                  <TextField label={"Transaction Amount ($)"} variant={"filled"} type={"number"} value={amount.toString()} onChange={handleAmountChange} fullWidth />
                </Grid>
                <Grid item xs={12} sm>
                  <TextField label={"Fee To Apply ($)"} value={fee.toFixed(2)} variant={"filled"} disabled fullWidth />
                </Grid>
                <Grid item xs={12} sm>
                  <TextField label={"Result ($)"} value={result.toFixed(2)} variant={"filled"} disabled fullWidth />
                </Grid>
              </Grid>
            </Grid>
            {/* Bottom section */}
            <Grid container item>
              <Grid container item spacing={1} direction={"column"}>
                <Grid item>
                  <Divider />
                </Grid>
                <Grid container item>
                  <Grid container item spacing={3} justifyContent={"flex-end"}>
                    <Grid item>
                      <Button
                        variant={"contained"}
                        LinkComponent={"a"}
                        href={"https://github.com/JG0328/paypal-fees-calculator"}
                        target={"_blank"}
                      >
                        <GitHubIcon />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Stack>
    </Container>
  )
}

export default App;
