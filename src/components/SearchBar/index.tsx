import React, { useState } from 'react';
import { SearchBarStyled, SearchIcon, TextFieldInput } from './index.stitches';
import { TextField } from '@radix-ui/themes';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
    onSearch(newSearchTerm);
  };

  return (
    <SearchBarStyled>
      <TextField.Slot>
        <SearchIcon />
      </TextField.Slot>
      <TextFieldInput
        value={searchTerm}
        onChange={handleSearch}
        placeholder="buscar por tag"
      />
    </SearchBarStyled>
  );
}

export default SearchBar;
