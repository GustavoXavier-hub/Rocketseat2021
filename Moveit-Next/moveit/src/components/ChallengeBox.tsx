import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox() {
    return (
        <div className={styles.challengeBoxContainer}>
            <div className={styles.challegeNotAcitve}>
                <strong>
                    Finalize  um ciclo para receber   um desafio
            </strong>
                <p>
                    <img src="icons/levelup.svg" alt="Level up" />
                    Avance de  level completando desafios
                </p>
            </div>
        </div>
    )

}