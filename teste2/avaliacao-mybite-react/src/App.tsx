import { useState } from 'react';
import { 
  calcularJurosSimples, 
  calcularJurosCompostos, 
  calcularValorPresente,
  type ResultadoCalculoFinanceiro 
} from './financeiro';
import './App.css';

type TipoCalculo = 'simples' | 'compostos' | 'vp';

function App() {
  const [tipoCalculo, setTipoCalculo] = useState<TipoCalculo>('simples');
  const [valor, setValor] = useState<string>('');
  const [taxa, setTaxa] = useState<string>('');
  const [tempo, setTempo] = useState<string>('');
  const [resultado, setResultado] = useState<ResultadoCalculoFinanceiro | null>(null);

  const handleCalcular = (e: React.FormEvent) => {
    e.preventDefault();
    
    const v = parseFloat(valor);
    const i = parseFloat(taxa);
    const t = parseFloat(tempo);

    if (isNaN(v) || isNaN(i) || isNaN(t)) {
      alert("Por favor, preencha todos os campos corretamente.");
      return;
    }

    let res: ResultadoCalculoFinanceiro = {};

    if (tipoCalculo === 'simples') {
      res = calcularJurosSimples(v, i, t);
    } else if (tipoCalculo === 'compostos') {
      res = calcularJurosCompostos(v, i, t);
    } else if (tipoCalculo === 'vp') {
      res = calcularValorPresente(v, i, t);
    }

    setResultado(res);
  };

  return (
    <div className="container">
      <h1>Calculadora Financeira</h1>

      <div className="tabs">
        <button 
          className={`tab-btn ${tipoCalculo === 'simples' ? 'active' : ''}`}
          onClick={() => { setTipoCalculo('simples'); setResultado(null); }}
        >
          Juros Simples
        </button>
        <button 
          className={`tab-btn ${tipoCalculo === 'compostos' ? 'active' : ''}`}
          onClick={() => { setTipoCalculo('compostos'); setResultado(null); }}
        >
          Juros Compostos
        </button>
        <button 
          className={`tab-btn ${tipoCalculo === 'vp' ? 'active' : ''}`}
          onClick={() => { setTipoCalculo('vp'); setResultado(null); }}
        >
          Valor Presente
        </button>
      </div>

      <form onSubmit={handleCalcular} className="form-container">
        <div className="input-group">
          <label>
            {tipoCalculo === 'vp' ? 'Valor Futuro (R$)' : 'Capital Inicial (R$)'}
          </label>
          <input 
            type="number" 
            value={valor} 
            onChange={(e) => setValor(e.target.value)} 
            required 
            placeholder="0,00"
            step="0.01"
          />
        </div>

        <div className="input-group">
          <label>Taxa de Juros (% ao mês)</label>
          <input 
            type="number" 
            value={taxa} 
            onChange={(e) => setTaxa(e.target.value)} 
            required 
            placeholder="0"
            step="0.1"
          />
        </div>

        <div className="input-group">
          <label>Tempo (meses)</label>
          <input 
            type="number" 
            value={tempo} 
            onChange={(e) => setTempo(e.target.value)} 
            required 
            placeholder="0"
          />
        </div>

        <button type="submit" className="btn-submit">
          Calcular
        </button>
      </form>

      {resultado && (
        <div className="result-card">
          <h3>Resultado da Análise</h3>
          {resultado.valorPresente ? (
            <p>
              <span>Valor Presente:</span>
              <strong>R$ {resultado.valorPresente}</strong>
            </p>
          ) : (
            <>
              <p>
                <span>Juros Acumulados:</span>
                <strong>R$ {resultado.juros}</strong>
              </p>
              <p>
                <span>Montante Final:</span>
                <strong>R$ {resultado.montanteFinal}</strong>
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default App;