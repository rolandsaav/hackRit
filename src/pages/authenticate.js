import Signin from '@/components/auth/Signin';
import Signup from '@/components/auth/Signup';

function authenticate() {
  const hasAccount = false;

  if(hasAccount) {
    return <Signup/>;
  }
  return <Signup/>
}

export default authenticate