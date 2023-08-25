import * as Dialog from "@radix-ui/react-dialog";
import * as form from "@radix-ui/react-form";
import { SubmitHandler } from "react-hook-form";

import { Button, Input, Textarea } from "../index";
import {
  ErrorText,
  FormField,
  Label,
  Form,
} from "../../auth/components/AuthLogin/index.stitches";
import { DialogOverlay, DialogContent,FormFieldCollection, FormFieldInner, XIcon, } from "./index.stitches";
import { useForm } from "react-hook-form";
import { extractHashtags } from "./extractHashtags";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "../../auth/AuthContext";
import { useContext } from "react";

type FormValues = {
  name: string;
  link: string;
  description: string;
  tags: string;
};

function NewToolDialog() {

  const {tools} = useApi();
  const { token } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<FormValues>();

  const sendRequest: SubmitHandler<FormValues> = async (formData) => {
    const { name, link, description, tags } = formData;
    try {
      const hashtags = extractHashtags(tags);
      if (name && link && description && tags ) {
        await tools.create( token ? token : '' ,{
          title: name,
          link: link,
          description: description,
          tags: hashtags,
        } );
      }
      
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button color={"ButtonSecondarySuccess"} size={"sm"}>
          + novo
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogContent>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Dialog.Title className="DialogTitle">Nova Ferramenta</Dialog.Title>
            <Dialog.Close asChild>
              <button
                aria-label="Close"
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <XIcon />
              </button>
            </Dialog.Close>
          </div>

          <Form onSubmit={handleSubmit(sendRequest)}>
            <FormFieldCollection>
              <FormFieldInner css={{ width: "100%" }} name="name">
                <Label> Nome </Label>
                <form.Control asChild>
                  <Input
                    css={{ width: "inherit" }}
                    type="name"
                    required
                    {...register("name")}
                  />
                </form.Control>
                <ErrorText match="valueMissing">
                  Por favor digite o nome da ferramenta
                </ErrorText>
              </FormFieldInner>

              <FormFieldInner css={{ width: "100%" }} name="link">
                <Label> Link </Label>
                <form.Control asChild>
                  <Input
                    css={{ width: "inherit" }}
                    type="link"
                    required
                    {...register("link")}
                  />
                </form.Control>
                <ErrorText match="valueMissing">
                  Por favor digite o link da ferramenta
                </ErrorText>
              </FormFieldInner>
            </FormFieldCollection>

            <FormField css={{ width: "100%" }} name="description">
              <Label> Descrição </Label>
              <form.Control asChild>
                <Textarea
                  css={{ width: "100%" }}
                  required
                  {...register("description")}
                />
              </form.Control>
              <ErrorText match="valueMissing">
                Por favor digite a descrição da ferramenta
              </ErrorText>
            </FormField>

            <FormField css={{ width: "100%" }} name="tags">
              <Label> Tags </Label>
              <form.Control asChild>
                <Input
                  css={{ width: "100%" }}
                  type="tags"
                  required
                  {...register("tags")}
                />
              </form.Control>
              <ErrorText match="valueMissing">
                Por favor digite o tags da ferramenta
              </ErrorText>
            </FormField>

            <Dialog.Close asChild>
              <form.Submit asChild>
                <Button css={{ alignSelf: "flex-end" }}> Salvar </Button>
              </form.Submit>
            </Dialog.Close>
          </Form>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default NewToolDialog;
