export function Sobretitulo({ children, claro = false }: { children: string; claro?: boolean }) {
  return (
    <p className={`sobretitulo${claro ? ' sobretitulo--claro' : ''}`}>
      <span className="sobretitulo__marca" aria-hidden="true" />
      {children}
    </p>
  )
}
