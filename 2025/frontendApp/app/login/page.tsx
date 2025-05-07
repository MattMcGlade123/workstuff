import type { Metadata } from 'next'
import LoginLogic from './LoginLogic';

export function generateMetadata(): Metadata {
  return {
    title: `Login Page`,
  };
}

export default async function Page() {

  return <LoginLogic />;
}
