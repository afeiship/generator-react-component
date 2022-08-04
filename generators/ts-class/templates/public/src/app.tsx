import React from 'react';
import <%- ctx.classify(project_name) %> from '../../src/main';
import styled from 'styled-components';

const Container = styled.div`
  width: 80%;
  margin: 30px auto 0;
`;

export default (props: any) => {
  return (
    <Container>
      <<%- ctx.classify(project_name) %> />
    </Container>
  );
};
