import { useSearchParams } from 'react-router-dom';

const Vulns = () => {
    const [searchParams] = useSearchParams();
    var username = searchParams.get('username');
    
    return (
        <h1>Vulns - {username}</h1>
    );
};
  
export default Vulns;