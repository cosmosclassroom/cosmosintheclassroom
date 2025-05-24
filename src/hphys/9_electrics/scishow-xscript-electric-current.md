# Electric Current: The Flow of Charge

> **Quick Reminder: Electric Potential vs. Electric Potential Energy**
> 
> - **Electric potential (V)** is like height on a hill - it's a property of a specific place in space, but not a specific *thing*. Measured in volts.
> - **Electric potential energy (PE)** is like the energy an *object* has because of its height - it depends on both position and charge. Measured in joules, as it ever was.
> 
> Think of it this way: The electric potential tells you how much potential energy **one coulomb** of charge would have at that point in the field.

## Introduction

Imagine you're floating down a river. Maybe the stream is calm and serene, flowing without obstruction, or perhaps it's a rushing river churning and splashing over rocks. The way water moves in a river is a lot like how electricity flows through a wire. But when we say that electricity is "flowing," we're really talking about the flow of electrons.

**Electric current** is the total amount of charge passing through a wire over a period of time. But how does current actually form? What can it pass through, and what determines how strong it is?
The formula for electric current (I) is:

$$
I = \frac{\Delta Q}{\Delta t}
$$

where  
- $I$ is current (amperes, A)
- $\Delta Q$ is change in charge (coulombs, C)
- $\Delta t$ is change in time (seconds, s)

This tells us that one ampere equals one coulomb per second (1 A = 1 C/s).

![ohms-law-cartoon](../../../assets/images/8_electromagnetism/ohms-law-diagram.png)

---

## How Do We Get Charges to Flow?

When there's a difference in electric potential (voltage) between two points, the voltage gives charged particles like electrons the energy to move from one place to another. Just like a river flows from high elevation to low elevation, electric charge flows from high voltage to low voltage.

Before the 19th century, scientists could generate static charge by rubbing different materials together, but they couldn't create a constant voltage to generate a steady flow of electricity. This changed when Italian scientist Alessandro Volta invented the first **voltaic cell**, which uses chemical reactions to create an electric potential difference between two pieces of different metals, known as electrodes. When the two electrodes are connected, current begins to flow. These connection points are called **terminals**.

Multiple voltaic cells can be connected together by placing wires between their opposite electrodes. When combined, their voltages add up, forming a **battery**. Today's batteries operate under the same principle as the very first voltaic cell.

---

## The Role of Ground

To complete a circuit, we also need a **ground** connected to the wire. This is just a common conductor that ensures the current always has a path to a large reservoir of charge, usually the Earth itself.

---

## Measuring Electric Current

Once we can generate an electric current, we need a way to describe how strongly the charge flows. If you picture the cross-section of a wire, you can measure how much charge flows through that cross-section over a period of time. The amount of charge moving past this point divided by the time period gives us a value in **coulombs per second**, which we call an **ampere** (A).

- **1 ampere** = 1 coulomb of charge passing through a cross-section of wire in 1 second.

---

## The Direction of Current

You might notice that we often talk about positive charge flowing through a wire, even though current is made up of negatively charged electrons. This is due to a historical convention: when Benjamin Franklin did experiments with electricity in the 1700s, he established what he thought was the direction in which electricity flows and called it the positive direction of current. We still use this convention today, even though electrons actually move in the opposite direction.

As far as electric current is concerned, the flow of negatively charged electrons in one direction is equivalent to the flow of positively charged particles in the opposite direction. When we talk about the flow of current, the convention is to say the current is in the direction that positive charge would flow.

If you've ever installed a battery, you know that one terminal is called positive and the other negative. Conventionally, current flows from the positive to the negative terminal, but electrons actually flow from the negative terminal to the positive.

---

## Voltage, Resistance, and Ohm's Law

In a river, the strength of the water's flow depends on how far the river drops from a high point to a low point. The same is true for electric current and voltage: a high voltage typically corresponds to a high current in a circuit. But voltage alone doesn't determine how much current flows.

Materials used to conduct electricity have properties that impede the flow of electrons. This property is known as **resistance**, measured in **ohms (Ω)**. One ohm of resistance allows one volt of potential to generate one ampere of current.

When resistance is constant, voltage is directly proportional to current. This relationship is known as **Ohm's Law**:

$$
V = I \times R
$$

where  
- $V$ is voltage (volts),  
- $I$ is current (amperes),  
- $R$ is resistance (ohms).

Some substances have resistance that changes with current or voltage, but for many materials (called **ohmic materials**), Ohm's Law works well.

---

## Example: Calculating Current

Suppose we have a 9-volt battery and want to know how much current it supplies to a light bulb when we complete the circuit. If the system has a total resistance of 15 ohms:

$$
I = \frac{V}{R} = \frac{9\,\text{V}}{15\,\Omega} = 0.6\,\text{A} = 600\,\text{mA}
$$

Most electrical devices and materials contain some level of resistance. Even wires in a circuit have some resistance, but compared to the resistance of a connected device like a light bulb, it's so small that we typically neglect it.

---

## Superconductors

If you can make certain conductive materials extremely cold, you can bring their resistance to zero. These materials are called **superconductors**. Research into superconductors is important because reducing resistance means less energy is lost, allowing more efficient transmission of electricity.

---

## Power in Electric Circuits

The point of batteries isn't just to push electrons around—we need to put those electrons to work. For example, when we attach a battery to a light bulb, the potential energy in the battery is converted into light and heat.

As current flows to the light bulb, the filament provides resistance, which transforms electrical energy into thermal energy and light. Since we're dealing with energy transformed over time, we want to know how much **power** is used by the bulb.

**Power** is the amount of energy transformed by a device over time. The power used by the bulb is equal to the current in the circuit times the voltage across the system:

$$
P = I \times V
$$

where  
- $P$ is power (watts),  
- $I$ is current (amperes),  
- $V$ is voltage (volts).

This equation holds true for the power used by any electronic device or the power supplied by a battery.

---

## Power and Resistance

Anything that consumes power—like a light bulb, refrigerator, or an entire house—can be modeled as a resistor because it creates resistance. If you want to find the power consumed by a resistor, you can substitute Ohm's Law into the power equation to get helpful relationships:

- $P = I^2 R$
- $P = \frac{V^2}{R}$

These forms are useful when you don't have all the possible information about the circuit.

---

## Summary

Electric currents are just like flowing rivers, and once you understand the math behind them, they're almost as beautiful.

**Key Points:**
- Electric current is the flow of charge, measured in amperes.
- We generate current using voltaic cells (batteries).
- Ohm's Law relates voltage, current, and resistance.
- Power in a circuit is the product of current and voltage.
- Resistance affects how much current flows, and superconductors have zero resistance.

Understanding these concepts is essential for analyzing and designing electrical circuits in physics and engineering.