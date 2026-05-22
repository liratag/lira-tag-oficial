'use client';

const benefits = [
  {
    title: 'Identidade Inteligente',
    desc: 'Sua TAG vinculada diretamente ao CPF com autenticação segura e integrada.',
    icon: '◉',
  },
  {
    title: 'Mobilidade Total',
    desc: 'Acesso rápido a estacionamentos, pedágios, condomínios e serviços urbanos.',
    icon: '↗',
  },
  {
    title: 'Tecnologia UHF',
    desc: 'Leitura ultra rápida e longa distância com máxima precisão operacional.',
    icon: '⌁',
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      style={{
        background: '#050505',
        padding: '140px 40px',
        color: '#fff',
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
            marginBottom: '80px',
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
            BENEFÍCIOS
          </p>

          <h2
            style={{
              fontSize: 'clamp(42px, 6vw, 72px)',
              lineHeight: '1.1',
              maxWidth: '900px',
            }}
          >
            Tecnologia criada para uma nova geração de mobilidade.
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px',
          }}
        >
          {benefits.map((item) => (
            <div
              key={item.title}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '28px',
                padding: '40px',
              }}
            >
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '22px',
                  background:
                    'linear-gradient(135deg, #00d9ff 0%, #0066ff 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '32px',
                  marginBottom: '30px',
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: '30px',
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
