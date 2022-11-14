import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Container = styled.div`
  height: 700px;
  width: 500px;
  background-color: rgba(64, 148, 170, .3);
  box-shadow: 5px 5px 10px rgba(0,0,0,.5);
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px;
`;

const Image = styled.img`
  width: 500px;
  display: flex;
  align-self: center;
  border-radius: 10px;
`;

const Title = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  letter-spacing: 3px;
  margin-left: 20px;
`;

const Stars = styled.div`
  height: 25px;
  display: flex;
  gap: 5px;
  align-items: center;
  margin-left: 20px;
`;

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: ${(props) => (!props.empty ? "yellow" : "black")};
`;

const NoStars = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.5rem;
  margin-left: 10px;
  width: 150px;
  text-align: center;
  text-shadow: 0 0px 15px white;
  filter: drop-shadow(0 0 5px white);

  background: linear-gradient(
    to right,
    rgba(114, 51, 27, 0.5) 14%,
    rgba(217, 111, 1, 0.5) 14% 28%,
    rgba(255, 255, 0, 0.5) 28% 42%,
    rgba(248, 196, 137, 0.5) 42% 56%,
    rgba(255, 255, 255, 0.7) 56% 70%,
    rgba(86, 86, 86, 0.5) 70% 85%,
    rgba(0, 0, 0, 0.7) 85% 100%
  );
`;

const Paragraph = styled.p`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 1.2rem;
  margin: 20px;
`;

const SubParagraph = styled(Paragraph)`
  font-weight: 100;
  font-size: 1.1rem;
  padding-bottom: 20px;
  border-bottom: 1px solid gray;
`;

const Subtitle = styled(Title)`
  font-size: 1.4rem;
`;

const Buttons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const Button = styled.button`
    width: 80px;
    height: 40px;
    border-radius: 50px;
    border-color: white;
    box-shadow: 2px 2px 5px black;
    background-color: ${props => props.prop === "Item1"? "red" : props.prop === "Item2"? "orange" : props.prop === "Item3"? "yellow" : props.prop === "Item4"? "lightgreen" : props.prop === "Item5"? "lightblue" : null};
`;

const Action = styled.a`
    margin-top: 30px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
    width: 80px;
    height: 40px;
    color: blue;
`;

const Card = () => {
  const buttons = ["Item1", "Item2", "Item3", "Item4", "Item5"];
  return (
    <Container>
      <Image
        src={
          "https://store-images.s-microsoft.com/image/apps.39852.14455250034361967.824623c3-91b6-402f-9a68-c66bfac9bc20.7bfae929-5b2a-4efe-9639-5ffd1e2de297?q=90&w=480&h=270"
        }
      />
      <Title className="title">Dragon Ball</Title>
      <Stars>
        <StyledFontAwesomeIcon icon={faStar} />
        <StyledFontAwesomeIcon icon={faStar} />
        <StyledFontAwesomeIcon icon={faStar} />
        <StyledFontAwesomeIcon icon={faStar} />
        <StyledFontAwesomeIcon empty icon={faStar} />
        <NoStars>4/5 (460)</NoStars>
      </Stars>
      <Paragraph>Some paragraph</Paragraph>
      <SubParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus
        condimentum neque.
      </SubParagraph>
      <Subtitle>Subtitle</Subtitle>
      <Buttons>
        {buttons.map((item, index) => {
          return <Button prop={item} key={index}>{item}</Button>;
        })}
      </Buttons>
      <Action href={"https://fr.dragon-ball-official.com/"}>Link</Action>
    </Container>
  );
};

export default Card;
