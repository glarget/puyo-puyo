import React from 'react';
import type { ReactElement } from 'react';

import Div from '../../components/atoms/Div';
import Icon from '../../components/atoms/Icon';
import Text from '../../components/atoms/Text';
import Title from '../../components/atoms/Title';
import Portal from '../../components/atoms/Portal';
import { RulesModalOverlay, RulesModalWrapper } from './RulesModal.style';

interface RulesModalProps {
  onClick: () => void;
}

/**
 * Renders a react Portal modal which contains the game rule
 */
export default function RulesModal({ onClick }: RulesModalProps): ReactElement {
  return (
    <Portal>
      <RulesModalOverlay padding="50px" onClick={onClick}>
        <RulesModalWrapper
          backgroundColor="white"
          borderRadius="15px"
          width="800px"
          height="500px"
          position="absolute"
          top="0"
          bottom="0"
          left="0"
          right="0"
          overflow="auto"
          margin="auto"
          padding="40px"
        >
          <Text>
            <Title display="flex" alignItems="center" marginBottom="20px" fontSize="30px">
              <Icon fill="#0050F0" id="info" height="30px" />
              <Text marginLeft="10px">LES REGLES DU JEU</Text>
            </Title>
            <Div>
              <Text marginTop="15px" as="p">
                Ce jeu de puzzle consiste à placer une pièce dans une grille, de manière à créer des
                chaines de couleurs identiques. Chaque nouvelle pièce, constituée de deux puyos
                aléatoires, apparaît en haut de la grille.
              </Text>

              <Text marginTop="15px" as="p">
                Pendant la phase de chute, le joueur a la possibilité de contrôler la pièce.
                Celle-ci peut être déplacée latéralement, tournée dans le sens horaire ou
                antihoraire, et/ou descendue instantanément dans la grille. Les mouvements sont
                possibles uniquement si les cases adjacentes sont libres.
              </Text>

              <Text marginTop="15px" as="p">
                Lorsque la pièce entre en collision avec un élément de la grille, le joueur cesse de
                la contrôler. Les puyos se désolidarisent et tombent dans leur colonne respective.
              </Text>

              <Text marginTop="15px" as="p">
                La phase de détection des chaines débute dès que la grille est stabilisée. Les
                chaines valides disparaissent de façon animée et déclenchent la chute des puyos
                situés au-dessus. Plusieurs réactions en chaine sont possibles (combos). La partie
                se termine quand il devient impossible d'ajouter une nouvelle pièce.
              </Text>
              <Text textAlign="center" marginTop="15px" as="p">
                <a target="blank" href="https://www.youtube.com/watch?v=MqswZmLjXo8">
                  VOIR DEMO DU JEU
                </a>
              </Text>
            </Div>
          </Text>
        </RulesModalWrapper>
      </RulesModalOverlay>
    </Portal>
  );
}
