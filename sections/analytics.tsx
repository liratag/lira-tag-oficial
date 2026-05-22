'use client';

import { useEffect, useState } from 'react';

import { supabase } from '../lib/supabase';

export default function AnalyticsSection() {
  const [totalTags, setTotalTags] = useState(0);

  async function loadAnalytics() {
    const { count } = await supabase.from('tags').select('*', {
      count: 'exact',
      head: true,
    });

    setTotalTags(count || 0);
  }

  useEffect(() => {
    loadAnalytics();
  }, []);

  return (
    <section>
      <h1
        style={{
          fontSize: '42px',
          marginBottom: '40px',
        }}
      >
        Analytics
      </h1>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
          gap: '24px',
        }}
      >
        <Card title="TAGs Ativas" value={totalTags} />

        <Card title="Usuários" value="12" />

        <Card title="Autenticações" value="1.248" />

        <Card title="Performance" value="99.9%" />
      </div>
    </section>
  );
}

function Card({ title, value }: { title: string; value: any }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '28px',
        padding: '34px',
      }}
    >
      <p
        style={{
          color: '#888',
          marginBottom: '18px',
          fontSize: '18px',
        }}
      >
        {title}
      </p>

      <h2
        style={{
          fontSize: '52px',
          color: '#00d9ff',
        }}
      >
        {value}
      </h2>
    </div>
  );
}
