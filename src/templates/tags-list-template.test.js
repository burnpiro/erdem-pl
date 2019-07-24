// @flow
import React from 'react';
import renderer from 'react-test-renderer';
import { useStaticQuery, StaticQuery } from 'gatsby';
import TagsListTemplate from './tags-list-template';
import siteMetadata from '../../jest/__fixtures__/site-metadata';
import allMarkdownRemark from '../../jest/__fixtures__/all-markdown-remark';
import type { RenderCallback } from '../types';
import IndexTemplate from './index-template';

describe('TagsListTemplate', () => {
  const props = {
    ...siteMetadata,
    ...allMarkdownRemark,
  };

  beforeEach(() => {
    StaticQuery.mockImplementationOnce(
      ({ render }: RenderCallback) => render(props),
      useStaticQuery.mockReturnValue(props)
    );
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<TagsListTemplate />, {
        createNodeMock: () => ({
          scrollIntoView: () => {},
        }),
      })
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
