import React, { useState } from 'react';

const RecipeForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSave({
      name,
      image,
      description,
    });
    setName('');
    setImage('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="block font-medium mb-2" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={e => setName(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
        required
      />

      <label className="block font-medium mb-2" htmlFor="image">
        Image URL
      </label>
      <input
        type="url"
        id="image"
        value={image}
        onChange={e => setImage(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
        required
      />

      <label className="block font-medium mb-2" htmlFor="description">
        Description
      </label>
      <textarea
        id="description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
        required
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Save
      </button>
    </form>
  );
};

export default RecipeForm;
