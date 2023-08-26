import { styled } from "../../stitches.config";

export const Input = styled('input', {
  fontSize: "$BodySmall",
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

   variants:{
      size:{
        fullwidth:{
          width: '100%',
        },
        halfWidth:{
          maxWidth: '50%',
        },
        regular:{
          width: 380,
          height: 30,
        },
      },
   },
   defaultVariants: {
    size: 'regular', 
},
});
