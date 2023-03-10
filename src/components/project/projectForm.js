import styles from "./projectForm.module.css"
import Input from "../form/input"
import Select from "../form/select"
import SubmitBotton from "../form/submitBotton"

function ProjectForm ({btnText}) {
    return (
        <form className={styles.form}>
            <Input
                type="text"
                text="Nome do projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                />
            <Input
                type="number"
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                />
            <Select name="category_id" text="Selecione a categoria"/>
            <SubmitBotton text={btnText}/>
        </form>
    )
}

export default ProjectForm