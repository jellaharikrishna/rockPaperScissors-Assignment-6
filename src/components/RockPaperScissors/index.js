import {Component} from 'react'

import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import DiceGamePage from '../DiceGamePage'

import {
  AppContainer,
  ScoreView,
  MainHeading,
  ScoreCard,
  ScoreHeading,
  ScoreValue,
  DiceGameUl,
  GameResultView,
  UserOpponentCard,
  UserOpponentText,
  UserOpponentImage,
  GameResultCard,
  ResultText,
  PlayAgainButton,
  RulesButton,
  CloseButton,
  RulesImage,
  PopupContent,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const gameStatusConstants = {
  inProgress: 'INPROGRESS',
  win: 'WIN',
  lose: 'LOSE',
  draw: 'DRAW',
}

class RockPaperScissors extends Component {
  state = {
    score: 0,
    gameStatus: gameStatusConstants.inProgress,
    userChoice: '',
    opponentChoice: '',
  }

  getOpponentChoice = () => {
    const gettingOpponentChoice = choicesList.map(eachChoice => eachChoice.id)
    const randomIndex = Math.floor(Math.random() * 3)
    return gettingOpponentChoice[randomIndex]
  }

  userClickOption = id => {
    this.setState(
      {userChoice: id, opponentChoice: this.getOpponentChoice()},
      this.evaluateGameView,
    )
  }

  evaluateGameView = () => {
    const {userChoice, opponentChoice} = this.state

    if (userChoice === opponentChoice) {
      this.setState({gameStatus: gameStatusConstants.draw})
    } else if (userChoice === 'ROCK') {
      if (opponentChoice === 'SCISSORS') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lose,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'SCISSORS') {
      if (opponentChoice === 'PAPER') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lose,
          score: prevState.score - 1,
        }))
      }
    } else if (userChoice === 'PAPER') {
      if (opponentChoice === 'ROCK') {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.win,
          score: prevState.score + 1,
        }))
      } else {
        this.setState(prevState => ({
          gameStatus: gameStatusConstants.lose,
          score: prevState.score - 1,
        }))
      }
    }
  }

  renderGameInProgressView = () => (
    <DiceGameUl>
      {choicesList.map(eachList => (
        <DiceGamePage
          key={eachList.id}
          diceGameDetails={eachList}
          userClickOption={this.userClickOption}
        />
      ))}
    </DiceGameUl>
  )

  onClickPlayAgain = () => {
    this.setState({gameStatus: gameStatusConstants.inProgress})
  }

  renderGameWinView = () => {
    const {userChoice, opponentChoice} = this.state

    const userChoiceObjectList = choicesList.filter(
      eachChoice => eachChoice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectList[0]

    const opponentChoiceObjectList = choicesList.filter(
      eachChoice => eachChoice.id === opponentChoice,
    )
    const opponentChoiceObject = opponentChoiceObjectList[0]

    return (
      <>
        <GameResultView>
          <UserOpponentCard>
            <UserOpponentText>YOU</UserOpponentText>
            <UserOpponentImage
              src={userChoiceObject.imageUrl}
              alt="your choice"
            />
          </UserOpponentCard>

          <UserOpponentCard>
            <UserOpponentText>OPPONENT</UserOpponentText>
            <UserOpponentImage
              src={opponentChoiceObject.imageUrl}
              alt="opponent choice"
            />
          </UserOpponentCard>
        </GameResultView>
        <GameResultCard>
          <ResultText>YOU WON</ResultText>
          <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </GameResultCard>
      </>
    )
  }

  renderGameLoseView = () => {
    const {userChoice, opponentChoice} = this.state
    const userChoiceObjectList = choicesList.filter(
      eachChoice => eachChoice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectList[0]

    const opponentChoiceObjectList = choicesList.filter(
      eachChoice => eachChoice.id === opponentChoice,
    )
    const opponentChoiceObject = opponentChoiceObjectList[0]

    return (
      <>
        <GameResultView>
          <UserOpponentCard>
            <UserOpponentText>YOU</UserOpponentText>
            <UserOpponentImage
              src={userChoiceObject.imageUrl}
              alt="your choice"
            />
          </UserOpponentCard>

          <UserOpponentCard>
            <UserOpponentText>OPPONENT</UserOpponentText>
            <UserOpponentImage
              src={opponentChoiceObject.imageUrl}
              alt="opponent choice"
            />
          </UserOpponentCard>
        </GameResultView>
        <GameResultCard>
          <ResultText>YOU LOSE</ResultText>
          <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </GameResultCard>
      </>
    )
  }

  renderGameDrawView = () => {
    const {userChoice, opponentChoice} = this.state
    const userChoiceObjectList = choicesList.filter(
      eachChoice => eachChoice.id === userChoice,
    )
    const userChoiceObject = userChoiceObjectList[0]

    const opponentChoiceObjectList = choicesList.filter(
      eachChoice => eachChoice.id === opponentChoice,
    )
    const opponentChoiceObject = opponentChoiceObjectList[0]

    return (
      <>
        <GameResultView>
          <UserOpponentCard>
            <UserOpponentText>YOU</UserOpponentText>
            <UserOpponentImage
              src={userChoiceObject.imageUrl}
              alt="your choice"
            />
          </UserOpponentCard>

          <UserOpponentCard>
            <UserOpponentText>OPPONENT</UserOpponentText>
            <UserOpponentImage
              src={opponentChoiceObject.imageUrl}
              alt="opponent choice"
            />
          </UserOpponentCard>
        </GameResultView>
        <GameResultCard>
          <ResultText>IT IS DRAW</ResultText>
          <PlayAgainButton type="button" onClick={this.onClickPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </GameResultCard>
      </>
    )
  }

  renderGamePage = () => {
    const {gameStatus} = this.state
    switch (gameStatus) {
      case gameStatusConstants.inProgress:
        return this.renderGameInProgressView()
      case gameStatusConstants.win:
        return this.renderGameWinView()
      case gameStatusConstants.lose:
        return this.renderGameLoseView()
      case gameStatusConstants.draw:
        return this.renderGameDrawView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state
    return (
      <AppContainer>
        <ScoreView>
          <MainHeading>
            ROCK <br /> PAPER <br /> SCISSORS
          </MainHeading>
          <ScoreCard>
            <ScoreHeading>Score</ScoreHeading>
            <ScoreValue>{score}</ScoreValue>
          </ScoreCard>
        </ScoreView>

        {this.renderGamePage()}

        <Popup modal trigger={<RulesButton type="button">Rules</RulesButton>}>
          {close => (
            <PopupContent>
              <CloseButton
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <RiCloseLine size={20} color="#231f20" aria-label="close" />
              </CloseButton>
              <RulesImage
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
            </PopupContent>
          )}
        </Popup>
      </AppContainer>
    )
  }
}

export default RockPaperScissors
