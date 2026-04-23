function BarraDeBusca({onBuscar}) {
  function handleSubmit(e){
    e.preventDefault()
    const cidade = e.target.cidade.value 
    console.log('cidade digitada:',cidade)
    onBuscar(cidade)
  }
  return (
    <form onSubmit={handleSubmit} className="search-bar">
    <input type="text" name="cidade" placeholder="Digite o nome da cidade..." />
    <button>Buscar</button>
    </form>
  )
}
export default BarraDeBusca