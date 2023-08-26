import { styled } from "../../stitches.config";

export const CardStyle = styled("div", {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  backgroundColor: '$DarkWhite',
  fontFamily: "$sans",
  paddingLeft: 12,
  paddingRight: 12,
  paddingBottom: 12,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",  
  borderRadius:'$4',
  transition: '0.5s',
  boxSizing: 'border-box',
  width: 830,
  minHeight: 130,
  height: 'auto',
  '&:hover':{
    backgroundColor: '$DarkerWhite',
  },

  '@mobile': {
    width: '100vw', 

  },
  '@tablet': {
    width: '90vw', 

  },
});

export const CardHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
});


export const Title = styled("h3", {
  display: "flex",
  fontSize: "1.5rem",
  marginBottom: "8px",
});

export const Description = styled("p", {
  fontSize: "1rem",
  marginBottom: "8px",
});

export const Link = styled("a", {

  color: "red",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
  },
});

export const TagsContainer = styled("div", {
  marginTop: "8px",
  display: "flex",
  gap: "4px",
  flexWrap: 'wrap',
});

export const Tag = styled("span", {
  fontSize: "0.8rem",
  padding: "2px 8px",
  backgroundColor: "lightgray",
  borderRadius: "4px",
});