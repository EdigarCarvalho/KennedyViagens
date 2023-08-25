import { styled } from "../../../stitches.config";
import * as form from '@radix-ui/react-form';

export const Form = styled( form.Root , {
  fontFamily: '$sans',
  fontSize: "clamp(0.8rem, 1.02vw, 1.2rem)",
  fontWeight: 600,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
  boxSizing: 'border-box',
  
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

export const ErrorText = styled(form.Message, {
  margin: 0,
  color:'$Red',
});

export const Label = styled(form.Label, {
  margin: 0,
  color:'$Ink',
});