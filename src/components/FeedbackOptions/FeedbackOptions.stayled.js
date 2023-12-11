import styled from 'styled-components';

const FeedbackRow = styled('div')`
display: flex;
gap: 20px;
`

const FeedbackOption = styled('button')`
display: flex;
align-items: center;
justify-content: center;
padding: 12px 12px;
cursor: pointer;
transition: all 150ms linear;
color: #ffffff;
background-color: #394264;
border: 4px solid #fcb150;
text-transform: capitalize;
font-size: 14px;
font-weight: 500;
line-height: 1.3;
flex: 0 0 160px;
border-radius:36px;
&:hover {
    transition: all 150ms linear;
    color: #fcb150;
    background-color:#50597b;
  }
`

export {FeedbackOption, FeedbackRow};