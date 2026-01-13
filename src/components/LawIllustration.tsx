interface LawIllustrationProps {
  lawNumber: number
  className?: string
}

export function LawIllustration({ lawNumber, className = '' }: LawIllustrationProps) {
  const illustrations: Record<number, React.ReactNode> = {
    // Law 1: Never Outshine the Master - A dim star behind a bright one
    1: (
      <>
        <circle cx="60" cy="60" r="25" fill="#d4af37" opacity="0.2" />
        <circle cx="40" cy="40" r="35" fill="#d4af37" />
        <circle cx="40" cy="40" r="25" fill="#0a0a0a" />
        <circle cx="40" cy="40" r="15" fill="#d4af37" />
      </>
    ),

    // Law 2: Never Trust Friends, Use Enemies - Broken chain link
    2: (
      <>
        <circle cx="30" cy="50" r="20" fill="none" stroke="#d4af37" strokeWidth="4" />
        <circle cx="70" cy="50" r="20" fill="none" stroke="#d4af37" strokeWidth="4" />
        <line x1="50" y1="50" x2="50" y2="50" stroke="#d4af37" strokeWidth="4" strokeDasharray="4 4" />
        <path d="M48 35 L52 65" stroke="#0a0a0a" strokeWidth="8" />
      </>
    ),

    // Law 3: Conceal Your Intentions - Masked circle
    3: (
      <>
        <circle cx="50" cy="50" r="30" fill="#d4af37" opacity="0.3" />
        <rect x="20" y="35" width="60" height="30" rx="15" fill="#d4af37" />
        <circle cx="35" cy="50" r="5" fill="#0a0a0a" />
        <circle cx="65" cy="50" r="5" fill="#0a0a0a" />
      </>
    ),

    // Law 4: Always Say Less - Minimal dots
    4: (
      <>
        <circle cx="30" cy="50" r="8" fill="#d4af37" />
        <circle cx="50" cy="50" r="8" fill="#d4af37" opacity="0.5" />
        <circle cx="70" cy="50" r="8" fill="#d4af37" opacity="0.2" />
      </>
    ),

    // Law 5: Protect Your Reputation - Shield
    5: (
      <>
        <path d="M50 15 L80 30 L80 55 Q80 80 50 90 Q20 80 20 55 L20 30 Z" fill="none" stroke="#d4af37" strokeWidth="3" />
        <path d="M50 30 L65 40 L65 55 Q65 70 50 75 Q35 70 35 55 L35 40 Z" fill="#d4af37" />
      </>
    ),

    // Law 6: Court Attention - Radiating spotlight
    6: (
      <>
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={50 + 35 * Math.cos((angle * Math.PI) / 180)}
            y2={50 + 35 * Math.sin((angle * Math.PI) / 180)}
            stroke="#d4af37"
            strokeWidth="2"
            opacity={0.3 + (i % 2) * 0.4}
          />
        ))}
        <circle cx="50" cy="50" r="15" fill="#d4af37" />
      </>
    ),

    // Law 7: Let Others Do the Work - Arrows converging to center
    7: (
      <>
        <path d="M20 20 L40 40" stroke="#d4af37" strokeWidth="2" opacity="0.5" />
        <path d="M80 20 L60 40" stroke="#d4af37" strokeWidth="2" opacity="0.5" />
        <path d="M20 80 L40 60" stroke="#d4af37" strokeWidth="2" opacity="0.5" />
        <path d="M80 80 L60 60" stroke="#d4af37" strokeWidth="2" opacity="0.5" />
        <circle cx="50" cy="50" r="12" fill="#d4af37" />
      </>
    ),

    // Law 8: Make People Come to You - Magnetic pull
    8: (
      <>
        <circle cx="50" cy="50" r="15" fill="#d4af37" />
        {[0, 60, 120, 180, 240, 300].map((angle, i) => (
          <circle
            key={i}
            cx={50 + 30 * Math.cos((angle * Math.PI) / 180)}
            cy={50 + 30 * Math.sin((angle * Math.PI) / 180)}
            r="6"
            fill="#d4af37"
            opacity="0.4"
          />
        ))}
      </>
    ),

    // Law 9: Win Through Actions - Rising arrow
    9: (
      <>
        <path d="M25 75 L50 25 L75 75" fill="none" stroke="#d4af37" strokeWidth="3" />
        <polygon points="50,15 40,35 60,35" fill="#d4af37" />
      </>
    ),

    // Law 10: Avoid the Unhappy - Separation
    10: (
      <>
        <circle cx="30" cy="50" r="15" fill="#d4af37" />
        <circle cx="70" cy="50" r="15" fill="#d4af37" opacity="0.2" />
        <path d="M50 30 L50 70" stroke="#d4af37" strokeWidth="2" strokeDasharray="4 4" />
      </>
    ),

    // Law 11: Keep People Dependent - Connected nodes
    11: (
      <>
        <circle cx="50" cy="50" r="12" fill="#d4af37" />
        <circle cx="25" cy="30" r="8" fill="#d4af37" opacity="0.6" />
        <circle cx="75" cy="30" r="8" fill="#d4af37" opacity="0.6" />
        <circle cx="25" cy="70" r="8" fill="#d4af37" opacity="0.6" />
        <circle cx="75" cy="70" r="8" fill="#d4af37" opacity="0.6" />
        <line x1="50" y1="50" x2="25" y2="30" stroke="#d4af37" strokeWidth="2" opacity="0.4" />
        <line x1="50" y1="50" x2="75" y2="30" stroke="#d4af37" strokeWidth="2" opacity="0.4" />
        <line x1="50" y1="50" x2="25" y2="70" stroke="#d4af37" strokeWidth="2" opacity="0.4" />
        <line x1="50" y1="50" x2="75" y2="70" stroke="#d4af37" strokeWidth="2" opacity="0.4" />
      </>
    ),

    // Law 12: Selective Honesty - Half-filled circle
    12: (
      <>
        <circle cx="50" cy="50" r="30" fill="none" stroke="#d4af37" strokeWidth="3" />
        <path d="M50 20 A30 30 0 0 1 50 80 Z" fill="#d4af37" />
      </>
    ),

    // Law 13: Ask for Help Strategically - Offering hand
    13: (
      <>
        <path d="M30 70 Q30 50 50 50 Q70 50 70 70" fill="none" stroke="#d4af37" strokeWidth="3" />
        <circle cx="50" cy="35" r="12" fill="#d4af37" />
      </>
    ),

    // Law 14: Pose as Friend, Work as Spy - Two faces
    14: (
      <>
        <circle cx="35" cy="50" r="20" fill="#d4af37" />
        <circle cx="65" cy="50" r="20" fill="none" stroke="#d4af37" strokeWidth="2" strokeDasharray="4 2" />
        <circle cx="30" cy="45" r="3" fill="#0a0a0a" />
        <circle cx="60" cy="45" r="3" fill="#d4af37" opacity="0.5" />
      </>
    ),

    // Law 15: Crush Your Enemy - Impact symbol
    15: (
      <>
        <polygon points="50,20 55,45 80,45 60,60 70,85 50,70 30,85 40,60 20,45 45,45" fill="#d4af37" />
      </>
    ),

    // Law 16: Use Absence - Empty center
    16: (
      <>
        <circle cx="50" cy="50" r="35" fill="none" stroke="#d4af37" strokeWidth="3" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="#d4af37" strokeWidth="2" opacity="0.5" />
        <circle cx="50" cy="50" r="15" fill="none" stroke="#d4af37" strokeWidth="1" opacity="0.3" />
      </>
    ),

    // Law 17: Be Unpredictable - Random pattern
    17: (
      <>
        <circle cx="25" cy="35" r="8" fill="#d4af37" />
        <circle cx="70" cy="25" r="6" fill="#d4af37" opacity="0.7" />
        <circle cx="45" cy="65" r="10" fill="#d4af37" opacity="0.5" />
        <circle cx="75" cy="70" r="5" fill="#d4af37" opacity="0.8" />
        <circle cx="30" cy="75" r="7" fill="#d4af37" opacity="0.4" />
      </>
    ),

    // Law 18: Don't Build Fortresses - Open structure
    18: (
      <>
        <path d="M20 80 L20 40 L50 20 L80 40 L80 80" fill="none" stroke="#d4af37" strokeWidth="3" />
        <path d="M35 80 L35 55 L65 55 L65 80" fill="none" stroke="#d4af37" strokeWidth="2" strokeDasharray="4 4" />
      </>
    ),

    // Law 19: Know Your Victim - Target analysis
    19: (
      <>
        <circle cx="50" cy="50" r="30" fill="none" stroke="#d4af37" strokeWidth="2" />
        <circle cx="50" cy="50" r="20" fill="none" stroke="#d4af37" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" fill="none" stroke="#d4af37" strokeWidth="2" />
        <circle cx="50" cy="50" r="4" fill="#d4af37" />
        <line x1="50" y1="15" x2="50" y2="25" stroke="#d4af37" strokeWidth="2" />
        <line x1="50" y1="75" x2="50" y2="85" stroke="#d4af37" strokeWidth="2" />
        <line x1="15" y1="50" x2="25" y2="50" stroke="#d4af37" strokeWidth="2" />
        <line x1="75" y1="50" x2="85" y2="50" stroke="#d4af37" strokeWidth="2" />
      </>
    ),

    // Law 20: Don't Commit - Floating elements
    20: (
      <>
        <circle cx="50" cy="50" r="10" fill="#d4af37" />
        <circle cx="30" cy="35" r="6" fill="none" stroke="#d4af37" strokeWidth="2" />
        <circle cx="70" cy="35" r="6" fill="none" stroke="#d4af37" strokeWidth="2" />
        <circle cx="30" cy="65" r="6" fill="none" stroke="#d4af37" strokeWidth="2" />
        <circle cx="70" cy="65" r="6" fill="none" stroke="#d4af37" strokeWidth="2" />
      </>
    ),

    // Law 21: Play Dumber - Simple shape
    21: (
      <>
        <circle cx="50" cy="50" r="25" fill="#d4af37" opacity="0.3" />
        <circle cx="50" cy="50" r="8" fill="#d4af37" />
      </>
    ),

    // Law 22: Surrender Tactic - Wave pattern
    22: (
      <>
        <path d="M15 50 Q30 30 50 50 Q70 70 85 50" fill="none" stroke="#d4af37" strokeWidth="3" />
        <path d="M15 65 Q30 45 50 65 Q70 85 85 65" fill="none" stroke="#d4af37" strokeWidth="2" opacity="0.5" />
      </>
    ),

    // Law 23: Concentrate Forces - Converging lines
    23: (
      <>
        <line x1="20" y1="20" x2="50" y2="50" stroke="#d4af37" strokeWidth="3" />
        <line x1="80" y1="20" x2="50" y2="50" stroke="#d4af37" strokeWidth="3" />
        <line x1="20" y1="80" x2="50" y2="50" stroke="#d4af37" strokeWidth="3" />
        <line x1="80" y1="80" x2="50" y2="50" stroke="#d4af37" strokeWidth="3" />
        <circle cx="50" cy="50" r="8" fill="#d4af37" />
      </>
    ),

    // Law 24: Be a Courtier - Elegant curve
    24: (
      <>
        <path d="M20 70 Q20 30 50 30 Q80 30 80 70" fill="none" stroke="#d4af37" strokeWidth="3" />
        <circle cx="50" cy="30" r="8" fill="#d4af37" />
        <path d="M35 55 Q50 65 65 55" fill="none" stroke="#d4af37" strokeWidth="2" />
      </>
    ),

    // Law 25: Re-Create Yourself - Transformation
    25: (
      <>
        <rect x="20" y="35" width="25" height="30" fill="#d4af37" opacity="0.4" />
        <path d="M50 50 L60 50" stroke="#d4af37" strokeWidth="2" />
        <polygon points="58,45 68,50 58,55" fill="#d4af37" />
        <circle cx="75" cy="50" r="15" fill="#d4af37" />
      </>
    ),

    // Law 26: Keep Hands Clean - Clean shapes
    26: (
      <>
        <circle cx="50" cy="50" r="30" fill="none" stroke="#d4af37" strokeWidth="2" />
        <circle cx="50" cy="50" r="20" fill="#d4af37" opacity="0.2" />
        <circle cx="50" cy="50" r="10" fill="#d4af37" />
      </>
    ),

    // Law 27: Create a Cult - Radiating from center
    27: (
      <>
        <circle cx="50" cy="50" r="10" fill="#d4af37" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <line
            key={i}
            x1={50 + 15 * Math.cos((angle * Math.PI) / 180)}
            y1={50 + 15 * Math.sin((angle * Math.PI) / 180)}
            x2={50 + 35 * Math.cos((angle * Math.PI) / 180)}
            y2={50 + 35 * Math.sin((angle * Math.PI) / 180)}
            stroke="#d4af37"
            strokeWidth="2"
            opacity={i % 2 === 0 ? 1 : 0.5}
          />
        ))}
      </>
    ),

    // Law 28: Act Boldly - Bold arrow
    28: (
      <>
        <polygon points="50,15 75,50 60,50 60,85 40,85 40,50 25,50" fill="#d4af37" />
      </>
    ),

    // Law 29: Plan to the End - Path with endpoint
    29: (
      <>
        <path d="M20 70 Q35 70 40 50 Q45 30 60 30 Q75 30 80 50" fill="none" stroke="#d4af37" strokeWidth="2" strokeDasharray="4 4" />
        <circle cx="20" cy="70" r="5" fill="#d4af37" opacity="0.5" />
        <circle cx="80" cy="50" r="8" fill="#d4af37" />
      </>
    ),

    // Law 30: Make Accomplishments Effortless - Floating curve
    30: (
      <>
        <path d="M20 60 Q50 20 80 60" fill="none" stroke="#d4af37" strokeWidth="3" />
        <circle cx="50" cy="38" r="10" fill="#d4af37" />
      </>
    ),

    // Law 31: Control Options - Limited paths
    31: (
      <>
        <circle cx="50" cy="30" r="10" fill="#d4af37" />
        <line x1="50" y1="40" x2="30" y2="70" stroke="#d4af37" strokeWidth="3" />
        <line x1="50" y1="40" x2="70" y2="70" stroke="#d4af37" strokeWidth="3" />
        <circle cx="30" cy="75" r="6" fill="#d4af37" opacity="0.6" />
        <circle cx="70" cy="75" r="6" fill="#d4af37" opacity="0.6" />
      </>
    ),

    // Law 32: Play to Fantasies - Dream stars
    32: (
      <>
        <polygon points="30,35 32,42 40,42 34,47 36,55 30,50 24,55 26,47 20,42 28,42" fill="#d4af37" opacity="0.7" />
        <polygon points="60,25 63,35 73,35 65,42 68,52 60,45 52,52 55,42 47,35 57,35" fill="#d4af37" />
        <polygon points="45,60 47,67 55,67 49,72 51,80 45,75 39,80 41,72 35,67 43,67" fill="#d4af37" opacity="0.5" />
      </>
    ),

    // Law 33: Discover Weakness - Crack pattern
    33: (
      <>
        <circle cx="50" cy="50" r="30" fill="none" stroke="#d4af37" strokeWidth="3" />
        <path d="M50 20 L48 35 L55 45 L45 55 L52 65 L50 80" fill="none" stroke="#d4af37" strokeWidth="2" />
      </>
    ),

    // Law 34: Be Royal - Crown pattern
    34: (
      <>
        <path d="M20 60 L20 40 L35 50 L50 30 L65 50 L80 40 L80 60 Z" fill="#d4af37" />
        <rect x="20" y="60" width="60" height="15" fill="#d4af37" />
        <circle cx="35" cy="67" r="3" fill="#0a0a0a" />
        <circle cx="50" cy="67" r="3" fill="#0a0a0a" />
        <circle cx="65" cy="67" r="3" fill="#0a0a0a" />
      </>
    ),

    // Law 35: Master Timing - Clock element
    35: (
      <>
        <circle cx="50" cy="50" r="30" fill="none" stroke="#d4af37" strokeWidth="3" />
        <line x1="50" y1="50" x2="50" y2="30" stroke="#d4af37" strokeWidth="3" />
        <line x1="50" y1="50" x2="65" y2="55" stroke="#d4af37" strokeWidth="2" />
        <circle cx="50" cy="50" r="4" fill="#d4af37" />
      </>
    ),

    // Law 36: Disdain What You Can't Have - Dismissed element
    36: (
      <>
        <circle cx="50" cy="50" r="20" fill="#d4af37" opacity="0.3" />
        <line x1="30" y1="30" x2="70" y2="70" stroke="#d4af37" strokeWidth="3" />
        <line x1="70" y1="30" x2="30" y2="70" stroke="#d4af37" strokeWidth="3" />
      </>
    ),

    // Law 37: Create Spectacles - Burst pattern
    37: (
      <>
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={50 + (i % 2 === 0 ? 35 : 25) * Math.cos((angle * Math.PI) / 180)}
            y2={50 + (i % 2 === 0 ? 35 : 25) * Math.sin((angle * Math.PI) / 180)}
            stroke="#d4af37"
            strokeWidth={i % 2 === 0 ? 3 : 2}
          />
        ))}
        <circle cx="50" cy="50" r="8" fill="#d4af37" />
      </>
    ),

    // Law 38: Think Freely, Behave Normally - Hidden inner
    38: (
      <>
        <rect x="25" y="25" width="50" height="50" fill="none" stroke="#d4af37" strokeWidth="3" />
        <circle cx="50" cy="50" r="12" fill="#d4af37" />
      </>
    ),

    // Law 39: Stir Up Waters - Waves
    39: (
      <>
        <path d="M15 35 Q30 25 45 35 Q60 45 75 35 Q90 25 95 35" fill="none" stroke="#d4af37" strokeWidth="2" />
        <path d="M15 50 Q30 40 45 50 Q60 60 75 50 Q90 40 95 50" fill="none" stroke="#d4af37" strokeWidth="3" />
        <path d="M15 65 Q30 55 45 65 Q60 75 75 65 Q90 55 95 65" fill="none" stroke="#d4af37" strokeWidth="2" />
      </>
    ),

    // Law 40: Despise Free Lunch - Broken gift
    40: (
      <>
        <rect x="30" y="35" width="40" height="35" fill="none" stroke="#d4af37" strokeWidth="2" />
        <path d="M30 50 L70 50" stroke="#d4af37" strokeWidth="2" />
        <path d="M50 35 L50 70" stroke="#d4af37" strokeWidth="2" />
        <path d="M40 35 Q50 20 60 35" fill="none" stroke="#d4af37" strokeWidth="2" />
        <line x1="25" y1="30" x2="75" y2="75" stroke="#d4af37" strokeWidth="3" opacity="0.7" />
      </>
    ),

    // Law 41: Avoid Stepping in Great Man's Shoes - Separate paths
    41: (
      <>
        <path d="M30 25 L30 75" stroke="#d4af37" strokeWidth="3" />
        <circle cx="30" cy="25" r="6" fill="#d4af37" />
        <path d="M60 35 L60 75" stroke="#d4af37" strokeWidth="3" />
        <circle cx="60" cy="35" r="6" fill="#d4af37" />
        <path d="M40 80 L50 80" stroke="#d4af37" strokeWidth="2" strokeDasharray="2 2" opacity="0.5" />
      </>
    ),

    // Law 42: Strike the Shepherd - Hierarchy target
    42: (
      <>
        <circle cx="50" cy="25" r="10" fill="#d4af37" />
        <line x1="50" y1="35" x2="30" y2="55" stroke="#d4af37" strokeWidth="2" />
        <line x1="50" y1="35" x2="70" y2="55" stroke="#d4af37" strokeWidth="2" />
        <circle cx="30" cy="60" r="6" fill="#d4af37" opacity="0.5" />
        <circle cx="70" cy="60" r="6" fill="#d4af37" opacity="0.5" />
        <line x1="30" y1="66" x2="20" y2="80" stroke="#d4af37" strokeWidth="1" />
        <line x1="30" y1="66" x2="40" y2="80" stroke="#d4af37" strokeWidth="1" />
        <line x1="70" y1="66" x2="60" y2="80" stroke="#d4af37" strokeWidth="1" />
        <line x1="70" y1="66" x2="80" y2="80" stroke="#d4af37" strokeWidth="1" />
        <polygon points="85,15 90,25 80,25" fill="#d4af37" />
        <line x1="85" y1="25" x2="55" y2="20" stroke="#d4af37" strokeWidth="2" />
      </>
    ),

    // Law 43: Work on Hearts and Minds - Heart and brain
    43: (
      <>
        <path d="M35 45 C35 35 25 35 25 45 C25 55 35 65 35 65 C35 65 45 55 45 45 C45 35 35 35 35 45" fill="#d4af37" />
        <ellipse cx="65" cy="50" rx="15" ry="12" fill="#d4af37" opacity="0.6" />
        <path d="M55 45 Q65 40 75 45" fill="none" stroke="#0a0a0a" strokeWidth="1" />
        <path d="M55 50 Q65 45 75 50" fill="none" stroke="#0a0a0a" strokeWidth="1" />
        <path d="M55 55 Q65 50 75 55" fill="none" stroke="#0a0a0a" strokeWidth="1" />
      </>
    ),

    // Law 44: Mirror Effect - Reflection
    44: (
      <>
        <circle cx="35" cy="50" r="15" fill="#d4af37" />
        <line x1="50" y1="25" x2="50" y2="75" stroke="#d4af37" strokeWidth="1" strokeDasharray="4 2" />
        <circle cx="65" cy="50" r="15" fill="none" stroke="#d4af37" strokeWidth="2" />
      </>
    ),

    // Law 45: Preach Change, Reform Slowly - Gradual gradient
    45: (
      <>
        <rect x="20" y="40" width="12" height="20" fill="#d4af37" opacity="0.2" />
        <rect x="35" y="40" width="12" height="20" fill="#d4af37" opacity="0.4" />
        <rect x="50" y="40" width="12" height="20" fill="#d4af37" opacity="0.6" />
        <rect x="65" y="40" width="12" height="20" fill="#d4af37" opacity="0.8" />
        <path d="M20 70 L80 70" stroke="#d4af37" strokeWidth="1" />
        <polygon points="78,67 85,70 78,73" fill="#d4af37" />
      </>
    ),

    // Law 46: Never Appear Too Perfect - Slight imperfection
    46: (
      <>
        <circle cx="50" cy="50" r="25" fill="#d4af37" />
        <circle cx="60" cy="40" r="6" fill="#0a0a0a" />
      </>
    ),

    // Law 47: Don't Go Past the Mark - Arrow stopping
    47: (
      <>
        <line x1="20" y1="50" x2="60" y2="50" stroke="#d4af37" strokeWidth="3" />
        <polygon points="55,42 70,50 55,58" fill="#d4af37" />
        <line x1="75" y1="30" x2="75" y2="70" stroke="#d4af37" strokeWidth="3" />
      </>
    ),

    // Law 48: Assume Formlessness - Fluid shape
    48: (
      <>
        <path
          d="M30 50 Q20 30 40 25 Q60 20 70 40 Q80 60 60 70 Q40 80 30 60 Q20 50 30 50"
          fill="#d4af37"
          opacity="0.7"
        />
        <path
          d="M40 45 Q35 35 50 35 Q65 35 60 50 Q55 65 45 60 Q35 55 40 45"
          fill="#d4af37"
        />
      </>
    ),
  }

  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="100" height="100" fill="#0a0a0a" rx="8" />
      {illustrations[lawNumber] || illustrations[1]}
    </svg>
  )
}
