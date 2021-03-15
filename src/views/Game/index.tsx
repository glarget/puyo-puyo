import React, { useEffect, useRef } from 'react';
import type { ReactElement } from 'react';

import { AnimatedImage } from './Game.style';
import { drawCanvas, drawChain, drawGameOver } from '../../utils/draw';
import { isGameOver, isSpaceInBoard } from '../../utils/game';
import reaction from '../../utils/detectReaction';
import { KEY, GAME_SPEED_TIMER } from '../../constants';
import { CanvasWrapper } from '../../components/atoms/Canvas/Canvas.style';
import Div from '../../components/atoms/Div';
import Text from '../../components/atoms/Text';
import useGame from '../../hooks/useGame';

type Props = {
  player: {
    character: string;
    level: number;
    name: string;
  };
};

/**
 * Renders the Puyo main HTML structure with the associative functions
 */
export default function Game({ player }: Props): ReactElement {
  const canvasRef = useRef(null);
  const { game, dispatch } = useGame();

  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleKeyboard(e: KeyboardEvent) {
    if (!game.pause || e.keyCode === 32) {
      dispatch({ type: 'MOVE_PIECE', move: KEY[e.keyCode] });
    } else {
      window.addEventListener('keydown', handleKeyboard);
    }
  }

  function runGame() {
    const { level } = player;

    timer.current = setTimeout(() => dispatch({ type: 'FALL_PIECE' }), GAME_SPEED_TIMER / level);

    let hasCanvasDrawing = false;

    if (game.piece && game.board) {
      let reactionList = [];

      if (game.startTimer && game.timer <= 0) {
        dispatch({ type: 'GAME_OVER' });
      }

      if (game.board.length > 0) {
        if (isGameOver(game.board)) {
          dispatch({ type: 'GAME_OVER' });
        }
        if (isSpaceInBoard(game.board)) {
          if (timer.current) {
            clearTimeout(timer.current);
          }
          drawCanvas(game, canvasRef.current.getContext('2d'));
          dispatch({ type: 'FALL_BOARD' });
          hasCanvasDrawing = true;
        }

        reactionList = reaction(game.board);

        if (reactionList.length > 0) {
          if (timer.current) {
            clearTimeout(timer.current);
          }
          drawCanvas(game, canvasRef.current.getContext('2d'));
          drawChain(game, reactionList, canvasRef.current.getContext('2d'));

          setTimeout(() => dispatch({ type: 'CHAIN', reaction: reactionList }), 1000);

          window.addEventListener('keydown', handleKeyboard);
          hasCanvasDrawing = true;
        }
      }

      for (let i = 0; i < game.piece.length; i += 1) {
        if (
          (game.piece[i].y / 50 === Math.floor(game.piece[i].y / 50) &&
            game.piece[i].x / 50 === Math.floor(game.piece[i].x / 50) &&
            game.board[game.piece[i].y / 50 + 1][game.piece[i].x / 50] > 0) ||
          game.piece[i].y === 545
        ) {
          dispatch({
            type: 'COLLISION',
            piece: game.piece,
          });
          break;
        }
      }
    }
    if (!hasCanvasDrawing) {
      window.addEventListener('keydown', handleKeyboard);
      drawCanvas(game, canvasRef.current.getContext('2d'));
    }
  }

  useEffect(() => {
    if (game.gameOver) {
      window.addEventListener('keydown', handleKeyboard);
      drawGameOver(game, canvasRef.current.getContext('2d'));
    } else {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      runGame();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyboard);
    };
  }, [game]);

  return (
    <Div margin="60px auto" display="flex" overflow="hidden" justifyContent="center">
      <Div display="flex" width="800px">
        <Div
          border="1px solid #aaa"
          backgroundColor="white"
          boxShadow="0px 0px 5px #C6C6C6"
          borderRadius="15px"
          display="flex"
          padding="15px"
          flexDirection="column"
          marginRight="30px"
          flex="1"
        >
          <Div marginBottom="30px">
            <Text
              borderRadius="15px"
              color="white"
              padding="5px 10px"
              backgroundColor="blue"
              as="p"
              fontSize="18px"
              marginBottom="10px"
            >
              Votre score
            </Text>
            <Text color="green" fontSize="20px">
              {game.score} Winam
              {game.score > 0 ? 's' : ''}
            </Text>
          </Div>
          <Div marginBottom="30px">
            <Text
              borderRadius="15px"
              color="white"
              padding="5px 10px"
              backgroundColor="blue"
              marginBottom="10px"
              as="p"
            >
              Temps
            </Text>
            <Text fontSize="18px">
              {Math.floor((game.timer % (1000 * 60 * 60)) / (1000 * 60))} minutes{' '}
              {Math.floor((game.timer % (1000 * 60)) / 1000)} secondes
            </Text>
          </Div>
          <Div>
            <Text
              borderRadius="15px"
              color="white"
              padding="5px 10px"
              backgroundColor="blue"
              marginBottom="10px"
              as="p"
            >
              Level
            </Text>
            <Text fontSize="18px">{player.level ? player.level : 1}</Text>
          </Div>
        </Div>
        <CanvasWrapper
          border="1px solid #aaa"
          borderRadius="15px"
          display="flex"
          width={400}
          height={600}
          ref={canvasRef}
        />
      </Div>
      <Div
        border="1px solid #aaa"
        backgroundColor="white"
        boxShadow="0px 0px 5px #C6C6C6"
        borderRadius="15px"
        width="300px"
        height="300px"
        fontSize="24px"
        padding="30px"
        textAlign="center"
        marginLeft="30px"
      >
        <Text color="blue" as="p" marginBottom="30px">
          Hello {player.name ? player.name.toUpperCase() : 'WINAMAX'} <br /> Let's play !
        </Text>
        <AnimatedImage>
          <img
            width="150"
            alt={player?.character}
            src={`/img/${player.character ? player.character : 'koaly'}.png`}
          />
        </AnimatedImage>
      </Div>
    </Div>
  );
}
