import { Link } from 'react-router-dom';

import Button from '@/components/Button';

const About = () => {
  return (
    <div className="about container">
      <h1 className="about--title">Sevgili Misafir...</h1>
      <p className="about--description">
        Burada yazılan yazıları benim okuyup okuyamadığımdan emin değiliz.
        <br />
        Sizden ricam, buraya uğradığınızda, eğer canınız isterse benimle ilgili
        anılarınızı, düşüncelerinizi, belki de benimle yaşadığınız komik anları
        ya da benden nefret ettiğiniz anları paylaşmanız. Böylece bu sanal
        tombstone, nadide bir koleksiyona dönüşsün.
      </p>
      <Link to="/" className="about--return">
        <Button text="Anasayfa" />
      </Link>
    </div>
  );
};

export default About;
