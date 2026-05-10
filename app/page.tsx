"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// ─── Data ────────────────────────────────────────────────────────

const SERVICES = [
  {
    num: "01",
    title: "Thérapie Individuelle",
    tag: "Écoute · Profondeur",
    desc: "Un espace sécurisé et confidentiel pour explorer vos émotions, surmonter les blocages et vous reconnecter à votre authenticité la plus profonde.",
  },
  {
    num: "02",
    title: "Gestion de l'Anxiété",
    tag: "Outils · Sérénité",
    desc: "Des techniques éprouvées pour transformer le stress chronique en force intérieure — et retrouver enfin la paix qui vous appartient.",
  },
  {
    num: "03",
    title: "Développement Personnel",
    tag: "Croissance · Vision",
    desc: "Un accompagnement sur mesure pour révéler votre plein potentiel, clarifier vos valeurs et créer consciemment la vie que vous méritez.",
  },
  {
    num: "04",
    title: "Thérapie de Couple",
    tag: "Connexion · Harmonie",
    desc: "Reconstruire la connexion authentique, améliorer la communication et cultiver une relation épanouissante et durable dans le temps.",
  },
];

const STATS = [
  { value: "15+", label: "Années d'expérience" },
  { value: "500+", label: "Clients accompagnés" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "4.9 ★", label: "Note moyenne" },
];

const STEPS = [
  {
    roman: "I",
    title: "Première rencontre",
    desc: "Un échange sans jugement pour comprendre votre situation, vos besoins et définir ensemble les objectifs de votre parcours.",
  },
  {
    roman: "II",
    title: "Analyse & Plan",
    desc: "Élaboration d'un programme thérapeutique personnalisé, adapté à votre rythme et à vos objectifs uniques.",
  },
  {
    roman: "III",
    title: "Transformation",
    desc: "Un suivi continu et bienveillant pour vous accompagner vers un mieux-être profond et une vie pleinement vécue.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Gosto Thérapie a transformé ma vie. En quelques mois, j'ai appris à gérer mon anxiété et à m'affirmer. Un accompagnement exceptionnel, humain et profond.",
    author: "Sarah M.",
    since: "Cliente depuis 2 ans",
  },
  {
    quote:
      "L'approche bienveillante et les outils concrets ont fait toute la différence. Je recommande à toute personne cherchant un vrai soutien professionnel.",
    author: "Thomas L.",
    since: "Client depuis 1 an",
  },
  {
    quote:
      "Après des années à me battre contre moi-même, j'ai enfin trouvé la paix intérieure. Merci pour ce voyage de transformation sincère et durable.",
    author: "Marie-Claire D.",
    since: "Cliente depuis 6 mois",
  },
];

const CREDENTIALS = [
  "Psychothérapie cognitive",
  "Thérapie EMDR",
  "Pleine conscience",
  "Approche systémique",
];

// ─── Reusable fade-up variant ────────────────────────────────────

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeUp = {
  initial: { opacity: 0, y: 44 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: EASE },
};

// ─── Section label helper ────────────────────────────────────────

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div style={{ height: 1, width: 48, background: "rgba(201,165,90,0.4)" }} />
      <span
        style={{
          color: "#C9A55A",
          fontSize: 11,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          fontWeight: 500,
        }}
      >
        {children}
      </span>
    </div>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: EASE }}
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 50,
        transition: "all 0.4s ease",
        padding: scrolled ? "14px 0" : "22px 0",
        background: scrolled ? "rgba(6,9,16,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,165,90,0.1)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <motion.div
            whileHover={{ boxShadow: "0 0 22px rgba(201,165,90,0.45)" }}
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #C9A55A 0%, #1E7A73 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <span
              className="font-serif"
              style={{ color: "#060910", fontWeight: 700, fontSize: 13 }}
            >
              GT
            </span>
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span style={{ color: "#EDE8DF", fontWeight: 600, fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase" }}>
              Gosto
            </span>
            <span style={{ color: "#C9A55A", fontSize: 10, letterSpacing: "0.32em", textTransform: "uppercase", marginTop: 3 }}>
              Thérapie
            </span>
          </div>
        </a>

        {/* Nav links */}
        <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
          {[
            ["Services", "#services"],
            ["À propos", "#about"],
            ["Approche", "#approach"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              style={{
                color: "#7A7D8E",
                fontSize: 13,
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#EDE8DF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7A7D8E")}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(201,165,90,0.4)" }}
          whileTap={{ scale: 0.97 }}
          style={{
            padding: "10px 22px",
            background: "#C9A55A",
            color: "#060910",
            fontWeight: 600,
            fontSize: 13,
            borderRadius: 999,
            textDecoration: "none",
            transition: "background 0.2s",
          }}
        >
          Rendez-vous
        </motion.a>
      </div>
    </motion.header>
  );
}

// ─── Hero ────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "#060910",
      }}
    >
      {/* Orbs */}
      <div
        className="animate-float-slow"
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,122,115,0.22) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />
      <div
        className="animate-float-medium"
        style={{
          position: "absolute",
          bottom: "20%",
          right: "12%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,165,90,0.18) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 350,
          height: 350,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(46,171,159,0.1) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      {/* Dot grid */}
      <div
        className="dot-grid"
        style={{ position: "absolute", inset: 0, opacity: 0.35, pointerEvents: "none" }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          maxWidth: 960,
          margin: "0 auto",
          padding: "120px 24px 0",
        }}
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            padding: "8px 20px",
            borderRadius: 999,
            border: "1px solid rgba(201,165,90,0.25)",
            background: "rgba(201,165,90,0.07)",
            marginBottom: 44,
          }}
        >
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9A55A" }} />
          <span style={{ color: "#C9A55A", fontSize: 11, fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase" }}>
            Thérapie &amp; Bien-être · Paris
          </span>
        </motion.div>

        {/* Headline — word by word */}
        <h1 className="font-serif" style={{ fontSize: "clamp(3.2rem, 10vw, 8.5rem)", lineHeight: 0.88, letterSpacing: "-0.02em", marginBottom: 28 }}>
          {[
            { text: "Retrouvez", delay: 0.45, gold: false },
            { text: "l'équilibre", delay: 0.6, gold: true, italic: true },
            { text: "intérieur", delay: 0.75, gold: false },
          ].map(({ text, delay, gold, italic }) => (
            <motion.span
              key={text}
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{ delay, duration: 1.05, ease: EASE }}
              style={{ display: "block", fontStyle: italic ? "italic" : "normal" }}
              className={gold ? "gradient-text" : ""}
            >
              {!gold && <span style={{ color: "#EDE8DF" }}>{text}</span>}
              {gold && text}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          style={{
            color: "#7A7D8E",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            maxWidth: 560,
            margin: "0 auto 48px",
            lineHeight: 1.7,
          }}
        >
          Un accompagnement thérapeutique profond et bienveillant pour transformer vos
          défis en forces et révéler la meilleure version de vous-même.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.8 }}
          style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, boxShadow: "0 0 44px rgba(201,165,90,0.45)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "16px 36px",
              background: "#C9A55A",
              color: "#060910",
              fontWeight: 700,
              fontSize: 14,
              borderRadius: 999,
              textDecoration: "none",
              letterSpacing: "0.04em",
            }}
          >
            Commencer votre parcours →
          </motion.a>
          <motion.a
            href="#services"
            whileHover={{ scale: 1.03, borderColor: "rgba(201,165,90,0.45)", color: "#EDE8DF" }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: "16px 36px",
              border: "1px solid rgba(237,232,223,0.15)",
              color: "rgba(237,232,223,0.75)",
              fontWeight: 500,
              fontSize: 14,
              borderRadius: 999,
              textDecoration: "none",
              letterSpacing: "0.04em",
              transition: "all 0.25s ease",
            }}
          >
            Découvrir mes services
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          style={{
            position: "absolute",
            bottom: -60,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: 1,
              height: 44,
              background: "linear-gradient(to bottom, rgba(201,165,90,0.6), transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

// ─── Stats ───────────────────────────────────────────────────────

function Stats() {
  return (
    <section
      style={{
        padding: "56px 0",
        borderTop: "1px solid rgba(201,165,90,0.1)",
        borderBottom: "1px solid rgba(201,165,90,0.1)",
        background: "rgba(12,15,26,0.55)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 32,
          }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09, duration: 0.65 }}
              style={{ textAlign: "center" }}
            >
              <div
                className="font-serif gradient-text"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", fontWeight: 700, marginBottom: 6 }}
              >
                {s.value}
              </div>
              <div style={{ color: "#7A7D8E", fontSize: 13, letterSpacing: "0.04em" }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ────────────────────────────────────────────────────

function Services() {
  return (
    <section id="services" style={{ padding: "112px 0", position: "relative", overflow: "hidden" }}>
      {/* Accent orb */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,122,115,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div {...fadeUp} style={{ marginBottom: 64 }}>
          <SectionLabel>Services</SectionLabel>
          <h2
            className="font-serif"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#EDE8DF", lineHeight: 1.08, marginBottom: 18 }}
          >
            Mon approche{" "}
            <em className="gradient-text" style={{ fontStyle: "italic" }}>
              thérapeutique
            </em>
          </h2>
          <p style={{ color: "#7A7D8E", fontSize: 17, maxWidth: 560, lineHeight: 1.7 }}>
            Chaque parcours est unique. Je vous accompagne avec des méthodes éprouvées et une
            présence authentique pour transformer votre quotidien en profondeur.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 20 }}>
          {SERVICES.map((srv, i) => (
            <motion.div
              key={srv.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.75, ease: EASE }}
              whileHover={{ y: -5 }}
              className="card-glass"
              style={{ borderRadius: 20, padding: 36, cursor: "default" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 22 }}>
                <span
                  className="font-serif"
                  style={{ fontSize: 56, fontWeight: 700, color: "rgba(201,165,90,0.18)", lineHeight: 1, transition: "color 0.3s" }}
                >
                  {srv.num}
                </span>
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: 999,
                    border: "1px solid rgba(201,165,90,0.18)",
                    background: "rgba(201,165,90,0.07)",
                    color: "#C9A55A",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                  }}
                >
                  {srv.tag}
                </span>
              </div>
              <h3 className="font-serif" style={{ fontSize: 22, color: "#EDE8DF", marginBottom: 10 }}>
                {srv.title}
              </h3>
              <p style={{ color: "#7A7D8E", fontSize: 14, lineHeight: 1.7 }}>{srv.desc}</p>
              <div style={{ marginTop: 22, display: "flex", alignItems: "center", gap: 8, color: "#C9A55A", fontSize: 13 }}>
                <span>En savoir plus</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── About ───────────────────────────────────────────────────────

function About() {
  return (
    <section
      id="about"
      style={{ padding: "112px 0", background: "rgba(10,13,22,0.5)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,165,90,0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 80,
          alignItems: "center",
        }}
      >
        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: -44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: EASE }}
          style={{ position: "relative" }}
        >
          {/* Portrait frame */}
          <div
            style={{
              aspectRatio: "4 / 5",
              borderRadius: 28,
              background: "linear-gradient(135deg, rgba(30,122,115,0.28) 0%, rgba(201,165,90,0.18) 100%)",
              border: "1px solid rgba(201,165,90,0.15)",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                className="font-serif gradient-text"
                style={{ fontSize: 96, fontWeight: 700, lineHeight: 1, opacity: 0.6, marginBottom: 12 }}
              >
                GT
              </div>
              <div style={{ color: "#7A7D8E", fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase" }}>
                Gosto Thérapie
              </div>
            </div>
            {/* Decorative rings */}
            <div
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                width: 80,
                height: 80,
                borderRadius: "50%",
                border: "1px solid rgba(201,165,90,0.2)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                width: 50,
                height: 50,
                borderRadius: "50%",
                border: "1px solid rgba(30,122,115,0.3)",
              }}
            />
          </div>

          {/* Floating card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              bottom: -28,
              right: -28,
              background: "#0D1220",
              border: "1px solid rgba(201,165,90,0.2)",
              borderRadius: 16,
              padding: "14px 20px",
              boxShadow: "0 20px 50px rgba(0,0,0,0.4)",
            }}
          >
            <div
              className="font-serif gradient-text"
              style={{ fontSize: 30, fontWeight: 700, lineHeight: 1 }}
            >
              15+
            </div>
            <div style={{ color: "#7A7D8E", fontSize: 12, marginTop: 4 }}>années d'expertise</div>
          </motion.div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.95, ease: EASE, delay: 0.1 }}
        >
          <SectionLabel>À propos</SectionLabel>
          <h2
            className="font-serif"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", color: "#EDE8DF", lineHeight: 1.1, marginBottom: 22 }}
          >
            Une présence authentique
            <br />
            <em className="gradient-text" style={{ fontStyle: "italic" }}>
              à vos côtés
            </em>
          </h2>
          <div style={{ color: "#7A7D8E", fontSize: 15, lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 16, marginBottom: 28 }}>
            <p>
              Thérapeute certifié avec plus de 15 ans d'expérience, j'accompagne les individus et
              les couples dans leur chemin vers le mieux-être. Ma pratique intègre différentes
              approches pour répondre à chaque besoin unique.
            </p>
            <p>
              Je crois profondément que chaque personne porte en elle les ressources nécessaires à
              sa transformation. Mon rôle est de créer l'espace sécurisé qui permet à ces
              ressources de s'exprimer pleinement.
            </p>
          </div>

          {/* Credentials */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "10px 20px",
              marginBottom: 36,
            }}
          >
            {CREDENTIALS.map((c) => (
              <div key={c} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#C9A55A", flexShrink: 0 }} />
                <span style={{ color: "rgba(237,232,223,0.65)", fontSize: 13 }}>{c}</span>
              </div>
            ))}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03, boxShadow: "0 0 32px rgba(201,165,90,0.38)" }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "15px 32px",
              background: "#C9A55A",
              color: "#060910",
              fontWeight: 700,
              fontSize: 13,
              borderRadius: 999,
              textDecoration: "none",
            }}
          >
            Prendre rendez-vous →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Approach ────────────────────────────────────────────────────

function Approach() {
  return (
    <section id="approach" style={{ padding: "112px 0", position: "relative" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 80 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 18 }}>
            <div style={{ height: 1, width: 48, background: "rgba(201,165,90,0.4)" }} />
            <span style={{ color: "#C9A55A", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 500 }}>
              Processus
            </span>
            <div style={{ height: 1, width: 48, background: "rgba(201,165,90,0.4)" }} />
          </div>
          <h2
            className="font-serif"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#EDE8DF", lineHeight: 1.1 }}
          >
            Le parcours de{" "}
            <em className="gradient-text" style={{ fontStyle: "italic" }}>
              transformation
            </em>
          </h2>
        </motion.div>

        {/* Steps */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32, position: "relative" }}>
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: 52,
              left: "18%",
              right: "18%",
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(201,165,90,0.2), transparent)",
            }}
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.roman}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.75 }}
              style={{ textAlign: "center" }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  border: "2px solid rgba(201,165,90,0.3)",
                  background: "#060910",
                  marginBottom: 24,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <span
                  className="font-serif"
                  style={{ color: "#C9A55A", fontSize: 17, fontWeight: 600 }}
                >
                  {step.roman}
                </span>
              </div>
              <h3
                className="font-serif"
                style={{ fontSize: 22, color: "#EDE8DF", marginBottom: 12 }}
              >
                {step.title}
              </h3>
              <p style={{ color: "#7A7D8E", fontSize: 14, lineHeight: 1.7 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────

function Testimonials() {
  return (
    <section
      style={{ padding: "112px 0", background: "rgba(10,13,22,0.5)", position: "relative", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 420,
          height: 420,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(30,122,115,0.1) 0%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px" }}>
        <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 18 }}>
            <div style={{ height: 1, width: 48, background: "rgba(201,165,90,0.4)" }} />
            <span style={{ color: "#C9A55A", fontSize: 11, letterSpacing: "0.28em", textTransform: "uppercase", fontWeight: 500 }}>
              Témoignages
            </span>
            <div style={{ height: 1, width: 48, background: "rgba(201,165,90,0.4)" }} />
          </div>
          <h2
            className="font-serif"
            style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#EDE8DF", lineHeight: 1.1 }}
          >
            Des vies{" "}
            <em className="gradient-text" style={{ fontStyle: "italic" }}>
              transformées
            </em>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.72 }}
              className="card-glass"
              style={{ borderRadius: 20, padding: 32 }}
            >
              {/* Stars */}
              <div style={{ display: "flex", gap: 3, marginBottom: 22 }}>
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} style={{ color: "#C9A55A", fontSize: 13 }}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p style={{ color: "rgba(237,232,223,0.78)", fontSize: 14, lineHeight: 1.75, fontStyle: "italic", marginBottom: 24 }}>
                "{t.quote}"
              </p>

              {/* Author */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  paddingTop: 18,
                  borderTop: "1px solid rgba(201,165,90,0.1)",
                }}
              >
                <div
                  style={{
                    width: 38,
                    height: 38,
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #1E7A73, #C9A55A)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <span style={{ color: "#060910", fontWeight: 700, fontSize: 13 }}>
                    {t.author[0]}
                  </span>
                </div>
                <div>
                  <div style={{ color: "#EDE8DF", fontSize: 13, fontWeight: 500 }}>{t.author}</div>
                  <div style={{ color: "#7A7D8E", fontSize: 12, marginTop: 2 }}>{t.since}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contact / CTA ───────────────────────────────────────────────

function Contact() {
  return (
    <section id="contact" style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      {/* Central glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 640,
          height: 640,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,165,90,0.1) 0%, transparent 65%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div {...fadeUp}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "7px 18px",
              borderRadius: 999,
              border: "1px solid rgba(201,165,90,0.25)",
              background: "rgba(201,165,90,0.07)",
              marginBottom: 36,
            }}
          >
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9A55A" }} />
            <span style={{ color: "#C9A55A", fontSize: 11, fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase" }}>
              Première consultation offerte
            </span>
          </div>

          {/* Headline */}
          <h2
            className="font-serif"
            style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", color: "#EDE8DF", lineHeight: 1.05, marginBottom: 20 }}
          >
            Prêt à commencer
            <br />
            <em className="gradient-text" style={{ fontStyle: "italic" }}>
              votre transformation ?
            </em>
          </h2>

          <p style={{ color: "#7A7D8E", fontSize: 17, maxWidth: 520, margin: "0 auto 48px", lineHeight: 1.7 }}>
            La première consultation est offerte. Prenez rendez-vous dès aujourd'hui et
            faites le premier pas vers la vie que vous méritez.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 60 }}>
            <motion.a
              href="tel:+33123456789"
              whileHover={{ scale: 1.03, boxShadow: "0 0 48px rgba(201,165,90,0.5)" }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "18px 40px",
                background: "#C9A55A",
                color: "#060910",
                fontWeight: 700,
                fontSize: 15,
                borderRadius: 999,
                textDecoration: "none",
              }}
            >
              Appeler maintenant
            </motion.a>
            <motion.a
              href="mailto:contact@gostotherapie.fr"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "18px 40px",
                border: "1px solid rgba(237,232,223,0.15)",
                color: "rgba(237,232,223,0.75)",
                fontWeight: 500,
                fontSize: 15,
                borderRadius: 999,
                textDecoration: "none",
                transition: "all 0.25s",
              }}
            >
              Envoyer un message
            </motion.a>
          </div>

          {/* Contact info */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 20,
              paddingTop: 36,
              borderTop: "1px solid rgba(201,165,90,0.1)",
            }}
          >
            {[
              ["Téléphone", "+33 1 23 45 67 89"],
              ["Email", "contact@gostotherapie.fr"],
              ["Localisation", "Paris, France"],
            ].map(([label, value]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ color: "#C9A55A", fontSize: 10, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: 5 }}>
                  {label}
                </div>
                <div style={{ color: "rgba(237,232,223,0.65)", fontSize: 13 }}>{value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────

function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(201,165,90,0.1)",
        padding: "36px 0",
        background: "#060910",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #C9A55A, #1E7A73)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span className="font-serif" style={{ color: "#060910", fontWeight: 700, fontSize: 11 }}>GT</span>
          </div>
          <span style={{ color: "rgba(237,232,223,0.45)", fontSize: 13 }}>Gosto Thérapie</span>
        </div>

        <p style={{ color: "#7A7D8E", fontSize: 12 }}>
          © {new Date().getFullYear()} Gosto Thérapie. Tous droits réservés.
        </p>

        <div style={{ display: "flex", gap: 28 }}>
          {["Confidentialité", "Mentions légales", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              style={{ color: "#7A7D8E", fontSize: 12, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#EDE8DF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#7A7D8E")}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Approach />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
