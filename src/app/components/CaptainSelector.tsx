'use client'

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox"; // Use Checkbox para permitir múltiplos capitães
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface CaptainSelectorProps {
  players: string[]
  numTeams: number // Agora o componente recebe o número de times
  setCaptains: (captains: string[]) => void

}

export default function CaptainSelector({ players, numTeams, setCaptains
}: CaptainSelectorProps) {
  const [selectedCaptains, setSelectedCaptains] = useState<string[]>([])

  const handleToggleCaptain = (player: string) => {
    setSelectedCaptains((prev) =>
      prev.includes(player) ? prev.filter((captain) => captain !== player) : [...prev, player]
    )
  }

  const handleSelectCaptains = () => {
    if (selectedCaptains.length === numTeams) {
      alert(`Capitães selecionados: ${selectedCaptains.join(', ')}`)
      setCaptains(selectedCaptains)
    } else {
      alert(`Você precisa selecionar exatamente ${numTeams} capitães!`)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Escolher os Capitães</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">Selecione {numTeams} capitães:</p>
        {players.map((player, index) => (
          <div key={index} className="flex items-center space-x-2 mb-4">
            <Checkbox
              id={`player-${index}`}
              checked={selectedCaptains.includes(player)}
              onCheckedChange={() => handleToggleCaptain(player)}
            />
            <Label htmlFor={`player-${index}`} className="flex-grow">
              <Card>
                <CardContent className="py-2 px-4">
                  <div className="font-semibold">{player}</div>
                </CardContent>
              </Card>
            </Label>
          </div>
        ))}
        <Button
          onClick={handleSelectCaptains}
          className="w-full mt-4"
          disabled={selectedCaptains.length !== numTeams} // Desabilita o botão se o número de capitães selecionados for diferente de 'numTeams'
        >
          Confirmar Seleção de Capitães
        </Button>
        {selectedCaptains.length > 0 && (
          <div className="mt-4 text-center font-semibold">
            Capitães Selecionados: {selectedCaptains.join(', ')}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
