// Init GIthub
const github = new Github;

// init UI
const ui = new UI

// search user
const searchUser = document.getElementById('searchUser')

// Search Input Eventlistener
searchUser.addEventListener('keyup',(e) => {
    const userText = e.target.value

    if(userText !== ''){
        // make an http call
        github.getUser(userText)
         .then(data => {
            if(data.profile.message === 'Not Found'){
                // Show Alert
                ui.showAlert('User Not Found','alert alert-danger')
            }else{
                // show Profile
                ui.showProfile(data.profile)
                ui.showRepos(data.repos)
            }
         })
    }else{
        // clear profile
        ui.clearProfile()
    }
})