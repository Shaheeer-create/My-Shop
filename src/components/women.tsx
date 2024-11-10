// components/WomenSection.js


import Image from 'next/image';
import dressImg from '../../public/women/Dressimg.png';
import handbagImg from '../../public/women/HandsBag.png';
import shoesImg from '../../public/women/Shoes.png';
import earringsImg from '../../public/women/Earrings.png';

const womenItems = [
  {
    id: 1,
    name: 'Elegant Dress',
    description: 'Perfect for any occasion.',
    image: dressImg,
  },
  {
    id: 2,
    name: 'Stylish Handbag',
    description: 'A blend of fashion and function.',
    image: handbagImg,
  },
  {
    id: 3,
    name: 'Chic Shoes',
    description: 'For a comfortable, stylish walk.',
    image: shoesImg,
  },
  {
    id: 4,
    name: 'Classic Earrings',
    description: 'Timeless accessories.',
    image: earringsImg,
  },
];

export default function WomenSection() {
  return (
    <section className="women-section">
      <h2>Women's Collection</h2>
      <div className="women-grid">
        {womenItems.map((item) => (
          <div key={item.id} className="women-item">
            <Image src={item.image} alt={item.name} width={300} height={300} />
            <div className="women-item-content">
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
