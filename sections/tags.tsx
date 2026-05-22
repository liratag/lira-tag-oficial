'use client';

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function TagsSection() {
  const [tags, setTags] = useState<any[]>([]);

  const [code, setCode] = useState('');
  const [owner, setOwner] = useState('');

  async function loadTags() {
    const { data } = await supabase
      .from('tags')
      .select('*')
      .order('id', { ascending: false });

    if (data) {
      setTags(data);
    }
  }

  async function createTag() {
    if (!code || !owner) return;

    await supabase.from('tags').insert([
      {
        code,
        owner,
      },
    ]);

    setCode('');
    setOwner('');

    loadTags();
  }

  useEffect(() => {
    loadTags();
  }, []);

  return (
    <section
      style={{
        marginTop: '40px',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          marginBottom: '30px',
        }}
      >
        <input
          placeholder="Código da TAG"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="Proprietário"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
          style={inputStyle}
        />

        <button onClick={createTag} style={buttonStyle}>
          Criar TAG
        </button>
      </div>

      <div
        style={{
          display: 'grid',
          gap: '20px',
        }}
      >
        {tags.map((tag) => (
          <div
            key={tag.id}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '24px',
              padding: '24px',
            }}
          >
            <h3
              style={{
                fontSize: '22px',
                marginBottom: '12px',
              }}
            >
              {tag.code}
            </h3>

            <p
              style={{
                color: '#999',
                marginBottom: '10px',
              }}
            >
              Proprietário: {tag.owner}
            </p>

            <span
              style={{
                color: '#00d9ff',
                fontWeight: 'bold',
              }}
            >
              {tag.status}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const inputStyle = {
  background: 'rgba(255,255,255,0.03)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '16px',
  padding: '16px',
  color: '#fff',
  outline: 'none',
  minWidth: '240px',
};

const buttonStyle = {
  background: 'linear-gradient(135deg,#00d9ff,#0066ff)',
  border: 'none',
  color: '#fff',
  padding: '16px 24px',
  borderRadius: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
};
