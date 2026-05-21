export default function Home() {
  return (
    <main
      style={{
        background: '#000',
        color: '#fff',
        fontFamily: 'Arial',
      }}
    >
      {/* NAVBAR */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          padding: '24px 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backdropFilter: 'blur(12px)',
          background: 'rgba(0,0,0,0.6)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          zIndex: 1000,
        }}
      >
        <h2
          style={{
            color: '#00d9ff',
            fontSize: '28px',
            fontWeight: 'bold',
          }}
        >
          LIRA TAG
        </h2>

        <nav
          style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}
        >
          <a style={{ color: '#fff', textDecoration: 'none' }}>Tecnologia</a>
          <a style={{ color: '#fff', textDecoration: 'none' }}>Mobilidade</a>
          <a style={{ color: '#fff', textDecoration: 'none' }}>Plataforma</a>

          <button
            style={{
              background: '#00d9ff',
              color: '#000',
              border: 'none',
              padding: '14px 24px',
              borderRadius: '12px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Entrar
          </button>
        </nav>
      </header>

      {/* HERO */}
      <section
        style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          padding: '140px 60px 80px',
          gap: '60px',
          background:
            'radial-gradient(circle at center, rgba(0,217,255,0.15), transparent 50%)',
        }}
      >
        <div>
          <p
            style={{
              color: '#00d9ff',
              letterSpacing: '4px',
              marginBottom: '24px',
              fontSize: '14px',
            }}
          >
            TECNOLOGIA • MOBILIDADE • IDENTIDADE
          </p>

          <h1
            style={{
              fontSize: '110px',
              lineHeight: '0.9',
              marginBottom: '32px',
              fontWeight: 'bold',
            }}
          >
            LIRA
            <br />
            TAG
          </h1>

          <p
            style={{
              fontSize: '38px',
              lineHeight: '1.4',
              maxWidth: '600px',
              marginBottom: '40px',
              color: '#d4d4d4',
            }}
          >
            A nova geração da mobilidade inteligente vinculada ao CPF.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '20px',
            }}
          >
            <button
              style={{
                background: '#00d9ff',
                color: '#000',
                border: 'none',
                padding: '18px 34px',
                borderRadius: '14px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Entrar na Plataforma
            </button>

            <button
              style={{
                background: 'transparent',
                color: '#00d9ff',
                border: '2px solid #00d9ff',
                padding: '18px 34px',
                borderRadius: '14px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Saiba Mais
            </button>
          </div>
        </div>

        {/* CARD TAG */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '340px',
              height: '620px',
              borderRadius: '42px',
              background:
                'linear-gradient(to bottom, #3ad7ff, #005eff)',
              boxShadow: '0 0 80px rgba(0,217,255,0.4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-100px',
                right: '-100px',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
              }}
            />

            <h2
              style={{
                fontSize: '82px',
                fontWeight: 'bold',
              }}
            >
              TAG
            </h2>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section
        style={{
          padding: '120px 60px',
          background: '#050505',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <h2
            style={{
              fontSize: '54px',
              marginBottom: '60px',
              textAlign: 'center',
            }}
          >
            Como Funciona
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '30px',
            }}
          >
            {[
              'Cadastro Inteligente',
              'Integração CPF',
              'Mobilidade Digital',
            ].map((item) => (
              <div
                key={item}
                style={{
                  padding: '40px',
                  borderRadius: '24px',
                  background: '#0a0a0a',
                  border: '1px solid rgba(255,255,255,0.08)',
                  boxShadow: '0 0 30px rgba(0,217,255,0.08)',
                }}
              >
                <h3
                  style={{
                    fontSize: '28px',
                    marginBottom: '20px',
                  }}
                >
                  {item}
                </h3>

                <p
                  style={{
                    color: '#a8b8c7',
                    lineHeight: '1.8',
                  }}
                >
                  Tecnologia avançada para gerenciamento moderno de identidade e mobilidade integrada.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: '50px',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          textAlign: 'center',
          color: '#8a8a8a',
          background: '#000',
        }}
      >
        © 2026 Lira TAG — Tecnologia e Mobilidade Inteligente
      </footer>
    </main>
  );
}
