import { twMerge } from "tailwind-merge"

export const HeroOrbit = ({ children, size, rotation, orbitDuration, shouldOrbit, shouldSpin, spinDuration }) => {
  return (
    <div className='absolute left-1/2 top-1/2 max-md:hidden -translate-x-1/2 -translate-y-1/2 -z-20'>
      <div className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{
          animationDuration: orbitDuration
        }}
      >
        <div className='flex items-start justify-start' style={{
          width: `${size}px`,
          height: `${size}px`,
          transform: `rotate(${rotation}deg)`
        }}>
          <div className={twMerge(shouldSpin === true && "animate-spin")}
            style={{
              animationDuration: spinDuration
            }}
          >
            <div className='inline-flex' style={{
              transform: `rotate(${rotation * -1}deg)`
            }}>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}