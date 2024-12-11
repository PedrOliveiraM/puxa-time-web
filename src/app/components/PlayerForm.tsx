'use client'
import { useState } from 'react'
import Button from './Button'

interface PlayerFormProps {
  players: string[]
  setPlayers: (players: string[]) => void
  numTeams: number
  setNumTeams: (num: number) => void
  playersPerTeam: number
  setPlayersPerTeam: (num: number) => void
  onGenerateTeams: () => void
}

export default function PlayerForm({
  players,
  setPlayers,
  numTeams,
  setNumTeams,
  playersPerTeam,
  setPlayersPerTeam,
  onGenerateTeams,
}: PlayerFormProps) {
  const [playerInput, setPlayerInput] = useState('')

  const handleSetPlayersFromList = (playerList: string): void => {
    const validPlayers = playerList
      .split('\n')
      .map((line: string) => {
        const player = line.replace(/^\d+\s*[-]?\s*/, '').trim()
        return player || null
      })
      .filter((player: string | null): player is string => player !== null)
    setPlayers(validPlayers)
    console.log('Lista de jogadores:', validPlayers)
  }

  const handleAddPlayer = (): void => {
    if (playerInput.trim()) {
      handleSetPlayersFromList(playerInput)
      setPlayerInput('') // Limpa o input após adicionar os jogadores
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="players" className="block text-sm font-medium mb-1">
          Adicionar Jogador
        </label>
        <div className="flex">
          <textarea
            id="players"
            value={playerInput}
            onChange={(e) => setPlayerInput(e.target.value)}
            className="flex-grow px-3 py-2 border rounded-l-md dark:bg-gray-700 dark:border-gray-600"
            placeholder="Lista de jogadores"
          />
          <Button onClick={handleAddPlayer} className="rounded-l-none">
            Adicionar
          </Button>
        </div>
      </div>
      <div>
        <label htmlFor="numTeams" className="block text-sm font-medium mb-1">
          Número de Times
        </label>
        <input
          type="number"
          id="numTeams"
          value={numTeams}
          onChange={(e) => setNumTeams(Number(e.target.value))}
          className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          min="2"
        />
      </div>
      <div>
        <label htmlFor="playersPerTeam" className="block text-sm font-medium mb-1">
          Jogadores por Time
        </label>
        <input
          type="number"
          id="playersPerTeam"
          value={playersPerTeam}
          onChange={(e) => setPlayersPerTeam(Number(e.target.value))}
          className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600"
          min="1"
        />
      </div>
      <div>
        <h3 className="text-sm font-medium mb-1">Jogadores Adicionados:</h3>
        <ul className="list-disc list-inside">
          {players.map((player, index) => (
            <li key={index}>{player}</li>
          ))}
        </ul>
      </div>
      <Button onClick={onGenerateTeams} className="w-full">
        Gerar Times
      </Button>
    </div>
  )
}
