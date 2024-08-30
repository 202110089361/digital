// "use client"
// import { signIn, signOut, useSession } from 'next-auth/react';
// import React from 'react';

// const Dasghboard = () => {
//   const { data: session } = useSession();
//   return (
//     <>
//       {session ? (
//         <>
//         <img src={session.user?.image as string} className='w-32 h-32 rounded-full' />
//           <h1 className='text-3xl text-green-500 font-bold'>Welcome back, {session.user?.name}</h1>
//           <p>{session.user?.email}</p>
//           <button onClick={() => signOut( )} className='border border-black rounded-lg py-1 px-5'>Sign out</button>
//         </>
//       ) : (
//         <>
//           <h1 className='text-3xl text-red-500 font-bold'>You're not logged in</h1>
//           <div className='flex gap-4 mt-4 text-black'>
//             <button onClick={() => signIn('google')} className='border border-black rounded-lg py-1 px-5'>Sign in with google</button>
//             <button onClick={() => signIn('github')} className='border border-black rounded-lg bg-green-500 py-1 px-5'>Sign in with github</button>
//           </div>

//         </>
//       )}
//     </>
//   );
// };

// export default Dasghboard;