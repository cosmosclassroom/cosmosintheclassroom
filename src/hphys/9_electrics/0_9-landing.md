---
layout: default
title: Unit 9 Electricity Landing Page
author: Jonathan Corbett
permalink: /9-electricity/
---

<style>
    .unit-header {
        background: linear-gradient(135deg, #4b6cb7 0%, #182848 100%);
        color: white;
        padding: 2rem;
        border-radius: 8px;
        margin-bottom: 2rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    .unit-header h1 {
        margin-top: 0;
        font-size: 2.5rem;
    }
    
    .unit-header p {
        font-size: 1.2rem;
        margin-bottom: 0;
        opacity: 0.9;
    }
    
    .content-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
    }
    
    .card {
        background: white;
        border-radius: 8px;
        padding: 1.5rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s, box-shadow 0.2s;
        border-top: 4px solid #4b6cb7;
    }
    
    .card:hover {
        transform: translateY(-5px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    
    .card h3 {
        margin-top: 0;
        color: #333;
        display: flex;
        align-items: center;
    }
    
    .card-icon {
        margin-right: 10px;
        font-size: 1.5rem;
        color: #4b6cb7;
    }
    
    .button {
        display: inline-block;
        padding: 10px 20px;
        background: #4b6cb7;
        color: white;
        border-radius: 4px;
        text-decoration: none;
        font-weight: bold;
        margin-top: 10px;
        transition: background 0.3s;
    }
    
    .button:hover {
        background: #3a5795;
    }
    
    .resource-list {
        list-style-type: none;
        padding-left: 0;
        margin-left: 0;
    }
    
    .resource-list li {
        margin-bottom: 8px;
    }
    
    .resource-list li a {
        display: block;
        padding: 8px 10px;
        border-radius: 4px;
        text-decoration: none;
        color: #333;
        transition: background 0.2s;
    }
    
    .resource-list li a:hover {
        background: #f0f4ff;
    }
    
    .section-title {
        color: #4b6cb7;
        border-bottom: 2px solid #4b6cb7;
        padding-bottom: 8px;
        margin-top: 2rem;
    }
    
    /* Icons for the electrical theme */
    .electricity-icon::before {
        content: "⚡";
        margin-right: 8px;
    }
    
    .problem-icon::before {
        content: "📝";
        margin-right: 8px;
    }
    
    .lab-icon::before {
        content: "🔬";
        margin-right: 8px;
    }
    
    .teacher-icon::before {
        content: "👩‍🏫";
        margin-right: 8px;
    }
</style>

<div class="unit-header">
    <h1>⚡ Unit 9: Electricity</h1>
    <p>Explore the fundamental principles of electric circuits, current, resistance, and electrical power</p>
</div>

<h2 class="section-title electricity-icon">Core Materials</h2>

<div class="content-grid">
    <div class="card">
        <h3><span class="card-icon">📊</span>Lecture Slides</h3>
        <p>Comprehensive slides covering electricity concepts, circuit analysis, and electrical applications</p>
        <a href="https://cosmosintheclassroom.org/slides/hlec_9.2-electricity-currents.html" target="_blank" class="button">View Electricity Slides</a>
    </div>
</div>

<h2 class="section-title problem-icon">Problem Sets</h2>

<div class="content-grid">
    <div class="card">
        <h3><span class="card-icon">🔌</span>Electric Current</h3>
        <p>Practice problems on current flow, Ohm's law, and resistance calculations</p>
        <a href="ps_9.1_electrical-current.md" class="button">PS 9.1</a>
        <a href="ps_9.1_electrical-current-key.md" class="button">Answer Key</a>
    </div>
    
<div class="card">
        <h3><span class="card-icon">🔄</span>Circuit Analysis</h3>
        <p>Work through problems involving series and parallel circuits</p>
        <a href="ps_9.2_circuit-practice.md" class="button">PS 9.2</a>
        <a href="ps_9.2_circuit-practice-key.md" class="button">Answer Key</a>
    </div>
    
<div class="card">
        <h3><span class="card-icon">💡</span>Electric Power</h3>
        <p>Calculate power in electrical systems and energy consumption</p>
        <a href="ps_9.3_electric-power.md" class="button">PS 9.3</a>
        <a href="ps_9.3_electric-power-key.md" class="button">Answer Key</a>
    </div>
</div>

<h2 class="section-title lab-icon">Labs & Simulations</h2>

<div class="content-grid">
    <div class="card">
        <h3><span class="card-icon">💻</span>Circuit Construction Lab</h3>
        <p>Build and analyze virtual circuits using the PhET interactive simulation</p>
        <a href="simlab_9.1_phet-circuit-construction.md" class="button">Open Lab Activity</a>
    </div>
</div>

<!-- <h2 class="section-title teacher-icon">Teacher Resources</h2>

<div class="card">
    <p>Additional resources for educators including lesson plans, assessment guides, and supplementary materials</p>
    Commented teacher resources can be uncommented when available
    <ul class="resource-list">
        <li><a href="tn_9.2_electrodynamics.md">Electrodynamics Teacher Notes</a></li>
        <li><a href="hphys_electrics_storyline.md">Unit Storyline</a></li>
    </ul>
</div>

Additional resources section can be uncommented when needed
<h2 class="section-title">Additional Resources</h2>

<div class="content-grid">
    <div class="card">
        <h3><span class="card-icon">📚</span>Reference Materials</h3>
        <ul class="resource-list">
            <li><a href="scishow-xscript-electric-current.md">Electric Current Transcript</a></li>
            <li><a href="scishow-xscript-series-parallel.md">Series and Parallel Circuits Transcript</a></li>
            <li><a href="giancoli problems.md">Giancoli Problems</a></li>
            <li><a href="gdoc_overview_electrodynamics.md">Electrodynamics Overview</a></li>
        </ul>
    </div>
</div> -->


