export default function Technology() {
    return (
      <section
        style={{
          padding: '140px 30px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
          }}
        >
          {/* TITLE */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '100px',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(42px, 8vw, 72px)',
                marginBottom: '25px',
              }}
            >
              Tecnologia Inteligente
            </h2>
  
            <p
              style={{
                fontSize: '22px',
                color: '#9ca3af',
                maxWidth: '900px',
                margin: '0 auto',
                lineHeight: '1.8',
              }}
            >
              A LIRA TAG conecta veículos, usuários e infraestrutura
              urbana em uma experiência moderna de mobilidade.
            </p>
          </div>
  
          {/* GRID */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '30px',
            }}
          >
            {[
              {
                title: 'CPF Inteligente',
                text: 'A TAG acompanha o usuário e não apenas a placa do veículo.',
              },
              {
                title: 'Integração Total',
                text: 'Pedágios, estacionamentos, condomínios e mobilidade urbana.',
              },
              {
                title: 'Tecnologia UHF',
                text: 'Leitura rápida, segura e preparada para alto fluxo.',
              },
              {
                title: 'Experiência Premium',
                text: 'Interface moderna, ativação rápida e ecossistema inteligente.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="premium-card"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '32px',
                  padding: '45px',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '20px',
                    background: 'rgba(34,211,238,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '30px',
                    color: '#22d3ee',
                    fontSize: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  0{index + 1}
                </div>
  
                <h3
                  style={{
                    fontSize: '32px',
                    marginBottom: '20px',
                    color: '#22d3ee',
                  }}
                >
                  {item.title}
                </h3>
  
                <p
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.9',
                    color: '#d1d5db',
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }