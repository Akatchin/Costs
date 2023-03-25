import { useLocation } from "react-router-dom"

import Message from "../layout/message"
import Container from "../layout/container"
import LinkButton from "../layout/LinkButton"

import styles from "../pages/projects.module.css"

function Projects() {

    const location = useLocation()
    let message = ""

    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="newproject" text="Criar projeto" />
            </div>
            {message && <Message type="sucess" msg={message} />}
            <Container customClass="start">
                <p>Projetos</p>
            </Container>
        </div>
    )
}

export default Projects