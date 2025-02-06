import useFetch from '../hooks/useFetch';
import '../styles/breeds.css'

const About = () => {
  const { data, loading, error } = useFetch('https://catfact.ninja/breeds');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading facts.</p>;

  return (
    <div className="about-container">
      <div className="about-box">
        <h1 className="about-title">🐾 About Cat Breeds</h1>
        <ul className="about-list">
          {data?.data?.map((breed, index) => (
            <li key={index}>
              <p className="breed-name">Breed: {breed.breed}</p>
              <p className="breed-info">🌍 Country: {breed.country}</p>
              <p className="breed-info">📍 Origin: {breed.origin}</p>
              <p className="breed-info">🧥 Coat: {breed.coat}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default About;