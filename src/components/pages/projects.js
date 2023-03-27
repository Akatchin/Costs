import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import Message from "../layout/message"
import Container from "../layout/container"
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/projectCard"

import styles from "../pages/projects.module.css"


function Projects() {

    const [projects, setProjects] = useState([])

    const location = useLocation()
    let message = ""

    if (location.state) {
        message = location.state.message
    }


    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setProjects(data)
        })
        .catch((err) => console.log(err))
    }, [])

    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="http://localhost:3000/newproject" text="Criar projeto" />
            </div>
            {message && <Message type="sucess" msg={message} />}
            <Container customClass="start">
                {projects.length > 0 && 
                    projects.map((project) => (
                        <ProjectCard
                         name ={project.name}
                         id={project.id}
                         budget={project.budget}
                         category={project?.category?.name}
                         key={project.id}/>
                    ))}
            </Container>
        </div>
    )
}

export default Projects