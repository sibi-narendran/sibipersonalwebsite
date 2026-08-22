import React from 'react';
import ReactDOM from 'react-dom/client';
import './blog.css';

const Blog = () => (
  <main className="blog-page">
    <nav className="blog-nav">
      <a href="/" className="blog-brand">Sibi Narendran<span>.</span></a>
      <a href="/" className="blog-back">← Portfolio</a>
    </nav>

    <section className="blog-hero">
      <p className="blog-kicker">Blog</p>
      <h1>Ideas worth testing.</h1>
      <p>Writing on intelligence, systems, and building companies.</p>
    </section>

    <article className="post">
      <header className="post-header">
        <p className="post-meta">22 AUG 2026 · A WORKING THESIS</p>
        <h2>We may not need a 3D world to begin building AGI.</h2>
        <p className="post-lede">Before we simulate every object, force, and falling apple, we can create a world made of words—one in which agents have memory, goals, actions, and consequences.</p>
      </header>

      <div className="post-body">
        <p>The usual picture of artificial general intelligence is a fully embodied machine: it sees a room, understands gravity, picks up objects, and moves through a photorealistic 3D world. That may be part of the destination. It does not have to be the beginning.</p>
        <p>We already have large language models. They can communicate, write code, plan, use tools, and represent an enormous amount of human knowledge in language. But today’s LLMs are best understood as training wheels—not the final vehicle.</p>

        <h3>From next-token prediction to thriving</h3>
        <p>An LLM is trained mainly to predict the next token. That objective has produced remarkable behaviour, but prediction is not the same as an intelligence that lives through the consequences of its choices. A more capable kind of model may need to learn to thrive in a world.</p>
        <p>Thriving means pursuing goals over time, remembering what happened, adapting after failure, building useful strategies, cooperating when cooperation helps, and changing course when the world proves it wrong. Its loop is not just prompt and answer:</p>
        <p className="learning-loop">words → understanding → action → consequence → memory → adaptation</p>
        <p>The hard research problem is making that learning continuous, useful, and safe. Not every conversation should rewrite a model’s weights. Learning can begin through durable memory, retrieval, skill libraries, reflection, simulation, and carefully evaluated updates. What matters is that experience compounds.</p>

        <h3>A text world can be a real training ground</h3>
        <p>Imagine a persistent world described entirely in text. It has places, resources, rules, time, and history. Inside it are many agents. Each has a role, private goals, incomplete information, memory, and a limited set of actions.</p>
        <p>They can talk, create, trade, build, play, negotiate, form alliances, compete, make promises, deceive, recover, and win. The environment records what actually happened. If an agent claims it has food, the world checks. If it makes a trade, resources move. If it breaks trust, other agents can remember.</p>
        <p>This is not a chat room with good improvisation. It is a causal environment. The world has state; actions change that state; later decisions inherit the result.</p>

        <h3>Let the agents meet chaos</h3>
        <p>Intelligence does not emerge from a perfectly predictable script. A useful world needs uncertainty: scarcity, changing conditions, conflicting incentives, misinformation, accidents, new tasks, and the occasional strategy nobody expected.</p>
        <p>In that controlled chaos, agents must learn to model one another, distinguish signals from noise, decide when to trust, and revise their plans. They should fail often enough that failure becomes data. An agent that negotiates badly ten times should not approach the eleventh negotiation as if nothing happened.</p>
        <p>Multiple agents matter because other agents create the richest kind of environment: one that adapts back. Competition can reveal weak strategies. Cooperation can reveal coordination. Conversation can become action rather than performance.</p>

        <h3>Why text first</h3>
        <p>Text is a powerful abstraction of the real world. It compresses objects, relationships, rules, institutions, history, intent, and social dynamics into something we can inspect and simulate at speed. We can run far more text-world episodes than expensive 3D simulations, replay failures, change rules, and understand why an agent acted as it did.</p>
        <p>We do not need gravity on day one. We need causality on day one.</p>
        <p>Physical intuition, vision, video, and robotics will matter. But they can arrive progressively: first text worlds, then code and tools, then images and video, then simulated 3D environments, and eventually the physical world. Each layer adds a richer form of feedback without forcing us to solve all of embodiment before we can study agency.</p>

        <h3>Our bet at Dooza</h3>
        <p>At Dooza, we believe much of what agents learn in a persistent text world can transfer: planning, communication, tool use, memory, social reasoning, incentives, and the habit of learning from consequences. It is not a claim that text alone is AGI. It is a claim that text is an unusually good first school for it.</p>
        <p>Over time, a continual-learning system may acquire new skills, new modules, and new pathways as the world demands them. The important shift is from a static model that answers questions to an evolving agent that develops through experience—under careful evaluation and strong safety boundaries.</p>
        <p>The path to something more capable may not begin by recreating the whole universe. It may begin with a small world, a few agents, a set of rules, and the freedom to learn what happens next.</p>

        <aside className="source-note"><strong>Inspiration:</strong> the idea is partly inspired by watching AI learn through repeated attempts and measurable feedback in <a href="https://www.youtube.com/watch?v=zFLQU70QstY" target="_blank" rel="noreferrer">Yosh’s Trackmania project</a>. The proposal here extends that learning loop into a persistent, social, text-first world.</aside>
      </div>
    </article>
  </main>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode><Blog /></React.StrictMode>
);
