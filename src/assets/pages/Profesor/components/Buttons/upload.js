import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Icon } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';
import "./style.css";

const Input = styled('input')({
  display: 'none',
});

const ColorButton = styled(Button) (( { theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
    width: '200px',
    marginTop: '20px',
    marginLeft: '25px',
}));


export default function UploadButtons() {

    const [file, setFile] = useState(); 
  return (
    <Stack direction="row" alignItems="center" spacing={5}>

      <label htmlFor="contained-button-file">
        <Input id="contained-button-file" multiple type="file" accept={".csv"}/>
        <ColorButton variant="contained" disableElevation component="span" size="medium" startIcon={<AttachFileIcon />}>
            Subir Archivo
        </ColorButton>
      </label>

    </Stack>
  );
}
