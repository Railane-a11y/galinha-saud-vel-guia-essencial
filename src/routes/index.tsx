import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CalendarDays, Check, ClipboardCheck, Clock3, HeartPulse, LockKeyhole, MonitorSmartphone, ShieldCheck, Sparkles, Star, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/criador-galinha.jpg";
import anaImage from "@/assets/depoimento-ana.jpg";
import joaoImage from "@/assets/depoimento-joao.jpg";
import mariaImage from "@/assets/depoimento-maria.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Guia Galinha Saudável | Receitas Caseiras e Cuidados" },
    { name: "description", content: "Aprenda a identificar sinais comuns e cuidar melhor das suas galinhas com um guia simples e prático." },
    { property: "og:title", content: "Guia Galinha Saudável" },
    { property: "og:description", content: "Receitas caseiras e cuidados práticos para proteger sua criação." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

const benefits = ["Identifique os sinais mais comuns de doenças.", "Aprenda receitas caseiras simples.", "Evite prejuízos desnecessários.", "Proteja sua criação com mais segurança."];

const receive = [
  { icon: BookOpen, title: "Guia Principal", text: "Reconheça os principais problemas que afetam galinhas e conheça receitas simples para auxiliar nos cuidados." },
  { icon: Stethoscope, title: "Diagnóstico Simplificado", text: "Tabela prática para identificar os sintomas mais comuns com agilidade." },
  { icon: ClipboardCheck, title: "Plano de Cuidados", text: "Um passo a passo organizado para você saber como agir rapidamente." },
  { icon: Clock3, title: "Acesso Imediato", text: "Receba todo o material logo após a confirmação do pagamento." },
];

const reasons = ["Linguagem simples e fácil", "Conteúdo direto ao ponto", "Ideal para pequenos criadores", "Ingredientes acessíveis", "Consulte sempre que precisar", "Economia de tempo e dinheiro"];

const testimonials = [
  { image: joaoImage, name: "João Ferreira", place: "Pequeno criador", text: "Consegui identificar rapidamente um problema nas minhas galinhas e agir antes que a situação piorasse." },
  { image: anaImage, name: "Ana Paula", place: "Criadora familiar", text: "Material simples, direto e fácil de entender." },
  { image: mariaImage, name: "Maria das Dores", place: "Criadora há 12 anos", text: "Valeu cada centavo. Recomendo para qualquer pequeno criador." },
];

const faqs = [
  ["Como recebo o material?", "O acesso é enviado imediatamente após a compra."],
  ["Funciona no celular?", "Sim, pode ser acessado pelo celular, tablet ou computador."],
  ["Sou iniciante, vou conseguir entender?", "Sim, o conteúdo foi desenvolvido com linguagem simples."],
  ["Quanto tempo terei acesso?", "Acesso conforme as condições informadas na plataforma de venda."],
  ["Como faço o pagamento?", "PIX, cartão de crédito e demais métodos disponíveis na plataforma."],
];

function Index() {
  return (
    <main className="overflow-x-hidden bg-background pb-20 text-foreground sm:pb-0">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center px-5 py-5 sm:px-8 lg:px-12">
          <a href="#inicio" className="flex items-center gap-2 font-bold text-primary-foreground" aria-label="Guia Galinha Saudável">
            <span className="grid size-10 place-items-center rounded-full border border-primary-foreground/40 bg-forest/80"><HeartPulse className="size-5" /></span>
            <span className="leading-tight">Galinha<br/><span className="font-normal text-primary-foreground/80">Saudável</span></span>
          </a>
        </div>
      </header>

      <section id="inicio" className="relative min-h-[760px] overflow-hidden bg-forest-deep sm:min-h-[720px]">
        <img src={heroImage} alt="Criador segurando uma galinha saudável em sua propriedade rural" width={1600} height={1072} className="absolute inset-0 h-full w-full object-cover object-[64%_center]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--forest-deep)_0%,color-mix(in_oklab,var(--forest-deep)_92%,transparent)_42%,color-mix(in_oklab,var(--forest-deep)_28%,transparent)_75%,transparent_100%)]" />
        <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-5 pb-16 pt-28 sm:min-h-[720px] sm:px-8 lg:px-12">
          <div className="min-w-0 max-w-2xl text-primary-foreground">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/50 bg-forest-deep/70 px-4 py-2 text-xs font-semibold uppercase text-gold-soft backdrop-blur-sm"><Sparkles className="size-4 text-gold" /> Guia prático para pequenos criadores</div>
            <h1 className="break-words text-[1.75rem] font-extrabold leading-[1.16] sm:text-5xl lg:text-[3.5rem]">Suas Galinhas Estão Doentes? Aprenda Receitas Caseiras Simples Antes Que Você Perca Todo o Seu Plantel.</h1>
            <p className="mt-5 max-w-xl text-sm leading-7 text-primary-foreground/85 sm:text-lg">Descubra cuidados usados por pequenos criadores para identificar sintomas rapidamente e agir com receitas práticas, econômicas e fáceis de preparar.</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {benefits.map((item) => <li key={item} className="flex items-start gap-2 text-sm font-medium"><span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-leaf text-forest-deep"><Check className="size-3.5" strokeWidth={3}/></span>{item}</li>)}
            </ul>
            <Button asChild size="large" className="mt-8 w-full px-4 text-xs sm:w-auto sm:px-9 sm:text-base"><a href="#oferta">QUERO PROTEGER MINHAS GALINHAS AGORA <ArrowRight className="size-5 shrink-0" /></a></Button>
            <p className="mt-3 flex items-center gap-2 text-xs text-primary-foreground/70"><LockKeyhole className="size-3.5"/> Compra segura • Acesso imediato</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Conteúdo completo" title="O Que Você Vai Receber Hoje" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{receive.map(({icon: Icon,title,text}, i) => <article key={title} className="rounded-lg border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"><span className="grid size-12 place-items-center rounded-md bg-secondary text-primary"><Icon className="size-6"/></span><span className="mt-6 block text-xs font-bold text-gold">0{i+1}</span><h3 className="mt-2 text-lg font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="bg-ivory px-5 py-20 sm:px-8 lg:py-24"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><span className="text-sm font-bold uppercase text-primary">Feito para a sua realidade</span><h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">Por Que Este Guia Pode Fazer Diferença Para Sua Criação?</h2><p className="mt-5 leading-7 text-muted-foreground">Informação clara para você cuidar do seu plantel com mais confiança, sem complicação.</p></div><div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">{reasons.map((r)=><div key={r} className="flex items-center gap-3 border-b border-border pb-5 font-semibold"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground"><Check className="size-4"/></span>{r}</div>)}</div></div></section>

      <section className="px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Mais valor para você" title="Bônus Que Você Receberá Gratuitamente"/><div className="mt-12 grid gap-6 md:grid-cols-3"><Bonus icon={HeartPulse} number="BÔNUS 01" title="Guia de Alimentação" text="Para galinhas mais fortes, saudáveis e bem cuidadas."/><Bonus icon={CalendarDays} number="BÔNUS 02" title="Calendário de Cuidados" text="Uma rotina básica e organizada para acompanhar sua criação."/><Bonus icon={ClipboardCheck} number="BÔNUS 03" title="Checklist Semanal" text="Inspecione o galinheiro sem esquecer nenhum ponto importante."/></div></div></section>

      <section id="oferta" className="bg-forest-deep px-5 py-20 text-primary-foreground sm:px-8 lg:py-24"><div className="mx-auto max-w-xl text-center"><span className="inline-flex rounded-full bg-gold px-4 py-2 text-xs font-bold uppercase text-forest-deep">Oferta especial por tempo limitado</span><h2 className="mt-6 text-3xl font-bold sm:text-4xl">Proteja Sua Criação Hoje</h2><p className="mt-4 text-primary-foreground/75">Tenha o guia completo e os 3 bônus à mão sempre que precisar.</p><div className="my-8 border-y border-primary-foreground/15 py-8"><p className="text-sm text-primary-foreground/60">Valor normal: <span className="line-through">R$ 47,00</span></p><div className="mt-2 flex items-end justify-center gap-2"><span className="pb-2 text-lg">Por apenas</span><strong className="text-6xl font-extrabold text-gold-soft">R$ 19,90</strong></div><p className="mt-2 text-xs text-primary-foreground/60">Pagamento único</p></div><div className="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm">{["Acesso imediato","Atualizações futuras","Bônus inclusos"].map(x=><span key={x} className="flex items-center gap-2"><Check className="size-4 text-leaf"/> {x}</span>)}</div><Button asChild size="large" className="mt-8 w-full text-base sm:text-lg"><a href="#comprar">SIM, QUERO RECEBER AGORA <ArrowRight className="size-5"/></a></Button><div className="mt-5 flex items-center justify-center gap-2 text-xs text-primary-foreground/65"><ShieldCheck className="size-5 text-gold"/> Ambiente de compra 100% seguro</div></div></section>

      <section className="px-5 py-20 sm:px-8 lg:py-28"><div className="mx-auto max-w-6xl"><SectionHeading eyebrow="Experiências reais" title="Veja o Que Outros Criadores Estão Dizendo"/><div className="mt-12 grid gap-6 md:grid-cols-3">{testimonials.map(t=><article key={t.name} className="rounded-lg border border-border bg-card p-7"><div className="flex gap-1 text-gold" aria-label="5 estrelas">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-4 fill-current"/>)}</div><blockquote className="mt-5 min-h-24 text-sm leading-7">“{t.text}”</blockquote><div className="mt-6 flex items-center gap-3"><img src={t.image} alt={t.name} loading="lazy" width={816} height={816} className="size-12 rounded-full object-cover"/><div><strong className="block text-sm">{t.name}</strong><span className="text-xs text-muted-foreground">{t.place}</span></div></div></article>)}</div></div></section>

      <section className="bg-ivory px-5 py-20 sm:px-8"><div className="mx-auto max-w-3xl"><SectionHeading eyebrow="Tire suas dúvidas" title="Perguntas Frequentes"/>
        <div className="mt-10 divide-y divide-border border-y border-border">{faqs.map(([q,a])=><details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{q}<span className="text-2xl font-normal text-primary transition-transform group-open:rotate-45">+</span></summary><p className="mt-3 pr-10 text-sm leading-6 text-muted-foreground">{a}</p></details>)}</div></div></section>

      <section className="px-5 py-20 sm:px-8"><div className="mx-auto flex max-w-4xl flex-col items-center gap-7 text-center sm:flex-row sm:text-left"><div className="grid size-24 shrink-0 place-items-center rounded-full border-2 border-gold bg-gold-soft text-forest"><ShieldCheck className="size-12"/></div><div><h2 className="text-2xl font-bold sm:text-3xl">Garantia de Satisfação</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">Você terá garantia conforme as condições da plataforma. Se o produto não atender às suas expectativas dentro do prazo informado, poderá solicitar o reembolso seguindo as regras da plataforma.</p></div></div></section>

      <footer className="bg-forest-deep px-5 py-12 text-primary-foreground/70 sm:px-8"><div className="mx-auto max-w-6xl text-center"><div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm"><a href="#termos" className="hover:text-primary-foreground">Termos de Uso</a><a href="#privacidade" className="hover:text-primary-foreground">Política de Privacidade</a><a href="#contato" className="hover:text-primary-foreground">Contato</a><a href="#suporte" className="hover:text-primary-foreground">Suporte</a></div><p className="mt-7 text-xs">© 2026 Todos os direitos reservados.</p><p className="mx-auto mt-4 max-w-3xl text-xs leading-5 text-primary-foreground/50">Este material possui caráter educativo e informativo. Em situações graves ou persistentes, procure orientação veterinária especializada.</p></div></footer>

      <div id="comprar" className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur sm:bottom-6 sm:left-auto sm:right-6 sm:border-0 sm:bg-transparent sm:p-0"><Button asChild className="w-full sm:w-auto"><a href="#oferta">COMPRAR AGORA <ArrowRight className="size-4"/></a></Button></div>
    </main>
  );
}

function SectionHeading({eyebrow,title}:{eyebrow:string;title:string}) { return <div className="mx-auto max-w-2xl text-center"><span className="text-xs font-bold uppercase text-primary">{eyebrow}</span><h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{title}</h2><div className="mx-auto mt-5 h-1 w-12 rounded-full bg-gold"/></div> }

function Bonus({icon:Icon,number,title,text}:{icon:typeof MonitorSmartphone;number:string;title:string;text:string}) { return <article className="relative overflow-hidden rounded-lg border border-gold/35 bg-ivory p-7"><span className="absolute right-4 top-3 text-5xl font-extrabold text-gold/15">{number.slice(-2)}</span><Icon className="size-9 text-primary"/><span className="mt-8 block text-xs font-bold text-gold">{number}</span><h3 className="mt-2 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p></article> }
