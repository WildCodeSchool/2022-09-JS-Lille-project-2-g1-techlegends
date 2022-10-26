import styled from "styled-components";

export default styled.article`
display: flex;
color: #C56E33;

span{
    font-weight: bold;
    color: #551E19;
}

.right, .left{
    margin auto;
    padding: 5rem;
}

li{
    list-style: none;
    padding:0.5rem;
}

.right,h4{
    font-size: 2rem;
}

.left{
    border-left: solid 1px #551E19;
}
`;
