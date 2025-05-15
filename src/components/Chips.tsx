function Chips({title, names, className}: { title: string, names: string[], className: string }) {
  return <>
    <h1 className="uppercase font-bold">{title}</h1>
    <div className="mt-1 flex flex-wrap gap-3">
        {
            names.map(name => (
                <div key={name} className={`rounded-lg px-2 ${className}`}>{name}</div>
            ))
        }
    </div>
  </>
}

export default Chips;