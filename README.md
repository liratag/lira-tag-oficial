export default function LiraTagWebsite() {
              className="h-16 rounded-2xl bg-black border border-zinc-800 px-6 text-lg outline-none focus:border-cyan-400"
            />

            <input
              type="password"
              placeholder="Sua senha"
              className="h-16 rounded-2xl bg-black border border-zinc-800 px-6 text-lg outline-none focus:border-cyan-400"
            />
          </div>

          <button className="mt-8 w-full h-16 rounded-2xl bg-cyan-400 text-black text-xl font-black hover:scale-[1.01] transition-all duration-300">
            Entrar na Plataforma
          </button>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-28 px-8 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Contato
            </p>

            <h2 className="text-5xl font-black leading-tight">
              Vamos construir o futuro da mobilidade
            </h2>

            <p className="text-zinc-400 text-lg mt-8 max-w-xl leading-relaxed">
              Estrutura preparada para expansão nacional, parcerias com
              concessionárias e integração com ecossistemas inteligentes.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <button className="h-16 rounded-2xl bg-green-500 text-black font-black text-lg hover:scale-[1.02] transition-all duration-300">
              WhatsApp Comercial
            </button>

            <button className="h-16 rounded-2xl border border-zinc-700 bg-zinc-900 text-white font-bold text-lg hover:bg-zinc-800 transition-all duration-300">
              contato@liratag.com.br
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900 py-10 px-8 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-6">
          <div>
            <div className="text-3xl font-black">
              LIRA <span className="text-cyan-400">TAG</span>
            </div>
            <div className="text-zinc-500 mt-2">
              Mobilidade Inteligente • RFID • UHF • Cloud Platform
            </div>
          </div>

          <div className="text-zinc-600 text-sm">
            © 2026 Lira TAG — Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
