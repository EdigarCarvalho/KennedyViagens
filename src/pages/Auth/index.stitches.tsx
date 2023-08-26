import { styled } from "../../stitches.config";

export const BlueBlock = styled("section", {
  display: 'flex',
  flexDirection: 'row',
  flex: '0.6',
  backgroundColor:'$DarkBlue',
  '@mobile':{
    display: 'none',
  },

});

export const AuthPageStyle = styled("section", {
  display: 'flex',
  minHeight: '100vh',
});

export const CompanyName = styled("h1", {
  all: 'unset',
  fontFamily:'$sans',
  fontSize: '$Header1',
  fontWeight: 'bold',
});

export const SubTitle = styled("h5", {
  all: 'unset',
  fontFamily:'$sans',
  fontSize: '$Header4',
  fontWeight: 'bold',

});

export const TextDiv = styled("div", {
  marginTop:'10vh',
  display: 'inline-flex',
  flexDirection:'column',
  alignSelf: 'center',
  maxWidth: '96vh',
});

export const AuthChildStyle = styled("section", {
  display: 'flex',
  flex: '1', 
  flexDirection:'column',
  justifyContent: 'start',
  maxWidth: '96vh',
  gap:'20vh',
});

