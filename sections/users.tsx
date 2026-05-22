'use client';

import { useState } from 'react';

export default function UsersSection() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Carlos Silva',
      email: 'carlos@email.com',
      role: 'Administrador',
    },
    {
      id: 2,
      name: 'Fernanda Lima',
      email: 'fernanda@email.com',
      role: 'Operador',
    },
  ]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function createUser() {
    if (!name || !email) return;

    setUsers([
      ...users,
      {
        id: Date.now(),
        name,
        email,
        role: 'Operador',
      },
    ]);

    setName('');
    setEmail('');
  }

  return (
    <section
      style={{
        marginTop: '50px',
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.06)',
        borderRadius: '30px',
        padding: '30px',
      }}
    >
      <h2
        style={{
          fontSize: '32px',
          marginBottom: '30px',
        }}
      >
        Gerenciamento de Usuários
      </h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
          gap: '18px',
          marginBottom: '30px',
        }}
      >
        <input
          placeholder="Nome do usuário"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />

        <input
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={createUser}
          style={{
            background: 'linear-gradient(135deg,#00d9ff,#0066ff)',
            border: 'none',
            color: '#fff',
            borderRadius: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Criar Usuário
        </button>
      </div>

      <div
        style={{
          overflowX: 'auto',
        }}
      >
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr
              style={{
                textAlign: 'left',
                color: '#00d9ff',
              }}
            >
              <th style={thStyle}>Nome</th>
              <th style={thStyle}>E-mail</th>
              <th style={thStyle}>Perfil</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <td style={tdStyle}>{user.name}</td>

                <td style={tdStyle}>{user.email}</td>

                <td style={tdStyle}>
                  <span
                    style={{
                      background: 'rgba(0,217,255,0.12)',
                      color: '#00d9ff',
                      padding: '8px 14px',
                      borderRadius: '999px',
                      fontSize: '13px',
                      fontWeight: 'bold',
                    }}
                  >
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
};

const thStyle = {
  paddingBottom: '18px',
};

const tdStyle = {
  padding: '20px 0',
};
