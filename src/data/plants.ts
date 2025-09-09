import { Plant } from '@/types';
import monsteraImg from '@/assets/monstera.jpg';
import fiddleLeafImg from '@/assets/fiddle-leaf-fig.jpg';
import snakePlantImg from '@/assets/snake-plant.jpg';
import pothosImg from '@/assets/pothos.jpg';
import rubberPlantImg from '@/assets/rubber-plant.jpg';
import peaceLilyImg from '@/assets/peace-lily.jpg';

export const plants: Plant[] = [
  {
    id: '1',
    name: 'Monstera Deliciosa',
    price: 45.99,
    image: monsteraImg,
    category: 'tropical',
    description: 'Beautiful tropical plant with fenestrated leaves'
  },
  {
    id: '2',
    name: 'Fiddle Leaf Fig',
    price: 65.99,
    image: fiddleLeafImg,
    category: 'tropical',
    description: 'Stunning statement plant with large glossy leaves'
  },
  {
    id: '3',
    name: 'Snake Plant',
    price: 29.99,
    image: snakePlantImg,
    category: 'low-light',
    description: 'Hardy succulent perfect for beginners'
  },
  {
    id: '4',
    name: 'Golden Pothos',
    price: 24.99,
    image: pothosImg,
    category: 'low-light',
    description: 'Trailing vine plant great for hanging baskets'
  },
  {
    id: '5',
    name: 'Rubber Plant',
    price: 39.99,
    image: rubberPlantImg,
    category: 'low-light',
    description: 'Glossy-leafed plant that thrives in various conditions'
  },
  {
    id: '6',
    name: 'Peace Lily',
    price: 34.99,
    image: peaceLilyImg,
    category: 'flowering',
    description: 'Elegant flowering plant that purifies air'
  }
];

export const categories = {
  tropical: 'Tropical Plants',
  'low-light': 'Low Light Plants',
  flowering: 'Flowering Plants'
};