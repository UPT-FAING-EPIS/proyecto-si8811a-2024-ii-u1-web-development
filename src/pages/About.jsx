import DefaultLayout from '../components/layouts/DefaultLayout'
import backgroundImage from '../assets/background_about.png'; // Importar la imagen

const About = () => {
  return (
    <DefaultLayout>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>JUEGOS FLORALES UPT 2024</h1>
          <p style={styles.subtitle}>
            Los VIII Juegos Florales, denominados “Hacia los 30 años” de la Universidad Privada de Tacna, en los cuales participan
            la totalidad de estudiantes de las seis facultades de nuestra Casa Superior de Estudios.

            El objetivo principal de esta actividad es promover e incentivar en los universitarios el desarrollo de sus capacidades
            artísticas, de creación e interpretación literaria pues este año podrán participar en los concursos de: dibujo, pintura,
            canto nacional, canto internacional, fotografía, marinera, bailetón, teatro, danzas nacionales, baile moderno, en los
            reinados Miss UPT y Míster UPT, actividades de creación poética, cuento, declamación, ensayo, oratoria, ortografía,
            preparación de bebidas típicas “Pisco Sour y Tacna Sour”, preparación de platos nacionales “Lomo Saltado y Ceviche”,
            periódico mural entre otros.
          </p>
          
        </div>
      </div>
    </DefaultLayout>
    
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '85vh',
    backgroundImage: `url(${backgroundImage})`, // Usar la imagen importada
    backgroundSize: 'cover',
  },
  content: {
    textAlign: 'center',
    color: '#fff',
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
  },
  title: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '18px',
    marginBottom: '30px',
  },
  buttonsContainer: {
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#32CD32',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  storeButtons: {
    display: 'flex',
    justifyContent: 'center',
  },
  storeButton: {
    width: '150px',
    margin: '0 10px',
  },
}

export default About;
