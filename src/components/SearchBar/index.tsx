
import {TextField}  from '@radix-ui/themes';
import { SearchBarStyled, SearchIcon, TextFieldInput } from './index.stitches';


function SearchBar() {
  
  return (
    <SearchBarStyled>
      <TextField.Slot>
        <SearchIcon />
      </TextField.Slot>
      <TextFieldInput placeholder="busca por tag" />
    </SearchBarStyled>
  );
}

export default SearchBar;
