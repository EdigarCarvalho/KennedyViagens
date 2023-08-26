import * as Dialog from "@radix-ui/react-dialog";
import * as form from "@radix-ui/react-form";
import { SubmitHandler } from "react-hook-form";
import { Button, ErrorText, Input, Label, Textarea, Title } from "../index";
import { FormField, Form } from "../../auth/components/AuthLogin/index.stitches";
import { SpaceContainer, DialogContent,FormFieldCollection, FormFieldInner, XIcon, } from "./index.stitches";
import { useForm } from "react-hook-form";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "../../auth/AuthContext";
import { useContext, useState } from "react";
import { normalizeArrayString } from "./normalizeArrayString";
import { FormValues } from "../../interfaces";

export function NewToolDialog({onToolAdded}:{onToolAdded : () => void}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {tools} = useApi();
  const { token } = useContext(AuthContext);
  const { register, handleSubmit } = useForm<FormValues>();

  const sendRequest: SubmitHandler<FormValues> = async (formData) => {
    const { name, link, description, tags } = formData;

    try {
      const hashtags = normalizeArrayString(tags);
      if (name && link && description && tags ) {
        await tools.create( token ? token : '' , {
          title: name,
          link: link,
          description: description,
          tags: hashtags,
        } );
        setIsDialogOpen(false);
        onToolAdded();
      }
    } catch (error) {
      console.log(error);
    }

    
  };
  
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button color={"ButtonSecondarySuccess"} size={"sm"} onClick={() => setIsDialogOpen(true)} >
          + Novo
        </Button>
      </Dialog.Trigger>

      {isDialogOpen && (
      <Dialog.Portal>
        <DialogContent size={"ModalHuge"}>
          <SpaceContainer>
            <Title >Nova Ferramenta</Title>
            <Dialog.Close asChild>
              <button
                aria-label="Close"
                style={{ border: "none", backgroundColor: "transparent" }}
              >
                <XIcon />
              </button>
            </Dialog.Close>
          </SpaceContainer>

          <Form css={{alignSelf: 'auto'}} onSubmit={handleSubmit(sendRequest)}>
            <FormFieldCollection>
              <FormFieldInner css={{ width: "calc(100% - 10px)" }} name="name">
                <Label> Nome </Label>
                <form.Control asChild>
                  <Input
                    css={{ width: "inherit" }}
                    type="text"
                    required
                    {...register("name")}
                  />
                </form.Control>
                <ErrorText match="valueMissing">
                  Por favor digite o nome da ferramenta
                </ErrorText>
              </FormFieldInner>

              <FormFieldInner css={{ width: "calc(100% - 10px)" }} name="link">
                <Label> Link </Label>
                <form.Control asChild>
                  <Input
                    css={{ width: "inherit" }}
                    type="text"
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
                  css={{ width: "calc(100% - 10px)" }}
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
                  css={{ width: "calc(100% - 10px)" }}
                  type="text"
                  required
                  {...register("tags")}
                />
              </form.Control>
              <ErrorText match="valueMissing">
                Por favor digite o tags da ferramenta
              </ErrorText>
            </FormField>

              <form.Submit asChild>
                <Button type='submit' css={{ alignSelf: "flex-end" } }> Salvar </Button>
              </form.Submit>

          </Form>
        </DialogContent>
      </Dialog.Portal>
      )}
    </Dialog.Root>
  );
}

