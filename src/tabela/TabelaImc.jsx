import styles from './Tabela.module.css';

export  default function TabelaImc() {
    return (
        <table className={styles.table}>
        <thead>
          <tr>
            <th>Classificação</th>
            <th>IMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abaixo do Peso</td>
            <td>Abaixo de 18,5 e 24,9</td>
            </tr>
            <tr>
            <td>SobrePeso</td>
            <td>Entre 25 e 29,9</td>
            </tr>
            <tr>
            <td>Obesidade Grau I</td>
            <td>Entre 30 e 34,9</td>
            </tr>
            <tr>
            <td>Obesidade Grau II </td>
            <td>Entre 35 e 39,9</td>
            </tr>
            <tr>
            <td>Obesidade Grau III ou Mórbida </td>
            <td>Maior que 40</td>
            </tr>
        </tbody>
      </table>
    )
}