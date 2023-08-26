import { useContext, useState } from 'react';
import { useApi } from '../../hooks/useApi';
import { CardsContainer, DashboardContainer, GapContainer } from './index.stitches';
import { AuthContext } from '../../auth/AuthContext';
import { CompanyName, SubTitle, TextDiv } from '../Auth/index.stitches';
import { NewToolDialog, SearchBar, Title, ToolCard } from '../../components';
import { ToolType } from '../../interfaces';
import { useQuery } from 'react-query'; 
import ClipLoader from 'react-spinners/ClipLoader';


function DashBoard() {
  const { tools } = useApi();
  const { token } = useContext(AuthContext);
  
  const { data: toolsCollection, isLoading, isError, refetch } = useQuery<ToolType[]>('tools', () =>
    tools.get(token ? token : '')
  );

  const [searchTerm, setSearchTerm] = useState<string>(''); 

  const handleToolAction = () => {
    refetch();
  };

  const handleSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm); 
  };

  const filteredTools = toolsCollection?.filter((tool) =>
    tool.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

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

      {isLoading ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100px' }}>
                <ClipLoader color={'#365DF0'} loading={true} size={50} />
              </div>
      ) : isError ? (
        <Title css={{ marginTop: "30vh", textAlign: "center" }}>
        Error na requisiçao
      </Title>
      ) : filteredTools?.length === 0 ? (
        <Title css={{ marginTop: "30vh", textAlign: "center" }}>
          Nenhuma ferramenta no banco de dados
        </Title>
      ) : (
        <CardsContainer>
          {filteredTools?.map((tool) => (
            <ToolCard key={tool.id} {...tool} onToolRemove={handleToolAction} />
          ))}
        </CardsContainer>
      )}
    </DashboardContainer>
  );
}

export default DashBoard;
