'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    setLoaded(true);

    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(circle at top right, rgba(0,217,255,0.18), transparent 35%), radial-gradient(circle at bottom left, rgba(0,102,255,0.12), transparent 30%), #050505',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '160px 40px 100px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'rgba(0,217,255,0.08)',
          filter: 'blur(120px)',
          top: `calc(50% + ${offsetY * 0.2}px)`,
          right: '-200px',
          transform: 'translateY(-50%)',
          transition: '0.1s linear',
        }}
      />

      <div
        style={{
          width: '100%',
          maxWidth: '1400px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '80px',
          alignItems: 'center',

          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0px)' : 'translateY(40px)',
          transition: 'all 1s ease',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div>
          <p
            style={{
              color: '#00d9ff',
              letterSpacing: '6px',
              marginBottom: '30px',
              fontSize: '14px',
            }}
          >
            TECNOLOGIA • MOBILIDADE • IDENTIDADE
          </p>

          <h1
            style={{
              fontSize: 'clamp(72px, 12vw, 130px)',
              lineHeight: '0.88',
              fontWeight: '900',
              marginBottom: '40px',
            }}
          >
            LIRA
            <br />
            TAG
          </h1>

          <p
            style={{
              fontSize: 'clamp(22px, 4vw, 34px)',
              lineHeight: '1.5',
              color: '#d8d8d8',
              maxWidth: '700px',
              marginBottom: '50px',
            }}
          >
            A nova geração da mobilidade inteligente vinculada ao CPF.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap',
            }}
          >
            <button
              style={{
                background: 'linear-gradient(135deg, #00d9ff 0%, #0066ff 100%)',
                border: 'none',
                color: '#fff',
                padding: '18px 36px',
                borderRadius: '18px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                boxShadow: '0 0 40px rgba(0,217,255,0.35)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow =
                  '0 0 60px rgba(0,217,255,0.55)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0px)';
                e.currentTarget.style.boxShadow =
                  '0 0 40px rgba(0,217,255,0.35)';
              }}
            >
              Entrar na Plataforma
            </button>

            <button
              style={{
                background: 'transparent',
                border: '1px solid rgba(0,217,255,0.5)',
                color: '#00d9ff',
                padding: '18px 36px',
                borderRadius: '18px',
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
            alignItems: 'center',
            position: 'relative',
            transform: `translateY(${offsetY * -0.08}px)`,
            transition: '0.1s linear',
          }}
        >
          <div
            style={{
              width: '300px',
              height: '580px',
              borderRadius: '42px',
              background: 'linear-gradient(180deg, #48dcff 0%, #005eff 100%)',
              boxShadow: '0 0 120px rgba(0,217,255,0.45)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '-80px',
                right: '-60px',
                width: '220px',
                height: '220px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
              }}
            />

            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '72px',
                fontWeight: '900',
              }}
            >
              TAG
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
