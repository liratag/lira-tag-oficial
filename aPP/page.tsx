
export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #000000, #07172a)',
        color: 'white',
        fontFamily: 'Arial',
        padding: '60px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '40px'
      }}
    >
      <div style={{ maxWidth: '600px' }}>
        <p
          style={{
            color: '#22d3ee',
            letterSpacing: '4px',
            fontSize: '14px',
            marginBottom: '20px'
          }}
        >
          RFID / UHF
        </p>

        <h1
          style={{
            fontSize: '72px',
            fontWeight: '900',
            marginBottom: '20px'
          }}
        >
          LIRA TAG
        </h1>

        <p
          style={{
            fontSize: '28px',
            lineHeight: '42px',
            color: '#d4d4d8',
            marginBottom: '40px'
          }}
        >
          A nova geração da mobilidade inteligente vinculada ao CPF.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap'
          }}
        >
          <button
            style={{
              background: '#22d3ee',
              color: 'black',
              border: 'none',
              padding: '18px 32px',
              borderRadius: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Solicitar Demonstração
          </button>

          <button
            style={{
              background: 'transparent',
              color: 'white',
              border: '1px solid #22d3ee',
              padding: '18px 32px',
              borderRadius: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            Área do Investidor
          </button>
        </div>
      </div>

      <div
        style={{
          width: '420px',
          height: '260px',
          borderRadius: '28px',
          background: 'linear-gradient(145deg, #0f172a, #1e293b)',
          border: '1px solid #22d3ee',
          boxShadow: '0 0 40px rgba(34,211,238,0.35)',
          padding: '30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <div>
            <h2
              style={{
                fontSize: '54px',
                margin: 0,
                fontWeight: '900'
              }}
            >
              LIRA
            </h2>

            <span
              style={{
                color: '#22d3ee',
                letterSpacing: '10px'
              }}
            >
              TAG
            </span>
          </div>

          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '10px',
              background: '#22d3ee'
            }}
          />
        </div>

        <div
          style={{
            width: '100%',
            height: '8px',
            background: '#334155',
            borderRadius: '999px',
            overflow: 'hidden'
          }}
        >
          <div
            style={{
              width: '70%',
              height: '100%',
              background: '#22d3ee'
            }}
          />
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            color: '#94a3b8',
            fontSize: '14px'
          }}
        >
          <span>RFID / UHF</span>
          <span>SMART MOBILITY</span>
        </div>
      </div>
    </main>
  );
}
