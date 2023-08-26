import * as Dialog from "@radix-ui/react-dialog";
import { DialogContent, XIcon , SpaceContainer } from "../NewToolDialog/index.stitches";

import { useContext } from "react";
import { Button, Description, Title } from "..";
import { useApi } from "../../hooks/useApi";
import { AuthContext } from "../../auth/AuthContext";

export function DeleteToolDialog({ id  } : { id : number  }) {

  const {tools} = useApi();
  const { token } = useContext(AuthContext);
 
  const sendRequest = async () => {
    try {
      await tools.deleteById( token ? token : '' , id);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button color={"ButtonSecondaryDanger"} size={"sm"} css={{fontWeight: '600'}}>
          X Deletar
        </Button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogContent size={"ModalMedium"}>
          <SpaceContainer>
            <Title className="DialogTitle">Nova Ferramenta</Title>
            <Dialog.Close asChild>
              <button
                aria-label="Close"
                style={{ border: "none", backgroundColor: "transparent" }}
                >
                <XIcon />
              </button>
            </Dialog.Close>
          </SpaceContainer>

          <Description>
              Deseja realmente remover essa ferramenta ?
          </Description>


          <div style={{ display: 'flex', gap: '10px' , alignSelf: 'end'}}>
            <Dialog.Close asChild>
              <Button 
              color={"ButtonSecondaryDanger"} 
              onClick={sendRequest}
              > Cancelar </Button>
            </Dialog.Close>
            
            <Button 
            color={"ButtonPrimaryDanger"} 
            onClick={sendRequest}
            > Sim </Button>
          </div>

        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}