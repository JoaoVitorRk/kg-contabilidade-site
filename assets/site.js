// K&G Contabilidade · prévia RK Performance
(function () {
  document.documentElement.classList.remove('no-js');
  document.documentElement.classList.add('js');

  // cabeçalho muda de fundo depois da abertura
  var topo = document.querySelector('.topo');
  function fixo() { topo.classList.toggle('fixo', window.scrollY > 40); }
  fixo();
  window.addEventListener('scroll', fixo, { passive: true });

  // reveal on scroll
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  // as palavras marcadas do hero entram logo
  document.querySelectorAll('.hero').forEach(function (h) { setTimeout(function () { h.classList.add('in'); }, 1600); });

  // letreiro movido por JS (não depende de @keyframes nem de "reduzir movimento")
  document.querySelectorAll('.letreiro').forEach(function (box) {
    var faixa = box.querySelector('.letreiro-faixa');
    if (!faixa) return;
    var base = faixa.innerHTML;
    faixa.innerHTML = base + base + base;
    var x = 0, ultimo = null, meio = 0;
    function mede() { meio = faixa.scrollWidth / 3; }
    mede();
    window.addEventListener('resize', mede);
    function anda(t) {
      if (ultimo !== null) {
        var dt = Math.min(50, t - ultimo) / 1000;
        x -= 42 * dt;
        if (-x >= meio) x += meio;
        faixa.style.transform = 'translate3d(' + x + 'px,0,0)';
      }
      ultimo = t;
      requestAnimationFrame(anda);
    }
    requestAnimationFrame(anda);
  });

  // parallax leve, só desktop e só sem "reduzir movimento"
  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var pars = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
  if (pars.length && !reduz && window.innerWidth > 860) {
    var ticking = false;
    function move() {
      pars.forEach(function (el) {
        var r = el.getBoundingClientRect();
        var f = parseFloat(el.getAttribute('data-parallax')) || 0.05;
        var d = (r.top + r.height / 2 - window.innerHeight / 2) * f;
        el.style.transform = 'translate3d(0,' + d.toFixed(1) + 'px,0)';
      });
      ticking = false;
    }
    window.addEventListener('scroll', function () { if (!ticking) { requestAnimationFrame(move); ticking = true; } }, { passive: true });
    move();
  }


  // menu do celular
  var mb = document.querySelector('.menu-botao'), mc = document.getElementById('menu-cel');
  if (mb && mc) {
    var fechaMenu = function () { mc.hidden = true; mb.setAttribute('aria-expanded', 'false'); document.body.classList.remove('menu-aberto'); };
    mb.addEventListener('click', function () {
      var abrir = mc.hidden;
      mc.hidden = !abrir;
      mb.setAttribute('aria-expanded', String(abrir));
      document.body.classList.toggle('menu-aberto', abrir);
      topo.classList.add('fixo');
    });
    mc.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', fechaMenu); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') fechaMenu(); });
  }

  // barra do WhatsApp no celular: aparece depois dos botões da abertura e some no fechamento
  var barra = document.querySelector('.barra-cel');
  if (barra) {
    var heroBtns = document.querySelector('.hero-acoes');
    var fim = document.querySelector('#contato');
    var noHero = !!heroBtns, noFim = false;
    var atualiza = function () {
      var v = !noHero && !noFim;
      barra.classList.toggle('visivel', v);
      barra.setAttribute('aria-hidden', v ? 'false' : 'true');
      var a = barra.querySelector('a'); if (a) a.tabIndex = v ? 0 : -1;
    };
    var ob = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (en.target === heroBtns) noHero = en.isIntersecting || en.boundingClientRect.top > 0;
        if (en.target === fim) noFim = en.isIntersecting;
      });
      atualiza();
    });
    if (heroBtns) ob.observe(heroBtns);
    if (fim) ob.observe(fim);
    atualiza();
  }

  // só uma dúvida aberta por vez
  document.querySelectorAll('.faq details').forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (!d.open) return;
      d.parentNode.querySelectorAll('details[open]').forEach(function (o) { if (o !== d) o.open = false; });
    });
  });
})();
