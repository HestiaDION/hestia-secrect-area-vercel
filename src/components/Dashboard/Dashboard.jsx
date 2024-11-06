import styles from './Dashboard.module.css'
import dashboard_icon from '../../assets/dashboard_icon.svg'

export default function Dashboard(){
    return (
        <>
            <div id='dashboard'>
                <div className={styles.line}></div>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <h1>Dashboards</h1>
                        <img src={dashboard_icon} alt="dashboard icon" />
                    </div>

                    <div className={styles.powerBI}>
                        <iframe title="Aula4_bank_BI" width="800" height="636" src="https://app.powerbi.com/view?r=eyJrIjoiZDIwMjNjNGUtMDc0ZC00ZTk3LWI4YzAtOGNiZDQxMWU2YjMyIiwidCI6ImIxNDhmMTRjLTIzOTctNDAyYy1hYjZhLTFiNDcxMTE3N2FjMCJ9" frameBorder="0" allowFullScreen={true}></iframe>
                    </div>
                </div>
            </div>
        </>
    )
}