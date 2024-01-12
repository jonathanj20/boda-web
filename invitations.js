const namePerson = document.getElementById('namePerson');
const username = document.getElementById('username');
const numberAdults = document.getElementById('adults');
const numberChildren = document.getElementById('kid');
const invitationsBtn = document.getElementById('invitationsBtn');
const paragraphChildren = document.getElementById('paragraphChildren');

invitationsBtn.addEventListener('click', async () => {
    let userFound = false;
    const response = await fetch('users.json');
    const users = await response.json();

    users.forEach((user) => {
        //Calling removeAccents function so we will compare names without accents
        namePerson.value = removeAccents(namePerson.value);

        if (user.name.toLowerCase() === namePerson.value.toLowerCase()){
            username.innerHTML = user.name;
            numberAdults.innerHTML = user.adults;
            numberChildren.innerHTML = user.children;
            userFound = true;

            if(user.children > 0){
                paragraphChildren.style.display = 'block';             
            } else {
                paragraphChildren.style.display = 'none';    
            }

            namePerson.value = '';
        }
    })

    if(!userFound){
        alert('Inivitado no encontrado');
    } 
});

//this function removes all accents of a string
const removeAccents = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
