export default function StoreBadges({ height = 44, gap = 16, className = "" }) {
  return (
    <div className={`flex ${className}`} style={{ gap }}>
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noreferrer"
        aria-label="Get it on Google Play"
        className="transition hover:-translate-y-0.5 hover:opacity-90"
      >
        <img src="/images/google-play.png" alt="Get it on Google Play" style={{ height }} />
      </a>
      <a
        href="https://www.apple.com/app-store/"
        target="_blank"
        rel="noreferrer"
        aria-label="Download on the App Store"
        className="transition hover:-translate-y-0.5 hover:opacity-90"
      >
        <img src="/images/app-store.png" alt="Download on the App Store" style={{ height }} />
      </a>
    </div>
  );
}