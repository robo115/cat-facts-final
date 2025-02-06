import useFetch from '../hooks/useFetch';
import '../styles/facts.css'
const Facts = () => {
  const { data, loading, error } = useFetch('https://catfact.ninja/facts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading facts.</p>;

  return (
    <div className="facts-container">
      <div className="facts-box">
        <h1 className="facts-title">🐱 Cat Facts</h1>
        <ul className="facts-list">
          {data?.data?.map((fact, index) => (
            <li key={index}>{fact.fact}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Facts;