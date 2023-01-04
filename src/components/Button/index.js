import { ButtonContainer } from '../Button/styles'


const Button = ({label, onClick}) => {
  
    return ( 
        <ButtonContainer onClick={onClick} type="button">
             {label}
        </ButtonContainer>
           
        
    )
};

export default Button