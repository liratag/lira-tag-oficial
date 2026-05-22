'use client';

import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 999,
        background: 'rgba(0,0,0,0.92)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
        backdropFilter: 'blur(12px)',
      }}
    >
      <nav
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '22px 40px',
        }}
      >
        {/* LOGO */}

        <div
          style={{
            color: '#00d9ff',
            fontSize: '28px',
            fontWeight: '900',
            lineHeight: '0.9',
            cursor: 'pointer',
          }}
        >
          LIRA
          <br />
          TAG
        </div>

        {/* MENU */}

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '50px',
          }}
        >
          <a href="#tecnologia" style={linkStyle}>
            Tecnologia
          </a>

          <a href="#mobilidade" style={linkStyle}>
            Mobilidade
          </a>

          <a href="#plataforma" style={linkStyle}>
            Plataforma
          </a>

          <button
            onClick={() => router.push('/login')}
            style={{
              background: 'linear-gradient(135deg,#00d9ff,#0066ff)',
              border: 'none',
              color: '#fff',
              padding: '16px 34px',
              borderRadius: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '16px',
              boxShadow: '0 0 30px rgba(0,217,255,0.25)',
            }}
          >
            Entrar
          </button>
        </div>
      </nav>
    </header>
  );
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontWeight: '600',
  fontSize: '16px',
};
