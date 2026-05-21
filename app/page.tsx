export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #000000, #07172a)',
        color: '#ffffff',
        fontFamily: 'Arial',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
      >
        <div>
          <p
            style={{
              color: '#00d9ff',
              letterSpacing: '4px',
              marginBottom: '20px',
              fontSize: '14px',
            }}
          >
            TECNOLOGIA • MOBILIDADE • IDENTIDADE
          </p>

          <h1
            style={{
              fontSize: '72px',
              lineHeight: '0.95',
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
              fontSize: '28px',
              color: '#ccefff',
              lineHeight: '1.6',
              marginBottom: '40px',
              maxWidth: '500px',
            }}
          >
            A nova geração da mobilidade inteligente vinculada ao CPF.
          </p>

          <button
            style={{
              background: '#00d9ff',
              color: '#000',
              border: 'none',
              padding: '18px 40px',
              borderRadius: '16px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            Entrar na Plataforma
          </button>
        </div>

        <div
          style={{
            width: '100%',
            height: '500px',
            borderRadius: '40px',
            background:
              'linear-gradient(135deg, #00d9ff, #0044ff)',
            boxShadow: '0 0 80px rgba(0,217,255,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '64px',
            fontWeight: 'bold',
          }}
        >
          TAG
        </div>
      </div>
    </main>
  );
}
