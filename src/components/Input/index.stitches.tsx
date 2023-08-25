import { styled } from "../../stitches.config";

export const Input = styled('input', {
  fontSize: '$BodySmall',
  width: 380,
  height: 30,
  padding: 5,
  borderRadius: 5,
  border: '1px solid $DarkestWhite',
  backgroundColor: '$DarkerWhite',
  color:'$LighterInk',
  outline: 'none',

  '&:focus': {
    borderColor: '$MostDarkestWhite',
    backgroundColor: '$DarkestWhite',
    color:'$LightInk',
  },

  '&:valid, &:placeholder-shown': {
    color: '$Ink', 
  },

  '@mobile':{
        width: '100%',
   },
});
