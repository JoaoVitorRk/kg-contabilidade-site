# Prévia do site · Klüppel & Gasparin Contabilidade (Curitiba/PR, online)

Prévia comercial feita pela RK Performance em 13/10/2026 para a reunião de 14/10. `noindex` e `robots.txt` bloqueando busca até a cliente aprovar.

- `index.html`: home (abertura com imagem em alta definição, letreiro de prazos, quem somos com linhas de razão e monograma em marca d'água, 6 serviços em lista editorial, como funciona em 4 passos com numerais vazados, bloco de Imposto de Renda com o 31/05 gigante, depoimentos escalonados, dúvidas, fechamento com selo giratório)
- `imposto-de-renda/`: página de campanha (modelo das próximas: abrir empresa, MEI que passou do limite, regularizar dívidas). É o argumento central da proposta: cada campanha ganha uma página própria e a home não muda.
- `assets/site.css` e `assets/site.js`: estilo e comportamento. Tipografia Fraunces + Figtree + DM Mono. Paleta medida nos posts dela: marinho, ardósia, marfim e o amarelo marca-texto como acento (a palavra em itálico de cada título leva a marca).
- `assets/img/`: hero gerado por IA (mesa de trabalho, sem pessoas; original 1344×752 do GPT Image via Higgsfield, ampliado 2x com Lanczos), monograma tirado do logo real dela, favicon.

Os botões de WhatsApp abrem um aviso de prévia mostrando a mensagem que seria enviada. No site final, abrem o WhatsApp (41) 98405-8526 com a mensagem da página.

**Antes de publicar:** conferir o número de registro da organização no CRC-PR (rodapé tem asterisco), trocar a imagem do hero por foto própria ou gerar em 4K (Nano Banana Pro), fotos dos sócios na seção "quem somos", e ligar os botões ao WhatsApp real.

Como gerar de novo depois de mexer na copy: `python 03-materiais/_ferramentas/montar.py` (lê `02-estrategia/copy-final.json`).
Servidor local: `kg-contabilidade-site` em `.claude/launch.json` (porta 8794).
