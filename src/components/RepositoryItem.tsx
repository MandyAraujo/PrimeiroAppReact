interface RepositoryItemProps{
    repository:{
        name: String;
        description: string;
        html_url: string;
    }
}

export function RepositoryItem(props){
    return(
        <li>
            <strong>{props.repository.name}</strong>
            <p>{props.repository.description}</p>
            <a href="{props.repository.html_url}">
                Acessar repositorio
            </a>
        </li>

    );
}