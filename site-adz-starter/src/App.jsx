import { useState } from 'react';

/* ───────── Dados reais da ADZ ───────── */
const WA = 'https://wa.me/5511978546190?text=Ol%C3%A1%2C%20vim%20pelo%20site%20ADZ%20-%20quero%20diagn%C3%B3stico';
const brl = (n) => n.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

/* ───────── Primitivos ───────── */
const Wrap = ({ className = '', ...p }) => <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 ${className}`} {...p} />;

function Btn({ variant = 'primary', size = 'md', className = '', ...p }) {
  const v = {
    primary: 'bg-gold text-black shadow-glow hover:bg-gold-light hover:text-ink-950 hover:scale-[1.03]',
    outline: 'border border-white/15 text-white hover:border-white/40 hover:bg-white/5',
    light: 'bg-white text-black shadow-lg shadow-white/10 hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98]',
  }[variant];
  const s = { md: 'h-10 px-5 text-sm', lg: 'h-12 px-7 text-base' }[size];
  return <a className={`inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-apple ${s} ${v} ${className}`} {...p} />;
}

const Title = ({ children, sub }) => (
  <div className="max-w-2xl">
    <h2 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl">{children}</h2>
    {sub && <p className="mt-5 text-lg font-light leading-relaxed text-zinc-400">{sub}</p>}
  </div>
);

const glass = 'group relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 p-8 shadow-2xl shadow-black/40 backdrop-blur-2xl transition-all duration-500 ease-apple hover:-translate-y-1 hover:border-white/20 hover:bg-neutral-900/60';

/* ───────── Navbar ───────── */
const links = [['Vazamentos', '#vazamentos'], ['Soluções', '#solucoes'], ['Cases e insights', '#cases'], ['Método', '#metodo'], ['Sobre', '#sobre']];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Principal">
        <a href="#" className="flex items-center gap-2.5 text-white" aria-label="ADZ Consultoria Digital">
          <img src="/img/logo.png" alt="" width="40" height="40" className="h-10 w-10 rounded-full" />
          <span className="hidden font-light tracking-tight text-zinc-300 sm:block">Consultoria Digital</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map(([l, h]) => <li key={h}><a href={h} className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white">{l}</a></li>)}
        </ul>
        <Btn href="#diagnostico" className="hidden md:inline-flex">Quero meu diagnóstico</Btn>
        <button className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-white md:hidden" aria-expanded={open} aria-label="Abrir menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 border-t border-white/10 bg-ink-950/95 px-5 py-4 backdrop-blur-xl md:hidden">
          {links.map(([l, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-zinc-300 hover:bg-white/5">{l}</a></li>)}
          <li className="pt-2"><Btn href="#diagnostico" className="w-full">Quero meu diagnóstico</Btn></li>
        </ul>
      )}
    </header>
  );
}

/* ───────── Hero ───────── */
const heroStats = [['R$143 mil', 'média de recuperação*, perfil ADZ'], ['3×', 'ROI médio* em leads qualificados'], ['15min', '1º contato técnico*'], ['380+', 'contas auditadas']];

function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-20 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(201,167,94,.22),transparent)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(70%_60%_at_50%_20%,#000,transparent)]" aria-hidden="true" />
      <Wrap className="relative text-center">
        <a href="#metodo" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] py-1.5 pl-2 pr-4 text-sm backdrop-blur-xl transition-colors hover:border-white/25">
          <span className="rounded-full bg-gold px-2 py-0.5 text-xs font-semibold text-black">Recovery ADZ</span>
          <span className="text-zinc-300">Engenharia de recuperação de lucro</span>
        </a>
        <h1 className="mx-auto mt-8 max-w-4xl text-5xl font-black tracking-tighter text-white sm:text-7xl lg:text-8xl">Descubra onde sua empresa está perdendo dinheiro no digital.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-light leading-relaxed text-zinc-400 sm:text-xl">Método ADZ de 4 Pilares: auditoria técnica completa que identifica vazamentos invisíveis de atração, rastreamento e conversão. Sem playbook genérico. Engenharia de diagnóstico, não volume.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Btn href="#diagnostico" size="lg" className="w-full sm:w-auto">Quero meu diagnóstico</Btn>
          <Btn href="#calculadora" variant="outline" size="lg" className="w-full sm:w-auto">Calcular meu vazamento</Btn>
        </div>
        <p className="mt-5 text-sm text-zinc-500">Auditoria sem compromisso • Dados reais • Sem fidelidade</p>

        <dl className="mx-auto mt-16 grid max-w-5xl grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/40 text-left backdrop-blur-2xl lg:grid-cols-4">
          {heroStats.map(([v, l]) => (
            <div key={l} className="border-b border-r border-white/10 p-6 transition-colors duration-500 ease-apple hover:bg-white/[0.03] lg:border-b-0 lg:last:border-r-0 [&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r">
              <dd className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{v}</dd>
              <dt className="mt-2 text-sm text-zinc-500">{l}</dt>
            </div>
          ))}
        </dl>
        <p className="mx-auto mt-4 max-w-3xl text-xs text-zinc-600">*Resultados variam conforme porte, ticket e maturidade digital. Estimativa da calculadora baseada em MIT Sloan, não é promessa de resultado.</p>
      </Wrap>
    </section>
  );
}

/* ───────── Calculadora dual de vazamento ───────── */
function Field({ label, value, onChange, min, max, step, prefix = '', suffix = '' }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between text-sm text-zinc-400">{label}<span className="font-mono text-base text-white">{prefix}{value.toLocaleString('pt-BR')}{suffix}</span></span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="mt-3 w-full accent-gold" />
    </label>
  );
}

function Calculator() {
  const [ticket, setTicket] = useState(100);
  const [leads, setLeads] = useState(350);
  const [loss, setLoss] = useState(45);
  const lost = Math.round((leads * loss) / 100);
  const perLead = ticket * 0.32;
  const month = lost * perLead;
  return (
    <section id="calculadora" className="border-y border-white/10 bg-ink-900/40 py-20 sm:py-28">
      <Wrap>
        <Title sub="Fonte MIT Sloan: empresas que respondem em menos de 5 minutos têm 8× mais chance de conversão. Estimativa conservadora, com margem de 32%.">Calculadora dual de vazamento</Title>
        <div className="mt-12 grid gap-4 lg:grid-cols-5">
          <div className="space-y-8 rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur-2xl lg:col-span-2">
            <Field label="Ticket médio" value={ticket} onChange={setTicket} min={50} max={20000} step={50} prefix="R$ " />
            <Field label="Leads por mês" value={leads} onChange={setLeads} min={10} max={3000} step={10} />
            <Field label="Perda estimada" value={loss} onChange={setLoss} min={5} max={90} step={1} suffix="%" />
          </div>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white/20 to-white/0 p-[1px] lg:col-span-3">
            <div className="grid h-full gap-px overflow-hidden rounded-[23px] bg-white/10 sm:grid-cols-2" aria-live="polite">
              <div className="bg-neutral-950 p-8"><p className="text-sm text-zinc-400">Leads perdidos por mês</p><p className="mt-2 text-5xl font-semibold tracking-tight text-white">{lost.toLocaleString('pt-BR')}</p><p className="mt-1 text-sm text-zinc-500">de {leads.toLocaleString('pt-BR')} totais</p></div>
              <div className="bg-neutral-950 p-8"><p className="text-sm text-zinc-400">Valor por lead</p><p className="mt-2 text-5xl font-semibold tracking-tight text-white">{brl(perLead)}</p><p className="mt-1 text-sm text-zinc-500">conversão de 32%</p></div>
              <div className="bg-neutral-950 p-8 sm:col-span-2">
                <p className="text-sm text-zinc-400">Prejuízo estimado</p>
                <p className="mt-2 bg-gradient-to-r from-gold-light to-gold bg-clip-text text-5xl font-black tracking-tighter text-transparent sm:text-6xl">{brl(month)} / mês</p>
                <p className="mt-2 text-sm text-zinc-500">{brl(month * 12)} / ano • Fonte MIT</p>
                <Btn href={WA} target="_blank" rel="noopener noreferrer" variant="light" className="mt-8 w-full sm:w-auto">Quero descobrir meu vazamento real</Btn>
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* ───────── Vazamentos ───────── */
const leaks = [
  ['Vazamento de Atração', 'Campanhas geram movimento sem demanda qualificada. Detectável na auditoria técnica.'],
  ['Vazamento de Invisibilidade', 'GMB, PageSpeed e ativos impedem sua empresa de aparecer quando o cliente procura. Detectável na auditoria técnica.'],
  ['Vazamento de Conversão', 'O lead chega, mas atendimento, scripts e velocidade impedem a conversão. Detectável na auditoria técnica.'],
];

function Leaks() {
  return (
    <section id="vazamentos" className="py-24 sm:py-32">
      <Wrap>
        <Title sub="Responda em 2 minutos. Cada resposta já inicia sua auditoria técnica.">Diagnóstico estratégico: os 3 vazamentos</Title>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {leaks.map(([t, d], i) => (
            <article key={t} className={glass}>
              <span className="font-mono text-xs text-gold-light">Vazamento {i + 1} de 3</span>
              <h3 className="mt-3 text-xl font-medium tracking-tight text-white sm:text-2xl">{t}</h3>
              <p className="mt-3 leading-relaxed text-neutral-400">{d}</p>
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  );
}

/* ───────── Soluções (Bento) ───────── */
const Card = ({ title, text, className = '', children }) => (
  <article className={`${glass} ${className}`}>
    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />
    <div className="relative z-10 max-w-md"><h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">{title}</h3><p className="mt-2 leading-relaxed text-neutral-400">{text}</p>{children}</div>
  </article>
);

function Solutions() {
  return (
    <section id="solucoes" className="border-t border-white/10 py-24 sm:py-32">
      <Wrap>
        <Title sub="Cada serviço nasce de um vazamento encontrado na auditoria, não de um pacote pronto.">Soluções para estancar o vazamento certo</Title>
        <div className="mt-12 grid gap-4 md:grid-cols-6">
          <article className="group relative min-h-[18rem] overflow-hidden rounded-3xl bg-gradient-to-b from-white/20 to-white/0 p-[1px] transition-all duration-500 ease-apple hover:-translate-y-1 hover:from-gold-light/50 hover:to-white/10 md:col-span-4">
            <div className="h-full rounded-[23px] bg-neutral-950 p-8">
              <span className="font-mono text-xs uppercase tracking-widest text-gold-light">Search Dominance</span>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">SEO, GEO e AEO para a era das buscas por IA</h3>
              <p className="mt-2 max-w-lg leading-relaxed text-neutral-400">Presença onde o cliente pesquisa hoje: Google, mapas e respostas geradas por inteligência artificial.</p>
              <div className="mt-8 flex flex-wrap gap-2">{['SEO', 'GEO', 'AEO'].map((t) => <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-zinc-300">{t}</span>)}</div>
            </div>
          </article>
          <Card className="md:col-span-2" title="Gestão IA SDR" text="Atendimento com IA SDR, tempo de resposta reduzido e handoff humano." />
          <Card className="md:col-span-2" title="SEO Técnico" text="Estrutura técnica para um ativo rastreável, rápido e encontrável." />
          <Card className="md:col-span-2" title="SEO Local" text="GMB, presença local e as buscas que precisam chegar até você." />
          <Card className="md:col-span-2" title="Google Ads" text="Tráfego orientado a intenção, conectado ao rastreamento." />
          <Card className="md:col-span-6" title="Tráfego Pago: gestão" text="Gestão com foco em rastreamento e em lead qualificado, para que cada real investido seja medido até a venda." />
        </div>
      </Wrap>
    </section>
  );
}

/* ───────── Método ───────── */
const pillars = [
  ['Pilar 1 • Cérebro', 'Rastreamento', ['Pixel + CAPI com deduplicação', 'GTM server-side', 'UTMs blindadas', 'Lead qualificado']],
  ['Pilar 2 • Corpo', 'Ativos', ['PageSpeed com LCP abaixo de 2,5s', 'GMB com posts semanais', 'Mobile first', 'Prova social']],
  ['Pilar 3 • Coração', 'Conversão', ['Cliente oculto no WhatsApp', 'Tempo de resposta abaixo de 3min + IA SDR', 'Scripts validados', 'IA 24h com handoff']],
  ['Pilar 4 • Bolso', 'Financeiro', ['Calculadora dual', 'CPL real vs. fantasia', 'Forecast 20/80', 'Decisão por P&L']],
];
const steps = [['Diagnóstico', 'Auditoria técnica completa de rastreamento e ativos.'], ['Correção', 'Estanca os vazamentos de atração, invisibilidade e conversão.'], ['Escala', 'Escala a mídia com ROI previsível, depois das correções.']];

function Method() {
  return (
    <section id="metodo" className="border-t border-white/10 bg-ink-900/40 py-24 sm:py-32">
      <Wrap>
        <Title sub="Quatro pilares técnicos, aplicados nesta ordem, antes de qualquer aumento de verba.">Método ADZ® de 4 Pilares</Title>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(([k, t, items]) => (
            <article key={t} className={glass + ' p-7'}>
              <span className="font-mono text-xs text-gold-light">{k}</span>
              <h3 className="mt-2 text-xl font-medium text-white">{t}</h3>
              <ul className="mt-5 space-y-3 text-sm text-neutral-400">{items.map((i) => <li key={i} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold-light" />{i}</li>)}</ul>
            </article>
          ))}
        </div>
        <ol className="mt-4 grid gap-4 md:grid-cols-3">
          {steps.map(([t, d], i) => (
            <li key={t} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-500 ease-apple hover:border-gold-light/40">
              <span className="font-mono text-xs text-gold-light">Etapa {i + 1}</span>
              <h3 className="mt-2 text-lg font-medium text-white">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{d}</p>
            </li>
          ))}
        </ol>
      </Wrap>
    </section>
  );
}

/* ───────── Autoridade (EEAT) ───────── */
function About() {
  const [imgOk, setImgOk] = useState(true);
  return (
    <section id="sobre" className="py-24 sm:py-32">
      <Wrap>
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gold/30 to-ink-900">
              {imgOk ? <img src="/img/thiago.jpg" alt="Thiago Silva, fundador da ADZ Consultoria Digital" width="900" height="900" loading="lazy" className="h-full w-full object-cover" onError={() => setImgOk(false)} /> : <span className="grid h-full place-items-center text-7xl font-black text-white/80">TS</span>}
            </div>
          </div>
          <div className="lg:col-span-3">
            <Title>Método nascido de auditoria, não de teoria.</Title>
            <div className="mt-6 space-y-4 font-light leading-relaxed text-zinc-400">
              <p>Sou Thiago Silva, fundador da ADZ Consultoria Digital. Nos últimos 6 anos auditei mais de 380 contas de tráfego e SEO local em Santana de Parnaíba, Alphaville, Barueri e região metropolitana. O padrão se repetia: empresas investindo, mas com rastreamento quebrado, GMB abandonado e atendimento que mata o lead em minutos.</p>
              <p>Criei o Método ADZ® (Alcance Digital Zênite) com 4 pilares técnicos para estancar vazamentos antes de escalar mídia. Cada diagnóstico começa com inspeção de Pixel/CAPI, GTM, PageSpeed, GMB e gravações de atendimento.</p>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 text-center">
              {[['6 anos', 'de experiência'], ['380+', 'contas auditadas'], ['4', 'pilares técnicos']].map(([v, l]) => <div key={l} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"><dd className="text-2xl font-semibold text-white">{v}</dd><dt className="mt-1 text-xs text-zinc-500">{l}</dt></div>)}
            </dl>
          </div>
        </div>
      </Wrap>
    </section>
  );
}


/* ───────── Cases e insights ───────── */
function CasesInsights() {
  return (
    <section id="cases" className="border-t border-white/10 py-24 sm:py-32">
      <Wrap>
        <Title sub="Leitura de indicadores reais compartilhados pela ADZ. Métricas de plataformas não comprovam, isoladamente, vendas ou lucro incremental.">Cases e insights</Title>
        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <article className={glass + ' p-7'}>
            <div className="flex items-start justify-between gap-4">
              <div><span className="font-mono text-xs uppercase tracking-widest text-gold-light">Google Analytics 4</span><h3 className="mt-2 text-xl font-medium text-white">Visão de audiência e engajamento</h3></div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">Set/2026</span>
            </div>
            <dl className="mt-7 grid grid-cols-2 gap-3">
              {[[ '1.742', 'Usuários' ], ['1.716', 'Novos usuários'], ['1.766', 'Sessões'], ['90,42%', 'Taxa de engajamento']].map(([v,l]) => <div key={l} className="rounded-2xl border border-white/10 bg-black/20 p-4"><dd className="text-2xl font-semibold tracking-tight text-white">{v}</dd><dt className="mt-1 text-xs text-zinc-500">{l}</dt></div>)}
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-zinc-400">A captura também mostra a distribuição por dispositivo: 1.413 usuários em desktop, 228 em mobile e 5 em tablet. Vale investigar a experiência mobile sem ignorar a predominância de desktop neste período.</p>
            <p className="mt-3 text-xs text-zinc-600">Fonte: captura de tela fornecida pela ADZ. Período exibido: 1–30 de setembro de 2026.</p>
          </article>
          <article className={glass + ' p-7'}>
            <span className="font-mono text-xs uppercase tracking-widest text-gold-light">Meta Ads</span>
            <h3 className="mt-2 text-xl font-medium text-white">Leitura de mídia paga</h3>
            <dl className="mt-7 grid grid-cols-2 gap-3">
              {[[ '16.841', 'Impressões (linha visível)' ], ['122', 'Cliques no link (linha visível)'], ['R$ 33,73', 'Valor gasto (linha visível)'], ['R$ 0,28', 'Custo por clique (linha visível)']].map(([v,l]) => <div key={l} className="rounded-2xl border border-white/10 bg-black/20 p-4"><dd className="text-2xl font-semibold tracking-tight text-white">{v}</dd><dt className="mt-1 text-xs text-zinc-500">{l}</dt></div>)}
            </dl>
            <p className="mt-5 text-sm leading-relaxed text-zinc-400">Os números acima pertencem a uma linha visível da captura, não ao total da conta. Antes de avaliar desempenho, é necessário confirmar período, campanha, objetivo, qualidade dos cliques e conversões atribuídas.</p>
            <p className="mt-3 text-xs text-zinc-600">Fonte: captura de tela fornecida pela ADZ. Não foram somadas linhas repetidas.</p>
          </article>
        </div>
        <div className="mt-4 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] p-7 sm:p-9">
          <span className="font-mono text-xs uppercase tracking-widest text-gold-light">Vídeos e demonstrações</span>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">Conteúdo em vídeo, carregado sob demanda</h3>
          <p className="mt-3 max-w-3xl leading-relaxed text-zinc-400">Os dois vídeos enviados serão incorporados com reprodução iniciada pelo visitante, sem carregar arquivos de vídeo durante a abertura da página. Para ativar a reprodução pública, os arquivos precisam estar hospedados em URLs acessíveis; elas ainda não estão configuradas neste projeto.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-neutral-950/60 p-5"><p className="font-medium text-white">Case de sucesso — lucro</p><p className="mt-2 text-sm text-zinc-500">Vídeo aguardando URL pública de hospedagem.</p></div>
            <div className="rounded-2xl border border-white/10 bg-neutral-950/60 p-5"><p className="font-medium text-white">Dicas e diagnóstico</p><p className="mt-2 text-sm text-zinc-500">Vídeo aguardando URL pública de hospedagem.</p></div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* ───────── Prova social ───────── */
const reviews = [
  ['Juliana Meirelles', 'Local Guide • 32 avaliações', 'A equipe da ADZ foi sensacional no diagnóstico inicial da minha marca! Eles nos deram insights preciosos e super detalhados sobre o nosso posicionamento atual e oportunidades de tráfego. Super recomendo!'],
  ['Carlos Almeida', 'Local Guide • 23 avaliações', 'O pessoal da ADZ Digital é sensacional! Passando para agradecer pela otimização da campanha dessa semana. O volume de leads qualificados subiu muito!'],
  ['Marcos Mendes', 'Local Guide • 17 avaliações', 'Excelente desempenho nas campanhas de vendas e estratégias de SEO. O aumento foi notável e o atendimento é impecável. A equipe é muito profissional e dedicada!'],
  ['Sofia Lima', 'Local Guide • 12 avaliações', 'Muito satisfeita com os resultados! A estratégia foi sob medida e o atendimento excelente. Me ajudaram a entender e melhorar a performance de cada campanha!'],
];

function Proof() {
  return (
    <section className="border-t border-white/10 bg-ink-900/40 py-24 sm:py-32">
      <Wrap>
        <Title sub="Avaliações reais do Google Meu Negócio, todas com 5 estrelas.">O que clientes dizem após o diagnóstico</Title>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {reviews.map(([n, m, q]) => (
            <figure key={n} className={glass + ' p-7'}>
              <div className="text-gold-light" role="img" aria-label="5 estrelas">★★★★★</div>
              <blockquote className="mt-4 leading-relaxed text-zinc-300">“{q}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3"><span className="grid h-9 w-9 place-items-center rounded-full bg-gold/30 text-sm font-semibold text-white">{n[0]}</span><span><span className="block text-sm font-medium text-white">{n}</span><span className="text-xs text-zinc-500">{m}</span></span></figcaption>
            </figure>
          ))}
        </div>
        <dl className="mt-4 grid overflow-hidden rounded-3xl border border-white/10 sm:grid-cols-3">
          {[['223 mil', 'Cliques gerenciados (Google Ads)'], ['25,1 mil', 'Conversões rastreadas'], ['1.742', 'Usuários GA4 (30 dias)']].map(([v, l]) => (
            <div key={l} className="border-b border-white/10 p-8 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0"><dd className="text-4xl font-semibold tracking-tight text-white">{v}</dd><dt className="mt-2 text-sm text-zinc-500">{l}</dt></div>
          ))}
        </dl>
      </Wrap>
    </section>
  );
}

/* ───────── CTA final ───────── */
function FinalCTA() {
  return (
    <section id="diagnostico" className="py-24 sm:py-32">
      <Wrap>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900/40 px-6 py-16 text-center backdrop-blur-xl sm:py-24">
          <div className="pointer-events-none absolute inset-0 animate-glow bg-[radial-gradient(50%_80%_at_50%_120%,rgba(201,167,94,.45),transparent)]" aria-hidden="true" />
          <h2 className="relative mx-auto max-w-3xl text-4xl font-black tracking-tighter text-white sm:text-6xl">Descubra seu vazamento real antes de investir mais um real em mídia.</h2>
          <p className="relative mx-auto mt-5 max-w-xl text-lg font-light text-zinc-400">Fale com um especialista da ADZ pelo WhatsApp. Primeiro contato técnico em até 15 minutos*, sem compromisso e sem fidelidade.</p>
          <div className="relative mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Btn href={WA} target="_blank" rel="noopener noreferrer" variant="light" size="lg" className="w-full sm:w-auto">Quero meu diagnóstico</Btn>
            <Btn href="mailto:Adz.consultoriadigital@gmail.com" variant="outline" size="lg" className="w-full sm:w-auto">Enviar e-mail</Btn>
          </div>
        </div>
      </Wrap>
    </section>
  );
}

/* ───────── Footer ───────── */
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900/40">
      <Wrap className="py-16">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="flex items-center gap-3 text-lg tracking-tight text-white"><img src="/img/logo.png" alt="" width="44" height="44" loading="lazy" className="h-11 w-11 rounded-full" /><span className="font-light">ADZ Consultoria Digital</span></p>
            <p className="mt-3 max-w-sm text-sm font-light leading-relaxed text-zinc-500">Engenharia de recuperação de lucro: rastreamento, ativos, conversão e financeiro em um só método.</p>
          </div>
          <nav aria-label="Navegação"><h3 className="text-sm font-medium text-white">Navegação</h3><ul className="mt-4 space-y-3">{links.map(([l, h]) => <li key={h}><a href={h} className="text-sm text-zinc-500 transition-colors duration-300 hover:text-white">{l}</a></li>)}</ul></nav>
          <address className="not-italic"><h3 className="text-sm font-medium text-white">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm text-zinc-500">
              <li><a href="tel:+5511978546190" className="hover:text-white">(11) 97854-6190</a></li>
              <li><a href="mailto:Adz.consultoriadigital@gmail.com" className="break-all hover:text-white">Adz.consultoriadigital@gmail.com</a></li>
              <li>Av. Ten. Marques, Jardim Represa, Santana de Parnaíba - SP, 06530-245</li>
            </ul>
          </address>
        </div>
        <div className="mt-16 space-y-2 border-t border-white/10 pt-8 text-xs text-zinc-600">
          <p>© {new Date().getFullYear()} ADZ Consultoria Digital • CNPJ 16.868.784/0001-04</p>
          <p>*Resultados variam conforme porte, ticket e maturidade digital. Estimativa da calculadora baseada em MIT Sloan, não é promessa de resultado. A ADZ atende empresas com ativo digital mínimo para auditoria técnica.</p>
        </div>
      </Wrap>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main><Hero /><Calculator /><Leaks /><Solutions /><CasesInsights /><Method /><About /><Proof /><FinalCTA /></main>
      <Footer />
    </>
  );
}
