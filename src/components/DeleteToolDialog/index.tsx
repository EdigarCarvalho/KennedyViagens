
import * as Dialog from "@radix-ui/react-dialog";
import { DialogContent, XIcon, SpaceContainer } from "../NewToolDialog/index.stitches";
import { useContext } from "react";
import { Button, Description, Title } from "..";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "../../auth/AuthContext";
import { useQuery } from "react-query";
import ClipLoader from "react-spinners/ClipLoader";

export function DeleteToolDialog({ id, onToolRemove }: { id: number; onToolRemove: () => void }) {
  const { tools } = useApi();
  const { token } = useContext(AuthContext);

  const { isLoading: isDeleting , refetch } = useQuery<void, Error>("deleteTool", async () => {
    await tools.deleteById(token ? token : "", id);
  }, {
    enabled: false,
    onSuccess: () => onToolRemove(),
  });

  const handleDelete = () => {
    refetch();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button color={"ButtonSecondaryDanger"} size={"sm"} css={{ fontWeight: "600" }}>
          X Deletar
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogContent size={"ModalMedium"}>
          <SpaceContainer>
            <Title className="DialogTitle">Nova Ferramenta</Title>
            <Dialog.Close asChild>
              <button aria-label="Close" style={{ border: "none", backgroundColor: "transparent" }}>
                <XIcon />
              </button>
            </Dialog.Close>
          </SpaceContainer>

          <Description>Deseja realmente remover essa ferramenta?</Description>

          <div style={{ display: "flex", gap: "10px", alignSelf: "end" }}>
            <Dialog.Close asChild>
              <Button color={"ButtonSecondaryDanger"} onClick={handleDelete}>
                Cancelar
              </Button>
            </Dialog.Close>

            <Button color={"ButtonPrimaryDanger"} onClick={handleDelete}>
              {isDeleting ? <ClipLoader size={14} color={"white"} /> : "Sim"}
            </Button>
          </div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
