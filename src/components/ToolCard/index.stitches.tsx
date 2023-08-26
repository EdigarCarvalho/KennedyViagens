import { styled } from "../../stitches.config";

export const CardStyle = styled("div", {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  backgroundColor: '$DarkWhite',
  fontFamily: "$sans",
  padding: 10,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",  
  borderRadius:'$4',
  transition: '0.5s',
  boxSizing: 'border-box',
  width: 830,
  minHeight: 130,
  height: 'auto',
  gap: 10,
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
  marginBottom: 8,
});


export const Title = styled("h3", {
  all: 'unset',
  fontFamily:'$sans',
  display: "flex",
  fontSize: "$Header3",
  fontWeight:'600',
});

export const Description = styled("p", {
  all: 'unset',
  fontSize: "$Body",
  textAlign:'justify',
});

export const Link = styled("a", {
  display: "inline-flex",
  fontSize: "$BodySmall",
  color: "$DarkTeal",

});

export const TagsContainer = styled("div", {

  fontSize: "$BodySmall",
  display: "flex",
  gap: "4px",
  flexWrap: 'wrap',
});

export const Tag = styled("span", {
  fontSize: "$BodySmallest",
  padding: "2px 8px",
  backgroundColor: "lightgray",
  borderRadius: "4px",
});