# 21 card game 🃏

- Repository: `js-21-card-game`
- Type of Challenge: `Learning Challenge`
- Duration: take your time
- Deployment strategy: Github pages
- Team challenge : `solo`

## Learning objectives
- Generate random outcomes
- If statements
- Coming up with a basic algorithm from scratch

## The Mission
Make the card game [https://en.wikipedia.org/wiki/Twenty-One_(card_game)](21/blackjack).
You do not have to program any of the more difficult features of blackjack, like a dealer, the option to split...

### Must-have features (phase 1)
- Ask the user if he wants to draw a card
- If yes, add a card (a random number from the possible cards, you don't need to "remove" the card for now)
- Tell him if he bust or not
  
### Must-have features (phase 2)
- Make the PC also draw a card and decide to quit or not.
    * Try not to make the PC cheat, make some AI to play "intelligently"
    * Alternatively, use the default casino rule: the dealer keeps drawing until he reaches 15
- When both players stop or bust ask if the player wants to play another round
- Update the user what happens all the time with prompts and alerts

### Nice-to-have features
- Use properly defined cards instead of just numbers (hearts 10 instead of just 10), and have them dissapear from the pool when used
- Instead of using prompts, use the images of cards. (very hard!)
- Make a gamble mechanic, every user starts with X chips, and before each round we ask what he wants to gamble. If both the PC and the player bust the wins go to "the house".
