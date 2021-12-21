import Head from 'next/head'
import { useUser } from '@auth0/nextjs-auth0';
import HomePage from '../components/Home';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
      </div>
    );
  }

  return (
    <>
      <main>
        <HomePage />
      </main>
    </>
  )
}
