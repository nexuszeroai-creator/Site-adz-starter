# QA Gate Standard V1.0 - Checklist travado

## CORE - Obrigatório passar
- [ ] Mobile-first: <640, 640-1023, >=1024 ok? CTA full-width mobile?
- [ ] WhatsApp CTA com mensagem pré-preenchida com nome do serviço/produto?
- [ ] Sem conteúdo fake? Sem avaliações inventadas? Proof só com conteúdo real?
- [ ] Sem carrinho, sem pagamento online, sem login, sem estoque?
- [ ] Imagens com alt? Contraste AA? Foco visível?
- [ ] LCP <2s? Sem script bloqueante? Sem lib pesada?
- [ ] Sem senha/API key no código? Sem tracking bloqueante?

## OPTIONAL
- [ ] Gallery só se tiver fotos reais boas?
- [ ] Proof só se tiver avaliações reais?
- [ ] Vitrine Digital <=20 produtos? 4 campos só (foto+título+desc curta+CTA WhatsApp)?
- [ ] Carrossel simples permitido? Fade 700ms, vanilla JS, auto 5s?

## EXCLUDED - PROIBIDO
- [ ] PROIBIDO componente específico por cliente (BarbeariaHero, etc)
- [ ] PROIBIDO marketplace, painel, login, carrinho
- [ ] PROIBIDO preço fixo em Services (só orçamento)
