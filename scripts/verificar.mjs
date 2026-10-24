// Bloqueia a publicação se houver marcas "A PREENCHER" ou pedidos a terceiros.
import { readFileSync, readdirSync } from 'node:fs';
let erro = 0;
for (const f of readdirSync('dist').filter(f => f.endsWith('.html'))) {
  const t = readFileSync(`dist/${f}`, 'utf8');
  if (t.includes('A PREENCHER')) { console.error(`✗ ${f}: tem "A PREENCHER"`); erro++; }
  if (/(src|href)="https?:\/\/(fonts\.|www\.google|cdn)/.test(t)) { console.error(`✗ ${f}: pedido a terceiros`); erro++; }
  if (/<script/.test(t)) { console.error(`✗ ${f}: tem script`); erro++; }
}
process.exit(erro ? 1 : 0);
