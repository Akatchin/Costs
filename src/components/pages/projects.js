import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"

import Message from "../layout/message"
import Container from "../layout/container"
import Loading from "../layout/loading"
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/projectCard"

import styles from "../pages/projects.module.css"


function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)

    const location = useLocation()
    let message = ""

    if (location.state) {
        message = location.state.message
    }


    useEffect(() => {
       setTimeout(() => {
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
            setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    
       }, 500)
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
                    {!removeLoading && <Loading/>}
                    {removeLoading && projects.length === 0 &&(
                        <p>Não há projetos cadastrados!</p>
                    )}
            </Container>
        </div>
    )
}

export default Projects