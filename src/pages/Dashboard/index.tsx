import { useContext, useEffect, useState } from "react";
import NewToolDialog from "../../components/NewToolDialog";
import SearchBar from "../../components/SearchBar";
import { useApi } from "../../hooks/useApi";
import { CardsContainer } from "./index.stitches";
import { AuthContext } from "../../auth/AuthContext";
import ToolCard from "../../components/ToolCard";


export interface ToolType {
    id: number;
    title: string;
    link: string;
    description: string;
    tags: string[];
}
  
  function DashBoard() {
    const [toolsCollection, setToolsCollection] = useState<ToolType[]>([]);
    const { tools } = useApi();
    const { token } = useContext(AuthContext);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const data = await tools.get(token ? token : "", '');
          setToolsCollection(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };    
  
      fetchData();
    }, [token]);
  
    return (
      <CardsContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "",
          }}
        >
          <SearchBar />
          <NewToolDialog />
        </div>
        <div>
        {toolsCollection.map((tool) => (
          <ToolCard key={tool.id} {...tool} />
        ))}
      </div>
      </CardsContainer>
    );
  }
  
  export default DashBoard;