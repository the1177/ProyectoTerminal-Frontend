import * as React from 'react';
import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { styled } from '@mui/material/styles';

const ColorAutocomplete = styled(Autocomplete) (( { theme }) => ({
    width: '500px',
    marginTop: '20px',
    marginLeft: '25px',
    alignItems: 'center',
}));

export default function FixedTags() {
  const fixedOptions = [top100Films[6]];
  const [value, setValue] = React.useState([...fixedOptions, top100Films[13]]);

  return (
    <ColorAutocomplete
        multiple
        id="tags-outlined"
        options={top100Films}
        getOptionLabel={(option) => option.email}
        defaultValue={[top100Films[13]]}
        filterSelectedOptions
        renderInput={(params) => (
        <TextField
            {...params}
            label="Emails"
            placeholder="Agregados"
        />
        )}
  />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { email: "aimeegtz9@hotmail.com" },
  { email: "160300115@ucaribe.edu.mx" },
  { email: "160300126@ucaribe.edu.mx" },
  { email: "160300135@ucaribe.edu.mx" },
  { email:  "160300063@ucaribe.edu.mx" },
  { email:  "160300153@ucaribe.edu.mx" },
  { email:  "150300085@ucaribe.edu.mx" },
  { email:  "170300058@ucaribe.edu.mx" },
  { email:  "160300100@ucaribe.edu.mx" },
  { email:  "150300107@ucaribe.edu.mx" },
  { email:  "140300046@ucaribe.edu.mx" },
  { email: "170300104@ucaribe.edu.mx" },
  { email: "170300228@ucaribe.edu.mx" },
  { email: "160300099@ucaribe.edu.mx" },
  { email: "160300154@ucaribe.edu.mx" },
  { email: "170300151@ucaribe.edu.mx" },
  { email: "170300082@ucaribe.edu.mx" },
  { email: "150300123@ucaribe.edu.mx" },
  { email: "150300097@ucaribe.edu.mx" },
  { email: "170300128@ucaribe.edu.mx" },
  { email: "150300116@ucaribe.edu.mx" },
  { email: "150300127@ucaribe.edu.mx" },
  { email: "160300117@ucaribe.edu.mx" },
  { email: "140300055@ucaribe.edu.mx" },
  { email: "170300227@ucaribe.edu.mx" },
  { email: "160300127@ucaribe.edu.mx" },
  { email: "150300121@ucaribe.edu.mx" },
  { email: "180300358@ucaribe.edu.mx" },
  { email: "180300345@ucaribe.edu.mx" },
  { email: "190300404@ucaribe.edu.mx" },
  { email: "190300376@ucaribe.edu.mx" },
  { email: "190300390@ucaribe.edu.mx" },
  { email: "190300386@ucaribe.edu.mx" },
  { email: "190300380@ucaribe.edu.mx" },
  { email: "170300148@ucaribe.edu.mx" },
  { email: "170300074@ucaribe.edu.mx" },
  { email: "190300372@ucaribe.edu.mx" },
  { email: "180300352@ucaribe.edu.mx" },
  { email: "180300350@ucaribe.edu.mx" },
  { email: "160300101@ucaribe.edu.mx" },
  { email: "mich.ogd@hotmail.com" },
  { email: "rngblack100@gmail.com" },
  { email: "katiia_mp01@hotmail.com" },
  { email: "sebasgodoy62@gmail.com" },
  { email: "mop_28@outlook.com" },
  { email: "dannymc9672@gmail.com" },
  { email: "lucegpe24@gmail.com" },
  { email: "160300112@ucaribe.edu.mx" },
  { email: "arantxalzc@gmail.com" },
  { email: "f.cabrales99@gmail.com" },
  { email: "garciavazquezbrando@gmail.com" },
  { email: "cigm_0@hotmail.com" },
  { email: "Bm0463700@gmail.com" },
  { email: "170300223@ucaribe.edu.mx" },
  { email: "170300017@ucaribe.edu.mx" },
  { email: "lhvon@ucaribe.edu.mx" },
  { email: "170300217@ucaribe.edu.mx" },
  { email: "170300005@ucaribe.edu.mx" },
  { email: "210300524@ucaribe.edu.mx" },
  { email: "210300528@ucaribe.edu.mx" },
  { email: "210300510@ucaribe.edu.mx" },
  { email: "lari_myscene@hotmail.com" },
  { email: "sarabarragan_98@hotmail.com" },
  { email: "barbarangheven@gmail.com" },
  { email: "210300525@ucaribe.edu.mx" },
  { email: "200300602@ucaribe.edu.mx" },
  { email: "150300270@ucaribe.edu.mx" },
  { email: "210300543@ucaribe.edu.mx" },
  { email: "150300272@ucaribe.edu.mx" },
  { email: "160300051@ucaribe.edu.mx" },
  { email: "210300532@ucaribe.edu.mx" },
  { email: "210300544@ucaribe.edu.mx" },
];
