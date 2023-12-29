'use client'

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Image } from 'semantic-ui-react';
import client from '../apollo-client';
import { Carousel } from "antd";

const MY_QUERY = gql`
query MyQuery {
  posts{
    author {
      name
    }
    content {
      text
    }
    coverImage {
      url
    }
    date
    excerpt
    slug
    title
  }
}

`

export default function Home() {

  const { loading, error, data } = useQuery(MY_QUERY, { client });

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <div className='mb-8'>
      <Carousel autoplay dotPosition={'top'} autoplaySpeed={2000} dots={true}>
        {data.posts.map((post) => (
          <div key={post.slug}>
            <div id='image'>
              <Image id="cover" className='w-full object-cover' src={post.coverImage.url} wrapped ui={false} />
            </div>
            <h2 className='d-inline bottom-5'>{post.title}</h2>
            <div className='d-inline'>{post.date}</div>
            <div className='d-inline'>{post.excerpt}</div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
