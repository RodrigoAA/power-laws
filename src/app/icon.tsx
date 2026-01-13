import { ImageResponse } from 'next/og'

export const dynamic = 'force-static'

export const size = {
  width: 32,
  height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 24,
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
        }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="#d4af37"
        >
          <path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06l-2.5.67-2.73-5.45c-.36-.72-1.27-.96-1.98-.54l-.03.02-1 .63-1-.63-.03-.02c-.71-.42-1.62-.18-1.98.54l-2.73 5.45-2.5-.67c-.8-.22-1.63.26-1.84 1.06-.21.8.22 1.63 1.02 1.87l4.01 1.2.99 3.97h10l.99-3.97 4.01-1.2c.8-.24 1.23-1.07 1.02-1.87z" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
