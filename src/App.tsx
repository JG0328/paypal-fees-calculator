import GitHubIcon from '@mui/icons-material/GitHub';
import {
    Button,
    Container,
    CssBaseline,
    Divider, FilledInput, FormControl,
    Grid2,
    InputAdornment, InputLabel,
    Paper,
    Stack,
    Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Footer from './Components/Footer';
import Navbar from "./Components/Navbar";

const App = () => {
    const [amount, setAmount] = useState<number>(1.000);
    const [fee, setFee] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => setAmount(Number(event.target.value));

    useEffect(() => {
        if (amount >= 0) {
            // Applying fees
            setResult((amount + 0.3) / (1 - 0.054));
        }
    }, [amount]);

    useEffect(() => {
        if (result >= 0) {
            // Getting fee
            setFee(result - amount);
        }
    }, [result, amount]);

    return (
        <>
            <Navbar />
            <Container disableGutters component={"main"} maxWidth={"sm"} sx={{ pt: 8, pb: 6 }}>
                <CssBaseline />
                <Stack sx={{ margin: 4 }}>
                    <Paper elevation={3} sx={{ width: "100%", padding: 4 }}>
                        <Grid2 container spacing={3} direction={"column"}>
                            {/* Calculator */}
                            <Grid2>
                                <FormControl fullWidth variant={"filled"}>
                                    <InputLabel htmlFor={"transaction-amount"}>Transaction</InputLabel>
                                    <FilledInput
                                        id={"transaction-amount"}
                                        value={amount.toString()}
                                        onChange={handleAmountChange}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        type={"number"}
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid2>
                            <Grid2>
                                <FormControl fullWidth variant={"filled"}>
                                    <InputLabel htmlFor={"fee-amount"}>Fee</InputLabel>
                                    <FilledInput
                                        id={"fee-amount"}
                                        value={fee.toFixed(3)}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        inputProps={{
                                            readOnly: true
                                        }}
                                        type={"number"}
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid2>
                            <Grid2>
                                <FormControl fullWidth variant={"filled"}>
                                    <InputLabel htmlFor={"result-amount"}>Total</InputLabel>
                                    <FilledInput
                                        id={"result-amount"}
                                        value={result.toFixed(3)}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        inputProps={{
                                            readOnly: true
                                        }}
                                        type={"number"}
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid2>
                            {/* Bottom section */}
                            <Grid2 container>
                                <Grid2 container spacing={1} direction={"column"}>
                                    <Grid2>
                                        <Divider />
                                    </Grid2>
                                    <Grid2 container>
                                        <Grid2 container spacing={3} alignItems={"center"} justifyContent={"space-between"}>
                                            <Grid2>
                                                <Typography variant={"overline"}>
                                                    Using <strong>5.4% + 0.30 Fee</strong>
                                                </Typography>
                                            </Grid2>
                                            <Grid2>
                                                <Button
                                                    variant={"contained"}
                                                    LinkComponent={"a"}
                                                    href={"https://github.com/JG0328/paypal-fees-calculator"}
                                                    target={"_blank"}
                                                >
                                                    <GitHubIcon />
                                                </Button>
                                            </Grid2>
                                        </Grid2>
                                    </Grid2>
                                </Grid2>
                            </Grid2>
                        </Grid2>
                    </Paper>
                </Stack>
            </Container>
            <Footer />
        </>
    )
}

export default App;
