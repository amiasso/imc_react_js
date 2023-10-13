import styles from './Tabela.module.css';

export default function Peso(props){
    return(
    <div>
      <label className={styles.peso}>
        Peso
        <input className={styles.entrada} type="text" value={props.p} onChange={(e)=>{props.sp(e.target.value)}}/>
      </label>
    </div>
    )
}