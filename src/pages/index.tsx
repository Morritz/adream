import React from 'react';
import '../styles.scss';
import FirstBlock from '@/components/FirstBlock/FirstBlock';
import TwoByTwo from '@/components/TwoByTwo/TwoByTwo';
import TwoByFour from '@/components/TwoByFour/TwoByFour';

export default function Home() {
  return (
    <main>
      <FirstBlock />
      <TwoByTwo />
      <TwoByFour />
    </main>
  );
}
