import GlassCard from './GlassCard';
import Reveal from './Reveal';
export default function Stats() {
    return (
          <section
        style={{
          padding: '120px 30px',
          background: '#020202',
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
          <div
            style={{
              textAlign: 'center',
              marginBottom: '80px',
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(42px, 8vw, 72px)',
                marginBottom: '20px',
                color: '#fff',
              }}
            >
              Mercado Bilionário
            </h2>
  
            <p
              style={{
                fontSize: '22px',
                color: '#9ca3af',
              }}
            >
              O Brasil possui um dos maiores potenciais de mobilidade inteligente.
            </p>
          </div>
  
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '30px',
            }}
          >
            {[
              {
                number: '+120M',
                label: 'Veículos',
              },
              {
                number: '70%',
                label: 'Sem TAG',
              },
              {
                number: '1 TAG',
                label: 'Multi Veículos',
              },
              {
                number: '∞',
                label: 'Escalabilidade',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="premium-card"
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '30px',
                  padding: '50px 30px',
                  textAlign: 'center',
                  backdropFilter: 'blur(12px)',
                }}
              >
                <h3
                  style={{
                    fontSize: '64px',
                    color: '#22d3ee',
                    marginBottom: '15px',
                  }}
                >
                  {item.number}
                </h3>
  
                <p
                  style={{
                    color: '#d1d5db',
                    fontSize: '20px',
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }