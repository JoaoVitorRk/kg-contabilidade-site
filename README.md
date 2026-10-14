# Site · Klüppel & Gasparin Contabilidade (Curitiba/PR, online)

Site novo feito pela RK Performance em 13/10/2026 para a reunião de 14/10. No ar em https://joaovitorrk.github.io/kg-contabilidade-site/ com `noindex` e `robots.txt` bloqueando busca até a cliente aprovar e o site ir para o domínio dela.

- `index.html`: home (abertura com imagem em 4K, faixa de prova, quem somos com fotos sobrepostas e cantoneiras, letreiro de prazos, 6 serviços em lista editorial, para quem, como funciona em 4 passos com numerais vazados, bloco de Imposto de Renda, depoimentos escalonados, dúvidas, fechamento com selo giratório)
- `imposto-de-renda/`: página de campanha (modelo das próximas: abrir empresa, MEI que passou do limite, regularizar dívidas). Argumento central da proposta: cada campanha ganha uma página própria e a home não muda.
- `assets/site.css` e `assets/site.js`: estilo e comportamento. Fraunces + Figtree + DM Mono. Paleta medida nos posts dela: marinho, ardósia, marfim e o amarelo marca-texto como acento (a palavra em itálico de cada título leva a marca).
- `assets/img/`: imagens geradas em 4K no Nano Banana Pro (mesa de trabalho, caderno, pasta de imposto de renda com "MAIO" e "Informe de Rendimentos"), sem pessoas; monograma tirado do logo real dela; favicon.

Os botões abrem o WhatsApp (41) 98405-8526 com a mensagem da seção. O rodapé traz razão social, CNPJ e o CRC do contador responsável.

**Antes de publicar no domínio dela:** número do registro da organização no CRC-PR, fotos dos sócios (hero e "quem somos"), tag do Google Ads com conversão no clique do WhatsApp, Pixel da Meta, tirar `noindex` e o bloqueio do `robots.txt`.

Como gerar de novo depois de mexer na copy: `python 03-materiais/_ferramentas/montar.py` (lê `02-estrategia/copy-final.json`). As correções de HTML vão no gerador, não nos HTML gerados.
Servidor local: `kg-contabilidade-site` em `.claude/launch.json` (porta 8794). Prints: `01-diagnostico/prints/site-final/`.
