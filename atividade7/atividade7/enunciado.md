# Atividade 7 - Praticando conceitos essenciais do ReactJS 

1. Contador Simples: Crie um componente de contador que exibe um número na tela e possui dois botões: “Incrementar” e “Decrementar”. Use o hook useState para manter o valor do contador. Desafio: adicione uma condição para não permitir que o valor seja menor que zero.

2. Alteração de Cor de Fundo: Crie um componente onde o fundo da página muda de cor cada vez que o usuário clica em um botão.
Use useState para armazenar a cor atual e useEffect para atualizar o estilo do fundo com cada mudança. Desafio: gere cores aleatórias sempre que o botão for clicado.

3. Lista de Tarefas: Crie um aplicativo de lista de tarefas (to-do list) onde o usuário pode adicionar e remover tarefas. Use useState para armazenar a lista de tarefas e renderize cada tarefa como um item de lista. Desafio: permita que o usuário marque as tarefas como concluídas e filtre para ver apenas as tarefas pendentes.

4. Temporizador com useEffect: Crie um temporizador que conta o tempo em segundos e exiba na tela. Use useEffect para iniciar o temporizador ao carregar o componente e useState para atualizar o tempo. Desafio: adicione botões para pausar e reiniciar o temporizador.

5. Filtro de Lista: Crie um componente que renderiza uma lista de nomes. Adicione um campo de entrada para filtrar os nomes com base no texto digitado. Use useState para controlar o valor do filtro e map para exibir apenas os itens que correspondem ao filtro. Desafio: ignore maiúsculas e minúsculas ao filtrar.

6. Formulário de Registro Simples: Crie um formulário com campos de nome, e-mail e senha. Ao enviar o formulário, exiba uma mensagem de boas-vindas usando as informações digitadas. Use useState para armazenar os valores dos campos e exiba a mensagem em um novo componente de boas-vindas. Desafio: adicione validações para garantir que todos os campos estejam preenchidos antes de enviar.

7. Aplicação de Requisição de Dados Simples: Crie um componente que exiba uma lista de posts obtidos de uma API pública (como JSONPlaceholder). Use useEffect para fazer a requisição ao carregar o componente e exiba os posts em uma lista. Desafio: adicione um botão para recarregar os dados e um indicador de carregamento enquanto a requisição está sendo feita.

8. Galeria de Imagens com Visualização Detalhada: Crie uma galeria simples com uma lista de imagens. Quando o usuário clica em uma imagem, exiba-a em uma visualização ampliada em um modal. Use useState para armazenar a imagem selecionada e renderize o modal condicionalmente. Desafio: adicione um botão de “Fechar” no modal e uma funcionalidade de navegação entre as imagens.

9. Timer com Intervalo e Alerta: Crie um timer onde o usuário define a quantidade de segundos para a contagem regressiva e, ao iniciar, o tempo é exibido e diminui a cada segundo. Use useState para armazenar o tempo e useEffect para iniciar a contagem regressiva ao iniciar o timer. Ao chegar a zero, exiba um alerta informando que o tempo acabou. Desafio: Adicione botões para pausar e reiniciar o timer.

10. Componentes com Tabs Navegáveis: Crie uma interface de “tabs” (abas) onde cada aba exibe um conteúdo diferente ao ser clicada (por exemplo, uma aba “Sobre” e uma aba “Contato”). Use useState para controlar qual aba está ativa e renderize o conteúdo de acordo com a aba selecionada. Desafio: Adicione um efeito visual que destaque a aba ativa.

Orientações para a Entrega

Estrutura do Projeto: Organize seu projeto em uma estrutura de pastas clara. Inclua uma pasta components para armazenar os componentes criados em cada atividade, facilitando a navegação e a leitura do código.

Comentário no Código: Adicione comentários explicativos no código, principalmente para trechos mais complexos, como o uso de useEffect e a lógica dos temporizadores. Isso ajudará a entender seu raciocínio e facilita a correção.

Criação de uma Página Principal: Crie uma página principal (App.js ou index.js) que sirva como menu para acessar cada atividade individualmente. Dessa forma, cada atividade pode ser testada separadamente sem interferir nas demais.

Entrega do Código
       
Envie o projeto completo em um repositório Git com um README.md explicando o propósito de cada atividade. O README.md deve conter instruções claras para instalação e execução do projeto, incluindo qualquer dependência específica.