export default function CTA() {
    return (
      <section
        style={{
          padding: '160px 30px',
          position: 'relative',
          zIndex: 1,
          overflow: 'hidden',
        }}
      >
        {/* GLOW */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '700px',
            background: '#22d3ee',
            opacity: 0.08,
            borderRadius: '50%',
            filter: 'blur(180px)',
          }}
        />
  
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: 'inline-block',
              padding: '12px 22px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.08)',
              marginBottom: '35px',
              background: 'rgba(255,255,255,0.03)',
              color: '#22d3ee',
              fontSize: '14px',
              letterSpacing: '2px',
            }}
          >
            MOBILIDADE DO FUTURO
          </div>
  
          <h2
            style={{
              fontSize: 'clamp(48px, 8vw, 90px)',
              lineHeight: '1.05',
              marginBottom: '35px',
            }}
          >
            O Futuro da
            <br />
            Mobilidade Já Começou
          </h2>
  
          <p
            style={{
              fontSize: '24px',
              lineHeight: '1.9',
              color: '#9ca3af',
              maxWidth: '900px',
              margin: '0 auto',
              marginBottom: '60px',
            }}
          >
            A LIRA TAG está preparada para revolucionar pedágios,
            estacionamentos e cidades inteligentes com uma plataforma
            premium baseada em tecnologia, integração e experiência.
          </p>
  
          <div
            style={{
              display: 'flex',
              gap: '20px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <button
              className="premium-button"
              style={{
                padding: '22px 46px',
                borderRadius: '18px',
                border: 'none',
                background: '#22d3ee',
                color: '#000',
                fontSize: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 0 50px rgba(34,211,238,0.3)',
              }}
            >
              Quero Conhecer
            </button>
  
            <button
              className="premium-button"
              style={{
                padding: '22px 46px',
                borderRadius: '18px',
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.03)',
                color: '#fff',
                fontSize: '20px',
                cursor: 'pointer',
              }}
            >
              Área Investidores
            </button>
          </div>
        </div>
      </section>
    );
  }