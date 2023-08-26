import { styled } from "../../../stitches.config";
import * as form from '@radix-ui/react-form';

export const Form = styled( form.Root , {
  display: 'flex',

  fontFamily: '$sans',
  fontSize: "$BodySmall",
  fontWeight: 600,
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
  alignSelf:"center",

  '& > button':{
    alignSelf:"end",
  }
});

export const FormField = styled(form.Field, {

  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 2,

  '@mobile':{
    width: '90vw',
    paddingRight: 10,
  },

});

