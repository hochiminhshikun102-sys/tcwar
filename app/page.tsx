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

const heroSlides = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=85",
  "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=600&q=80"
];

const movementCards = [
  {
    title: "Extreme Sports",
    label: "Push limits",
    image: "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Survival & Outdoors",
    label: "Adapt. Overcome.",
    image: "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Fishing & Adventure",
    label: "Chase the unknown",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Fitness & Training",
    label: "Strength within",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Motor & Speed",
    label: "Live the ride",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=600&q=80"
  }
];

const archetypes = [
  {
    name: "Fire Warrior",
    trait: "Unstoppable passion",
    tone: "Born to lead",
    image: "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Shadow Warrior",
    trait: "Silent. Focused.",
    tone: "Always one step ahead",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Iron Warrior",
    trait: "Unbreakable discipline",
    tone: "Strength is control",
    image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=500&q=80"
  },
  {
    name: "Wind Warrior",
    trait: "Free. Agile.",
    tone: "Move like the wind",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=500&q=80"
  }
];

const bestSellers = [
  { name: "Warrior Soul Tee", price: "$59.00 USD", stars: 128 },
  { name: "Dynasty Tee", price: "$69.00 USD", stars: 87 },
  { name: "Guardian Tee", price: "$69.00 USD", stars: 96 },
  { name: "Ghost Tiger Tee", price: "$59.00 USD", stars: 73 },
  { name: "Shadow Trooper Tee", price: "$69.00 USD", stars: 112 },
  { name: "Calligraphy Tee", price: "$59.00 USD", stars: 64 }
];

const gallery = [
  "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=400&q=80"
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-full border border-ink/25 bg-bone text-xl font-black text-moss">
        秦
      </div>
      <div className="leading-none">
        <p className="font-display text-2xl uppercase tracking-tight text-ink">Terracotta</p>
        <p className="-mt-1 font-display text-2xl uppercase tracking-tight text-ink">Warriors</p>
        <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-ink/60">Global Warrior Spirit</p>
      </div>
    </div>
  );
}

function ProductMockup({ dark = true }: { dark?: boolean }) {
  return (
    <div
      className={`relative mx-auto aspect-[4/5] w-full max-w-[210px] overflow-hidden rounded-t-[44%] ${
        dark ? "bg-ink" : "bg-stone-100"
      } shadow-soft`}
    >
      <div className="absolute left-1/2 top-8 h-20 w-20 -translate-x-1/2 rounded-full border border-bronze/60" />
      <div className="absolute left-1/2 top-16 h-32 w-32 -translate-x-1/2 rounded-full border border-bronze/40" />
      <div className="absolute inset-x-8 top-24 text-center font-display text-2xl uppercase leading-none text-bronze">
        TC
        <br />
        WAR
      </div>
      <div className={`absolute inset-x-0 bottom-0 h-2/3 ${dark ? "bg-black/20" : "bg-stone-300/40"}`} />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-bone text-ink">
      <div className="bg-moss px-6 py-2 text-center text-[11px] font-bold uppercase tracking-[0.24em] text-bone">
        Free U.S. shipping on orders over $120 <span className="mx-5 hidden sm:inline">Join the warriors, get 10% off your first order.</span>
      </div>

      <header className="sticky top-0 z-40 border-b border-ink/10 bg-bone/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 text-xs font-black uppercase tracking-[0.18em] lg:flex">
            {["Shop", "Collections", "Warrior Movement", "IP Figures", "About", "Journal"].map((item) => (
              <a key={item} href="#" className="transition hover:text-clay">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Search className="h-5 w-5" />
            <User className="hidden h-5 w-5 sm:block" />
            <Heart className="hidden h-5 w-5 sm:block" />
            <ShoppingBag className="h-5 w-5" />
            <Menu className="h-6 w-6 lg:hidden" />
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={heroSlides[0]} alt="TC War outdoor hero" fill priority className="object-cover opacity-45" />
          <div className="absolute inset-0 bg-gradient-to-r from-bone via-bone/72 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-bone to-transparent" />
        </div>

        <div className="relative mx-auto grid min-h-[620px] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.34em] text-clay">TCWAR.COM</p>
            <h1 className="font-display text-6xl font-black uppercase leading-[0.88] tracking-tight text-ink sm:text-7xl lg:text-8xl">
              This is not clothing.
              <br />
              This is a warrior state.
            </h1>
            <p className="mt-6 max-w-md text-sm font-semibold leading-7 text-ink/70">
              Strength in the body. Fire in the mind. Apparel inspired by terracotta guardians, built for movement, discipline, and adventure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#best-sellers" className="bg-ink px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-bone transition hover:bg-clay">
                Shop Now
              </a>
              <a href="#movement" className="border border-ink/30 px-7 py-4 text-xs font-black uppercase tracking-[0.18em] transition hover:border-ink">
                Explore Movement
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[520px] lg:block">
            <div className="absolute right-24 top-4 h-[500px] w-[360px] overflow-hidden rounded-[34px] bg-ink shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=800&q=85"
                alt="Warrior apparel model"
                fill
                className="object-cover opacity-85"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute bottom-10 left-10 right-10 text-bone">
                <p className="font-display text-4xl uppercase leading-none">Terracotta Warriors</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-bone/75">Global warrior spirit</p>
              </div>
            </div>
            <div className="absolute right-0 top-12 flex w-24 flex-col gap-3">
              {heroSlides.map((image, index) => (
                <div key={image} className="relative h-28 overflow-hidden border-2 border-bone bg-ink shadow-lg">
                  <Image src={image} alt={`Hero slide ${index + 1}`} fill className="object-cover" />
                </div>
              ))}
              <div className="flex items-center justify-between bg-ink px-3 py-2 text-xs font-bold text-bone">
                01 / 04 <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-ink/10 bg-bone">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-6 py-5 md:grid-cols-5">
          {[
            ["Built for Warriors", "Designed for those who live with purpose.", ShieldCheck],
            ["Premium Quality", "Built tough. Made to last.", BadgeCheck],
            ["Free U.S. Shipping", "On orders over $120.", Truck],
            ["Easy Returns", "30-day hassle-free returns.", PackageCheck],
            ["Secure Checkout", "Safe & encrypted payments.", LockKeyhole]
          ].map(([title, text, Icon]) => (
            <div key={String(title)} className="flex items-center gap-4 px-2 py-3">
              <Icon className="h-8 w-8 text-moss" />
              <div>
                <p className="text-xs font-black uppercase">{title as string}</p>
                <p className="text-[11px] leading-4 text-ink/55">{text as string}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="movement" className="mx-auto grid max-w-7xl gap-7 px-6 py-12 lg:grid-cols-[190px_1fr]">
        <div>
          <h2 className="font-display text-4xl uppercase leading-none">Warrior Movement</h2>
          <p className="mt-4 text-sm leading-6 text-ink/60">Real warriors. Real stories. Pushing limits worldwide.</p>
          <a href="#" className="mt-5 inline-flex border border-ink/25 px-5 py-3 text-[11px] font-black uppercase tracking-[0.16em]">
            Watch All Stories
          </a>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {movementCards.map((card) => (
            <article key={card.title} className="group relative min-h-[250px] overflow-hidden bg-ink">
              <Image src={card.image} alt={card.title} fill className="object-cover opacity-75 transition duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-bone">
                <h3 className="font-display text-2xl uppercase leading-none">{card.title}</h3>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-bone/70">{card.label}</p>
              </div>
              <ArrowRight className="absolute bottom-4 right-4 h-6 w-6 rounded-full border border-bone/60 p-1 text-bone" />
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-7 px-6 py-6 lg:grid-cols-[190px_1fr]">
        <div>
          <h2 className="font-display text-4xl uppercase leading-none">Warrior Archetypes</h2>
          <p className="mt-4 text-sm leading-6 text-ink/60">Every warrior has a spirit. Find yours.</p>
          <a href="#" className="mt-5 inline-flex border border-ink/25 px-5 py-3 text-[11px] font-black uppercase tracking-[0.16em]">
            Explore IP Figures
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-4">
          {archetypes.map((item, index) => (
            <article key={item.name} className="border border-ink/10 bg-white/35 p-4">
              <div className="relative mb-4 grid min-h-[210px] place-items-center overflow-hidden bg-gradient-to-br from-stone-200 to-bone">
                <Image src={item.image} alt={item.name} fill className="object-cover opacity-35" />
                <ProductMockup dark={index !== 0} />
              </div>
              <h3 className="font-display text-2xl uppercase">{item.name}</h3>
              <p className="text-xs font-bold text-clay">{item.trait}</p>
              <p className="mt-1 text-xs text-ink/55">{item.tone}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="relative overflow-hidden bg-moss p-8 text-bone shadow-soft md:p-12">
          <Image
            src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=900&q=80"
            alt="Discover warrior spirit"
            fill
            className="object-cover opacity-20"
          />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_2fr] lg:items-center">
            <div>
              <h2 className="font-display text-5xl uppercase leading-none">Discover Your Warrior Spirit</h2>
              <p className="mt-4 text-sm leading-6 text-bone/70">Take the test. Reveal your warrior type. Unlock your mindset.</p>
              <a href="#" className="mt-6 inline-flex bg-bronze px-7 py-4 text-xs font-black uppercase tracking-[0.18em] text-ink">
                Take The Quiz
              </a>
            </div>
            <div className="grid gap-4 sm:grid-cols-4">
              {["Answer 8 quick questions", "Reveal your warrior type", "Get gear that matches you", "Join the global movement"].map((step, index) => (
                <div key={step} className="border-l border-bone/20 px-5 py-3">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-full border border-bronze/60 text-bronze">
                    {index + 1}
                  </div>
                  <p className="text-xs font-bold uppercase leading-5 tracking-[0.16em]">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="best-sellers" className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-7 flex items-end justify-between">
          <h2 className="font-display text-4xl uppercase">Best Sellers</h2>
          <a href="#" className="text-xs font-black uppercase tracking-[0.18em]">
            View All Products <ArrowRight className="ml-2 inline h-4 w-4" />
          </a>
        </div>
        <div className="relative">
          <button className="absolute -left-4 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center border border-ink/15 bg-bone">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {bestSellers.map((product, index) => (
              <article key={product.name} className="group">
                <div className="mb-4 grid min-h-[250px] place-items-center overflow-hidden bg-white/50 p-5">
                  <ProductMockup dark={index % 3 !== 1} />
                </div>
                <h3 className="font-display text-xl uppercase leading-none">{product.name}</h3>
                <p className="mt-2 text-xs font-black">{product.price}</p>
                <div className="mt-2 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-3.5 w-3.5 fill-ink text-ink" />
                  ))}
                  <span className="ml-1 text-xs text-ink/55">({product.stars})</span>
                </div>
              </article>
            ))}
          </div>
          <button className="absolute -right-4 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center border border-ink/15 bg-bone">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-3xl uppercase">Real Warriors. Real Life.</h2>
          <p className="text-xs font-black uppercase tracking-[0.2em]">Join the community #TerracottaWarriors</p>
        </div>
        <div className="grid grid-cols-4 gap-2 md:grid-cols-8">
          {gallery.map((image, index) => (
            <div key={image} className="relative aspect-square overflow-hidden bg-ink">
              <Image src={image} alt={`TC War community ${index + 1}`} fill className="object-cover opacity-90 transition duration-500 hover:scale-105" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-moss px-6 py-8 text-bone">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[1fr_1.4fr_1fr] md:items-center">
          <div>
            <h2 className="font-display text-3xl uppercase">Join the Warriors</h2>
            <p className="mt-1 text-sm text-bone/65">Get early access to new drops, exclusive offers, and warrior content.</p>
          </div>
          <form className="flex border border-bone/25 bg-bone">
            <input className="min-w-0 flex-1 bg-transparent px-5 py-4 text-sm text-ink outline-none" placeholder="Enter your email" type="email" />
            <button className="bg-ink px-7 text-xs font-black uppercase tracking-[0.18em] text-bone">Join Now</button>
          </form>
          <div className="grid grid-cols-4 gap-3 text-center text-[10px] font-bold uppercase text-bone/65">
            <span>Exclusive Drops</span>
            <span>Early Access</span>
            <span>Mindset Blog</span>
            <span>Inside Warriors</span>
          </div>
        </div>
      </section>

      <footer className="bg-bone px-6 py-10">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-xs leading-5 text-ink/55">
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
              <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em]">{title}</h3>
              <div className="grid gap-2 text-xs text-ink/60">
                {links.map((link) => (
                  <a key={link} href="#">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl flex-wrap items-center justify-between gap-4 border-t border-ink/10 pt-6 text-[11px] uppercase tracking-[0.16em] text-ink/45">
          <span>© 2026 TC War. All rights reserved.</span>
          <span>United States only · Domain: tcwar.com</span>
        </div>
      </footer>
    </main>
  );
}
