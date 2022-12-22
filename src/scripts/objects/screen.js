const screen={
    userProfile:document.querySelector('.profile-data'),
    renderUser(user){
    this.userProfile.innerHTML = `<div class="info">
        <img src="${user.avatarUrl}" alt="foto do perfil do usuário"/>
                    <div class="data">
                        <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                        <p>${user.bio ?? 'Não possui bio cadastrada'}</p>
                        <p>👥Seguidores ${user.followers}  👤Seguindo ${user.following} </p>
                    </div>
        </div>`
        let repositoriesItens=""
        user.repositories.forEach(repo => repositoriesItens +=`<li><a href="${repo.html_url}" target"_blank">${repo.name}<div class=repo-Info><p>🍴${repo.forks}</p><p>👨‍💻${repo.language}</p><p>⭐${repo.stargazers_count}</p><p>👀${repo.watchers}</p></div></a></li>`)
        
        if(user.repositories.length > 0){
            this.userProfile.innerHTML +=`<div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${repositoriesItens}</ul>
            </div>`
        }
        let eventsRepoNames =""
        user.eventsInfo.forEach(eventsname =>eventsRepoNames +=`<li>${eventsname.repo.name} - ${eventsname.payload.action ??"não possui descrição"} </li>`)
        
        if(user.eventsInfo.length > 0){
            this.userProfile.innerHTML +=`<div class="events section">
            <h2>Eventos</h2>
            <ul>${eventsRepoNames}</ul>
            </div>`
        }

    },
    renderNotFound(){
        this.userProfile.innerHTML = `<h3> Usuário não encontrado</h3>`
    }
    
}

export{screen} 