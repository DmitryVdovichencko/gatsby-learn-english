import React from 'react';
import styled from "styled-components";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import { InlineIcon } from '@iconify/react';
import calendarIcon from '@iconify/icons-flat-color-icons/calendar';

const Tag = styled.li`

display: inline-flex;

a{

  background-image:none;
  text-shadow:none;
  text-decoration:none;
}
`
const TagText = styled.span`
	padding:0px 5px;
`
	


	

const TagIcons = [
  {
    tagName:"develop",
    tagIcon: calendarIcon
  }
]



export default (props) => {
	const TagArr = TagIcons.filter((tagObj)=> tagObj.tagName === props.tagName);
    const curTagIcon = TagArr.length > 0 ? TagArr[0].tagIcon : undefined;
    return(
    	<Tag key={props.key}>
			<Link to={`/tags/${kebabCase(props.tagName)}/`}>
              <InlineIcon icon={curTagIcon} />
              <TagText>{`${props.tagName} (${props.tagCount})`}</TagText>
            </Link>
    
        </Tag>

    	)
}

	