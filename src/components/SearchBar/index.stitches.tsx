  import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
  import { styled } from "../../stitches.config";

  import {TextField}  from '@radix-ui/themes';

  export const SearchIcon = styled(MagnifyingGlassIcon, {
    display:'inline-flex',
    marginTop:'30%',
    width: 20,
    height: 20,
  });


  export const SearchBarStyled = styled(TextField.Root, {
    display:'flex',
    flexWrap:'nowrap',

    width: 300,
    height: 30,
    padding: 5,
    borderRadius: 5,
    border: '1px solid $DarkestWhite',
    backgroundColor: '$DarkerWhite',
    color:'$LighterInk',
    outline: 'none',
    transition:'0.5s',
    gap: 8,

    '&:focus': {
      borderColor: '$MostDarkestWhite',
      backgroundColor: '$DarkestWhite',
      color:'$LightInk',
    },

    '&:placeholder-shown': {
      color: '$Ink', 
    },


    '@mobile':{
          width: '100%',
    },
  });

  export const TextFieldInput = styled(TextField.Input, {
    all: 'unset',
    fontSize: "clamp(0.8rem, 0.9vw, 1.1rem)",
    fontFamily:'$sans',
    display:'inline',
    width: '100%',
  });
