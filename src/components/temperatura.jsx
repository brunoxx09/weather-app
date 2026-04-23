function Temperatura({dados}){
    return(
        <div className="weather-card">
            
            <h2>{dados.cidade}</h2>
            <p className="temperatura">{dados.temperatura}°C</p>
            
            <div className="info-extra">
                 <p>🌡️ Sensação: {dados.sensacao}°C</p>
                 <p>💧 Umidade: {dados.umidade}%</p>
                <p>💨 Vento: {dados.vento} km/h</p>
            </div>
        </div>

    )
}
export default Temperatura



