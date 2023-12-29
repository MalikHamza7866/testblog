'use client'

import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Image } from 'semantic-ui-react';
import { Card } from 'antd';
import client from '../apollo-client';

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
  
  const { loading, error, data } = useQuery(MY_QUERY,{client});

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error :(</p>;

  return (
    <div className='flex flex-wrap'>
        {data.posts.map((post) => (
          <Card className='grow m-4 transition duration-250 ease-in hover:ease-out hover:scale-110 w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 ' hoverable key={post.slug} title={post.title} bordered={false} style={{ width: 300 }} >
            <Image src={post.coverImage.url} wrapped ui={false} />
            <div>
              <div>{post.date}</div>
              <div>{post.excerpt}</div>
            </div>
          </Card>
        ))}
    </div>
  );
}
