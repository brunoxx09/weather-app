function Temperatura({dados}){
    return(
        <div className="weather-card">
            <h2>{dados.cidade}</h2>
            <p className="temperatura">{dados.temperatura}°C</p>
        </div>
    )
}
export default Temperatura



