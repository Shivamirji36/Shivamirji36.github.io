export default function Tag({ label, variant = 'neutral' }) {
  return <span className={`tag tag--${variant}`}>{label}</span>
}
