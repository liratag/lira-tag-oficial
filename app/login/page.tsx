'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { supabase } from '../../lib/supabase';

export default function LoginPage() {
  const router = useRouter();

  const [isRegister, setIsRegister] = useState(false);

  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');

  const [name, setName] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleAuth() {
    setLoading(true);

    if (isRegister) {
      const { error } = await supabase.auth.signUp({
        email,
        password,

        options: {
          data: {
            name,
          },
        },
      });

      setLoading(false);

      if (error) {
        alert(error.message);
        return;
      }

      alert('Conta criada com sucesso. Verifique seu e-mail.');

      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push('/dashboard');
  }

  async function resetPassword() {
    if (!email) {
      alert('Digite seu e-mail para recuperar sua senha.');

      return;
    }

    const { error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
      alert(error.message);
      return;
    }

    alert('E-mail de recuperação enviado.');
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at top right,#001a22,#000)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        fontFamily: 'Arial',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          background: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(255,255,255,0.06)',

          borderRadius: '40px',

          padding: '50px',

          backdropFilter: 'blur(20px)',

          boxShadow: '0 0 80px rgba(0,217,255,0.08)',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          <h1
            style={{
              color: '#00d9ff',
              fontSize: '72px',
              lineHeight: '0.9',
              marginBottom: '20px',
              fontWeight: '900',
            }}
          >
            LIRA
            <br />
            TAG
          </h1>

          <p
            style={{
              color: '#888',
              fontSize: '18px',
              lineHeight: '1.7',
            }}
          >
            Plataforma inteligente de mobilidade e autenticação integrada.
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
          }}
        >
          {isRegister && (
            <input
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
            />
          )}

          <input
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            type="password"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          <button onClick={handleAuth} style={buttonStyle}>
            {loading
              ? 'Carregando...'
              : isRegister
              ? 'Criar Conta'
              : 'Entrar na Plataforma'}
          </button>
        </div>

        <div
          style={{
            marginTop: '35px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <button onClick={() => setIsRegister(!isRegister)} style={linkButton}>
            {isRegister ? 'Já tenho conta' : 'Criar conta'}
          </button>

          <button onClick={resetPassword} style={linkButton}>
            Esqueci minha senha
          </button>
        </div>

        <div
          style={{
            marginTop: '40px',
            textAlign: 'center',
            color: '#666',
            fontSize: '15px',
          }}
        >
          © 2026 Lira TAG
        </div>
      </div>
    </main>
  );
}

const inputStyle = {
  background: 'rgba(255,255,255,0.03)',

  border: '1px solid rgba(255,255,255,0.08)',

  borderRadius: '20px',

  padding: '22px',

  color: '#fff',

  outline: 'none',

  fontSize: '17px',
};

const buttonStyle = {
  background: 'linear-gradient(135deg,#00d9ff,#0066ff)',

  border: 'none',

  color: '#fff',

  padding: '22px',

  borderRadius: '22px',

  fontSize: '20px',

  fontWeight: 'bold',

  cursor: 'pointer',

  marginTop: '10px',

  boxShadow: '0 0 40px rgba(0,217,255,0.25)',
};

const linkButton = {
  background: 'transparent',

  border: 'none',

  color: '#00d9ff',

  cursor: 'pointer',

  fontSize: '16px',

  fontWeight: '600',
};
