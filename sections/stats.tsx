'use client';

export default function Stats() {
  return (
    <section
      id="stats"
      style={{
        background: '#050505',
        padding: '140px 40px',
        color: '#fff',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '30px',
        }}
      >
        {[
          ['+2M', 'Leituras processadas'],
          ['99.9%', 'Precisão operacional'],
          ['24/7', 'Disponibilidade'],
          ['UHF', 'Tecnologia inteligente'],
        ].map(([number, text]) => (
          <div
            key={number}
            style={{
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <h3
              style={{
                fontSize: '56px',
                color: '#00d9ff',
                marginBottom: '12px',
              }}
            >
              {number}
            </h3>

            <p
              style={{
                color: '#999',
                fontSize: '18px',
              }}
            >
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
