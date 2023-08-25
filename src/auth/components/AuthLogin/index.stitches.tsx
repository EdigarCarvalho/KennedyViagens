import { styled } from "../../../stitches.config";

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
  boxSizing: 'border-box',
  
});

export const FormField = styled('div', {
  display: 'inline-flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: 2,

  '@mobile':{
    width: '90vw',
    paddingRight: 10,
  },
});

export const ErrorText = styled('p', {
  margin: 0,
  color:'$Red',
});