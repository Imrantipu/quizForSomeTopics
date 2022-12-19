import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';

const Topics = () => {
    const topicsData = useLoaderData();
  const newTopics = topicsData.data;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newTopics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
        </div>
    );
};

export default Topics;