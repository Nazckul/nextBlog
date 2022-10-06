import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout pagina="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image
            layout="responsive"
            width={600}
            height={450}
            src="/img/2.jpg"
            alt="Imagen sobre Nosotros"
          />

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              mollis ipsum ac tortor auctor, non posuere velit ullamcorper.
              Etiam lacinia sapien a pharetra vestibulum. Maecenas ut nisl quis
              felis lacinia efficitur vel nec dolor. Curabitur imperdiet commodo
              convallis. Sed id posuere mauris. Pellentesque dui mauris,
              vestibulum id mi quis, porta bibendum massa. Fusce suscipit dui a
              velit molestie ullamcorper. Praesent nulla massa, fringilla eget
              ultricies a, mollis at arcu.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              mollis ipsum ac tortor auctor, non posuere velit ullamcorper.
              Etiam lacinia sapien a pharetra vestibulum. Maecenas ut nisl quis
              felis lacinia efficitur vel nec dolor. Curabitur imperdiet commodo
              convallis. Sed id posuere mauris. Pellentesque dui mauris,
              vestibulum id mi quis, porta bibendum massa.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
