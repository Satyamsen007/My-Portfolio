
const SparkleBackgroundLayer = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Random sparkles, static and animated, for immersive effect */}
      {[...Array(30)].map((_, i) => (
        <span
          key={i}
          className={`absolute animate-twinkle z-0`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${6 + Math.random() * 10}px`,
            height: `${6 + Math.random() * 10}px`,
            opacity: 0.3 + Math.random() * 0.5,
            filter: 'blur(0.5px)',
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 10 10" fill="none">
            <polygon points="5,0 6,4 10,5 6,6 5,10 4,6 0,5 4,4" fill="#fff" fillOpacity="0.7" />
          </svg>
        </span>
      ))}
      {/* Occasional sparkle with shimmer effect */}
      {[...Array(10)].map((_, i) => (
        <span
          key={100 + i}
          className={`absolute animate-shimmer z-0`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${10 + Math.random() * 12}px`,
            height: `${10 + Math.random() * 12}px`,
            opacity: 0.2 + Math.random() * 0.6,
            filter: 'blur(1px)',
          }}
        >
          <svg width="100%" height="100%" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" fill="#e0f2fe" fillOpacity="0.7" />
          </svg>
        </span>
      ))}
    </div>
  )
}

export default SparkleBackgroundLayer;