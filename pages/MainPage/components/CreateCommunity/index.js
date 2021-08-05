import Box from '../../../../src/components/Box';

const CreateCommunity = ({onSubmit}) => (
  <Box>
    <h2 className="smallTitle">O que você deseja fazer?</h2>
    <form onSubmit={onSubmit}>
      <div>
        <input 
          aria-label="Qual vai ser o nome da sua comunidade?"
          name="title"
          placeholder="Qual vai ser o nome da sua comunidade?"
          type="text"
        />
      </div>
      <div>
        <input
          aria-label="Coloque uma URL para usarmos de capa"
          name="image"
          placeholder="Coloque uma URL para usarmos de capa"
          type="text"
        />
      </div>
      <button>Criar Comunidade</button>
    </form>
  </Box>
);

export default CreateCommunity;
