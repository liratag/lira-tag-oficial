'use client';

export default function Footer() {
  return (
    <footer
      style={{
        background: '#020202',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '80px 40px',
        color: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '60px',
        }}
      >
        <div>
          <h2
            style={{
              color: '#00d9ff',
              fontSize: '42px',
              lineHeight: '0.9',
              marginBottom: '25px',
            }}
          >
            LIRA
            <br />
            TAG
          </h2>

          <p
            style={{
              color: '#888',
              lineHeight: '1.8',
              maxWidth: '340px',
            }}
          >
            Tecnologia inteligente para mobilidade, autenticação e identificação
            integrada.
          </p>
        </div>

        <div>
          <h3
            style={{
              marginBottom: '22px',
              fontSize: '22px',
            }}
          >
            Plataforma
          </h3>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <a href="#" style={linkStyle}>
              Tecnologia
            </a>

            <a href="#" style={linkStyle}>
              Mobilidade
            </a>

            <a href="#" style={linkStyle}>
              Segurança
            </a>
          </div>
        </div>

        <div>
          <h3
            style={{
              marginBottom: '22px',
              fontSize: '22px',
            }}
          >
            Contato
          </h3>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              color: '#888',
            }}
          >
            <p>contato@liratag.com</p>
            <p>São Paulo • Brasil</p>
            <p>+55 11 99999-9999</p>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: '1400px',
          margin: '80px auto 0',
          paddingTop: '30px',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          color: '#666',
          fontSize: '14px',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        <p>© 2026 LIRA TAG. Todos os direitos reservados.</p>

        <p>Tecnologia • Mobilidade • Identidade</p>
      </div>
    </footer>
  );
}

const linkStyle = {
  color: '#999',
  textDecoration: 'none',
  transition: '0.3s',
};
