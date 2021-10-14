import { getProviders, signIn } from 'next-auth/react';

function SignIn({ providers }) {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen space-y-4'>
      <div className='w-48 cursor-pointer text-center'>
        <img src='https://links.papareact.com/ocw' alt='Logo' />
      </div>
      <p className='text-sm italic'>
        This is not a REAL app, it's build by educational purposes only
      </p>
      <div>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button
              className='p-3 bg-red-500 text-white rounded-lg'
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

export default SignIn;
