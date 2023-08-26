import * as Dialog from "@radix-ui/react-dialog";
import * as form from "@radix-ui/react-form";
import { SubmitHandler } from "react-hook-form";
import { Button, ErrorText, Input, Label, Textarea, Title } from "../index";
import { FormField, Form } from "../../auth/components/AuthLogin/index.stitches";
import { SpaceContainer, DialogContent, FormFieldCollection, FormFieldInner, XIcon } from "./index.stitches";
import { useForm } from "react-hook-form";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "../../auth/AuthContext";
import { useContext, useState } from "react";
import { normalizeArrayString } from "./normalizeArrayString";
import { FormValues } from "../../interfaces";
import { useMutation } from "react-query";
import ClipLoader from "react-spinners/ClipLoader";

export function NewToolDialog({ onToolAdded }: { onToolAdded: () => void }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { tools } = useApi();
  const { token } = useContext(AuthContext);

  const createToolMutation = useMutation<void, Error, FormValues>(async (formData) => {
    const { name, link, description, tags } = formData;
    const hashtags = normalizeArrayString(tags);

    await tools.create(token ? token : '', {
      title: name,
      link: link,
      description: description,
      tags: hashtags,
    });
    setIsDialogOpen(false);
  }, {
    onSuccess: () => {
      onToolAdded();
    },
  });

  const { isLoading: isCreating } = createToolMutation;

  const sendRequest: SubmitHandler<FormValues> = async (formData) => {
    createToolMutation.mutate(formData);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button color={"ButtonSecondarySuccess"} size={"sm"} onClick={() => setIsDialogOpen(true)}>
          + Novo
        </Button>
      </Dialog.Trigger>

      {isDialogOpen && (
        <Dialog.Portal>
          <DialogContent size={"ModalHuge"}>
            <SpaceContainer>
              <Title>Nova Ferramenta</Title>
              <Dialog.Close asChild>
                <button aria-label="Close" style={{ border: "none", backgroundColor: "transparent" }}>
                  <XIcon />
                </button>
              </Dialog.Close>
            </SpaceContainer>

            <ToolForm isCreating={isCreating} sendRequest={sendRequest} />
          </DialogContent>
        </Dialog.Portal>
      )}
    </Dialog.Root>
  );
}

function ToolForm({ isCreating, sendRequest }:{isCreating: boolean ,sendRequest: (data: any) => void}) {
  const { register, handleSubmit } = useForm(); 

  return (
    <Form css={{ alignSelf: "auto" }} onSubmit={handleSubmit(sendRequest)}>
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
        <Button type='submit' css={{ alignSelf: "flex-end" }}>
          {isCreating ? <ClipLoader size={14} color={"white"} /> : "Salvar"}
        </Button>
      </form.Submit>
    </Form>
  );
}
