import styled from "styled-components";
import image3 from "@assets/14.png";
import image5 from "@assets/16.png";

export default styled.article`
background-color:#F4F4F6;
  display: flex;
  align-items:center;
  justify-content:space-between;
  color: #c56e33;
  p {
    text-align: center;
  }
  margin-right:-5rem;
  
  span {
    font-weight: bold;
    color: #551e19;
    background-color:#F4F4F6;
    margin-left
  }
  .right,
  .left {
    
    padding: 5rem;
    background-color:#F4F4F6;
    
  }
  li {
    margin-left:5rem;
    list-style: none;
    padding: 0.5rem;
    background-color:#F4F4F6;
    
  }

 .points {

  margin-left:20rem;

  }
  h4 {
   
    background-color:#F4F4F6;
    text-decoration: underline;
    text-underline-offset: 8px;
    text-align: center;
  }
  .right,
  h4 {
    font-size: 1.25rem;
  }

  .left {
    height:22vh;
    margin-top:11%;
    margin-bottom:9.2%;
    background-size: contain;
    background-image: url(${image3}); 
    background-repeat:no-repeat;
    margin-right:0rem;
    margin-left:9rem;
    padding-right:0rem;
    background-color:#F4F4F6;
  }



.left h4 {
  margin-right:2rem;
  margin-left:26rem;
  margin-bottom:3rem;
  width:12rem;

}

.left p {
text-align:center;
font-size:1.5rem;
}


  .right {
    background-color:#F4F4F6;
    height:22vh;
    background-repeat:no-repeat;
    margin-top:10%;
    margin-bottom:8%;
    background-image: url(${image5});
    background-size: contain;
    background-repeat:no-repeat;
    margin-left:1rem;
    padding-left:0rem;
    width:60rem;
    
   
    
  }

    ul{
     
    padding-left:-1rem;
    font-size:1rem;
    padding-top:-4rem;
    margin-left:17rem;
    margin-top:-5rem;
    height:30rem;
    
    
     
  }

  ul {
    padding: 0 1rem;
  }
`;
