import { Star } from 'lucide-react';

const FlamStarEffect = () => {
  return (
    <div className="relative bottom-3">
      <Star className="w-5 h-5 text-[#a084e8] fill-current absolute animate-flame" />
      <Star className="w-5 h-5 text-[#c9b3ff] fill-current absolute animate-flame-delay" />
    </div>
  )
}

const FlameStarEffectUnderline = () => {
  return (
    <div className="relative w-full max-w-2xl mt-6 h-1">
      <div className="absolute inset-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#a084e8]/40 to-transparent"></div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <FlamStarEffect />
      </div>
    </div>
  )
}

export default FlameStarEffectUnderline;