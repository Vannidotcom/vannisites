export default function Logo() {
  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 shadow-lg">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Giovanni Ayiah Mensah Logo"
      >
        <circle cx="20" cy="20" r="20" fill="#0066cc" />
        <text
          x="50%"
          y="56%"
          textAnchor="middle"
          fill="#ff6b00"
          fontSize="16"
          fontWeight="bold"
          fontFamily="Inter, Arial, sans-serif"
          letterSpacing="2"
          dominantBaseline="middle"
        >
          GAM
        </text>
      </svg>
    </div>
  )
}