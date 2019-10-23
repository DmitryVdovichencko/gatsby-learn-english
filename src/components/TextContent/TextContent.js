import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import styled from 'styled-components';

const Article = styled.article`
  width: 100%;
  margin-top:10px;
  padding: 0px 20%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    padding: 0px 8%;
  }
   @media (max-width: 460px) {
    padding: 0px 3%;
  }
  `;

export default function TetxContent(props) {
	return (
		
			<Article>{props.children}</Article>
		
		)
	}