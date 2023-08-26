import { styled } from "../../stitches.config";
import * as form from '@radix-ui/react-form';

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

  export const ErrorText = styled(form.Message, {
    margin: 0,
    color:'$Red',
  });
  
  export const Label = styled(form.Label, {
    margin: 0,
    color:'$Ink',
  });