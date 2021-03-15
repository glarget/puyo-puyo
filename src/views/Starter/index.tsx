import React from 'react';
import type { ReactElement } from 'react';

import Button from '../../components/atoms/Button';
import Div from '../../components/atoms/Div';
import Input from '../../components/atoms/Input';
import Select from '../../components/atoms/Select';
import Text from '../../components/atoms/Text';
import Title from '../../components/atoms/Title';

type Props = {
  onButtonClick: () => void;
  onInputChange: () => void;
  onSelectChange: () => void;
  onSelectLevelChange: () => void;
};

/**
 * Renders the Puyo greeting interface before launching game
 */
export default function Starter({
  onButtonClick,
  onSelectChange,
  onSelectLevelChange,
  onInputChange,
}: Props): ReactElement {
  return (
    <Div
      border="1px solid #aaa"
      backgroundColor="white"
      boxShadow="0px 0px 5px #C6C6C6"
      borderRadius="15px"
      display="flex"
      flexDirection="column"
      margin="50px auto"
      width="500px"
      padding="20px"
      alignItems="center"
    >
      <Title color="green" fontSize="24px">
        WELCOME to Puyo Puyo world !
      </Title>
      <Div
        border="10px solid #D6CA34"
        backgroundColor="green"
        borderRadius="100px"
        width="120px"
        height="120px"
        margin="30px 0"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <img width="80" alt="Welcome" src="/img/cat.png" />
      </Div>
      <Input
        marginBottom="15px"
        borderColor="green"
        placeholder="Votre nom"
        onChange={onInputChange}
      />
      <Text marginTop="10px" marginBottom="10px">
        Choisissez votre personnage
      </Text>
      <Select borderColor="green" onChange={onSelectChange}>
        <option value="">Votre personnage</option>
        <option value="foxy">Foxy the queen</option>
        <option value="froggy">Froggy from Russia</option>
        <option value="beavery">Beavery from Beverly Hills</option>
      </Select>

      <Text marginTop="30px" marginBottom="10px">
        Choisissez votre level
      </Text>
      <Select borderColor="green" onChange={onSelectLevelChange}>
        <option value="">Votre level</option>
        <option value="1">Easy</option>
        <option value="2">Medium</option>
        <option value="3">Winamax</option>
      </Select>

      <Button marginTop="20px" backgroundColor="blue" color="white" onClick={onButtonClick}>
        LET'S GO !!
      </Button>
    </Div>
  );
}
