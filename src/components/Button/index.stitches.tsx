import { styled } from "../../stitches.config";
import { Button as RadixButton } from "@radix-ui/themes";

export const Button = styled( RadixButton, {
  border: 'none',
  fontSize: '$BodySmall',
  padding: 5,
  borderRadius: 5,
  transition: '0.3s' ,
  cursor: 'pointer',
  fontWeight:'600',
  '@mobile':{
        width: '100%',
   },

  variants: {
    size: {
      sm: {
        width: 120,
        height: 40,
      },
      md: {
        width: 140,
        height: 46,
      },
      lg: {
        width: 240,
        height: 60,
      },
    },
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
      ButtonSecondarySuccess: {
        backgroundColor: '$MostLightestGreen', 
        color: '$Green',
        '&:hover': {
          backgroundColor: '$LightestGreen',
        },
        '&:active': {
          backgroundColor: '$LighterGreen',
        }
      },
      ButtonSecondaryDanger: {
        backgroundColor: '$MostLightestRed', 
        color: '$Red',
        '&:hover': {
          backgroundColor: '$LightestRed',
        },
        '&:active': {
          backgroundColor: '$LighterRed',
        }
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'ButtonPrimaryNeutral',
  },
});
