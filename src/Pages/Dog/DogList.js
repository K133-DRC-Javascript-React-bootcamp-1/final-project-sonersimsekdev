import { useSelector} from "react-redux";
import EditDog from "./EditDog";
import DeleteDog from "./DeleteDog";
import "..//..//styles/_card.scss"
import Hoc from "..//..//Components/Hoc"
import { useTranslation } from 'react-i18next';
export const DogList = () => {
  const dogs = useSelector((state) => state.dogs);
  const { t } = useTranslation();

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {dogs.map(({ id, name, food, weight, health, age, img }) => (
        <div className="col" key={id} >
          <div className="card shadow-sm card2">
            <img
              src={img}
              className=" card-img-top "
              width="100%"
              height="250"
            
              alt={name}
            />
            <div className="card-body">
              <p className="card-text">{t('name')} {name}</p>
              <div className="d-flex flex-row flex-wrap gap-2 mb-1">
                <button type="button" className="btn btn-primary disabled">{t('food')} : {food}</button>
                <button type="button" className="btn btn-secondary disabled">{t('weight')}: {weight} kg</button>
                <button type="button" className="btn btn-info disabled">{t('health')}: {health}</button>
                <button type="button" className="btn btn-dark disabled">{t('age')} : {age}</button>
              </div>
              <div className="d-flex justify-content-end">
                <div> <EditDog dogid_={id} name_={name} food_={food} weight_={weight} health_={health} age_={age} img_={img} /></div>
                <div><DeleteDog id={id} /></div>
              </div>
            </div>
          </div>
        </div>
      ))
      }
    </div >
  );
}

export default  Hoc(DogList)