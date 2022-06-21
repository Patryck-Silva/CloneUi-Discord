import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string,
  isBot?: boolean
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (<User>
    <Avatar className={isBot ? 'bot' : ''} />
    <strong>{nickname}</strong>

    {isBot && <span>Bot</span>}
  </User>);
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role> Disponivel-1</Role>
      <UserRow nickname='Patryck Silva' />

      <Role> Offline- 18</Role>
      <UserRow nickname='LunaBot' isBot />
      <UserRow nickname='Vitão' />
      <UserRow nickname='jao' />
      <UserRow nickname='Wesley' />
      <UserRow nickname='Danilo Oliveira' />
      <UserRow nickname='heron_oa' />
      <UserRow nickname='Alina|Design' />
      <UserRow nickname='Leo' />
      <UserRow nickname='Patryck ' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
      <UserRow nickname='fulano' />
    </Container>
  );
};

export default UserList;