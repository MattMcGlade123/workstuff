import type { Metadata } from 'next'
import RegisterLogic from './RegisterLogic';

export function generateMetadata(): Metadata {
  return {
    title: `Login Page`,
  };
}

export default async function Page() {

  return <RegisterLogic />;
}
