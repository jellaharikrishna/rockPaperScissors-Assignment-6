import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #223a5f;
  height: 100vh;
  padding: 20px;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const ScoreView = styled.div`
  border: 2px solid #ffffff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 60%;
    margin: auto;
  }
`
export const MainHeading = styled.h1`
  font-family: Bree Serif;
  font-size: 20px;
  font-weight: 500;
  color: #ffffff;
  margin-left: 10px;
`
export const ScoreCard = styled.div`
  border-radius: 10px;
  background-color: #ffffff;
  height: 100px;
  width: 90px;
  margin-right: 10px;
  @media screen and (min-width: 768px) {
    width: 120px;
  }
`

export const ScoreHeading = styled.p`
  font-family: Bree Serif;
  font-size: 20px;
  color: #223a5f;
  text-align: center;
  margin-bottom: 0;
`

export const ScoreValue = styled.p`
  font-family: Roboto;
  font-size: 40px;
  font-weight: 500;
  color: #223a5f;
  text-align: center;
  margin-top: 0;
`

export const DiceGameUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    width: 40%;
    margin: auto;
    margin-top: 30px;
  }
`

export const GameResultView = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 40%;
    margin: auto;
    margin-top: 30px;
  }
`

export const UserOpponentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export const UserOpponentText = styled.p`
  font-family: Roboto;
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
`

export const UserOpponentImage = styled.img`
  height: 140px;
  width: 140px;
  @media screen and (min-width: 768px) {
    height: 170px;
    width: 170px;
  }
`

export const GameResultCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ResultText = styled.p`
  font-family: Roboto;
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
`
export const PlayAgainButton = styled.button`
  height: 35px;
  width: 140px;
  background-color: #ffffff;
  color: #223a5f;
  border-width: 0;
  border-radius: 4px;
  font-family: Bree Serif;
  font-size: 14px;
  cursor: pointer;
`

export const RulesButton = styled.button`
  align-self: flex-end;
  height: 35px;
  width: 70px;
  background-color: #ffffff;
  color: #223a5f;
  border-width: 0;
  border-radius: 4px;
  font-family: Bree Serif;
  font-size: 14px;
  cursor: pointer;
`

export const PopupContent = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
`

export const CloseButton = styled.button`
  align-self: flex-end;
  background-color: light-grey;
  border: none;
  margin-bottom: 5px;
  cursor: pointer;
`

export const RulesImage = styled.img`
  width: 350px;
  height: 300px;
  @media screen and (min-width: 768px) {
    width: 450px;
    height: 400px;
  }
`
