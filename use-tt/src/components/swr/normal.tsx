import React from 'react';
import useSWR from 'swr';
import sfetch from '../../util/fetch';

export default function Profile () {
  const { data, error } = useSWR('http://localhost:8888/api/swr', sfetch, { suspense: true });
  console.log({ data, error });
  if (error) return (<div>failed to load</div>);
  if (!data) return (<div>loading...</div>);
  return (<div>hello {data.data}!</div>);
}
