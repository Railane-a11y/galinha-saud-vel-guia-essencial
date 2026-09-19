import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  HeartPulse,
  Leaf,
  LockKeyhole,
  MonitorSmartphone,
  ShieldCheck,
  Star,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import mockupImage from "@/assets/guia-mockup.jpg.asset.json";
import anaImage from "@/assets/depoimento-ana.jpg";
import joaoImage from "@/assets/depoimento-joao.jpg";
import mariaImage from "@/assets/depoimento-maria.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Guia Galinha Saudável | Receitas Caseiras e Cuidados" },
      { name: "description", content: "Aprenda a reconhecer sinais comuns e cuidar melhor das suas galinhas com receitas caseiras simples." },
      { property: "og:title", content: "Guia Galinha Saudável" },
      { property: "og:description", content: "Um guia prático para proteger sua criação com mais confiança." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const chapters = [
  { icon: Stethoscope, title: "Diagnóstico rápido", text: "Entenda os sinais mais comuns antes que o problema se agrave." },
  { icon: Leaf, title: "Receitas caseiras", text: "Preparos simples com ingredientes acessíveis para o dia a dia." },
  { icon: ClipboardCheck, title: "Plano de cuidados", text: "Saiba o que observar e qual atitude tomar em cada situação." },
  { icon: Clock3, title: "Consulta imediata", text: "Tenha o material sempre à mão no celular, tablet ou computador." },
];

const audience = [
  "Está começando uma pequena criação", "Já perdeu aves por não saber como agir",
  "Quer reconhecer sintomas com rapidez", "Prefere uma linguagem simples e direta",
  "Busca cuidados econômicos e acessíveis", "Quer mais segurança para proteger o plantel",
];

const bonuses = [
  { number: "01", icon: HeartPulse, title: "Guia de Alimentação", text: "Cuidados de alimentação para aves mais fortes e bem cuidadas." },
  { number: "02", icon: ClipboardCheck, title: "Calendário de Cuidados", text: "Uma rotina prática para acompanhar sua criação sem esquecer nada." },
  { number: "03", icon: BookOpenCheck, title: "Checklist Semanal", text: "Uma inspeção rápida e organizada para o galinheiro." },
];

const testimonials = [
  { image: joaoImage, name: "João Ferreira", role: "Pequeno criador", text: "Consegui identificar rapidamente um problema nas minhas galinhas e agir antes que a situação piorasse." },
  { image: anaImage, name: "Ana Paula", role: "Criadora familiar", text: "Material simples, direto e fácil de entender. Agora observo minhas aves com muito mais segurança." },
  { image: mariaImage, name: "Maria das Dores", role: "Criadora há 12 anos", text: "Valeu cada centavo. É um material que fica sempre por perto quando surge alguma dúvida." },
];

const faqs = [
  ["Como recebo o material?", "O acesso é enviado imediatamente após a confirmação do pagamento."],
  ["Funciona no celular?", "Sim. O guia pode ser acessado pelo celular, tablet ou computador."],
  ["Sou iniciante, vou entender?", "Sim. Todo o conteúdo foi preparado em uma linguagem simples e direta."],
  ["Quanto tempo terei acesso?", "O acesso segue as condições informadas na plataforma de venda."],
  ["Como faço o pagamento?", "Você poderá usar PIX, cartão e os demais meios disponíveis na plataforma."],
];

function Index() {
  return (
    <main className="overflow-x-hidden bg-background pb-20 text-foreground sm:pb-0">
      <div className="bg-gold px-4 py-2 text-center text-[10px] font-extrabold uppercase text-forest-deep sm:text-xs">
        Oferta especial • Acesso imediato após a compra
      </div>

      <section id="inicio" className="relative bg-background px-5 pb-16 pt-10 sm:px-8 sm:pb-20 lg:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mx-auto mt-5 max-w-3xl break-words text-[2rem] font-extrabold leading-[1.08] text-forest-deep sm:text-5xl lg:text-[3.5rem]">
            Aprenda a Tratar as Principais Doenças da Sua Galinha <span className="text-gold">Antes de Perder Todas Elas</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
            Identifique sintomas e aprenda receitas caseiras fáceis para cuidar da sua criação com mais rapidez, economia e confiança.
          </p>
          <img
            src={mockupImage.url}
            alt="Guia +300 Receitas Caseiras para Doenças de Galinhas em telas de computador, celular e livro"
            className="mx-auto mt-8 w-full rounded-xl border border-border bg-card shadow-2xl"
          />
          <Button asChild size="large" className="mt-8 w-full text-sm sm:w-auto sm:px-9 sm:text-base">
            <a href="#oferta">QUERO O MEU ACESSO AGORA <ArrowRight className="size-5" /></a>
          </Button>
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground"><LockKeyhole className="size-4 text-primary" /> Compra segura • Pagamento único</p>
        </div>
      </section>

      <section className="bg-ivory px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Mais valor" title="Você Ainda Leva 3 Bônus Exclusivos" subtitle="Materiais complementares incluídos sem custo adicional." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">{bonuses.map(({number,icon:Icon,title,text})=><article key={title} className="relative border border-border bg-background p-6 shadow-sm"><span className="absolute right-5 top-4 text-5xl font-extrabold text-gold/15">{number}</span><div className="grid size-12 place-items-center rounded-md bg-forest-deep text-gold-soft"><Icon className="size-6"/></div><span className="mt-8 block text-[10px] font-extrabold uppercase text-gold">Bônus {number}</span><h3 className="mt-2 text-lg font-extrabold">{title}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p><span className="mt-5 inline-flex text-xs font-extrabold uppercase text-primary">Incluído grátis</span></article>)}</div>
      </div></section>

      <section className="bg-forest-deep px-5 py-16 text-primary-foreground sm:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading light eyebrow="Conteúdo prático" title="Veja o Que Você Vai Aprender" subtitle="Informação organizada para consultar sempre que precisar." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {chapters.map(({icon: Icon,title,text},i)=><article key={title} className="border border-primary-foreground/15 bg-primary-foreground/5 p-5"><div className="flex items-center justify-between"><span className="grid size-10 place-items-center rounded-md bg-primary-foreground/10 text-gold-soft"><Icon className="size-5"/></span><span className="text-xs font-extrabold text-gold">0{i+1}</span></div><h3 className="mt-5 font-bold">{title}</h3><p className="mt-2 text-xs leading-5 text-primary-foreground/65">{text}</p></article>)}
          </div>
          <div className="mt-10 text-center"><Button asChild size="large"><a href="#oferta">QUERO APRENDER AGORA <ArrowRight className="size-5"/></a></Button></div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Feito para você" title="Ideal Para Quem Deseja..." subtitle="Cuidar melhor das aves sem depender de explicações difíceis." />
        <div className="mt-10 grid gap-3 sm:grid-cols-2">{audience.map((item,i)=><div key={item} className="flex items-center gap-4 border border-border bg-card p-4 shadow-sm"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold-soft text-xs font-extrabold text-gold">{i+1}</span><span className="text-sm font-semibold">{item}</span></div>)}</div>
      </div></section>

      <section className="px-5 py-16 sm:px-8 lg:py-24"><div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Experiências reais" title="Quem Comprou, Recomenda" subtitle="Veja a experiência de outros pequenos criadores." />
        <div className="mt-10 grid gap-5 md:grid-cols-3">{testimonials.map(t=><article key={t.name} className="border border-border bg-card p-6"><div className="flex gap-1 text-gold" aria-label="5 estrelas">{Array.from({length:5}).map((_,i)=><Star key={i} className="size-4 fill-current"/>)}</div><blockquote className="mt-5 min-h-24 text-sm leading-7">“{t.text}”</blockquote><div className="mt-5 flex items-center gap-3"><img src={t.image} alt={t.name} className="size-11 rounded-full object-cover"/><div><strong className="block text-sm">{t.name}</strong><span className="text-xs text-muted-foreground">{t.role}</span></div></div></article>)}</div>
      </div></section>

      <section id="oferta" className="bg-forest-deep px-5 py-16 text-primary-foreground sm:px-8 lg:py-24"><div className="mx-auto max-w-4xl text-center">
        <span className="inline-flex rounded-full bg-gold px-4 py-1.5 text-[10px] font-extrabold uppercase text-forest-deep">Oferta especial</span>
        <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">Comece a Proteger Sua Criação Hoje</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-primary-foreground/60">Escolha o plano ideal para você — pagamento único e acesso imediato nos dois.</p>
        <div className="mt-10 grid items-stretch gap-5 text-left md:grid-cols-2">
          <div className="flex flex-col border border-primary-foreground/15 bg-primary-foreground/5 p-6 sm:p-8">
            <span className="text-[10px] font-extrabold uppercase tracking-wide text-primary-foreground/60">Entrada</span>
            <p className="mt-1 text-lg font-extrabold">Guia Essencial</p>
            <p className="mt-4 text-sm text-primary-foreground/60">De <span className="line-through">R$ 27,00</span> por apenas</p>
            <div className="mt-1 flex items-end gap-1"><span className="pb-2 text-lg font-bold">R$</span><strong className="text-5xl font-extrabold text-gold-soft">9</strong><span className="pb-2 text-xl font-extrabold text-gold-soft">,90</span></div>
            <p className="mt-2 text-xs text-primary-foreground/60">Pagamento único • Acesso imediato</p>
            <ul className="mt-7 space-y-3 text-sm">{["Guia principal completo","Receitas caseiras passo a passo","Acesso no celular e computador"].map(x=><li key={x} className="flex gap-2"><Check className="size-5 shrink-0 text-leaf"/>{x}</li>)}</ul>
            <Button asChild size="large" variant="outline" className="mt-8 w-full border-gold text-sm text-gold hover:bg-gold hover:text-forest-deep sm:text-base"><a href="#comprar">QUERO O GUIA ESSENCIAL <ArrowRight className="size-5"/></a></Button>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-primary-foreground/60"><LockKeyhole className="size-4"/> Ambiente de compra seguro</p>
          </div>
          <div className="relative flex flex-col border-2 border-gold bg-primary-foreground/10 p-6 shadow-cta sm:p-8">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1.5 text-[10px] font-extrabold uppercase text-forest-deep">Mais escolhido</span>
            <span className="text-[10px] font-extrabold uppercase tracking-wide text-gold">Completo</span>
            <p className="mt-1 text-lg font-extrabold">Guia + Bônus Exclusivos</p>
            <p className="mt-4 text-sm text-primary-foreground/60">De <span className="line-through">R$ 47,00</span> por apenas</p>
            <div className="mt-1 flex items-end gap-1"><span className="pb-2 text-lg font-bold">R$</span><strong className="text-5xl font-extrabold text-gold-soft">19</strong><span className="pb-2 text-xl font-extrabold text-gold-soft">,90</span></div>
            <p className="mt-2 text-xs text-primary-foreground/60">Pagamento único • Acesso imediato</p>
            <ul className="mt-7 space-y-3 text-sm">{["Tudo do Guia Essencial","3 bônus exclusivos","Calendário e checklist semanal","Atualizações futuras"].map(x=><li key={x} className="flex gap-2"><Check className="size-5 shrink-0 text-leaf"/>{x}</li>)}</ul>
            <Button asChild size="large" className="mt-8 w-full text-sm sm:text-base"><a href="#comprar">QUERO RECEBER O GUIA <ArrowRight className="size-5"/></a></Button>
            <p className="mt-4 flex items-center justify-center gap-2 text-xs text-primary-foreground/60"><LockKeyhole className="size-4"/> Ambiente de compra seguro</p>
          </div>
        </div>
      </div></section>

      <section className="px-5 py-16 sm:px-8"><div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left"><div className="grid size-20 shrink-0 place-items-center rounded-full border-2 border-gold bg-gold-soft text-forest"><ShieldCheck className="size-10"/></div><div><span className="text-xs font-extrabold uppercase text-gold">Sua compra protegida</span><h2 className="mt-2 text-2xl font-extrabold">Garantia de Satisfação</h2><p className="mt-3 text-sm leading-6 text-muted-foreground">Se o material não atender às suas expectativas, você poderá solicitar o reembolso conforme as condições informadas na plataforma de pagamento.</p></div></div></section>

      <section className="border-t border-border bg-ivory px-5 py-16 sm:px-8"><div className="mx-auto max-w-3xl"><SectionHeading eyebrow="Tire suas dúvidas" title="Perguntas Frequentes"/><div className="mt-8 divide-y divide-border border-y border-border">{faqs.map(([q,a])=><details key={q} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold">{q}<ChevronDown className="size-5 shrink-0 text-primary transition-transform group-open:rotate-180"/></summary><p className="mt-3 pr-8 text-sm leading-6 text-muted-foreground">{a}</p></details>)}</div></div></section>

      <footer className="bg-forest-deep px-5 py-10 text-center text-primary-foreground/60"><div className="mx-auto max-w-5xl"><div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs"><a href="#termos">Termos de Uso</a><a href="#privacidade">Política de Privacidade</a><a href="#contato">Contato</a><a href="#suporte">Suporte</a></div><p className="mt-6 text-xs">© 2026 Todos os direitos reservados.</p><p className="mx-auto mt-3 max-w-2xl text-[10px] leading-5 text-primary-foreground/40">Este material possui caráter educativo e informativo. Em situações graves ou persistentes, procure orientação veterinária especializada.</p></div></footer>

      <div id="comprar" className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur sm:bottom-5 sm:left-auto sm:right-5 sm:border-0 sm:bg-transparent sm:p-0"><Button asChild className="w-full shadow-cta sm:w-auto"><a href="#oferta">COMPRAR AGORA <ArrowRight className="size-4"/></a></Button></div>
    </main>
  );
}

function SectionHeading({eyebrow,title,subtitle,light=false}:{eyebrow:string;title:string;subtitle?:string;light?:boolean}) {
  return <div className="mx-auto max-w-2xl text-center"><span className="text-[10px] font-extrabold uppercase text-gold">{eyebrow}</span><h2 className={`mt-2 text-2xl font-extrabold leading-tight sm:text-4xl ${light ? "text-primary-foreground" : "text-forest-deep"}`}>{title}</h2>{subtitle&&<p className={`mt-3 text-sm leading-6 ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{subtitle}</p>}<div className="mx-auto mt-5 h-1 w-10 bg-gold"/></div>;
}