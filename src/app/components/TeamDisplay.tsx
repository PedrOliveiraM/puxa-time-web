import Button from './Button'

interface TeamDisplayProps {
  teams: string[][]
  captains: string[]
  onSelectCaptain: (teamIndex: number, captain: string) => void
}

export default function TeamDisplay({ teams, captains, onSelectCaptain }: TeamDisplayProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Times Gerados</h2>
      {teams.map((team, teamIndex) => (
        <div key={teamIndex} className="mb-6 p-4 border rounded-md dark:border-gray-700">
          <h3 className="text-xl font-semibold mb-2">Time {teamIndex + 1}</h3>
          <ul className="list-disc list-inside mb-4">
            {team.map((player, playerIndex) => (
              <li key={playerIndex} className="flex justify-between items-center">
                <span>{player}</span>
                <Button
                  onClick={() => onSelectCaptain(teamIndex, player)}
                  className={`text-sm ${
                    captains[teamIndex] === player
                      ? 'bg-accent-light dark:bg-accent-dark'
                      : 'bg-secondary-light dark:bg-secondary-dark'
                  }`}
                >
                  {captains[teamIndex] === player ? 'Capitão' : 'Selecionar Capitão'}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

