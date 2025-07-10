import grainImage from '@/assets/images/grain.jpg';
import { HeroOrbit } from '@/components/HeroOrbit';

const HeroSectionBgOrbits = () => {
  return (
    <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,#240C36_10%,#240C36_70%,transparent)]'>
      <div className='absolute inset-0 -z-30 opacity-10' style={{
        backgroundImage: `url(${grainImage.src})`,
        backgroundColor: '#240C36',
        backgroundBlendMode: 'multiply'
      }}>
      </div>
      <div className='size-[620px] hero-ring'></div>
      <div className='size-[820px] hero-ring'></div>
      <div className='size-[1020px] hero-ring'></div>
      <div className='size-[1220px] hero-ring'></div>
      <div className='size-[1420px] hero-ring'></div>
      <div className='size-[1620px] hero-ring'></div>
      <div className='size-[1820px] hero-ring'></div>
      <div className='size-[2020px] hero-ring'></div>

      {/* Orbits */}

      <HeroOrbit size={410} rotation={-145} shouldOrbit={true} orbitDuration='30s'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-5 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={430} rotation={-14} shouldOrbit={true} orbitDuration="32s">
        <svg width="24" className='size-8 text-emerald-300/20' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={500} rotation={-73} shouldOrbit={true} orbitDuration="34s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-5.5 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={680} rotation={115} shouldOrbit={true} orbitDuration="36s">
        <svg width="24" className='size-6 text-emerald-300/20' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={540} rotation={-110} shouldOrbit={true} orbitDuration="38s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-8 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={420} rotation={140} shouldOrbit={true} orbitDuration="40s">
        <svg width="24" className='size-6 text-emerald-300/20' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20} shouldOrbit={true} orbitDuration="42s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-12 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79} shouldOrbit={true} orbitDuration="44s">
        <svg width="24" className='size-5 text-emerald-300/20' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={560} rotation={140} shouldOrbit={true} orbitDuration="46s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-5 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98} shouldOrbit={true} orbitDuration="48s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-8 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178} shouldOrbit={true} orbitDuration="50s">
        <svg width="24" className='size-10 text-emerald-300/20' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={610} rotation={-25} shouldOrbit={true} orbitDuration="52s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-6.5 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144} shouldOrbit={true} orbitDuration="54s">
        <svg width="24" className='size-14 text-emerald-300/20' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={680} rotation={-95} shouldOrbit={true} orbitDuration="56s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-7 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={660} rotation={-50} shouldOrbit={true} orbitDuration="58s">
        <svg width="24" className='size-6 text-emerald-300/20' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={700} rotation={180} shouldOrbit={true} orbitDuration="60s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-8 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={960} rotation={-30} shouldOrbit={true} orbitDuration="62s">
        <svg width="24" className='size-6 text-emerald-300/20' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={790} rotation={-35} shouldOrbit={true} orbitDuration="64s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-8 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={840} rotation={140} shouldOrbit={true} orbitDuration="66s">
        <svg width="24" className='size-4 text-emerald-300/20' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={800} rotation={-72} shouldOrbit={true} orbitDuration="68s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-28 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={820} rotation={3} shouldOrbit={true} orbitDuration="70s">
        <svg width="24" className='size-6 text-emerald-300/20' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={810} rotation={90} shouldOrbit={true} orbitDuration="72s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-6 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={940} rotation={130} shouldOrbit={true} orbitDuration="74s">
        <svg width="24" className='size-5 text-emerald-300/20' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={810} rotation={160} shouldOrbit={true} orbitDuration="76s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-6 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={830} rotation={-82} shouldOrbit={true} orbitDuration="78s">
        <svg width="24" className='size-5 text-emerald-300/20' height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 12L10.1667 10.1667L12 1L13.8333 10.1667L23 12L13.8333 13.8333L12 23L10.1667 13.8333L1 12Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={830} rotation={-20} shouldOrbit={true} orbitDuration="80s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-5 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={720} rotation={80} shouldOrbit={true} orbitDuration="82s">
        <div className='size-3 bg-emerald-300/20 rounded-full' />
      </HeroOrbit>
      <HeroOrbit size={940} rotation={-55} shouldOrbit={true} orbitDuration="84s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-5 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41} shouldOrbit={true} orbitDuration="86s">
        <div className='size-2 bg-emerald-300/20 rounded-full' />
      </HeroOrbit>
      <HeroOrbit size={950} rotation={173} shouldOrbit={true} orbitDuration="88s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-5.5 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5} shouldOrbit={true} orbitDuration="90s">
        <div className='size-2 bg-emerald-300/20 rounded-full' />
      </HeroOrbit>
      <HeroOrbit size={960} rotation={100} shouldOrbit={true} orbitDuration="92s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-24 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={550} rotation={60} shouldOrbit={true} orbitDuration="94s">
        <div className='size-2 bg-emerald-300/20 rounded-full' />
      </HeroOrbit>
      <HeroOrbit size={960} rotation={110} shouldOrbit={true} orbitDuration="96s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-6 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={800} rotation={-55} shouldOrbit={true} orbitDuration="98s">
        <div className='size-2 bg-emerald-300/20 rounded-full' />
      </HeroOrbit>
      <HeroOrbit size={980} rotation={-8} shouldOrbit={true} orbitDuration="100s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-11 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={830} rotation={120} shouldOrbit={true} orbitDuration="102s">
        <div className='size-3 bg-emerald-300/20 rounded-full' />
      </HeroOrbit>
      <HeroOrbit size={1030} rotation={150} shouldOrbit={true} orbitDuration="104s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-10 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={990} rotation={-45} shouldOrbit={true} orbitDuration="106s">
        <div className='size-2 bg-emerald-300/20 rounded-full' />
      </HeroOrbit>
      <HeroOrbit size={1030} rotation={-75} shouldOrbit={true} orbitDuration="108s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className='size-9 text-emerald-300' xmlns="http://www.w3.org/2000/svg">
          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" fill="currentColor" />
        </svg>
      </HeroOrbit>
      {/* --- Additional Realistic Orbits and Stars --- */}
      {/* --- Improved Realistic Orbits, Evenly Spread --- */}
      <HeroOrbit size={1110} rotation={0} shouldOrbit={true} orbitDuration="112s">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="size-6 text-cyan-200/40 blur-[1px]" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="9" r="6" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1120} rotation={45} shouldOrbit={true} orbitDuration="116s">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-4 text-yellow-100/70 blur-sm animate-pulse" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="3" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1135} rotation={90} shouldOrbit={true} orbitDuration="120s">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="size-7 text-white/60 blur-[2px] animate-spin-slow" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="10" cy="10" rx="6" ry="2" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1150} rotation={135} shouldOrbit={true} orbitDuration="124s">
        <div className="size-3 bg-blue-200/30 rounded-full blur-[1.5px] animate-twinkle" />
      </HeroOrbit>
      <HeroOrbit size={1165} rotation={180} shouldOrbit={true} orbitDuration="128s">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="size-8 text-fuchsia-300/30 blur-[2px] animate-spin" xmlns="http://www.w3.org/2000/svg">
          <polygon points="11,2 13,8 19,8 14,12 16,18 11,14 6,18 8,12 3,8 9,8" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1180} rotation={225} shouldOrbit={true} orbitDuration="132s">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-5 text-white/80 animate-twinkle" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1195} rotation={270} shouldOrbit={true} orbitDuration="136s">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="size-4 text-emerald-200/50 blur-[1px] animate-twinkle" xmlns="http://www.w3.org/2000/svg">
          <circle cx="9" cy="9" r="1.5" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1210} rotation={315} shouldOrbit={true} orbitDuration="140s">
        <div className="flex items-center gap-2">
          <div className="size-2 bg-white/40 rounded-full blur-[1px] animate-twinkle" />
          <div className="size-1.5 bg-yellow-200/30 rounded-full blur-[1px] animate-twinkle ml-8" />
        </div>
      </HeroOrbit>
      {/* Additional orbits with multiple stars on a single orbit, spaced apart */}
      <HeroOrbit size={1240} rotation={22} shouldOrbit={true} orbitDuration="145s">
        <div className="relative w-full h-full">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 size-2 bg-white/60 rounded-full blur-[1px] animate-twinkle" />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 size-2 bg-blue-200/50 rounded-full blur-[1px] animate-twinkle" />
        </div>
      </HeroOrbit>
      <HeroOrbit size={1270} rotation={200} shouldOrbit={true} orbitDuration="150s">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-3 text-blue-100/30 blur-[2px] animate-spin-slow" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="1" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1300} rotation={300} shouldOrbit={true} orbitDuration="155s">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="size-7 text-white/40 blur-[1.5px] animate-twinkle" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="10" cy="10" rx="2" ry="6" fill="currentColor" />
        </svg>
      </HeroOrbit>
      {/* --- END Improved Orbits --- */}

      {/* --- MODERN FULL-SCREEN ORBITS WITH DISTINCT PLANETS AND STARS --- */}
      <HeroOrbit size={900} rotation={5} shouldOrbit={true} orbitDuration="70s" reverse>
        {/* Realistic Saturn-like planet with centered body and ring */}
        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" className="size-20 animate-spin-slow hover:scale-110 hover:drop-shadow-[0_0_32px_#fff] transition-all duration-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg">
          {/* Planet shadow */}
          <ellipse cx="44" cy="60" rx="22" ry="8" fill="#000" opacity="0.18" />
          {/* Ring, behind planet */}
          <ellipse cx="44" cy="44" rx="34" ry="10" fill="url(#ringSaturn)" opacity="0.5" transform="rotate(-15 44 44)" />
          {/* Main planet body */}
          <circle cx="44" cy="44" r="24" fill="url(#planetSaturn)" stroke="#f6d365" strokeWidth="2" />
          {/* Planet highlight */}
          <ellipse cx="38" cy="38" rx="7" ry="3" fill="#fff" opacity="0.18" />
          {/* Ring, in front of planet (for overlap effect) */}
          <ellipse cx="44" cy="44" rx="34" ry="10" fill="url(#ringSaturnFront)" opacity="0.7" transform="rotate(-15 44 44)" style={{ clipPath: 'ellipse(34px 10px at 44px 44px)' }} />
          <defs>
            <radialGradient id="planetSaturn" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#ffe5b6" />
              <stop offset="100%" stopColor="#f6d365" />
            </radialGradient>
            <linearGradient id="ringSaturn" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#fff8" />
              <stop offset="100%" stopColor="#fda08544" />
            </linearGradient>
            <linearGradient id="ringSaturnFront" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#fff8" />
              <stop offset="100%" stopColor="#fda08599" />
            </linearGradient>
          </defs>
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1200} rotation={120} shouldOrbit={true} orbitDuration="120s">
        {/* Realistic blue planet with moon in orbit */}
        <svg width="90" height="90" viewBox="0 0 90 90" fill="none" className="size-20 animate-twinkle hover:scale-125 transition-transform duration-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg">
          {/* Moon orbit */}
          <ellipse cx="45" cy="45" rx="34" ry="10" fill="none" stroke="#b6e0fe" strokeWidth="1.5" opacity="0.35" />
          {/* Moon */}
          <circle cx="73" cy="38" r="6" fill="#fff" stroke="#a1c4fd" strokeWidth="1.5" opacity="0.9" />
          {/* Planet shadow */}
          <ellipse cx="45" cy="66" rx="18" ry="6" fill="#000" opacity="0.16" />
          {/* Main planet body */}
          <circle cx="45" cy="45" r="22" fill="url(#planetBlue)" stroke="#a1c4fd" strokeWidth="2" />
          {/* Planet highlight */}
          <ellipse cx="39" cy="39" rx="6" ry="2" fill="#fff" opacity="0.18" />
          <defs>
            <radialGradient id="planetBlue" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#e0f7fa" />
              <stop offset="100%" stopColor="#2193b0" />
            </radialGradient>
          </defs>
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1500} rotation={210} shouldOrbit={true} orbitDuration="110s" reverse>
        {/* Realistic purple planet with stripes and glow */}
        <svg width="110" height="110" viewBox="0 0 110 110" fill="none" className="size-24 hover:scale-110 hover:drop-shadow-[0_0_32px_#c084fc] transition-all duration-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg">
          {/* Glow */}
          <ellipse cx="55" cy="90" rx="26" ry="8" fill="#c084fc" opacity="0.13" />
          {/* Main planet body */}
          <circle cx="55" cy="55" r="32" fill="url(#planetPurple)" />
          {/* Stripes */}
          <rect x="30" y="60" width="50" height="6" rx="3" fill="#fff3" />
          <rect x="36" y="75" width="38" height="4" rx="2" fill="#fff2" />
          {/* Highlight */}
          <ellipse cx="48" cy="46" rx="12" ry="4" fill="#fff" opacity="0.10" />
          <defs>
            <radialGradient id="planetPurple" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#fbc2eb" />
              <stop offset="100%" stopColor="#a18cd1" />
            </radialGradient>
          </defs>
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1700} rotation={300} shouldOrbit={true} orbitDuration="145s">
        {/* Emerald planet with glow and shadow */}
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="size-20 animate-pulse hover:scale-125 hover:drop-shadow-[0_0_28px_#34d399] transition-all duration-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg">
          {/* Shadow */}
          <ellipse cx="40" cy="66" rx="18" ry="6" fill="#059669" opacity="0.13" />
          {/* Main planet body */}
          <circle cx="40" cy="40" r="28" fill="url(#planetEmerald)" />
          {/* Highlight */}
          <ellipse cx="32" cy="32" rx="8" ry="3" fill="#fff" opacity="0.14" />
          <defs>
            <radialGradient id="planetEmerald" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#6ee7b7" />
              <stop offset="100%" stopColor="#059669" />
            </radialGradient>
          </defs>
        </svg>
      </HeroOrbit>
      {/* Well-spaced, large, and small stars with distinct orbits */}
      <HeroOrbit size={1050} rotation={45} shouldOrbit={true} orbitDuration="66s" shouldSpin={true} spinDuration="5s">
        {/* Classic star, spinning */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="size-8 text-white/90 blur-[1px] hover:scale-150 transition-transform duration-300 cursor-pointer">
          <polygon points="16,0 18,10 32,16 18,22 16,32 14,22 0,16 14,10" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1150} rotation={100} shouldOrbit={true} orbitDuration="80s" shouldSpin={true} spinDuration="2.5s">
        {/* Fast-spinning blue star */}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="size-5 text-blue-300 blur-[0.5px] drop-shadow-[0_0_10px_#38bdf8] hover:scale-125 transition-transform duration-300 cursor-pointer">
          <circle cx="10" cy="10" r="8" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1220} rotation={220} shouldOrbit={true} orbitDuration="120s" shouldSpin={true} spinDuration="12s">
        {/* Slow-spinning cross star */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-6 text-yellow-100 blur-[0.5px] hover:scale-110 transition-transform duration-300 cursor-pointer">
          <g>
            <rect x="10" y="2" width="4" height="20" rx="2" fill="currentColor" />
            <rect x="2" y="10" width="20" height="4" rx="2" fill="currentColor" />
          </g>
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1250} rotation={170} shouldOrbit={true} orbitDuration="85s" reverse shouldSpin={true} spinDuration="7s">
        {/* Emerald star, reverse spin */}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="size-4 text-emerald-200/80 blur-[1px] hover:scale-125 transition-transform duration-300 cursor-pointer">
          <circle cx="9" cy="9" r="8" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1290} rotation={260} shouldOrbit={true} orbitDuration="98s" shouldSpin={true} spinDuration="3.5s">
        {/* Pink twinkle star */}
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="size-5 text-pink-300 blur-[1.5px] drop-shadow-[0_0_8px_#f472b6] hover:scale-125 transition-transform duration-300 cursor-pointer">
          <polygon points="11,1 13,8 21,11 13,14 11,21 9,14 1,11 9,8" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1350} rotation={270} shouldOrbit={true} orbitDuration="100s" shouldSpin={true} spinDuration="6s">
        {/* White cross star, slow spin */}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="size-3 text-white/70 blur-[0.5px] hover:scale-150 transition-transform duration-300 cursor-pointer">
          <g>
            <rect x="6" y="0" width="2" height="14" rx="1" fill="currentColor" />
            <rect x="0" y="6" width="14" height="2" rx="1" fill="currentColor" />
          </g>
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1450} rotation={320} shouldOrbit={true} orbitDuration="110s" shouldSpin={true} spinDuration="4s">
        {/* Fuchsia star, medium spin */}
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="size-4 text-fuchsia-400 blur-[1px] drop-shadow-[0_0_12px_#e879f9] hover:scale-125 transition-transform duration-300 cursor-pointer">
          <circle cx="9" cy="9" r="8" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1520} rotation={50} shouldOrbit={true} orbitDuration="130s" shouldSpin={true} spinDuration="10s">
        {/* Pale yellow star, slow spin */}
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="size-6 text-yellow-200 blur-[2px] hover:scale-150 transition-transform duration-300 cursor-pointer">
          <polygon points="12,2 14,10 22,12 14,14 12,22 10,14 2,12 10,10" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1600} rotation={350} shouldOrbit={true} orbitDuration="155s" reverse shouldSpin={true} spinDuration="8s">
        {/* Large fuchsia star, reverse slow spin */}
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="size-6 text-fuchsia-200/80 blur-[2px] hover:scale-150 transition-transform duration-300 cursor-pointer">
          <circle cx="11" cy="11" r="10" fill="currentColor" />
        </svg>
      </HeroOrbit>
      {/* END: More orbits and spinning stars */}

      {/* --- EVEN MORE ORBITS TO FILL BLANK AREAS --- */}
      {/* Far left, left-top, left-bottom quadrants with spinning stars */}
      <HeroOrbit size={900} rotation={200} shouldOrbit={true} orbitDuration="65s" shouldSpin={true} spinDuration="4.2s">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-3 text-sky-200 blur-[1px] drop-shadow-[0_0_8px_#bae6fd] hover:scale-110 transition-transform duration-300 cursor-pointer">
          <circle cx="8" cy="8" r="7" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={950} rotation={160} shouldOrbit={true} orbitDuration="68s" shouldSpin={true} spinDuration="3.8s">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="size-4 text-fuchsia-300 blur-[1px] hover:scale-125 transition-transform duration-300 cursor-pointer">
          <polygon points="9,0 11,7 18,9 11,11 9,18 7,11 0,9 7,7" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1000} rotation={250} shouldOrbit={true} orbitDuration="72s" shouldSpin={true} spinDuration="5.2s">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-3 text-yellow-100 blur-[1px] hover:scale-110 transition-transform duration-300 cursor-pointer">
          <circle cx="8" cy="8" r="7" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1060} rotation={140} shouldOrbit={true} orbitDuration="74s" shouldSpin={true} spinDuration="6s">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="size-5 text-emerald-200 blur-[1px] hover:scale-110 transition-transform duration-300 cursor-pointer">
          <polygon points="10,0 12,7 20,10 12,13 10,20 8,13 0,10 8,7" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1120} rotation={220} shouldOrbit={true} orbitDuration="79s" shouldSpin={true} spinDuration="7s">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="size-4 text-blue-300 blur-[1px] hover:scale-110 transition-transform duration-300 cursor-pointer">
          <circle cx="9" cy="9" r="8" fill="currentColor" />
        </svg>
      </HeroOrbit>
      {/* Small planet, far left */}
      <HeroOrbit size={970} rotation={180} shouldOrbit={true} orbitDuration="92s">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="size-7 animate-pulse hover:scale-125 hover:drop-shadow-[0_0_10px_#fbc2eb] transition-all duration-300 cursor-pointer">
          <circle cx="14" cy="14" r="12" fill="url(#planetSmall)" />
          <defs>
            <radialGradient id="planetSmall" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#fbc2eb" />
              <stop offset="100%" stopColor="#a18cd1" />
            </radialGradient>
          </defs>
        </svg>
      </HeroOrbit>
      {/* Medium planet, left-top */}
      <HeroOrbit size={1100} rotation={150} shouldOrbit={true} orbitDuration="110s">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" className="size-10 animate-spin-slow hover:scale-110 hover:drop-shadow-[0_0_18px_#38bdf8] transition-all duration-300 cursor-pointer">
          <ellipse cx="19" cy="19" rx="15" ry="15" fill="url(#planetMed)" />
          <defs>
            <radialGradient id="planetMed" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#a1c4fd" />
              <stop offset="100%" stopColor="#2193b0" />
            </radialGradient>
          </defs>
        </svg>
      </HeroOrbit>
      {/* Large planet, left-bottom */}
      <HeroOrbit size={1300} rotation={210} shouldOrbit={true} orbitDuration="130s">
        <svg width="54" height="54" viewBox="0 0 54 54" fill="none" className="size-14 animate-pulse hover:scale-110 hover:drop-shadow-[0_0_28px_#6ee7b7] transition-all duration-300 cursor-pointer">
          <ellipse cx="27" cy="27" rx="23" ry="23" fill="url(#planetLarge)" />
          <defs>
            <radialGradient id="planetLarge" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#6ee7b7" />
              <stop offset="100%" stopColor="#059669" />
            </radialGradient>
          </defs>
        </svg>
      </HeroOrbit>
      {/* --- END EVEN MORE ORBITS --- */}
      {/* Top right quadrant */}
      <HeroOrbit size={1100} rotation={70} shouldOrbit={true} orbitDuration="83s" shouldSpin={true} spinDuration="7s">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-3 text-fuchsia-200 blur-[1px] hover:scale-125 transition-transform duration-300 cursor-pointer">
          <circle cx="8" cy="8" r="7" fill="currentColor" />
        </svg>
      </HeroOrbit>
      {/* Bottom left quadrant */}
      <HeroOrbit size={1200} rotation={220} shouldOrbit={true} orbitDuration="90s" shouldSpin={true} spinDuration="6.5s">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="size-5 text-blue-100 blur-[1.5px] hover:scale-125 transition-transform duration-300 cursor-pointer">
          <polygon points="11,0 13,8 22,11 13,14 11,22 9,14 0,11 9,8" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1300} rotation={250} shouldOrbit={true} orbitDuration="104s" shouldSpin={true} spinDuration="8s">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-3 text-emerald-200 blur-[1px] hover:scale-125 transition-transform duration-300 cursor-pointer">
          <circle cx="8" cy="8" r="7" fill="currentColor" />
        </svg>
      </HeroOrbit>
      {/* Bottom right quadrant */}
      <HeroOrbit size={1400} rotation={120} shouldOrbit={true} orbitDuration="120s" shouldSpin={true} spinDuration="9s">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="size-4 text-pink-200 blur-[1.5px] hover:scale-125 transition-transform duration-300 cursor-pointer">
          <polygon points="9,0 11,7 18,9 11,11 9,18 7,11 0,9 7,7" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1550} rotation={300} shouldOrbit={true} orbitDuration="135s" shouldSpin={true} spinDuration="10s">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="size-5 text-yellow-100 blur-[2px] hover:scale-110 transition-transform duration-300 cursor-pointer">
          <polygon points="10,0 12,7 20,10 12,13 10,20 8,13 0,10 8,7" fill="currentColor" />
        </svg>
      </HeroOrbit>
      {/* Center left and right */}
      <HeroOrbit size={1200} rotation={180} shouldOrbit={true} orbitDuration="102s" shouldSpin={true} spinDuration="7.5s">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="size-4 text-blue-200 blur-[1px] hover:scale-110 transition-transform duration-300 cursor-pointer">
          <circle cx="9" cy="9" r="8" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1200} rotation={0} shouldOrbit={true} orbitDuration="102s" shouldSpin={true} spinDuration="7.5s">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="size-4 text-blue-200 blur-[1px] hover:scale-110 transition-transform duration-300 cursor-pointer">
          <circle cx="9" cy="9" r="8" fill="currentColor" />
        </svg>
      </HeroOrbit>
      {/* --- END EVEN MORE ORBITS --- */}
      {/* --- END MODERN FULL-SCREEN ORBITS --- */}

      {/* Extra Interactive Orbits and Sparkles */}
      <HeroOrbit size={1220} rotation={60} shouldOrbit={true} orbitDuration="110s">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="size-4 text-yellow-300/60 blur-[1px] animate-twinkle hover:scale-125 transition-transform duration-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg">
          <polygon points="9,0 11,7 18,9 11,11 9,18 7,11 0,9 7,7" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1170} rotation={120} shouldOrbit={true} orbitDuration="112s">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="size-2 text-white/70 blur-[0.5px] animate-shimmer hover:drop-shadow-[0_0_8px_#fff] transition-all duration-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="3" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1280} rotation={240} shouldOrbit={true} orbitDuration="118s">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="size-3 text-cyan-100/60 blur-[1.5px] animate-twinkle hover:scale-110 transition-transform duration-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg">
          <polygon points="8,0 10,6 16,8 10,10 8,16 6,10 0,8 6,6" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1330} rotation={310} shouldOrbit={true} orbitDuration="126s">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="size-5 text-fuchsia-200/70 blur-[1.5px] animate-shimmer hover:scale-125 transition-transform duration-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="2" fill="currentColor" />
        </svg>
      </HeroOrbit>
      <HeroOrbit size={1360} rotation={200} shouldOrbit={true} orbitDuration="132s">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="size-2 text-emerald-100/60 blur-[0.5px] animate-twinkle hover:scale-125 transition-transform duration-300 cursor-pointer" xmlns="http://www.w3.org/2000/svg">
          <polygon points="7,0 8,5 14,7 8,9 7,14 6,9 0,7 6,5" fill="currentColor" />
        </svg>
      </HeroOrbit>
      {/* --- END Interactive Orbits --- */}
    </div>
  )
}

export default HeroSectionBgOrbits