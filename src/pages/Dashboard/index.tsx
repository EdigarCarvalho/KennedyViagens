import  { useContext, useEffect, useState } from 'react';
import NewToolDialog from '../../components/NewToolDialog';
import { useApi } from '../../hooks/useApi';
import { CardsContainer, DashboardContainer } from './index.stitches';
import { AuthContext } from '../../auth/AuthContext';
import ToolCard from '../../components/ToolCard';
import SearchBar from '../../components/SearchBar'; // Certifique-se de importar o SearchBar correto aqui.
import { Title } from '../../components/ToolCard/index.stitches';

export interface ToolType {
  id: number;
  title: string;
  link: string;
  description: string;
  tags: string[];
}

function DashBoard() {
  const [toolsCollection, setToolsCollection] = useState<ToolType[]>([]);
  const [filteredTools, setFilteredTools] = useState<ToolType[]>([]);
  const { tools } = useApi();
  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await tools.get(token ? token : '');
        setToolsCollection(data);
        setFilteredTools(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [token]);

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
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 'min(27vw, 400px)',
        }}
      >
        <SearchBar onSearch={handleSearch} />
        <NewToolDialog />
        </div>

        {toolsCollection.length === 0 ? (
          <Title css={{marginTop: '40vh'}}>Nenhuma ferramenta no banco de dados</Title>
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
