import React from 'react';

import ChannelButton from '../ChannelButton'

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="Front-End" />
      <ChannelButton channelName="Wax" />
      <ChannelButton channelName="Wallets" />
      <ChannelButton channelName="soft-skills" />
      <ChannelButton channelName="castles" />
      <ChannelButton channelName="css-tailwind" />
    </Container>
  );
};

export default ChannelList;