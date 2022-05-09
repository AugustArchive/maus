/*
 * 🐭 maus: Source code for maus.floof.gay, a project describing a specific character in Maus.
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

import type { FC } from 'react';
import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  path: string;
}

const SEO: FC<SEOProps> = ({ title, description, image, path }) => (
  <Head>
    <title>{title ?? 'Maus • Story of Anja Spiegelman'}</title>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content={description ?? 'The story of Anja Spiegelman, a loyal women who died off of suicide.'}
    />
    <meta name="theme-color" content="#535353" />
    <meta
      property="og:description"
      content={description ?? 'The story of Anja Spiegelman, a loyal women who died off of suicide.'}
    />
    <meta property="og:title" content={title ?? 'Maus &bull; Story of Anja Spiegelman'} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://maus.floof.gay" />
  </Head>
);

export default SEO;
