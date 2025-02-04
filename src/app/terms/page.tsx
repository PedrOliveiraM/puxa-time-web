import Link from "next/link"
import { TermsSection } from "../components/TermsSection"

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-puxa-deepBlue to-puxa-lightBlue text-white">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Termos de Serviço</h1>
        <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-xl p-6 md:p-8 space-y-6">
          <TermsSection title="1. Termos">
            <p>
              Ao acessar ao site{" "}
              <Link href="https://puxatime.vercel.app" className="text-blue-300 hover:text-blue-200">
                Puxa time
              </Link>
              , concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis ​​e concorda que é
              responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses
              termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas
              leis de direitos autorais e marcas comerciais aplicáveis.
            </p>
          </TermsSection>

          <TermsSection title="2. Uso de Licença">
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no
              site Puxa time, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma
              licença, não uma transferência de título e, sob esta licença, você não pode:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>modificar ou copiar os materiais;</li>
              <li>
                usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não
                comercial);
              </li>
              <li>tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Puxa time;</li>
              <li>remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
              <li>transferir os materiais para outra pessoa ou 'espelhe' os materiais em qualquer outro servidor.</li>
            </ul>
            <p className="mt-2">
              Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser
              rescindida por Puxa time a qualquer momento. Ao encerrar a visualização desses materiais ou após o término
              desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrónico ou
              impresso.
            </p>
          </TermsSection>

          <TermsSection title="3. Isenção de responsabilidade">
            <ol className="list-decimal pl-6 space-y-2">
              <li>
                Os materiais no site da Puxa time são fornecidos 'como estão'. Puxa time não oferece garantias,
                expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem
                limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não
                violação de propriedade intelectual ou outra violação de direitos.
              </li>
              <li>
                Além disso, o Puxa time não garante ou faz qualquer representação relativa à precisão, aos resultados
                prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses
                materiais ou em sites vinculados a este site.
              </li>
            </ol>
          </TermsSection>

          <TermsSection title="4. Limitações">
            <p>
              Em nenhum caso o Puxa time ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem
              limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou
              da incapacidade de usar os materiais em Puxa time, mesmo que Puxa time ou um representante autorizado da
              Puxa time tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas
              jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos
              conseqüentes ou incidentais, essas limitações podem não se aplicar a você.
            </p>
          </TermsSection>

          <TermsSection title="5. Precisão dos materiais">
            <p>
              Os materiais exibidos no site da Puxa time podem incluir erros técnicos, tipográficos ou fotográficos.
              Puxa time não garante que qualquer material em seu site seja preciso, completo ou atual. Puxa time pode
              fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Puxa
              time não se compromete a atualizar os materiais.
            </p>
          </TermsSection>

          <TermsSection title="6. Links">
            <p>
              O Puxa time não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum
              site vinculado. A inclusão de qualquer link não implica endosso por Puxa time do site. O uso de qualquer
              site vinculado é por conta e risco do usuário.
            </p>
          </TermsSection>

          <TermsSection title="Modificações">
            <p>
              O Puxa time pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar
              este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </p>
          </TermsSection>

          <TermsSection title="Lei aplicável">
            <p>
              Estes termos e condições são regidos e interpretados de acordo com as leis do Puxa time e você se submete
              irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
            </p>
          </TermsSection>
        </div>
      </div>
    </div>
  )
}

