import { Turnstile } from '@marsidev/react-turnstile'

export default function Widget({turnstileTokenRef}) {

    async function updateTurnstile(token){

        turnstileTokenRef.current = token;

    }


    return <Turnstile  onSuccess={updateTurnstile} siteKey='0x4AAAAAACiJF49CDQPtXtwN' />
}
