const flowers = [
  {
    id: 1,
    name: 'Aglaia',
    file: 'flower (5).glb',
    emoji: '🌹',
    letter: {
      // Put files in /public (example names):
      songSrc: '/songs/aglaia.mp3',
      imageSrc: '/letters/aglaia.png',
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
  },
  {
    id: 2,
    name: 'Ate Aurium',
    file: 'flower (1).glb',
    emoji: '🌷',
    letter: {
      songSrc: '/songs/ate-aurium.mp3',
      imageSrc: '/letters/ate-aurium.png',
      message: [
        'This beautiful flower represents the perfect way to express your love and affection.',
        'Use your mouse to rotate and zoom around the 3D model!',
      ],
    },
    viewer: {
      scale: 0.2,
      cameraPosition: [-8, 1, 10],
      positionOffset: [0, -0.1, 0],
      target: [0, 0, 0],
    },
  },
  {
    id: 3,
    name: 'Ate Twinkle',
    file: 'flower (4).glb',
    emoji: '🌸',
    letter: {
      songSrc: '/songs/ate-twinkle.mp3',
      imageSrc: '/letters/ate-twinkle.png',
      message: [
        'This beautiful flower represents the perfect way to express your love and affection.',
        'Use your mouse to rotate and zoom around the 3D model!',
      ],
    },
    viewer: {
      scale: 6,
      cameraPosition: [0, 0, 5.5],
      positionOffset: [0, 0, 0],
      target: [0, 0, 0],
    },
  },
  {
    id: 4,
    name: 'Ate Unknown 2.0',
    file: 'flower (2).glb',
    emoji: '🌺',
    letter: {
      songSrc: '/songs/ate-unknown2.mp3',
      imageSrc: '/letters/ate-unknown2.png',
      message: [
        'This beautiful flower represents the perfect way to express your love and affection.',
        'Use your mouse to rotate and zoom around the 3D model!',
      ],
    },
    viewer: {
      scale: 8,
      cameraPosition: [10, 10, 30],
      positionOffset: [0, 0, 0],
      target: [0, 0, 0],
    },
  },
  {
    id: 5,
    name: 'Kuys Unknown',
    file: 'flower (3).glb',
    emoji: '💝',
    letter: {
      songSrc: '/songs/kuys-unknown.mp3',
      imageSrc: '/letters/kuya-unknown.png',
      message: [
        'This beautiful flower represents the perfect way to express your love and affection.',
        'Use your mouse to rotate and zoom around the 3D model!',
      ],
    },
    viewer: {
      scale: 0.04,
      cameraPosition: [0, 0, 6.5],
      positionOffset: [0, 0, 0],
      target: [0, 0, 0],
    },
  },
]

export default flowers
