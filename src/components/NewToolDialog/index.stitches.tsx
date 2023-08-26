
import { FormField } from "../../auth/components/AuthLogin/index.stitches";
import { styled } from "../../stitches.config";
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from "@radix-ui/react-icons";

export const DialogOverlay = styled(Dialog.Overlay, {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'fixed',
    inset: 0,
    animation: 'overlayShow cubic-bezier(0.16, 1, 0.3, 1)',
});

export const DialogContent = styled(Dialog.Content, {
    display:"flex",
    flexDirection:'column',
    justifyContent:'space-between',
    gap: 10,
    fontFamily: '$sans',
    backgroundColor: '$White',
    borderRadius: '$4',
    boxShadow: '0px 10px 38px -10px hsla(206, 22%, 7%, 0.35), 0px 10px 20px -15px hsla(206, 22%, 7%, 0.20)',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: 25,
    animation: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
    '@tablet':{
        maxWidth: '80vw'
    },
    '@mobile':{
        maxWidth: '90vw'
    },
    variants: {
        size: {
            ModalSmall: {
                width: '400px',
                minHeight: '230px',
            },
            ModalMedium: {
                width: '600px',
                minHeight: '200px',
            },
            ModalLarge: {
                width: '800px',
                minHeight: '210px',
            },
            ModalHuge: {
                width: '960px',
                minHeight: '190px',
            },
        },
    },
    defaultVariants: {
        size: 'ModalMedium', 
    },
});

export const FormFieldCollection = styled( 'div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
 
    width: '100%',
    gap: 2,
    boxSizing: 'border-box',
    '@mobile':{
        flexWrap: "wrap",
        '& > *': {
            width: '10',
        },
    },
});

export const FormFieldInner = styled( FormField, {
    display: 'inline-flex',
    maxWidth: '47%',
    '@mobile':{
        maxWidth: '100%',
    },
});

export const XIcon = styled(Cross2Icon, {
    all: 'unset',
    backgroundColor: 'transparent',
    border: 'none',
    display:'inline-flex',
    marginTop:'20%',
    width: 26,
    height: 26,
    transition: ' 0.5s', 
    '&:hover': {
        transform: 'rotate(90deg)', 
    },
  });



