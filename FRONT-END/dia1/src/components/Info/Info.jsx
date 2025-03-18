import React, { useState, useEffect } from "react";

import styled from "styled-components";

import Planta from "../../assets/plantaGrande.png";

const SectionContainer = styled.section`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  height: 800px;
`;

const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  overflow: visible;
`;

const PlantImage = styled.img`
  height: 110%;
  position: absolute;
  bottom: 10px;
  right: 0;
  z-index: 2;
`;

const YellowCircle = styled.div`
  position: absolute;
  width: 450px;
  height: 450px;
  top: -100px;
  right: -100px;
  background-color: #ffcc33;
  border-radius: 50%;
  z-index: 1;
`;

const WhiteShape = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 50%;
  bottom: 40px;
  right: -50px;
  z-index: 1;
`;

const LowTitle = styled.h3`
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 22px;
  margin: 0 0 10px 0;
  line-height: 0.9;
  color: #6d6d6d;
`;

const Title = styled.h2`
  font-family: "Elsie Swash Caps", serif;
  font-size: 82px;
  font-weight: 900;
  margin: 0 0 30px 0;
  line-height: 0.9;
  color: #111;
`;

const MelhoresWord = styled.span`
  display: block;
  margin-bottom: 1px;
`;

const PlantasWord = styled.span`
  display: block;
`;

const Subtitle = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 40px;
  color: #555;
  max-width: 450px;
`;

const NewsletterForm = styled.form`
  display: flex;
  width: 485px;
  height: 60px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  border-radius: 4px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0 20px;
  flex: 1;
  border: 1px solid #e8e8e8;
  border-right: none;
`;

const EmailIcon = styled.span`
  color: #bdbdbd;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const Input = styled.input`
  border: none;
  height: 60%;
  width: 100%;
  font-size: 14px;
  color: #757575;
  outline: none;

  &::placeholder {
    color: #bdbdbd;
    font-weight: 300;
    font-family: "Montserrat", sans-serif;
  }
`;

const Button = styled.button`
  background-color: ${(props) => (props.disabled ? "#e0e0e0" : "#ffcc33")};
  color: ${(props) => (props.disabled ? "#9e9e9e" : "#fff")};
  border: none;
  padding: 0 0px;
  font-size: 16px;
  font-weight: 400;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.2s ease;
  min-width: 180px;
  font-family: "Montserrat", sans-serif;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#e0e0e0" : "#f0c025")};
  }
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  padding: 16px;
  background-color: #e8f5e9;
  border-left: 4px solid #4caf50;
  color: #2e7d32;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  border-radius: 4px;
  max-width: 485px;
`;

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  useEffect(() => {
    setIsEmailValid(validateEmail(email));
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEmailValid) {
      setShowSuccessMessage(true);

      console.log("Email submitted:", email);

      setTimeout(() => {
        setEmail("");
        setShowSuccessMessage(false);
      }, 5000);
    }
  };

  return (
    <SectionContainer>
      <ContentContainer>
        <LowTitle>Sua casa com as</LowTitle>
        <Title>
          <MelhoresWord>melhores</MelhoresWord>
          <PlantasWord>plantas</PlantasWord>
        </Title>
        <Subtitle>
          Encontre aqui uma vasta seleção de plantas para decorar a sua casa e
          torna-la uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail
          e assine nossa newsletter para saber das novidades da marca.
        </Subtitle>
        <NewsletterForm onSubmit={handleSubmit}>
          <InputContainer>
            <EmailIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </EmailIcon>
            <Input
              type="email"
              placeholder="Insira seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputContainer>
          <Button type="submit" disabled={!isEmailValid}>
            Assinar newsletter
          </Button>
        </NewsletterForm>

        {showSuccessMessage && (
          <SuccessMessage>
            Obrigado pela sua assinatura, você receberá nossas novidades no
            e-mail {email}
          </SuccessMessage>
        )}
      </ContentContainer>
      <ImageContainer>
        <YellowCircle />
        <WhiteShape />
        <PlantImage src={Planta} alt="Ficus Lyrata" />
      </ImageContainer>
    </SectionContainer>
  );
};

export default NewsletterSection;
