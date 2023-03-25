const validation = (userData) =>{
    
        let errors = {
            username: 'No hay error',
            password: 'No hay error'
        };

        if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
            errors.username = 'El email es invalido';}

        if(!userData.username){errors.username = 'No tiene que estar vacio'}

        if(userData.username.length > 35){errors.username = 'No puede tener mas de 35 caracteres'}

        if(!userData.password.match(/\d/)){errors.password = 'Tiene que tener almenos un numero'}

        if(userData.password.length < 6 || userData.password.length > 10){
            errors.password ='Tiene que tener entre 6 y 10 caracteres'
        }

        if(!userData.password){errors.password = 'No hay error'}
        

        return errors;
}
export default validation;