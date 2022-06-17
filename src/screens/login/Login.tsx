import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../configs/colors';
import SvgPerson from '../../assets/SvgPerson.svg';
import PNlogo from '../../assets/PNlogo.svg';
const Wrapper = styled.View`
  flex: 1;
  background-color: ${colors.white};
  flex-direction: column;
  position: relative;
  height: 900px;
`;

const WrapperSvg = styled.View`
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const WrapperInput = styled.View`
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 5px 30px 5px 30px;
  margin: 2px 0px 2px 0px;
`;

const InputLogin = styled.TextInput`
  background-color: rgba(0, 0, 85, 0.149);
  width: 100%;
  border-radius: 30px;
  margin: 5px;
  height: 50px;
  padding-left: 20px;
  color: ${colors.black};
  font-size: 20px;
`;

const WrapperButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 70px;
  padding: 30px;
  margin: 2px 0px 2px 0px;
`;

const ButtonLogin = styled.View`
  width: 100%;
  border-radius: 30px;
  margin: 5px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
`;

const ButtonCriarConta = styled.View`
  width: 100%;
  border-radius: 30px;
  margin: 5px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: rgb(1, 1, 22);
`;

const TextLogin = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  font-weight: bold;
`;
export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  function signIn() {}
  function createAccount() {}
  return (
    <Wrapper>
      <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
      <KeyboardAvoidingView behavior="position">
        <WrapperSvg>
          <SvgPerson width={280} height={280} />
        </WrapperSvg>
        <WrapperInput>
          <InputLogin placeholder="Email"></InputLogin>
        </WrapperInput>
        <WrapperInput>
          <InputLogin placeholder="Senha"></InputLogin>
        </WrapperInput>

        <WrapperButton onPress={signIn}>
          <ButtonLogin>
            <TextLogin>Entrar</TextLogin>
          </ButtonLogin>
        </WrapperButton>
        <WrapperButton onPress={createAccount}>
          <ButtonCriarConta>
            <TextLogin>Criar Conta</TextLogin>
          </ButtonCriarConta>
        </WrapperButton>
      </KeyboardAvoidingView>
    </Wrapper>
  );
};
