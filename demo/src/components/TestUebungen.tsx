/*Erstellen Sie eine React-Komponente namens Counter, die folgende Anforderungen erfüllt: 
1. Die Komponente erhält einen Prop text vom Typ string.
2. Sie verwendet zwei States:
    -comments, ein Array, das anfangs leer ist.
    -active, ein Boolean, der angibt, ob der Zustand aktiv ist (Standard: false)
3. Beim ersten Rendern der Komponente soll ein Fetch-Aufruf an die URL https://jsonplaceholder.typicode.com/posts/1/comments gemacht werden.
    Die geladenen Daten sollen im State comments gespeichert werden.
4. Die Komponente soll ein div zurückgeben mit:
    - einer dynamischen CSS-Klasse, bg-green-200, wenn active true ist, sonst bg-gray-100.
    - einer Überschrift mit dem Text Hallo.
    - einer Liste aller comment.name aus dem commentsArray.
    - einem Button mit dem Text "Click me", der beim KLicken active umschaltet (true -> false -> true ...)



*/

import React, { useState, useEffect } from 'react';

type CounterProps = {
  text: string;
};

type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const Counter: React.FC<CounterProps> = ({ text }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then((res) => res.json())
      .then((data: Comment[]) => setComments(data))
      .catch((error) => console.error('Fehler beim Laden der Kommentare:', error));
  }, []);

  return (
    <div className={active ? 'bg-green-200 p-4 rounded' : 'bg-gray-100 p-4 rounded'}>
      <h1 className="text-xl font-bold mb-2">Hallo</h1>
      <p className="mb-4">{text}</p>
      <ul className="mb-4 list-disc list-inside">
        {comments.map((comment) => (
          <li key={comment.id}>{comment.name}</li>
        ))}
      </ul>
      <button
        onClick={() => setActive((prev) => !prev)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Click me
      </button>
    </div>
  );
};

export default Counter;
