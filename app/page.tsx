export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #000000, #07172a)',
        color: 'white',
        fontFamily: 'Arial',
        padding: '60px',
      }}
    >
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div>
          <p
            style={{
              color: '#00d9ff',
              letterSpacing: '4px',
              fontSize: '14px',
              marginBottom: '20px',
            }}
          >
            TECNOLOGIA • MOBILIDADE • IDENTIDADE
          </p>

          <h1
            style={{
              fontSize: '90px',
              lineHeight: '0.9',
              marginBottom: '30px',
              fontWeight: 'bold',
            }}
          >
            LIRA
            <br />
            TAG
          </h1>

          <p
            style={{
              fontSize: '42px',
              lineHeight: '1.3',
              marginBottom: '40px',
              color: '#ffffff',
              maxWidth: '500px',
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
                padding: '18px 32px',
                borderRadius: '12px',
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
                padding: '18px 32px',
                borderRadius: '12px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Saiba Mais
            </button>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '320px',
              height: '600px',
              borderRadius: '40px',
              background:
                'linear-gradient(to bottom, #3ad7ff, #005eff)',
              boxShadow: '0 0 60px rgba(0,217,255,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '72px',
              fontWeight: 'bold',
            }}
          >
            TAG
          </div>
        </div>
      </section>
    </main>
  );
}
