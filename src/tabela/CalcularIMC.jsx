import styles from './Tabela.module.css';

export default function CalcularIMC(props){
           const calc=()=>{
        props.sr(props.p/(props.a*props.a))
       }
    return(
            <div>
              <button className={styles.calcular} onClick={calc}>Calcular</button>
            </div>
    )
}