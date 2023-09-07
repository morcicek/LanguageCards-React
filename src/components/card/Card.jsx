import { languages } from '../../helpers/data';
import Item from '../item/Item';
import './Card.css';
const Card = () => {
  return (
    <div className="card-area-container">
      <div className="bars"></div>
      <h1 className="language-title">Languages</h1>
      <div className="cards-container">
        {languages.map((item, i) => {
          return <Item card={item} />;
        })}
      </div>
    </div>
  );
};

export default Card;
