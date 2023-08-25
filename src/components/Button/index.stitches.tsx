import { styled } from "../../stitches.config";

export const Button = styled('button', {
  border: 'none',
  fontSize: '$BodySmall',
  width: 174,
  height: 50,
  padding: 5,
  borderRadius: 5,

  '@mobile':{
        width: '100%',
   },

  variants: {
    size:{},
    color: {
      ButtonPrimaryNeutral: {
        backgroundColor: '$Blue', 
        color: '$White',
        '&:hover': {
          backgroundColor: '$DarkBlue',
        },
        '&:active': {
          backgroundColor: '$DarkerBlue',
        }
      },
      ButtonPrimaryDanger: {
        backgroundColor: '$Red', 
        color: '$White',
        '&:hover': {
          backgroundColor: '$DarkRed',
        },
        '&:active': {
          backgroundColor: '$DarkerRed',
        }
      },
    },
  },
  defaultVariants: {
    color: 'ButtonPrimaryNeutral',
  },
});
