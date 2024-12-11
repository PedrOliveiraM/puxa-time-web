'use client'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import PlayerForm from './components/PlayerForm'
import TeamDisplay from './components/TeamDisplay'
import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  const [players, setPlayers] = useState<string[]>([])
  const [numTeams, setNumTeams] = useState(2)
  const [playersPerTeam, setPlayersPerTeam] = useState(5)
  const [teams, setTeams] = useState<string[][]>([])
  const [captains, setCaptains] = useState<string[]>([])
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleGenerateTeams = useCallback(() => {
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5)
    const newTeams: string[][] = []
    for (let i = 0; i < numTeams; i++) {
      newTeams.push(shuffledPlayers.slice(i * playersPerTeam, (i + 1) * playersPerTeam))
    }
    setTeams(newTeams)
    setCaptains(new Array(numTeams).fill(''))
  }, [players, numTeams, playersPerTeam])

  const handleSelectCaptain = useCallback((teamIndex: number, captain: string) => {
    setCaptains(prev => {
      const newCaptains = [...prev]
      newCaptains[teamIndex] = captain
      return newCaptains
    })
  }, [])

  return (
    <div className={`min-h-screen p-4 ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Image src="/images/Logo.png" alt="Puxa-Time" width={200} height={200} className='mx-auto' />
      <h1 className="text-3xl font-bold flex-col flex text-center mb-6">Puxa-Time</h1>
      <p className='antialiased'>Este é um site para dividir jogadores em times de forma aleatória.</p>
      
      <div className="max-w-md mx-auto">
        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <PlayerForm
          players={players}
          setPlayers={setPlayers}
          numTeams={numTeams}
          setNumTeams={setNumTeams}
          playersPerTeam={playersPerTeam}
          setPlayersPerTeam={setPlayersPerTeam}
          onGenerateTeams={handleGenerateTeams}
        />
        {teams.length > 0 && (
          <TeamDisplay
            teams={teams}
            captains={captains}
            onSelectCaptain={handleSelectCaptain}
          />
        )}
      </div>
    </div>
  )
}

