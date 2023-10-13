import styles from './Tabela.module.css';

export default function Altura(props){
    return(
    <div>
      <label className={styles.autura}>
        Altura
        <input className={styles.alt} type="text" value={props.a} onChange={(e)=>{props.sa(e.target.value)}}/>
      </label>
    </div>
    )
}