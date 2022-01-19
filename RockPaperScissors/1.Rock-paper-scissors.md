# Rock paper scissors 🗿📃✂️

- Repository: `rock-paper-scissors`
- Type of Challenge: `Learning Challenge`
- Duration: take your time
- Deployment strategy : Github pages
- Team challenge : `solo`

## Learning objectives
- Select a random element
- Conditional statements (if)

## The Mission
You decide that kids these days only know about Fortnite and Tik Tok, but have no clue about great old games like a rock-paper-scissors game.
Time to build the next viral (retro) game!

### Must-have features: phase 1
- Have three buttons that the player can press to pick their weapon of choice (feel free to use emoji's for this)
- Have a play button to have the computer pick one randomly
- Announce the winner
    - No alert box, add a message to your html
    - Possible outcomes: draw (when both chose the same thing) or player won/lost

> If you come across a topic that you don't know much about, feel free to research it (or ask well formatted questions to your peers or coach) - but look for info specifically to that topic. Spending half an hour re-checking how function work is fine, listening all day to "building a todo app with JS" is not.

[//]: # (Coach note: below is a Github style spoiler)

<details>
    <summary>Step by step guidance (up to you if you want it)</summary>

    1. Create the HTML you need
        - Three buttons for the player to choose from
        - Player button to trigger the computer's turn
        - A message we can use to show the result. Put some temporary content ([a random message]()http://www.cupcakeipsum.com) there to test the styling
    2. Add some *basic* styling for those
    3. Figure out a way to know when the "play" button was clicked (tip: you'll need `events` in JavaScript for that, and you'll need to `handle` those)
    4. Next up, we want to determine the computer's choice
        - How many choices does the computer have? What can be a suitable datatype to store multiple things?
        - How can you select a random element from these choices? The math options in JavaScript might help you here
    5. Determine the payers result: draw / win / lose. It's okay if this involves a lot of conditional statements (if)
    6. Depending on the result, change the `inner html` (hint hint) of the message to congratulate or comfort the player

</details>

### Must-have features: phase 2
- Show a play again button after a game ended
- Nice graphics
- Different end message styling depending on the outcome (hint: you might need to add or remove classes via JavaScript for this)
- If you want, you can add a fun factor by changing the three choices
- Clean your code
    - Delete unused code or out of date comments
    - Try to write hard to understand parts in a way that's easier to understand for other developers
    - Can you use functions to make your code easier to read or reuse?

### Nice-to-have features
- Add extra options for the player: lizard & spock
- Keep track of the score after multiple games
- Show what the player picked by highlighting the correct button
- Add more options for a player to choose from (example: a risky option that awards more points but has a higher chance of losing)
- Add even more options (but avoid using 100 if statements)
- Can you make a player win 100% of the games? Or win 75%? (not to raise any suspicion)

![You've got this!](http://78.media.tumblr.com/f9247799ae2fe6613f643957020101c6/tumblr_inline_n80n8u8pSz1sbdww6.gif)