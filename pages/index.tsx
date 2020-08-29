import React from 'react';

export default function App(): JSX.Element {
  return (
    <div>
      {/* <Image name='self-shot' /> */}
      <picture>
        <source
          srcSet={require('../images/self-shot.jpg?webp')}
          type='image/webp'
        />
        <source srcSet={require('../images/self-shot.jpg')} type='image/jpeg' />
        <img src={require('../images/self-shot.jpg')} alt='Moralis' />
      </picture>
      <h1>Almost before we knew it, we had left the ground.</h1>
    </div>
  );
}
