import {
  memoryCard,
  addPlayer,
  cardListDOM,
  flippableCardListDOM
} from './memoryCard'
import { createPlayer, getPlayerById } from './Player'
import cardImages from './cardImages'
import { FlippableCard, Card } from './card'

const Game = (() => {
  let logDisplay = document.getElementById('memory-card-log')
  let playerTurn = null
  let players = []
  let blockFlip = false

  function addPlayerToGame (name, imageSrc) {
    players.push(createPlayer(name, imageSrc, players.length + 1))
  }

  function flip (targetCard) {
    blockFlip = true
    targetCard.flip()
    setTimeout(() => {
      targetCard.flip()
      blockFlip = false
    }, 1500)
  }

  function flipCard (event) {
    if (blockFlip) return
    let cardId = Number.parseInt(event.target.getAttribute('data-id'))
    let targetCard = memoryCard.getFlippableCardById(cardId)
    if (targetCard.isFlipped()) return
    flip(targetCard)

    let cardPlayerTurn = memoryCard.getCardPlayer(Game.playerTurn)
    let cardPlayerTurnPosition = memoryCard.getCardPosition(cardPlayerTurn)
    let nextCardPosition = getNextCardPosition(cardPlayerTurnPosition)
    let nextCard = memoryCard.getCard(nextCardPosition)

    if (targetCard.getRealImageSrc() === nextCard.getImageSrc()) {
      GameState.clickedAtSameImage(cardPlayerTurn, nextCard, nextCardPosition)
    } else {
      GameState.clickedAtWrongImage()
    }

    if (Game.playerTurn.finish_line >= 4) {
      GameState.wonTheGame()
    }
  }
  return { flipCard, players, playerTurn, logDisplay, addPlayerToGame }
})()

const GameState = (() => {
  function clickedAtSameImage (cardPlayerTurn, nextCard, nextCardPosition) {
    while (nextCard.hasPlayer()) {
      Game.logDisplay.textContent = `${Game.playerTurn.name} found the correct image`
      let opponent = nextCard.getPlayer()
      opponent = getPlayerById(Game.players, opponent.id)
      opponent.finish_line -= 1
      Game.playerTurn.finish_line += 1
      Game.logDisplay.textContent = `${Game.playerTurn.name}'s points: ${Game.playerTurn.finish_line}`
      Game.logDisplay.textContent += `${opponent.name}'s points: ${opponent.finish_line}`
      if (nextCard.hasPlayer() && opponent.id == Game.playerTurn.id) break
      if (nextCard.hasPlayer()) {
        nextCardPosition = getNextCardPosition(nextCardPosition)
        nextCard = memoryCard.getCard(nextCardPosition)
      }
    }

    cardPlayerTurn.removePlayer()
    nextCard.buildPlayer(Game.playerTurn)
  }

  function clickedAtWrongImage () {
    let index = Game.players.indexOf(Game.playerTurn)
    Game.playerTurn = Game.players[getNextPlayerPosition(index)]
    Game.logDisplay.textContent = `Wrong choose. Now ${Game.playerTurn.name}'s turn`
    showPlayerTurnIcon()
  }

  function wonTheGame () {
    Game.logDisplay.textContent = `The player ${Game.playerTurn.name} Won the game!`
    memoryCard
      .getFlippableCards()
      .forEach(card =>
        card.getDOM().removeEventListener('click', Game.flipCard)
      )
  }

  return { clickedAtSameImage, clickedAtWrongImage, wonTheGame }
})()

function setRandomPlayerTurn () {
  Game.playerTurn = sortRandomArray(Game.players)[0]
}

function getRandomizedCardImages () {
  return sortRandomArray(cardImages)
}

function sortRandomArray (array) {
  return array.sort(() => 0.5 - Math.random())
}

function getNextCardPosition (position) {
  return getNextItemInArray(memoryCard.getCards(), position)
}

function getNextPlayerPosition (position) {
  return getNextItemInArray(Game.players, position)
}

function getNextItemInArray (array, position) {
  let max = array.length - 1
  return position === max ? 0 : ++position
}

function createPlayers () {
  Game.addPlayerToGame('James', 'https://singlecolorimage.com/get/33fd8f/50x50')
  Game.addPlayerToGame(
    'Rubens',
    'https://singlecolorimage.com/get/67a8b4/50x50'
  )
  Game.addPlayerToGame('Pr', 'https://singlecolorimage.com/get/cde4b4/50x50')

  Game.players.forEach(player => addPlayer(player))
}

function createCards (flippable) {
  for (let image of getRandomizedCardImages()) {
    let list = flippable
      ? memoryCard.getFlippableCards()
      : memoryCard.getCards()
    let id = list.length + 1
    if (flippable) {
      let card = FlippableCard(image.src, flippableCardListDOM, id)
      memoryCard.addFlippableCard(card)
      card.getDOM().addEventListener('click', Game.flipCard)
    } else {
      let card = Card(image.src, cardListDOM, id)
      memoryCard.addCard(card)
    }
  }
}

function showPlayerTurnIcon () {
  let img = document.createElement('img')
  img.src = Game.playerTurn.imageSrc
  Game.logDisplay.textContent += ' Icon: '
  Game.logDisplay.appendChild(img)
}

function init () {
  createCards()
  createCards(true)
  createPlayers()
  setRandomPlayerTurn()
  Game.logDisplay.textContent = `Game started. ${Game.playerTurn.name} starts.`
  showPlayerTurnIcon()
}

export default init