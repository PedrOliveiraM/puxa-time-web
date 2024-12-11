'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useCallback, useState } from 'react'
import CaptainSelector from './components/CaptainSelector'
import PlayerForm from './components/PlayerForm'
import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  const [teams, setTeams] = useState<string[][]>([])
  const [players, setPlayers] = useState<string[]>([])
  const [captains, setCaptains] = useState<string[]>([])

  const [numTeams, setNumTeams] = useState(2)
  const [playersPerTeam, setPlayersPerTeam] = useState(5)
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleGenerateTeams = useCallback(() => {
    const shuffledPlayers = [...players].sort(() => Math.random() - 0.5)
    const newTeams: string[][] = []
    for (let i = 0; i < numTeams; i++) {
      newTeams.push(shuffledPlayers.slice(i * playersPerTeam, (i + 1) * playersPerTeam))
    }
    setTeams(newTeams)
    setCaptains(new Array(numTeams).fill(''))  // Reseta os capitães para a quantidade de times
  }, [players, numTeams, playersPerTeam])

  const handleSortTeams = useCallback(() => {
    // Validações básicas
    if (captains.length !== numTeams) {
      throw new Error("O número de capitães deve ser igual ao número de times.");
    }

    if (players.length + captains.length < numTeams * playersPerTeam) {
      console.warn("Jogadores insuficientes para preencher todos os times com o número especificado.");
    }

    // Remover capitães do array de jogadores
    const remainingPlayers = players.filter(player => !captains.includes(player));

    // Embaralhar jogadores restantes
    const shuffledPlayers = [...remainingPlayers].sort(() => Math.random() - 0.5);

    // Criar times e alocar capitães
    const newTeams = Array.from({ length: numTeams }, (_, i) => [captains[i]]);

    // Adicionar jogadores aos times
    let playerIndex = 0;
    for (let i = 0; i < numTeams; i++) {
      while (newTeams[i].length < playersPerTeam && playerIndex < shuffledPlayers.length) {
        newTeams[i].push(shuffledPlayers[playerIndex]);
        playerIndex++;
      }
    }

    // Atualizar estado dos times
    setTeams(newTeams);
  }, []);


  const [firstStep, setFirstStep] = useState<boolean>(true)
  const [secondStep, setSecondStep] = useState<boolean>(false)
  const [thirdStep, setThirdStep] = useState<boolean>(false)

  return (
    <div className={`min-h-screen p-4 ${isDarkMode ? 'dark bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <Image src="/images/Logo.png" alt="Puxa-Time" width={200} height={200} className="mx-auto" />
      <h1 className="text-3xl font-bold text-center mb-6">Puxa-Time</h1>
      <p className="antialiased text-center text-zinc-200">Este é um site para dividir jogadores em times de forma aleatória.</p>
      <div className="max-w-md mx-auto mt-5">
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
      </div>


      {players.length > 0 && <CaptainSelector players={players} numTeams={numTeams} setCaptains={setCaptains} />}

      {captains.length > 0 && <Button onClick={handleSortTeams}>Gerar Times</Button>}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {teams.map((team, index) => (
          <div
            key={index}
            className="border rounded-lg shadow-md bg-white p-4">
            <h3 className="text-lg font-bold text-center mb-3">TIME {index + 1}</h3>
            <ul className="list-disc list-inside">
              {team.map(player => (
                <li key={player} className="text-gray-800">{player}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
} 
