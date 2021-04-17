import { Container } from "./styles";

export default function Card() {
    return (
        <Container className="baixa">
            <section>
                <span
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <button>Cancelar</button>
                    <button>editar</button>
                </span>

                <section>
                    <h3>Desenvolver App mobile</h3>

                    <span>Data: </span>

                    <span>inicio:</span>
                    <span>12/01/21</span>
                    <span> | </span>
                    <span>final:</span>
                    <span>12/01/21</span>
                </section>

                <br />

                <p>
                    <b>Descrição:</b> Lorem ipsum, dolor sit amet consectetur
                    adipisicing elit. Enim libero, pariatur neque quos nesciunt
                    vel illum voluptas hic deleniti quasi vitae! Dolor beatae
                    quod corporis, inciduntrepudiandae vero atque voluptate.
                </p>
                <br />
                <section>
                    <span>Responsavel: Diogo</span>
                </section>
            </section>

            <footer
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <span>iniciado:12/01/21 | 08:00</span>
                <button>inciar</button>
            </footer>
        </Container>
    );
}
