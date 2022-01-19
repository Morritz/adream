import React from 'react';
import '../styles.scss';
import FirstBlock from '@/components/FirstBlock/FirstBlock';
import TwoByTwo from '@/components/TwoByTwo/TwoByTwo';

export default function Home() {
  return (
    <main>
      <FirstBlock />
      <TwoByTwo />
    </main>
  );
}
