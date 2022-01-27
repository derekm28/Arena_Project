import React from 'react';
import {
    Box,
    Typography,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';

export default function BooleanQuestion(props) {
    const display = props.question.type == "boolean" ? "initial" : "none";
    const optionsArray = props.question.options;
    const radioOptions = optionsArray?.map((item, index) => {
        return <FormControlLabel key={index} value={item} control={<Radio />} label={item} />
    })

    return (
        <Box sx={{ display: display }} >
            <Typography>{props.question.text}</Typography>
            <FormControl>
                <FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    onChange={props.incrementIndex}
                >
                    {radioOptions}
                </RadioGroup>
            </FormControl>
        </Box>
    );
}
