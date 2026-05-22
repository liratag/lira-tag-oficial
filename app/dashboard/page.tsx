'use client';

import { useState } from 'react';

import TagsSection from '../../sections/tags';
import UsersSection from '../../sections/users';
import AnalyticsSection from '../../sections/analytics';

export default function DashboardPage() {
  const [active, setActive] = useState('tags');

  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top right,#001a22,#000)',
        color: '#fff',
        display: 'flex',
        fontFamily: 'Arial',
      }}
    >
      {/* SIDEBAR */}

      <aside
        style={{
          width: '280px',
          borderRight: '1px solid rgba(255,255,255,0.06)',
          padding: '40px 20px',
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        <div
          style={{
            color: '#00d9ff',
            fontSize: '42px',
            fontWeight: '900',
            lineHeight: '0.9',
            marginBottom: '60px',
          }}
        >
          LIRA
          <br />
          TAG
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '18px',
          }}
        >
          <button
            onClick={() => setActive('tags')}
            style={menuButton(active === 'tags')}
          >
            TAGs
          </button>

          <button
            onClick={() => setActive('users')}
            style={menuButton(active === 'users')}
          >
            Usuários
          </button>

          <button
            onClick={() => setActive('analytics')}
            style={menuButton(active === 'analytics')}
          >
            Analytics
          </button>
        </div>
      </aside>

      {/* CONTENT */}

      <section
        style={{
          flex: 1,
          padding: '50px',
        }}
      >
        {active === 'tags' && <TagsSection />}

        {active === 'users' && <UsersSection />}

        {active === 'analytics' && <AnalyticsSection />}
      </section>
    </main>
  );
}

function menuButton(active: boolean) {
  return {
    background: active
      ? 'linear-gradient(135deg,#00d9ff,#0066ff)'
      : 'rgba(255,255,255,0.03)',

    border: active ? 'none' : '1px solid rgba(255,255,255,0.06)',

    color: '#fff',

    padding: '18px',

    borderRadius: '18px',

    cursor: 'pointer',

    fontSize: '16px',

    fontWeight: 'bold',

    textAlign: 'left' as const,
  };
}
