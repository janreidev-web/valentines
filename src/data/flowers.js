const flowers = [
  {
    id: 1,
    name: 'Mika',
    file: 'flower (5).glb',
    emoji: '🌹',
    letter: {
      // Put files in /public (example names):
      songSrc: '/songs/ate-unknown2.mp3',
      imageSrc: '/letters/mika.png',
      message: [
        'This beautiful flower represents the perfect way to express your love and affection.',
        'Use your mouse to rotate and zoom around the 3D model!',
      ],
    },
    viewer: {
      scale: 30,
      cameraPosition: [10, 10, 30],
      // Move the GLB inside the canvas after it's auto-centered:
      // +X = right, +Y = up, +Z = toward camera
      positionOffset: [0, 0, 0],
      // Where OrbitControls rotates around / looks at:
      target: [0, 0, 0],
    },
  }
]

export default flowers
