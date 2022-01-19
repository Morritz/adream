import React from 'react';
import '../styles.scss';
import FirstBlock from '@/components/FirstBlock/FirstBlock';
import TwoByTwo from '@/components/TwoByTwo/TwoByTwo';
import TwoByFour from '@/components/TwoByFour/TwoByFour';
import Filler from '@/components/Filler/Filler';
import News from '@/components/News/News';
import Showcase from '@/components/Showcase/Showcase';

export default function Home() {
  return (
    <main>
      <FirstBlock />
      <TwoByTwo />
      <TwoByFour />
      <Filler />
      <News />
      <Showcase />
    </main>
  );
}
