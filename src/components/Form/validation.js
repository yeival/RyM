const validator= (data)=>{
    let errors ={}
    if(!data.email.includes ('@'))
        errors.e1='Ingresa un mail valido'
    if(!data.email)    
        errors.e2='Ingresa un mail'
    if(data.email.length > 35)
        errors.e3='Menos de 35 caracteres'

    if(!/.*\d+.*/.test(data.password))
        errors.p1='Al menos un numero'    
    if(data.password.length < 6 || data.password.length >10 )
        errors.p2='Debe ser mayor a 6 y menor a 11'   

    return errors;    

}

export default validator;