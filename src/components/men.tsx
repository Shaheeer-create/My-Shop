// components/MenSection.js

import Image from 'next/image';
import jacketImg from '../../public/men/JacketImg.png';
import jeansImg from '../../public/men/JeanImg.png';
import shirtImg from '../../public/men/Shirtimg.png';
import bootsImg from '../../public/men/Bootsimg.png';

const menItems = [
  {
    id: 1,
    name: 'Classic Jacket',
    description: 'Timeless style with modern comfort.',
    image: jacketImg,
  },
  {
    id: 2,
    name: 'Denim Jeans',
    description: 'Perfect fit for every occasion.',
    image: jeansImg,
  },
  {
    id: 3,
    name: 'Casual Shirt',
    description: 'Soft fabric, effortless look.',
    image: shirtImg,
  },
  {
    id: 4,
    name: 'Leather Boots',
    description: 'Style and durability combined.',
    image: bootsImg,
  },
];

export default function MenSection() {
  return (
    <section className="men-section">
      <h2>Mens Collection</h2>
      <div className="men-grid">
        {menItems.map((item) => (
          <div key={item.id} className="men-item">
            <Image src={item.image} alt={item.name} width={300} height={300} />
            <div className="men-item-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <button>Shop Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
