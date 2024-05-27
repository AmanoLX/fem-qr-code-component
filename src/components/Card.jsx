import image from '../assets/images/image-qr-code.png';

const Card = () => {
  return (
    <div className="card">
      <img src={image} alt="qr code" className="card__img" />
      <div className="card__info">
        <h1 className="card__title">
          Improve your front-end skills by building projects
        </h1>
        <p className="card__desc">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};
export default Card;
