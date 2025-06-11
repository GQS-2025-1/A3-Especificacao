# 📊 NutriFácil

## 📝 Descrição do Trabalho - 20 pontos
Desenvolver em **grupo (máx. 6 alunos)** uma solução completa para o **NutriFácil**: um sistema de planejamento alimentar personalizado, que permita ao usuário montar seu plano alimentar conforme suas preferências e objetivos.

## 🎯 Objetivos
- Implementar funcionalidades de seleção de dieta, cálculo de TMB, IMC e consumo de água.
- Exibir recomendações de alimentos (proteínas, legumes, verduras, carboidratos), quantidade e calorias de acordo com a dieta escolhida.
- Gerenciar restrições (alergias, intolerâncias).
- Criar testes de usabilidade/funcionalidade.
- Documentar todo o projeto em **README.md** seguindo boas práticas.
- Apresentar em slides (Introdução, Motivação, Desenvolvimento, Resultados, Considerações Finais).

## 📑 Especificação de Requisitos

### 1. Dietas e Indicações
- **Mediterrânea**: azeite de oliva, peixes, grãos integrais, legumes e frutas. Foco em saúde cardiovascular e manutenção de peso.  
- **Low Carb**: redução de carboidratos, aumento de proteínas e gorduras boas. Foco em emagrecimento e controle glicêmico.  
- **Cetogênica**: ingestão muito baixa de carboidratos e alta em gorduras. Para perda de gordura rápida e aumento de foco.  
- **Vegetariana**: sem carnes; inclui ovos, laticínios (não vegana), grãos, vegetais e leguminosas.

### 2. Entradas do Usuário
1. **Dieta**: Mediterrânea, Low Carb, Cetogênica ou Vegetariana  
2. **Peso** (kg)  
3. **Altura** (cm)  
4. **Idade** (anos)  
5. **Sexo**: Masculino / Feminino  
6. **Objetivo**:  
   - Emagrecimento (perda de gordura, redução de medidas, aumento de energia, etc.)  
   - Hipertrofia (ganho de massa, aumento de força, autoestima, etc.)  
7. **Preferência de Alimentos** (por categoria, conforme dieta)  
   - Proteínas  
   - Legumes  
   - Verduras  
   - Carboidratos  
8. **Alergias/Intolerâncias**: Lactose, Glúten, Proteína do leite, Ovo, Frutos do mar, Nenhuma

### 3. Cálculos
- **Taxa de Metabolismo Basal (TMB)** – Fórmula de Mifflin:  
  - Homens: `TMB = 10×peso + 6,25×altura – 5×idade + 5`  
  - Mulheres: `TMB = 10×peso + 6,25×altura – 5×idade – 161`

- **Índice de Massa Corporal (IMC)**:  
  `IMC = peso / (altura/100)²`  
  - < 18,5: abaixo do peso  
  - 18,5–24,9: peso normal  
  - 25–29,9: sobrepeso  
  - ≥ 30: obesidade

- **Consumo de Água Diário**:  
  `35 ml × peso (kg)`  

### 4. Bônus (opcional)
- Receitas para cada dieta  
- Gráfico de consumo de água  

---

## 🚀 Instruções Gerais

1. **Data da Apresentação: 18/06/25**
2. **Grupo & Organização**  
   - Máximo de **6 integrantes** por grupo.  
   - Crie uma **organização** no GitHub para seu grupo e armazene todo o código lá.  
   - Use **GitHub Projects** para planejar, priorizar e acompanhar as tarefas (colunas: Backlog, Em progresso, Revisão, Concluído). Distribua as tarefas e defina responsáveis.

3. **Repositório & README**  
   - O repositório principal deve conter um `README.md` completo e organizado.  
   - Consulte [Como escrever um bom README para seu projeto do GitHub](https://www.freecodecamp.org/portuguese/news/como-escrever-um-bom-arquivo-readme-para-seu-projeto-do-github/).

4. **Testes**

   🧪 Cenários de Teste (BDD)
A seguir, são descritos os principais cenários de teste comportamentais (BDD - Behavior Driven Development) aplicados ao projeto, com foco em funcionalidade, usabilidade e cobertura de regras de negócio.

✅ Cenário 1: Seleção de dieta e cálculo de TMB, IMC e consumo de água
Objetivo: Garantir que, ao selecionar uma dieta e informar os dados pessoais, o sistema calcule corretamente os indicadores.

Dado que o usuário informou peso, altura, idade e sexo
E selecionou a dieta Mediterrânea
Quando ele confirma os dados
Então o sistema deve exibir os valores corretos de:

Taxa de Metabolismo Basal (TMB)

Índice de Massa Corporal (IMC)

Consumo de água recomendado

✅ Cenário 2: Exibição de alimentos recomendados conforme dieta
Objetivo: Verificar se os alimentos exibidos estão de acordo com a dieta escolhida pelo usuário.

Dado que o usuário selecionou a dieta Low Carb
Quando ele avança para a recomendação alimentar
Então o sistema deve exibir alimentos:

Ricos em proteínas

Com gorduras boas

Com baixo teor de carboidratos

✅ Cenário 3: Considerar restrições alimentares nas recomendações
Objetivo: Validar que o sistema filtra os alimentos com base nas restrições alimentares indicadas.

Dado que o usuário informou intolerância à lactose
E escolheu a dieta Vegetariana
Quando o sistema gerar a recomendação de alimentos
Então não deve incluir leite ou derivados nos alimentos sugeridos

✅ Cenário 4: Personalização de alimentos por categoria
Objetivo: Confirmar que o usuário consegue escolher preferências alimentares e isso afeta as recomendações.

Dado que o usuário selecionou a dieta Cetogênica
E marcou preferência por proteínas e legumes
Quando ele gerar a recomendação alimentar
Então o sistema deve priorizar esses grupos nas sugestões

✅ Cenário 5: Teste de usabilidade na seleção de dieta e preenchimento de dados
Objetivo: Avaliar a facilidade de uso da interface, especialmente para usuários com pouca familiaridade digital.

Dado que um usuário abre o formulário de seleção de dieta
Quando ele preenche os dados e navega pelas etapas
Então todas as interações devem ser:

Intuitivas

Com instruções claras

Com respostas rápidas e consistentes

     # 🛠️ Template de Teste de Funcionalidade

      > **Instruções para o testador:**  
      > Preencha cada caso de teste antes de executar, siga os passos na ordem indicada e registre os resultados.
      
      ---
   

      ## 2. Casos de Teste (exemplo)
      
      | ID   | Funcionalidade                   | Pré-Condição                        | Passos                                                   | Dados de Entrada                          | Resultado Esperado                                                                 | Resultado Obtido                            | Status (✅/❌) | Observações                         |
      | ---- | -------------------------------- | ----------------------------------- | -------------------------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------- | ------------- | ------------------------------------ |
      | FT-01 | Seleção de Dieta Mediterrânea                | Usuário autenticado e página de “Seleção de Dieta” aberta                | 1. Acessar a tela de seleção de dieta  2. Selecionar a opção **“Mediterrânea”**  3. Preencher o campo **Peso** com `70` kg  4. Preencher o campo **Altura** com `170` cm  5. Preencher o campo **Idade** com `30` anos  6. Selecionar **Sexo** como `Feminino`  7. Clicar no botão **“Solicitar Plano Alimentar”**                        |      - Dieta: `Mediterrânea`  - Peso: `70`  - Altura: `170`  - Idade: `30`  - Sexo: `Feminino`     |  O sistema exibe um plano alimentar contendo refeições ricas em azeite de oliva, peixes e grãos integrais.      |       _(preencher após a execução do teste)_        |                                    |
            
      ---
      
      ## 3. Critérios de Aceitação
      
      - ✅ **Passou:** Resultado Obtido igual ao Resultado Esperado  
      - ❌ **Falhou:** Há divergência entre Resultado Obtido e Esperado  
      
      ---
      
      ## 4. Registro de Bugs
      
      | ID do Bug | Caso de Teste Relacionado | Descrição do Problema                              | Severidade (Alta/Média/Baixa) | Status     | Responsável | Link para issue no GitHub                            |
      | --------- | ------------------------- | -------------------------------------------------- | ----------------------------- | ---------- | ----------- | ----------------------------------------------------- |
      | BUG-01    | FT-02                     | TMB calculada incorretamente para valores extremos | Alta                          | Em aberto  | Fulano      | https://github.com/orga-grupo/nutrifacil/issues/123   |
      
      ---
   - Teste de Usabilidade
      - Defina 5 metas:
        -  Ex.: “O usuário deve conseguir configurar seu plano em ≤ 3 minutos”

      - Escolha os participantes

        - Perfis representativos (novos e experientes).

        - Ideal: 5 a 8 usuários para cobrir ~85% dos problemas de usabilidade.
        - Utilize o template a seguir para a aplicação do teste.

          # 📝 Template de Registro de Teste de Usabilidade

            > **Instruções para o moderador:** entregue este formulário ao participante antes do teste.  
            > Peça que ele pense em voz alta enquanto executa cada tarefa e anote suas impressões.
            
            ---
            
            ## 1. Dados do Participante
            
            - **Nome / Código:**  
            - **Perfil (ex.: iniciante / avançado):**  
            - **Data:**  
            - **Moderador:**  
            - **Dispositivo / Navegador:**  
            
            ---
            
            ## 2. Objetivos do Teste
            
            1. Avaliar a facilidade de seleção de dieta  
            2. Medir o tempo para preencher dados pessoais  
            3. Verificar a clareza do plano alimentar gerado  
            4. (Outros objetivos específicos…)
            
            ---
            
            ## 3. Tarefas (Preencher durante o teste)
            
            | Nº | Descrição da Tarefa                                         | Tempo Alvo | Tempo Real (s) | Sucesso (S/N) | Erros / Dificuldades                              | Observações do Usuário                            |
            |----|-------------------------------------------------------------|------------|----------------|---------------|---------------------------------------------------|---------------------------------------------------|
            | 1  | Selecionar a dieta “Low Carb”                               | 30 s       |                |               |                                                   |                                                   |
            | 2  | Informar peso, altura, idade e sexo                         | 60 s       |                |               |                                                   |                                                   |
            | 3  | Escolher 3 alimentos preferidos em cada categoria           | 45 s       |                |               |                                                   |                                                   |
            | 4  | Gerar o plano alimentar e visualizar as recomendações       | 15 s       |                |               |                                                   |                                                   |
            | 5  | Identificar onde registrar alergias/intolerâncias           | 30 s       |                |               |                                                   |                                                   |
            
            > *Adapte este quadro para incluir outras tarefas do seu projeto.*
            
            ---
            
            ## 4. Métricas de Satisfação
            
            Para cada critério, marque de **1 (muito ruim)** a **5 (excelente)**:
            
            | Critério                      | Nota (1–5) | Comentários                                  |
            |-------------------------------|------------|-----------------------------------------------|
            | Facilidade de navegação       |            |                                               |
            | Clareza das instruções        |            |                                               |
            | Velocidade de resposta        |            |                                               |
            | Layout e design               |            |                                               |
            | Confiança ao usar a ferramenta|            |                                               |
            
            ---
            
            ## 5. Feedback Aberto
            
            - **O que você mais gostou?**  
              _Ex.: “As cores ajudam a identificar rapidamente as seções.”_
            
            - **O que você achou mais difícil?**  
              _Ex.: “Não encontrei onde inserir intolerâncias.”_
            
            - **Sugestões de melhoria:**  
              _Ex.: “Colocar tooltip explicando cada campo de entrada.”_
            
            ---
            
            ## 6. Conclusões do Moderador
            
            - **Principais bloqueios encontrados:**  
              1. …  
              2. …
            
            - **Pontos fortes observados:**  
              1. …  
              2. …
            
            - **Recomendações para próxima iteração:**  
              1. …  
              2. …
            
            ---

5. **Apresentação**  
   - Pasta `slides/` com arquivo de apresentação (PowerPoint, PDF ou Google Slides).  
   - Slides devem conter:  
     1. **Introdução**  
     2. **Motivação**  
     3. **Desenvolvimento**  
     4. **Resultados**  
     5. **Considerações Finais**  
   - **Todos** os integrantes devem estar aptos a responder perguntas.  
   - **1 ou 2 alunos** farão a apresentação em **5 minutos**.

---

