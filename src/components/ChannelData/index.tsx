import React, { useEffect, useRef } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);
  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Patryck"
            date="21/06/2022"
            content="Good morning!!"
          />
        ))}

        <ChannelMessage author='Luna Bot'
          date='21/06/2022'
          content={
            <>
              <Mention>@Patryck</Mention>, Playing  MISTÉRIOS DA MEIA NOITE
            </>
          } hasMention
          isBot />
      </Messages>

      <InputWrapper>
        <Input />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;