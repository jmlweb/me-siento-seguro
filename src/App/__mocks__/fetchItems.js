const data = [
  {
    id: '123456',
    title: 'foo',
    images: {
      original: 'foo.jpg',
    },
  },
];

const fetchItems = () => Promise.resolve({
  data,
});

export default jest.fn(fetchItems);
