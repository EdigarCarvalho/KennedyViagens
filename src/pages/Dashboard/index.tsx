import  { useContext, useEffect, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { CardsContainer, DashboardContainer, GapContainer } from './index.stitches';
import { AuthContext } from '../../auth/AuthContext';
import { CompanyName, SubTitle, TextDiv } from '../Auth/index.stitches';
import { NewToolDialog, SearchBar, Title, ToolCard } from '../../components';
import { ToolType } from '../../interfaces';

function DashBoard() {
  const [toolsCollection, setToolsCollection] = useState<ToolType[]>([]);
  const [filteredTools, setFilteredTools] = useState<ToolType[]>([]);
  const { tools } = useApi();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    
    fetchData();
  }, [token]);
  
  const fetchData = async () => {
    try {
      const data = await tools.get(token ? token : '');
      setToolsCollection(data);
      setFilteredTools(data); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
    const handleToolAction = () => {
      fetchData(); 
    };

  const handleSearch = (searchTerm: string) => {
    if (searchTerm === '') {
      setFilteredTools(toolsCollection); 
    } else {
      const filtered = toolsCollection.filter((tool) =>
        tool.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredTools(filtered);
    }
  };

  return (
    <DashboardContainer>
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <TextDiv css={{ alignSelf: "start", marginTop: "6vh" }}>
          <CompanyName css={{ fontSize: "$SuperHeader" }}>FEMAQUA</CompanyName>
          <SubTitle css={{ fontSize: "$Header3" }}>
            Ferramentas Maravilhosas que Adoro
          </SubTitle>
        </TextDiv>
        <GapContainer>
          <SearchBar onSearch={handleSearch} />
          <NewToolDialog onToolAdded={handleToolAction} />
        </GapContainer>
      </div>

      {toolsCollection.length === 0 ? (
        <Title css={{ marginTop: "30vh", textAlign: "center" }}>
          Nenhuma ferramenta no banco de dados
        </Title>
      ) : (
        <CardsContainer>
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </CardsContainer>
      )}
    </DashboardContainer>
  );
}

export default DashBoard;
