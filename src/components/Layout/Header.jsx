import React, { useState } from "react";
import ToggleMenu from "../ToggleMenu";
import { Button } from "../UI/Button";
import { HeaderWrapper, HeaderContent, Logo, Nav } from "./Header.styles";
import Modal from "../Modal";
import LoginForm from "../LoginForm";
import RegistrationForm from "../RegistrationForm";

export const Header = ({ toggleTheme, isDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleLogin = (loginData) => {
    console.log("Пользователь вошел:", loginData);
  };

  const handleRegistration = (userData) => {
    console.log("Пользователь зарегистрирован:", userData);
  };

  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo>EnglishPro</Logo>
        <Nav>
          <Button variant="ghost">Курсы</Button>
          <Button variant="ghost">Преподаватели</Button>
          <Button variant="ghost">Контакты</Button>
          <Button variant="ghost" onClick={toggleModal}>
            {isLogin ? "Войти" : "Зарегистрироваться"}
          </Button>
          <ToggleMenu toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        </Nav>
      </HeaderContent>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <h2>{isLogin ? "Вход" : "Регистрация"}</h2>
        {isLogin ? (
          <LoginForm onLogin={handleLogin} />
        ) : (
          <RegistrationForm onSubmit={handleRegistration} />
        )}
        <Button variant="ghost" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Нет аккаунта? Зарегистрироваться" : "Уже есть аккаунт? Войти"}
        </Button>
      </Modal>
    </HeaderWrapper>
  );
};
