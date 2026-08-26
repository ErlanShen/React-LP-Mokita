const PAINS = [
  "Tienes mil ideas guardadas en Pinterest, pero ninguna se ha convertido todavía en una prenda real.",
  "Compraste tela pensando en un proyecto de cosplay… y sigue guardada porque no sabías por dónde cortar.",
  "Intentaste hacer unas orejas y quedaron torcidas, flácidas o de tamaños distintos.",
  "Sientes que el patronaje “de verdad” es solo para quienes llevan años cosiendo.",
];

const MISTAKES = [
  "Cortar la tela sin un patrón real, “a ojo”.",
  "No usar entretela en las orejas, por lo que quedan flácidas.",
  "No dejar margen de costura y terminar con piezas demasiado pequeñas.",
  "Comprar una tela que no tiene el cuerpo necesario para el efecto que buscabas.",
];

export default function Problem() {
  return (
    <section className="section section--cream" id="problema">
      <div className="container">
        <span className="eyebrow">El problema</span>
        <h2 className="section-title">
          Si alguna vez intentaste hacer tu propio cosplay, seguramente ya conoces esto
        </h2>

        <div className="pain-grid">
          {PAINS.map((pain) => (
            <div className="pain-card" key={pain}>
              <p>{pain}</p>
            </div>
          ))}
        </div>

        <div className="problem-detail">
          <div className="problem-detail__block">
            <h3>Los errores más comunes</h3>
            <ul>
              {MISTAKES.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div className="problem-detail__block problem-detail__block--consequence">
            <h3>¿A dónde lleva esto?</h3>
            <p>
              El resultado casi siempre es el mismo: dinero invertido en telas que no se usan,
              frustración con cada intento fallido, y la sensación de que crear tu propio cosplay
              &ldquo;no es para ti&rdquo; — cuando en realidad solo te faltaba el método correcto.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
