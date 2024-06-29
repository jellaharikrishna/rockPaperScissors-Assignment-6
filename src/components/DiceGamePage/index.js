import {DiceGameList, DiceGameButton, ImageUrl} from './styledComponents'

const DiceGamePage = props => {
  const {diceGameDetails, userClickOption} = props
  const {id, imageUrl} = diceGameDetails

  const onClickDiceButton = () => {
    userClickOption(id)
  }

  return (
    <DiceGameList>
      <DiceGameButton
        type="button"
        onClick={onClickDiceButton}
        data-testid={`${id.toLowerCase()}Button`}
      >
        <ImageUrl src={imageUrl} alt={id} />
      </DiceGameButton>
    </DiceGameList>
  )
}

export default DiceGamePage
