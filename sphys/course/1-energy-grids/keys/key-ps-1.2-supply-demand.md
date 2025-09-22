# Answer Key: Problem Set 2 - Supply & Demand
**Unit P.1: The Invisible Currents**

---

## **Answer Key Overview**

This detailed answer key provides complete solutions with step-by-step LaTeX formatting for all problems in the Supply & Demand problem set. Each solution includes proper unit analysis, conceptual explanations, and connections to the Texas energy crisis phenomenon.

---

## **Part A: Foundation - Worked Examples**

*These examples are already worked in the student version and serve as models for the problem-solving approach.*

---

## **Part B: Application - Independent Practice**

### **Problem 1: Community Energy Needs**

**Given Information:**
- 500 homes averaging 2 kW each
- 50 businesses averaging 10 kW each  
- 1 hospital requiring 200 kW

#### **Part (a): Total Power Demand**

\begin{align}
\text{Homes: } P_{\text{homes}} &= 500 \text{ homes} \times 2 \text{ kW/home} \\
&= 1000 \text{ kW} \\
\\
\text{Businesses: } P_{\text{business}} &= 50 \text{ businesses} \times 10 \text{ kW/business} \\
&= 500 \text{ kW} \\
\\
\text{Hospital: } P_{\text{hospital}} &= 200 \text{ kW} \\
\\
\text{Total Power Demand: } P_{\text{total}} &= P_{\text{homes}} + P_{\text{business}} + P_{\text{hospital}} \\
&= 1000 + 500 + 200 \\
&= 1700 \text{ kW} = 1.7 \text{ MW}
\end{align}

#### **Part (b): Total Energy for 24 Hours**

\begin{align}
\text{Given: } P_{\text{total}} &= 1700 \text{ kW}, \quad \Delta t = 24 \text{ h} \\
\text{Formula: } E &= P \times \Delta t \\
\text{Substitute: } E &= 1700 \text{ kW} \times 24 \text{ h} \\
\text{Calculate: } E &= 40,800 \text{ kWh}
\end{align}

**Conceptual Note:** This town needs 40.8 MWh of energy per day, which is equivalent to the daily energy consumption of about 1,360 typical US homes (30 kWh/day average).

---

### **Problem 2: Energy Mix Analysis**

**Given Data:**
- **Before Crisis Total:** 48,000 MW
- **During Crisis Total:** 34,000 MW

#### **Part (a): Percentage of Power Lost**

\begin{align}
\text{Power lost} &= \text{Normal total} - \text{Crisis total} \\
&= 48,000 \text{ MW} - 34,000 \text{ MW} \\
&= 14,000 \text{ MW} \\
\\
\text{Percentage lost} &= \frac{\text{Power lost}}{\text{Normal total}} \times 100\% \\
&= \frac{14,000 \text{ MW}}{48,000 \text{ MW}} \times 100\% \\
&= 0.292 \times 100\% \\
&= 29.2\%
\end{align}

#### **Part (b): Money Saved During Blackouts**

\begin{align}
\text{Energy not used per hour} &= 48,000 \text{ MW} = 48,000,000 \text{ kW} \\
\\
\text{Cost saved per hour} &= \text{Energy not used} \times \text{Rate} \\
&= 48,000,000 \text{ kW} \times \$0.12/\text{kWh} \\
&= \$5,760,000 \text{ per hour}
\end{align}

**Economic Context:** While Texans "saved" $5.76 million per hour in electricity costs, this was due to forced blackouts, not voluntary conservation. The economic losses from business closures, food spoilage, and infrastructure damage far exceeded these savings.

---

### **Problem 3: Storage System Design**

**Given Information:**
- Community peak demand: 100 MW
- Storage duration: 4 hours
- Battery efficiency: 85%
- Cost: $300 per kWh

#### **Part (a): Energy Storage Capacity Needed**

\begin{align}
\text{Power needed: } P &= 100 \text{ MW} = 100,000 \text{ kW} \\
\text{Time needed: } \Delta t &= 4 \text{ hours} \\
\\
\text{Energy to store: } E &= P \times \Delta t \\
&= 100,000 \text{ kW} \times 4 \text{ h} \\
&= 400,000 \text{ kWh}
\end{align}

#### **Part (b): Battery Capacity Accounting for Efficiency**

\begin{align}
\text{Required capacity} &= \frac{\text{Energy needed}}{\text{Efficiency}} \\
&= \frac{400,000 \text{ kWh}}{0.85} \\
&= 470,588 \text{ kWh} \approx 471 \text{ MWh}
\end{align}

**Efficiency Explanation:** Due to energy losses during charging and discharging, the battery system must be oversized by approximately 17.6% to deliver the required 400 MWh of usable energy.

#### **Part (c): Total System Cost**

\begin{align}
\text{Cost} &= \text{Required capacity} \times \text{Cost per kWh} \\
&= 470,588 \text{ kWh} \times \$300/\text{kWh} \\
&= \$141,176,400 \approx \$141.2 \text{ million}
\end{align}

---

## **Part C: Extension - Challenge Problems**

### **Problem 4: Regional Grid Analysis**

**Given Information:**
- Population served: 26 million people
- Average household power: 1.2 kW
- Average household size: 2.5 people
- Industrial/commercial multiplier: 1.5× residential
- Grid efficiency: 92%

#### **Part (a): Total Power Generation Needed**

\begin{align}
\text{Number of households} &= \frac{26,000,000 \text{ people}}{2.5 \text{ people/household}} \\
&= 10,400,000 \text{ households} \\
\\
\text{Residential demand} &= 10,400,000 \text{ households} \times 1.2 \text{ kW/household} \\
&= 12,480,000 \text{ kW} \\
\\
\text{Total demand} &= \text{Residential demand} \times 1.5 \\
&= 12,480,000 \text{ kW} \times 1.5 \\
&= 18,720,000 \text{ kW} \\
\\
\text{Generation needed} &= \frac{\text{Total demand}}{\text{Grid efficiency}} \\
&= \frac{18,720,000 \text{ kW}}{0.92} \\
&= 20,347,826 \text{ kW} \approx 20,348 \text{ MW}
\end{align}

#### **Part (b): Comparison to Actual Peak Demand**

**Calculated:** 20,348 MW  
**Actual Texas Peak:** ~75,000 MW  
**Difference:** Factor of ~3.7× higher actual demand

**Possible Explanations:**
1. **Peak vs. Average Demand:** Our calculation uses average household power (1.2 kW), but peak demand occurs when air conditioning usage is maximum (summer afternoons), potentially reaching 5-8 kW per household
2. **Industrial Load Underestimation:** The 1.5× multiplier may underestimate heavy industrial users like refineries, data centers, and manufacturing
3. **Commercial Buildings:** Large office buildings, hospitals, and schools have high peak demands not captured in simple residential scaling
4. **Geographic Factors:** Texas serves parts of neighboring states and has unique industrial energy demands
5. **Economic Growth:** Energy demand grows faster than population due to increasing per-capita consumption

---

### **Problem 5: Renewable Energy Trade-offs**

**Option A: Natural Gas Plant**
- Capacity: 500 MW
- Construction cost: $800 million
- Lifespan: 30 years

**Option B: Wind + Battery System**
- Total capacity: 600 MW wind + 300 MW battery = 900 MW
- Construction cost: $1.2 billion  
- Lifespan: 25 years

#### **Part (a): Cost per MW of Capacity**

\begin{align}
\text{Option A: } \text{Cost per MW} &= \frac{\$800 \text{ million}}{500 \text{ MW}} \\
&= \$1.6 \text{ million per MW} \\
\\
\text{Option B: } \text{Cost per MW} &= \frac{\$1200 \text{ million}}{900 \text{ MW}} \\
&= \$1.33 \text{ million per MW}
\end{align}

**Note:** Option B appears cheaper per MW, but this comparison doesn't account for capacity factors (wind doesn't blow constantly) or operational costs.

#### **Part (b): Comprehensive Analysis and Recommendation**

**Economic Analysis:**

**Levelized Cost of Energy (LCOE) Estimates:**

*Option A (Natural Gas):*
\begin{align}
\text{Annual Energy} &= 500 \text{ MW} \times 8760 \text{ h/year} \times 0.6 \text{ capacity factor} \\
&= 2,628,000 \text{ MWh/year} \\
\\
\text{Fuel Cost/Year} &= 2,628,000 \text{ MWh} \times \$40/\text{MWh} = \$105.1 \text{ million} \\
\\
\text{Total 30-year Cost} &= \$800 \text{ million} + (30 \times \$105.1 \text{ million}) \\
&= \$800 + \$3153 = \$3953 \text{ million} \\
\\
\text{LCOE} &= \frac{\$3953 \text{ million}}{30 \text{ years} \times 2,628,000 \text{ MWh/year}} \\
&= \$50.1/\text{MWh}
\end{align}

*Option B (Wind + Battery):*
\begin{align}
\text{Annual Energy} &= 200 \text{ MW avg} \times 8760 \text{ h/year} \\
&= 1,752,000 \text{ MWh/year} \\
\\
\text{Total 25-year Cost} &= \$1200 \text{ million} \text{ (no fuel costs)} \\
\\
\text{LCOE} &= \frac{\$1200 \text{ million}}{25 \text{ years} \times 1,752,000 \text{ MWh/year}} \\
&= \$27.4/\text{MWh}
\end{align}

**Recommendation: Option B (Wind + Battery)**

**Justification:**
1. **Lower Operating Costs:** No fuel costs provide price stability and protection from natural gas price volatility
2. **Environmental Benefits:** Zero emissions during operation vs. significant CO₂ emissions from natural gas
3. **Energy Independence:** Reduces dependence on natural gas supply chains that proved vulnerable during the 2021 crisis
4. **Long-term Economics:** Despite higher upfront costs, the LCOE is significantly lower ($27.4 vs $50.1 per MWh)
5. **Grid Resilience:** Battery storage provides grid stabilization services and emergency backup power

**Trade-offs to Consider:**
- Lower capacity factor means less total energy production
- Technology risk (batteries have shorter lifespans than gas turbines)
- Intermittency requires backup power or additional storage
- Higher upfront capital requirements

---

## **Part D: Reflection - Sample Responses**

### **Conceptual Understanding Response**

**"The difference between energy and power is important for grid planning because..."**

*Sample Strong Response:* "Power tells us the instantaneous demand that the grid must meet at any moment (like during peak summer afternoons), while energy tells us the total amount of electricity we need to generate over time. Grid planners need enough power capacity to meet peak demand without blackouts, but they also need to ensure sufficient energy generation throughout the day to meet total consumption needs. During the Texas crisis, the grid lost power capacity (MW) when plants froze, but even if they had maintained capacity, running out of fuel would have meant insufficient energy (MWh) to last through the multi-day event."

### **Real-World Connections Response**

**"How do the calculations in this problem set help explain what happened during the Texas crisis?"**

*Sample Response:* "The calculations show how losing 29.2% of power generation capacity created a massive supply-demand imbalance. When 14,000 MW of generation went offline, the grid couldn't meet the 48,000 MW demand, forcing rolling blackouts. The storage system calculations demonstrate why Texas struggled - without significant battery storage, they couldn't buffer the supply disruptions. The efficiency calculations show how transmission losses made the crisis worse, as the remaining plants had to work harder to compensate for grid inefficiencies."

### **Engineering Thinking Response**

**"When solving Problem 5, what factors were most important in your decision?"**

*Sample Response:* "Cost, reliability, and environmental impact were all crucial. The LCOE calculation showed wind+battery was more economical long-term, despite higher upfront costs. Reliability was complex - natural gas is dispatchable but vulnerable to fuel supply disruptions (as seen in 2021), while wind is intermittent but the fuel (wind) is always available. Environmental impact favored renewables for climate reasons. Real engineers must also consider permitting time, financing options, grid integration challenges, and political/regulatory factors that weren't included in our simplified analysis."

---

## **Connections to Unit Phenomena**

These problems directly connect to the Texas energy crisis by demonstrating:

1. **Supply-Demand Balance:** Problem 2 quantifies the exact supply shortage that caused the crisis
2. **System Vulnerability:** Problems show how weather events can simultaneously affect multiple generation sources
3. **Storage Necessity:** Problem 3 illustrates why energy storage is crucial for grid resilience
4. **Economic Trade-offs:** Problem 5 explores the complex decisions facing energy planners
5. **Scale of Impact:** Problem 4 provides context for the enormous scale of modern electrical grids

The mathematical tools developed here prepare students for the upcoming Hexagon Lab on Engineering Design Tradeoffs, where they'll use decision matrices to evaluate real energy data and make recommendations for community energy systems.

---

## **Common Student Errors and Misconceptions**

### **Unit Confusion**
- **Error:** Mixing up MW and MWh in calculations
- **Correction:** Emphasize that MW measures rate (power) while MWh measures total amount (energy)
- **Check:** Units must make sense - energy = power × time

### **Percentage Calculations**
- **Error:** Using wrong denominator (crisis total instead of normal total)
- **Correction:** Percentage loss = (amount lost)/(original amount) × 100%

### **Efficiency Applications**
- **Error:** Forgetting that inefficient systems require more input than output
- **Correction:** Input energy = output energy ÷ efficiency

### **Economic Analysis Oversimplification**
- **Error:** Only considering construction costs, ignoring operating costs
- **Correction:** True cost comparison requires lifecycle analysis including fuel, maintenance, and replacement costs

---

**Note to Instructors:** This answer key provides detailed solutions to support student learning and help identify common misconceptions. Use the conceptual explanations to guide classroom discussions about the physics and engineering principles underlying each calculation.
