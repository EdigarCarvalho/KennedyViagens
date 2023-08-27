## Desafio Front-end Biztrip

Sua tarefa é construir um front-end para a aplicação **FEMAQUA** (Ferramentas Maravilhosas que Adoro). O desafio é um simples repositório para gerenciar ferramentas com seus respectivos nomes, links, descrições e tags.

## Como Executá-lo?

**Credenciais de acesso**

user: [admin@admin.com](mailto:admin@admin.com)
senha: admin123

## Hospedagem Vercel
https://kennedy-viagens.vercel.app/

## Rodando a Aplicação com Docker


Certifique-se de ter o Docker instalado na sua máquina. Você pode baixá-lo em: [https://www.docker.com/get-started](https://www.docker.com/get-started)

    gh repo clone EdigarCarvalho/KennedyViagens
    cd KennedyViagens
  
Em alguns casos os comandos abaixo precisam de um sudo (ex: sudo docker build -t femaqua .  )

    docker build -t femaqua . 
    docker run -p 8080:8080 femaqua

## Rodando a Aplicação com npm
Certifique-se de ter o Node.js instalado em sua máquina. Caso não o tenha, você pode baixá-lo [aqui](https://nodejs.org/en).

Clone o repositório:

    git clone https://github.com/SeuUsuario/NomeDoRepositorio.git
    cd NomeDoRepositorio

Instale as dependências:

Certifique-se de estar no diretório raiz do projeto e execute o seguinte comando para instalar as dependências necessárias:

    npm install
    
Execute a aplicação:

Use o seguinte comando para iniciar a aplicação:

    npm run dev

ou

    npm run preview

# Quais ferramentas foram usadas, como e por quê?

## Stitches :
 - Gera estilos otimizados em tempo de compilação, resultando em menor carga na execução.
 - Permite estilos dinâmicos através de JavaScript, evitando a necessidade de alternar entre arquivos de estilos e código.
 - Previne vazamentos e conflitos de estilo.

## Radix UI :

 - Fornecimento de componentes primitivos reduz o esforço de criação e padronização de componentes. Além de da acessibilidade integrada nos componentes, economizando tempo na implementação de boas práticas de acessibilidade.

## Storybook :

 - A documentação gerada pelo Storybook serve como uma referência prática ao longo do desenvolvimento e agiliza a integração de novos componentes

## TypeScript :

 - Tipagem estática detecta erros em tempo de compilação, prevenindo muitos bugs que poderiam ocorrer em tempo de execução.
 - Melhora a legibilidade do código, tornando mais fácil entender a estrutura e a intenção.

## Vite :

 - Tempos de compilação e recarga mais rápidos durante o desenvolvimento, agilizando a iteração.

## Foto do Projeto:

![image](https://github.com/EdigarCarvalho/KennedyViagens/assets/106999716/b82e1f04-37b5-4cd4-9731-47b9c530521b)
![image](https://github.com/EdigarCarvalho/KennedyViagens/assets/106999716/9fdce388-bbb3-435c-b55a-3f7c9d8cfd5c)



