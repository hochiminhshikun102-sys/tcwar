import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Heart,
  LockKeyhole,
  Menu,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
  User,
  Users
} from "lucide-react";

const heroImages = [
  "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=1000&q=88",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=85",
  "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=85"
];

const movementCards = [
  {
    title: "Extreme Sports",
    label: "Push limits",
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Survival & Outdoors",
    label: "Adapt. Overcome.",
    image: "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Fishing & Adventure",
    label: "Chase the unknown",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Fitness & Training",
    label: "Strength within",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=85"
  },
  {
    title: "Motor & Speed",
    label: "Live the ride",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=700&q=85"
  }
];

const archetypes = [
  { name: "Fire Warrior", trait: "Unstoppable passion", tone: "Born to lead", accent: "from-orange-700 to-amber-500" },
  { name: "Shadow Warrior", trait: "Silent. Focused.", tone: "Always one step ahead", accent: "from-zinc-950 to-purple-800" },
  { name: "Iron Warrior", trait: "Unbreakable discipline", tone: "Strength is control", accent: "from-stone-800 to-bronze" },
  { name: "Wind Warrior", trait: "Free. Agile.", tone: "Move like the wind", accent: "from-slate-700 to-teal-700" }
];

const bestSellers = [
  { name: "Warrior Soul Tee", price: "$69.00 USD", reviews: 128, light: false },
  { name: "Dynasty Tee", price: "$69.00 USD", reviews: 87, light: true },
  { name: "Guardian Tee", price: "$69.00 USD", reviews: 96, light: false },
  { name: "Ghost Tiger Tee", price: "$59.00 USD", reviews: 73, light: true },
  { name: "Shadow Trooper Tee", price: "$69.00 USD", reviews: 112, light: false },
  { name: "Calligraphy Tee", price: "$59.00 USD", reviews: 64, light: true }
];

const communityImages = [
  "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=500&q=85"
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 bg-bone text-lg font-black text-moss shadow-sm">
        秦
      </div>
      <div className="leading-none">
        <p className="font-display text-[22px] uppercase tracking-tight">Terracotta</p>
        <p className="-mt-1 font-display text-[22px] uppercase tracking-tight">Warriors</p>
        <p className="text-[8px] font-black uppercase tracking-[0.25em] text-ink/55">Global Warrior Spirit</p>
      </div>
    </div>
  );
}

function TeeMockup({
  light = false,
  accent = "from-bronze to-clay",
  label = "Warriors"
}: {
  light?: boolean;
  accent?: string;
  label?: string;
}) {
  return (
    <div className="relative mx-auto h-[250px] w-[220px]">
      <div className={`absolute left-6 top-9 h-20 w-12 rotate-12 rounded-xl ${light ? "bg-stone-200" : "bg-ink"}`} />
      <div className={`absolute right-6 top-9 h-20 w-12 -rotate-12 rounded-xl ${light ? "bg-stone-200" : "bg-ink"}`} />
      <div
        className={`absolute inset-x-8 top-6 h-[220px] rounded-t-[42px] ${light ? "bg-stone-100 text-ink" : "bg-ink text-bone"} shadow-xl`}
      >
        <div className={`mx-auto mt-11 grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br ${accent} p-[2px]`}>
          <div className={`grid h-full w-full place-items-center rounded-full ${light ? "bg-stone-100" : "bg-ink"}`}>
            <span className="font-display text-2xl uppercase leading-none text-bronze">TC<br />WAR</span>
          </div>
        </div>
        <p className="mt-3 text-center font-display text-2xl uppercase tracking-tight text-bronze">{label}</p>
        <p className="text-center text-[9px] font-bold uppercase tracking-[0.28em] opacity-60">Warrior Spirit</p>
      </div>
    </div>
  );
}

function SectionIntro({
  title,
  text,
  button
}: {
  title: string;
  text: string;
  button: string;
}) {
  return (
    <div className="min-w-0">
      <h2 className="font-display text-[34px] font-black uppercase leading-[0.95] tracking-tight">{title}</h2>
      <p className="mt-3 text-[13px] font-medium leading-5 text-ink/60">{text}</p>
      <a href="#" className="mt-5 inline-flex border border-ink/25 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] transition hover:bg-ink hover:text-bone">
        {button}
      </a>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-bone text-ink">
      <div className="bg-[#3d4534] px-4 py-2 text-center text-[10px] font-black uppercase tracking-[0.22em] text-bone">
        <span className="hidden sm:inline">Free U.S. shipping on orders over $120</span>
        <span className="mx-8">Join the warriors. Get 10% off your first order.</span>
      </div>

      <header className="sticky top-0 z-50 border-b border-ink/10 bg-bone/95 backdrop-blur">
        <div className="mx-auto flex h-[74px] max-w-[1480px] items-center justify-between px-5 md:px-10">
          <Logo />
          <nav className="hidden items-center gap-8 text-[11px] font-black uppercase tracking-[0.16em] lg:flex">
            {["Shop", "Collections", "Warrior Movement", "IP Figures", "About", "Journal"].map((item) => (
              <a key={item} href="#" className="transition hover:text-clay">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4 text-ink">
            <Search className="h-[18px] w-[18px]" />
            <User className="hidden h-[18px] w-[18px] sm:block" />
            <Heart className="hidden h-[18px] w-[18px] sm:block" />
            <div className="relative">
              <ShoppingBag className="h-[18px] w-[18px]" />
              <span className="absolute -right-2 -top-2 grid h-4 w-4 place-items-center rounded-full bg-ink text-[9px] font-bold text-bone">0</span>
            </div>
            <Menu className="h-6 w-6 lg:hidden" />
          </div>
        </div>
      </header>

      <section className="relative min-h-[645px] overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1800&q=85" alt="city sunrise" fill priority className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-bone via-bone/88 to-bone/25" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bone to-transparent" />
        </div>

        <div className="relative mx-auto grid max-w-[1480px] grid-cols-1 px-5 py-8 md:px-10 lg:grid-cols-[1fr_760px] lg:py-0">
          <div className="z-10 flex min-h-[560px] flex-col justify-center pb-10 pt-8">
            <p className="mb-5 text-[11px] font-black uppercase tracking-[0.36em] text-clay">TCWAR.COM</p>
            <h1 className="max-w-[690px] font-display text-[62px] font-black uppercase leading-[0.86] tracking-[-0.05em] sm:text-[88px] lg:text-[112px]">
              This is not clothing.
              <br />
              This is a warrior state.
            </h1>
            <p className="mt-6 max-w-[430px] text-[14px] font-semibold leading-6 text-ink/68">
              Strength in the body. Fire in the mind. United by purpose. Driven by adventure.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#best-sellers" className="bg-ink px-7 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-bone transition hover:bg-clay">
                Shop Now
              </a>
              <a href="#movement" className="border border-ink/30 bg-bone/40 px-7 py-4 text-[11px] font-black uppercase tracking-[0.18em] transition hover:border-ink">
                Explore Movement
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[620px] lg:block">
            <div className="absolute bottom-0 right-28 top-8 w-[430px] overflow-hidden">
              <Image src={heroImages[0]} alt="Terracotta Warriors apparel model" fill className="object-cover object-center saturate-[0.85]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />
            </div>
            <div className="absolute right-0 top-16 flex w-[122px] flex-col gap-3">
              {heroImages.slice(1).map((image, index) => (
                <div key={image} className="relative h-[126px] overflow-hidden border-2 border-bone bg-ink shadow-lg">
                  <Image src={image} alt={`Warrior campaign ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
              <div className="flex h-11 items-center justify-between bg-ink px-3 text-[11px] font-black text-bone">
                01 / 04 <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-[#f9f5eb]">
        <div className="mx-auto grid max-w-[1480px] grid-cols-1 divide-y divide-ink/10 px-5 md:grid-cols-5 md:divide-x md:divide-y-0 md:px-10">
          {[
            ["Built for Warriors", "Designed for those who live with purpose.", ShieldCheck],
            ["Premium Quality", "Built tough. Made to last.", BadgeCheck],
            ["Free U.S. Shipping", "On orders over $120.", Truck],
            ["Easy Returns", "30-day hassle-free returns.", PackageCheck],
            ["Secure Checkout", "Safe & encrypted payments.", LockKeyhole]
          ].map(([title, text, Icon]) => (
            <div key={String(title)} className="flex min-h-[78px] items-center gap-4 py-4 md:px-6">
              <Icon className="h-8 w-8 shrink-0 text-moss" />
              <div>
                <p className="text-[11px] font-black uppercase tracking-tight">{title as string}</p>
                <p className="mt-1 text-[10px] leading-4 text-ink/55">{text as string}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="movement" className="mx-auto grid max-w-[1480px] gap-7 px-5 py-9 md:px-10 lg:grid-cols-[210px_1fr]">
        <SectionIntro title="Warrior Movement" text="Real warriors. Real stories. Pushing limits worldwide." button="Watch All Stories" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {movementCards.map((card) => (
            <article key={card.title} className="group relative min-h-[250px] overflow-hidden bg-ink">
              <Image src={card.image} alt={card.title} fill className="object-cover opacity-80 transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/15 to-transparent" />
              <div className="absolute bottom-4 left-4 right-10 text-bone">
                <h3 className="font-display text-[24px] font-black uppercase leading-[0.95]">{card.title}</h3>
                <p className="mt-1 text-[9px] font-black uppercase tracking-[0.18em] text-bone/70">{card.label}</p>
              </div>
              <ArrowRight className="absolute bottom-4 right-4 h-6 w-6 rounded-full border border-bone/70 p-1 text-bone" />
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-[1480px] gap-7 px-5 pb-9 md:px-10 lg:grid-cols-[210px_1fr]">
        <SectionIntro title="Warrior Archetypes" text="Every warrior has a spirit. Find yours." button="Explore IP Figures" />
        <div className="grid gap-4 md:grid-cols-4">
          {archetypes.map((item, index) => (
            <article key={item.name} className="border border-ink/10 bg-white/35 p-4">
              <div className="mb-4 grid min-h-[238px] place-items-center overflow-hidden bg-gradient-to-br from-stone-200 to-bone">
                <TeeMockup light={index === 0} accent={item.accent} label={item.name.split(" ")[0]} />
              </div>
              <h3 className="font-display text-[24px] font-black uppercase leading-none">{item.name}</h3>
              <p className="mt-1 text-[11px] font-black text-clay">{item.trait}</p>
              <p className="mt-1 text-[11px] text-ink/55">{item.tone}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 pb-9 md:px-10">
        <div className="relative overflow-hidden bg-[#333a2d] px-8 py-9 text-bone shadow-soft md:px-12">
          <Image src={heroImages[0]} alt="Discover warrior spirit" fill className="object-cover object-right opacity-20" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_2.1fr] lg:items-center">
            <div>
              <h2 className="font-display text-[42px] font-black uppercase leading-[0.92] tracking-tight">Discover Your Warrior Spirit</h2>
              <p className="mt-3 text-[13px] leading-5 text-bone/70">Take the test. Reveal your warrior type. Unlock your mindset.</p>
              <a href="#" className="mt-6 inline-flex bg-bronze px-7 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-ink">
                Take The Quiz
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-4">
              {["Answer 8 quick questions", "Reveal your warrior type", "Get gear that matches you", "Join the global movement"].map((step, index) => (
                <div key={step} className="border-l border-bone/20 px-5 py-2">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-full border border-bronze/60 text-sm font-black text-bronze">
                    {index + 1}
                  </div>
                  <p className="text-[10px] font-black uppercase leading-5 tracking-[0.15em]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="best-sellers" className="mx-auto max-w-[1480px] px-5 pb-10 md:px-10">
        <div className="mb-5 flex items-end justify-between">
          <h2 className="font-display text-[36px] font-black uppercase leading-none">Best Sellers</h2>
          <a href="#" className="text-[10px] font-black uppercase tracking-[0.18em]">
            View All Products <ArrowRight className="ml-1 inline h-4 w-4" />
          </a>
        </div>
        <div className="relative">
          <button className="absolute -left-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center border border-ink/15 bg-bone">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {bestSellers.map((product, index) => (
              <article key={product.name} className="group">
                <div className="mb-3 grid min-h-[265px] place-items-center overflow-hidden bg-white/60 p-3">
                  <TeeMockup light={product.light} label={index % 2 ? "Dynasty" : "Warriors"} />
                </div>
                <h3 className="font-display text-[18px] font-black uppercase leading-none">{product.name}</h3>
                <p className="mt-2 text-[11px] font-black">{product.price}</p>
                <div className="mt-2 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-3 w-3 fill-ink text-ink" />
                  ))}
                  <span className="ml-1 text-[11px] text-ink/55">({product.reviews})</span>
                </div>
              </article>
            ))}
          </div>
          <button className="absolute -right-3 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center border border-ink/15 bg-bone">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-[1480px] px-5 pb-9 md:px-10">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-display text-[30px] font-black uppercase leading-none">Real Warriors. Real Life.</h2>
          <p className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em]">
            <Users className="h-4 w-4" /> Join the community #TerracottaWarriors
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
          {communityImages.map((image, index) => (
            <div key={image} className="relative aspect-square overflow-hidden bg-ink">
              <Image src={image} alt={`TC War community ${index + 1}`} fill className="object-cover opacity-90 transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#3d4534] px-5 py-8 text-bone md:px-10">
        <div className="mx-auto grid max-w-[1480px] gap-6 md:grid-cols-[1fr_1.3fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-[30px] font-black uppercase leading-none">Join the Warriors</h2>
            <p className="mt-2 text-[12px] text-bone/65">Get early access to new drops, exclusive offers, and warrior content.</p>
          </div>
          <form className="flex border border-bone/25 bg-bone">
            <input className="min-w-0 flex-1 bg-transparent px-5 py-4 text-sm text-ink outline-none" placeholder="Enter your email" type="email" />
            <button className="bg-ink px-7 text-[11px] font-black uppercase tracking-[0.18em] text-bone">Join Now</button>
          </form>
          <div className="grid grid-cols-4 gap-3 text-center text-[9px] font-black uppercase leading-4 text-bone/65">
            <span>Exclusive Drops</span>
            <span>Early Access</span>
            <span>Mindset Blog</span>
            <span>Inside Warriors</span>
          </div>
        </div>
      </section>

      <footer className="px-5 py-10 md:px-10">
        <div className="mx-auto grid max-w-[1480px] gap-8 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-[11px] leading-5 text-ink/55">
              TC War is a U.S.-focused independent storefront for warrior-inspired apparel, stories, and collectible IP.
            </p>
          </div>
          {[
            ["Shop", "All Products", "T-Shirts", "Hoodies", "Accessories", "IP Figures"],
            ["Collections", "Terrain Series", "Luxury Series", "Savage Series", "New Arrivals"],
            ["Company", "About Us", "Our Story", "Journal", "Careers"],
            ["Support", "FAQ", "Shipping & Returns", "Track Order", "Contact Us"]
          ].map(([title, ...links]) => (
            <div key={title}>
              <h3 className="mb-4 text-[11px] font-black uppercase tracking-[0.18em]">{title}</h3>
              <div className="grid gap-2 text-[11px] text-ink/60">
                {links.map((link) => (
                  <a key={link} href="#">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 flex max-w-[1480px] flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6 text-[10px] uppercase tracking-[0.16em] text-ink/45">
          <span>© 2026 TC War. All rights reserved.</span>
          <span>United States only · tcwar.com</span>
        </div>
      </footer>
    </main>
  );
}
