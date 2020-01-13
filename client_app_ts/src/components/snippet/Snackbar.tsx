import React, { useEffect, useState } from 'react';
const Snackbar: React.FC<{error: boolean; message: string}> = props => {
    const { error, message } = props;
    const [ stMessage, setMessage ] = useState<string>(message);
    const [ stError, setError ] = useState<boolean>(error);
    useEffect(() => {
        setMessage(message);
        setError(error);
        if(message !== ''){
            setTimeout(() => {
                setMessage('');
                setError(false);
            },3000)
        }
    }, [error, message])
    return(
        <div className={`pageSnackbar ${ stMessage && stMessage !== '' ? 'openSnackbar' : ''} ${ stError ? 'error' : '' }`}>
            <div className="snackText">
                { message }
            </div>
        </div>
    )
}
export default Snackbar;