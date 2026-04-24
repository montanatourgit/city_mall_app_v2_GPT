import "./hotkey-game-preview.css";

const modeCards = [
  {
    title: "Timeline Rescue",
    app: "Premiere Pro",
    accent: "accent-premiere",
    description: "Patch broken cuts, snap to markers, and keep playback moving without touching the mouse.",
    stats: ["90 sec rounds", "J K L flow", "Cut and trim drills"],
  },
  {
    title: "Keyframe Cascade",
    app: "After Effects",
    accent: "accent-aftereffects",
    description: "Reveal properties, slam easing shortcuts, and survive rapid-fire animation prompts.",
    stats: ["Combo streaks", "P S T U memory", "Layer panic events"],
  },
  {
    title: "Mixed Relay",
    app: "Pr + Ae",
    accent: "accent-hybrid",
    description: "Swap between editing and motion design prompts before your focus meter breaks.",
    stats: ["Alternating apps", "Boss rounds", "Leaderboard ready"],
  },
];

const timelineClips = [
  { label: "Interview", style: "clip clip-cyan", width: "28%" },
  { label: "B-roll", style: "clip clip-orange", width: "18%" },
  { label: "Titles", style: "clip clip-lime", width: "16%" },
  { label: "FX pass", style: "clip clip-violet", width: "22%" },
];

const incidentFeed = [
  { label: "Preview playback", combo: "J  K  L", app: "Pr" },
  { label: "Mark range", combo: "I  O", app: "Pr" },
  { label: "Reveal animation", combo: "U", app: "Ae" },
  { label: "Transform panel", combo: "P  S  T", app: "Ae" },
];

const keyboardRows = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const activeKeys = new Map([
  ["J", "key-premiere"],
  ["K", "key-premiere"],
  ["L", "key-premiere"],
  ["I", "key-premiere"],
  ["O", "key-premiere"],
  ["B", "key-premiere"],
  ["N", "key-premiere"],
  ["P", "key-aftereffects"],
  ["S", "key-aftereffects"],
  ["T", "key-aftereffects"],
  ["U", "key-aftereffects"],
  ["C", "key-hybrid"],
]);

function KeyCaps() {
  return (
    <div className="keyboard-card">
      <div className="panel-label">Memory Map</div>
      <div className="keyboard-grid">
        {keyboardRows.map((row) => (
          <div key={row.join("")} className="keyboard-row">
            {row.map((key) => (
              <div
                key={key}
                className={`keycap ${activeKeys.get(key) ?? ""}`}
                aria-label={`Keyboard key ${key}`}
              >
                {key}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="keyboard-legend">
        <span>
          <i className="legend-dot legend-premiere" />
          Premiere drills
        </span>
        <span>
          <i className="legend-dot legend-aftereffects" />
          After Effects drills
        </span>
        <span>
          <i className="legend-dot legend-hybrid" />
          Shared boss prompts
        </span>
      </div>
    </div>
  );
}

function StagePreview() {
  return (
    <section className="stage-shell" aria-label="Live game mockup">
      <div className="stage-topbar">
        <div>
          <div className="panel-label">Live Round</div>
          <strong>Mixed Relay / Rank Preview</strong>
        </div>
        <div className="hud-pill">Streak x12</div>
        <div className="hud-pill">Time 01:18</div>
        <div className="hud-pill hud-pill-alert">Focus 84%</div>
      </div>

      <div className="stage-main">
        <aside className="stage-sidebar">
          <div className="mission-card">
            <div className="panel-label">Round Goal</div>
            <h3>Repair 5 timeline mistakes before the client review timer hits zero.</h3>
            <p>
              Every correct shortcut restores your edit bay. Mouse usage freezes the combo meter.
            </p>
          </div>

          <div className="incident-card">
            <div className="panel-label">Shortcut Feed</div>
            {incidentFeed.map((item) => (
              <div key={`${item.app}-${item.combo}`} className="incident-row">
                <div>
                  <strong>{item.label}</strong>
                  <span>{item.app}</span>
                </div>
                <code>{item.combo}</code>
              </div>
            ))}
          </div>
        </aside>

        <div className="stage-focus">
          <div className="timeline-card">
            <div className="timeline-header">
              <span className="panel-label">Timeline Pressure</span>
              <span className="timeline-warning">Marker drift detected</span>
            </div>
            <div className="timeline-ruler">
              <span>00:06</span>
              <span>00:12</span>
              <span>00:18</span>
              <span>00:24</span>
            </div>
            <div className="timeline-lane">
              {timelineClips.map((clip) => (
                <div key={clip.label} className={clip.style} style={{ width: clip.width }}>
                  {clip.label}
                </div>
              ))}
              <div className="playhead">
                <span />
              </div>
            </div>
          </div>

          <div className="challenge-card">
            <div className="challenge-copy">
              <div className="panel-label">Current Prompt</div>
              <h2>The motion designer needs to reveal every animated property right now.</h2>
              <p>
                The layer stack is collapsing. Hit the correct hotkey before the focus meter drops.
              </p>
            </div>

            <div className="answer-block">
              <div className="answer-chip answer-chip-ae">After Effects</div>
              <div className="answer-key">U</div>
              <div className="answer-note">Reveal animated properties</div>
            </div>
          </div>

          <KeyCaps />
        </div>

        <aside className="stage-rail">
          <div className="score-card">
            <div className="panel-label">Score</div>
            <strong>18,420</strong>
            <span>3 perfect recoveries</span>
          </div>

          <div className="score-card compact">
            <div className="panel-label">Boss Queue</div>
            <ul>
              <li>Razor cut panic</li>
              <li>Easy Ease burst</li>
              <li>Playback speed scramble</li>
            </ul>
          </div>

          <div className="score-card compact">
            <div className="panel-label">Reward Loop</div>
            <ul>
              <li>Unlock themed edit bays</li>
              <li>Daily shortcut ladders</li>
              <li>Studio team leaderboards</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

function PreviewPanel({ eyebrow, title, text, accent }) {
  return (
    <div className={`mini-panel ${accent}`}>
      <div className="panel-label">{eyebrow}</div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default function HotkeyGamePreview() {
  return (
    <div className="hotkey-preview">
      <div className="backdrop-glow backdrop-left" />
      <div className="backdrop-glow backdrop-right" />

      <header className="preview-header">
        <div>
          <span className="eyebrow">Concept Preview</span>
          <h1>Cut, Comp, Conquer</h1>
          <p className="lede">
            A browser game for Premiere Pro and After Effects users that turns shortcut recall into
            a fast, high-pressure edit bay challenge.
          </p>
        </div>

        <div className="badge-row">
          <span className="top-badge">Browser game</span>
          <span className="top-badge">Keyboard-first</span>
          <span className="top-badge">Editor muscle memory</span>
        </div>
      </header>

      <main className="preview-layout">
        <section className="hero-column">
          <div className="hero-card">
            <div className="hero-copy">
              <span className="eyebrow">Visual Direction</span>
              <h2>Part edit suite, part arcade gauntlet.</h2>
              <p>
                The interface leans into cinematic control-room energy: glowing timelines, crisp
                keycaps, urgent prompt cards, and just enough motion to feel alive without drowning
                the player in UI.
              </p>
            </div>

            <div className="hero-tags">
              <span>Premiere drills</span>
              <span>After Effects drills</span>
              <span>Mixed boss rounds</span>
            </div>

            <div className="mode-grid">
              {modeCards.map((mode) => (
                <article key={mode.title} className={`mode-card ${mode.accent}`}>
                  <div className="mode-kicker">{mode.app}</div>
                  <h3>{mode.title}</h3>
                  <p>{mode.description}</p>
                  <div className="mode-stats">
                    {mode.stats.map((stat) => (
                      <span key={stat}>{stat}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mini-panel-grid">
            <PreviewPanel
              eyebrow="Moment to Moment"
              title="See the problem. Slam the shortcut. Save the edit."
              text="Each round asks for recognition under pressure rather than rote flashcard repetition."
              accent="accent-premiere"
            />
            <PreviewPanel
              eyebrow="Progression"
              title="Rank up from Assistant Editor to Finishing Wizard."
              text="Streaks, unlocks, and daily drills keep the shortcut practice loop sticky."
              accent="accent-aftereffects"
            />
            <PreviewPanel
              eyebrow="Tone"
              title="Confident, sleek, and a little theatrical."
              text="The page stays readable on desktop and mobile, with one main playfield and compact support panels."
              accent="accent-hybrid"
            />
          </div>
        </section>

        <StagePreview />
      </main>
    </div>
  );
}
