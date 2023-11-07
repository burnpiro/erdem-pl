// @flow
import React from 'react';
import rehypeReact from 'rehype-react';
import styles from './Content.module.scss';
import Meta from '../Meta';
import XAIInfidelity from '../../Diagrams/XAIInfidelity';
import RNNProcess from '../../Diagrams/RNNProcess/RNNProcess';
import RNNWithAttention from '../../Diagrams/RNNWithAttention/RNNWithAttention';
import ImageWithAttention from '../../Diagrams/ImageWithAttention/ImageWithAttention';
import InputPositionEmbeddingSin from '../../Diagrams/InputPositionEmbeddingSin/InputPositionEmbeddingSin';
import AttentionLayer from '../../Diagrams/AttentionLayer/AttentionLayer';
import DiffusionDiagrams from '../../Diagrams/DiffusionDiagrams/DiffusionDiagrams';
import Citation from '../Citation';

type Props = {
  body: string,
  htmlAst: string,
  title: string,
  date: string,
  readTime?: {
    text: string,
    minutes: number,
  },
};

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'xai-infidelity': XAIInfidelity,
    'rnn-process': RNNProcess,
    'rnn-with-attention': RNNWithAttention,
    'image-with-attention': ImageWithAttention,
    'sin-position-embedding': InputPositionEmbeddingSin,
    'attention-layer': AttentionLayer,
    'diffusion-diagram': DiffusionDiagrams,
  },
}).Compiler;

const Content = ({ body, slug, htmlAst, title, date, readTime }: Props) => {
  return (
    <div className={styles['content']}>
      <h1 className={styles['content__title']}>{title}</h1>
      <Meta date={date} readTime={readTime} />
      <div
        className={styles['content__body']}
        // dangerouslySetInnerHTML={{ __html: body }}
      >
        {renderAst(htmlAst)}
      </div>
      <Citation slug={slug} title={title} date={date} />
    </div>
  );
};

export default Content;
