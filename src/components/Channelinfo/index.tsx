import React from 'react';

import { Container, Title, HashtagIcon, Description, Separator } from './styles';

const ChannelInfo: React.FC = () => {
  return (
    <Container>
      <HashtagIcon />
      <Title>Chat-geral</Title>
      <Separator />
      <Description>Canal aberto para conversas</Description>
    </Container>
  );
};

export default ChannelInfo;