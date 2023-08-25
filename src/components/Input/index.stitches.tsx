import { styled } from "../../stitches.config";

export const Input = styled('input', {
  fontSize: "clamp(0.8rem, 1.02vw, 1.2rem)",
  width: 380,
  height: 30,
  padding: 5,
  borderRadius: 5,
  border: '1px solid $DarkestWhite',
  backgroundColor: '$DarkerWhite',
  color:'$LighterInk',
  outline: 'none',
  transition:'0.5s',

  '&:invalid:focus':{
    borderColor: '$Red',
    color:'$Red',
    backgroundColor: '$MostLightestRed',
  },
  
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
