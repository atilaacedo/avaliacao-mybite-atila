export interface ResultadoCalculoFinanceiro {
    juros?: string;
    montanteFinal?: string;
    valorPresente?: string;
}

export function calcularJurosSimples(capital: number, taxa: number, tempo: number): ResultadoCalculoFinanceiro {
    const i = taxa/100;
    const juros = capital * i * tempo;
    const montanteFinal = capital + juros;
    return { 
        juros: juros.toFixed(2),
        montanteFinal: montanteFinal.toFixed(2)
    };
}

export function calcularJurosCompostos(capital: number, taxa: number, tempo: number): ResultadoCalculoFinanceiro {
    const i = taxa/100;
    const montanteFinal = capital * Math.pow((1 + i), tempo);
    const juros = montanteFinal - capital;
    return { 
        juros: juros.toFixed(2),
        montanteFinal: montanteFinal.toFixed(2)
    };
}

export function calcularValorPresente(montanteFuturo: number, taxa: number, tempo: number): ResultadoCalculoFinanceiro {
    const i = taxa/100;
    const valorPresente = montanteFuturo / Math.pow((1 + i), tempo);
    return { 
        valorPresente: valorPresente.toFixed(2)
    };
}