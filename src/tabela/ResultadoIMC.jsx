import styles from './Tabela.module.css';

export default function ResultadoIMC(props) {
    return (
        <div>
             <p className={styles.resultado}>Resultado: {props.r.toFixed(2)}</p>
        </div>
    )
}