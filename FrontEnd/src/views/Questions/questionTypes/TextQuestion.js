import React from 'react';
import { TextField, Typography, Box, Button} from '@mui/material';

export default function TextQuestion(props) {
  const display = props.question.type == "text" ? "initial" : "none"

  const handler = props.incrementIndex;
  return (
    <Box sx={{display: display}} >
      <Typography>{props.question.text}</Typography>
      <TextField variant="standard" />
      <Button variant="outlined" sx={{display: "block"}} onClick={handler} >Contine</Button>
    </Box>
  );
}
