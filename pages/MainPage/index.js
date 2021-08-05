import React, {useState} from 'react';

import MainGrid from '../../src/components/MainGrid';
import Communitys from './components/Communitys';
import CreateCommunity from './components/CreateCommunity';
import ProfileSideBar from './components/ProfileSideBar';
import Welcome from './components/Welcome';

const MainPage = () => {
  const date = new Date;
  const [ communitys, setCommunitys ] = useState([{
    avatar: 'http://placehold.it/300x300',
    id: '2021-08-01T17:32:31.044Z',
    name: 'Alurakut',
    url: ''
  }]);

  const user = 'guilhermelaureano';
  const people = [
    {
      avatar: 'https://github.com/guilhermelaureano.png',
      id: '2021-08-05T17:32:31.044Z',
      name: 'guilhermelaureano',
      url: 'https://github.com/guilhermelaureano',
    },
    {
      avatar: 'https://github.com/peas.png',
      id: '2021-08-04T17:32:31.044Z',
      name: 'peas',
      url: 'https://github.com/peas',
    },
    {
      avatar: 'https://github.com/omariosouto.png',
      id: '2021-08-03T17:32:31.044Z',
      name: 'omariosouto',
      url: 'https://github.com/omariosouto',
    },
    {
      avatar: 'https://github.com/juunegreiros.png',
      id: '2021-08-02T17:32:31.044Z',
      name: 'juunegreiros',
      url: 'https://github.com/juunegreiros',
    },
  ];

  const handleCreateCommunity = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const avatar = data.get('image');
    const id = date.toISOString();
    const name = data.get('title');
    
    const newCommunity = { avatar, id, name, url: '' };
    setCommunitys([...communitys, newCommunity]);
  }

  return (
    <MainGrid>
      <div className="profileArea">
        <ProfileSideBar user={user} />
      </div>
      <div className="welcomeArea">
        <Welcome />
        <CreateCommunity onSubmit={handleCreateCommunity} />
      </div>
      <div className="profileRelationsArea">
        <Communitys entries={people} title='Pessoas da comunidade' />
        <Communitys entries={communitys} title='Comunidades' />
      </div>
    </MainGrid>
  );
};

export default MainPage;