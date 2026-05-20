export default function Footer() {
    return (
      <footer
        style={{
          padding: '80px 30px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '60px',
            justifyContent: 'space-between',
          }}
        >
          {/* BRAND */}
          <div
            style={{
              flex: '1 1 300px',
            }}
          >
            <h2
              style={{
                color: '#22d3ee',
                fontSize: '36px',
                marginBottom: '20px',
              }}
            >
              LIRA TAG
            </h2>
  
            <p
              style={{
                color: '#9ca3af',
                lineHeight: '1.9',
                maxWidth: '400px',
              }}
            >
              Plataforma de mobilidade inteligente preparada para
              transformar pedágios, estacionamentos e cidades inteligentes.
            </p>
          </div>
  
          {/* LINKS */}
          <div>
            <h3
              style={{
                marginBottom: '20px',
              }}
            >
              Navegação
            </h3>
  
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                color: '#9ca3af',
              }}
            >
              <span>Início</span>
              <span>Tecnologia</span>
              <span>Mercado</span>
              <span>Contato</span>
            </div>
          </div>
  
          {/* CONTACT */}
          <div>
            <h3
              style={{
                marginBottom: '20px',
              }}
            >
              Contato
            </h3>
  
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                color: '#9ca3af',
              }}
            >
              <span>contato@liratag.com</span>
              <span>São Paulo - Brasil</span>
              <span>Mobilidade Inteligente</span>
            </div>
          </div>
        </div>
  
        <div
          style={{
            marginTop: '80px',
            paddingTop: '30px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            textAlign: 'center',
            color: '#6b7280',
            fontSize: '14px',
          }}
        >
          © 2026 LIRA TAG — Todos os direitos reservados.
        </div>
      </footer>
    );
  }