import React from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBarComponent: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => (
    <TextField
        label="Search Cards"
        variant="outlined"
        slotProps={{
            input: {
                endAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                )
            }
        }}
        sx={{
            marginBottom: '24px',
            marginTop: '16px',
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#393d48'
                },
                '&:hover fieldset': {
                    borderColor: '#393d48'
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#393d48'
                }
            },
            '& .MuiInputLabel-root': {
                color: '#393d48'
            },
            '& .MuiInputBase-input': {
                color: '#393d48'
            }
        }}
        size="small"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
    />
);

export default SearchBarComponent;
