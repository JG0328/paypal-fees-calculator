import GitHubIcon from '@mui/icons-material/GitHub';
import {
    Button,
    Container,
    CssBaseline,
    Divider, FilledInput, FormControl,
    Grid2,
    InputAdornment, InputLabel,
    Paper,
    Typography
} from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import Footer from './Components/Footer';
import Navbar from "./Components/Navbar";

const fixedFee = 0.30;
const feePercentage = 5.4 / 100;

const App = () => {
    const [amount, setAmount] = useState<number>(1.000);
    const [totalFees, setTotalFees] = useState<number>(0);
    const [amountToSend, setAmountToSend] = useState<number>(0);

    const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => setAmount(Number(event.target.value));

    useEffect(() => {
        setTotalFees(amountToSend - amount);
    }, [amountToSend, amount]);

    useEffect(() => {
        setAmountToSend((amount + fixedFee) / (1 - feePercentage));
    }, [amount]);

    return (
        <>
            <Navbar />
            <Container disableGutters component={"main"} maxWidth={"sm"} sx={{ pt: 8, pb: 6 }}>
                <CssBaseline />
                <Paper elevation={3} sx={{ width: "100%", p: 4, m: 4 }}>
                    <Grid2 container spacing={3} direction={"column"}>
                        <Grid2 size={12} container spacing={3}>
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <FormControl fullWidth variant={"filled"}>
                                    <InputLabel htmlFor={"transaction-amount"}>Amount</InputLabel>
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
                            <Grid2 size={{ xs: 12, md: 6 }}>
                                <FormControl fullWidth variant={"filled"}>
                                    <InputLabel htmlFor={"transaction-fee"}>Fee</InputLabel>
                                    <FilledInput
                                        id={"transaction-fee"}
                                        value={"5.4% + $0.30"}
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid2>
                        </Grid2>
                        <Grid2 size={12} container spacing={3}>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <FormControl fullWidth variant={"filled"}>
                                    <InputLabel htmlFor={"transaction-total-fees"}>Total Fees</InputLabel>
                                    <FilledInput
                                        id={"transaction-total-fees"}
                                        value={totalFees.toFixed(2)}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <FormControl fullWidth variant={"filled"}>
                                    <InputLabel htmlFor={"transaction-receive"}>Receive</InputLabel>
                                    <FilledInput
                                        id={"transaction-receive"}
                                        value={amount.toFixed(2)}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4 }}>
                                <FormControl fullWidth variant={"filled"}>
                                    <InputLabel htmlFor={"transaction-request"}>Ask for</InputLabel>
                                    <FilledInput
                                        id={"transaction-request"}
                                        value={amountToSend.toFixed(2)}
                                        startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        fullWidth
                                    />
                                </FormControl>
                            </Grid2>
                        </Grid2>
                        <Grid2 size={12} container spacing={1} direction={"column"}>
                            <Grid2>
                                <Divider />
                            </Grid2>
                            <Grid2 sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
                </Paper>
            </Container>
            <Footer />
        </>
    )
}

export default App;
