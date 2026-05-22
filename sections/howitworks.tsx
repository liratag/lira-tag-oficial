'use client';

const steps = [
  {
    number: '01',
    title: 'Cadastro Inteligente',
    desc: 'O usuário realiza cadastro vinculado ao CPF para ativação segura da TAG.',
  },
  {
    number: '02',
    title: 'Integração da TAG',
    desc: 'A tecnologia conecta mobilidade, autenticação e identificação.',
  },
  {
    number: '03',
    title: 'Mobilidade Inteligente',
    desc: 'Acesso rápido, seguro e automatizado para operações urbanas.',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      style={{
        background: '#020202',
        color: '#fff',
        padding: '160px 40px',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '100px',
          }}
        >
          <p
            style={{
              color: '#00d9ff',
              letterSpacing: '5px',
              marginBottom: '20px',
              fontSize: '14px',
            }}
          >
            COMO FUNCIONA
          </p>

          <h2
            style={{
              fontSize: 'clamp(42px, 6vw, 74px)',
              lineHeight: '1.1',
              marginBottom: '30px',
            }}
          >
            Tecnologia integrada
            <br />
            em três etapas
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
          }}
        >
          {steps.map((item) => (
            <div
              key={item.number}
              style={{
                background: 'linear-gradient(180deg, #0b0b0b 0%, #050505 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '30px',
                padding: '42px',
              }}
            >
              <div
                style={{
                  fontSize: '72px',
                  fontWeight: '900',
                  color: 'rgba(0,217,255,0.12)',
                  marginBottom: '20px',
                }}
              >
                {item.number}
              </div>

              <h3
                style={{
                  fontSize: '32px',
                  marginBottom: '20px',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: '#999',
                  lineHeight: '1.8',
                  fontSize: '17px',
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
