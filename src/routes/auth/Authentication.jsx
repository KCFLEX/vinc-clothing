import SignUpForm from '../../components/signup/SignUpForm';
import './Authentication.styles.scss'
import SignInForm from '../../components/signin /SignInForm';
  
  const Authentication = () => {
 
    
  
    return (
      <div className="authentication-container">
        
        <SignInForm />
        <SignUpForm />
      </div>
    );
  };
  
  export default Authentication;
