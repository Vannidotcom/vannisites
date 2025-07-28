import './App.css'

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

export default function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <Logo />
        <h1 className="app-title">Welcome to My App</h1>
      </header>
      <main className="app-main">
        <p className="app-description">
          This is a sample application to demonstrate the usage of the Logo
          component.
        </p>
      </main>
      <footer className="app-footer">
        <p className="footer-text">© 2023 My App. All rights reserved.</p>
      </footer>
    </div>
  )
}