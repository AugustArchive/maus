/*
 * 🐭 Maus: Source code for maus.floof.gay, a project describing a specific character in Maus.
 * Copyright (c) 2022 Noel <cutie@floofy.dev>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import Image from 'next/image';
import SEO from '../components/SEO';

const PORTRAIT_URI = 'https://i-am.floof.gay/images/2f483051.png';

export default function Index() {
  return (
    <>
      <SEO path="/" />

      <div className="flex dark:text-slate-100 text-zinc-800 h-screen flex-col justify-center items-center">
        <main className="mx-auto -mt-16">
          <Image src={PORTRAIT_URI} width="245px" height="245px" className="rounded-full" draggable="false" />
        </main>

        <main className="mx-auto mt-3 text-center max-w-4xl">
          <h1 className="font-serif text-6xl">Anja Spiegelman</h1>
          <h2 className="font-sans text-3xl mt-4">
            Art's mother, Vladek's late wife, surviver of the Holocaust but later committed suicide in May, 1968.
          </h2>
        </main>
      </div>

      <div className="flex dark:text-slate-100 text-zinc-800 -mt-48 flex-col max-w-[1732px] py-6">
        <h1 className="font-serif text-7xl ml-10">Introduction</h1>
        <h2 className="font-sans text-3xl ml-12 mt-2">
          Anna ("Anja") Spiegelman was a sensitive and intelligent women born in a rich family. As shown in the
          description, Anja does die from suicide in May, 1968, while not significate in the Maus books, it still hurted
          Artie and Vladek to the days that they were alive.
        </h2>

        <h2 className="font-sans text-3xl ml-12 mt-2">
          In the first chapter of Maus, we are first introducted to Anja around page 15. She is shown as an elegant
          woman, and Vladek gets interested with her, though, Lucia was Vladek's first girlfriend or wife (don't really
          know, ok?) and he dumped her for Anja and... in my own opinion, I think it was the right decision.
        </h2>

        <h1 className="font-serif text-7xl ml-10 mt-8">During the Holocaust</h1>
        <h2 className="font-sans text-3xl ml-12 mt-4">
          I should probably begin with when the Holocaust was first starting to erupt back in September 1939 with the
          Nazi regime. In the second chapter, it started out as Anja translating communist translations into German,
          which caught the eyes of Anja's family and espicially Vladek, since Vladek was opposed to the communist party.
        </h2>

        <h2 className="font-sans text-3xl ml-12 mt-2">
          There is a common theme when we analyze Anja through out the Maus books, she has depression and anxiety, it
          shines through in the first chapter where Vladek went through Anja's closet and found a bunch of
          anti-depressants. This should be when Richeu was born, Anja and Vladek's first child. Since Anja was having
          really hard depression when Richeu was born, the family took care of Vladek's business while Vladek and Anja
          went to a fancy place to clear her mind. This was also when the Holocaust first broke out since the Nazi
          regime had destroyed the train had stopped in the third chapter.
        </h2>

        <h1 className="font-serif text-7xl ml-10 mt-8">Suicide</h1>
        <h2 className="font-sans text-3xl ml-12 mt-4">
          This will be kept short for the time being, but in Chapter 6, Anja had committed suicide while being
          inprisioned and we can see how it affected Artie once you view the pages of him taking the blame for Anja's
          death.
        </h2>
      </div>

      <footer className="flex dark:text-slate-100 flex-col text-zinc-800 px-14 py-5 items-center justify-center">
        <div className="mx-auto">
          <Image
            src="https://cdn.floofy.dev/images/August.png"
            width="69px"
            height="69px"
            draggable="false"
            className="rounded-full"
          />
        </div>

        <h2 className="font-sans text-2xl max-w-2xl text-center">
          This site was designed and created by{' '}
          <a href="https://floof.gay" className="hover:dark:text-zinc-400 hover:text-slate-300" target="_blank">
            Chris Hernandez
          </a>
          !
        </h2>

        <h2 className="font-sans text-2xl max-w-2xl text-center">
          Full source code is on{' '}
          <a
            href="https://github.com/auguwu/maus"
            className="hover:dark:text-zinc-400 hover:text-slate-300"
            target="_blank"
          >
            GitHub
          </a>{' '}
          as always!
        </h2>
      </footer>
    </>
  );
}
