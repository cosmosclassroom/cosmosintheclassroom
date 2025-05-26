import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

# Set up matplotlib for high-quality figures
plt.rcParams['figure.figsize'] = (12, 8)
plt.rcParams['font.size'] = 12
plt.rcParams['axes.grid'] = True
plt.rcParams['grid.alpha'] = 0.3

def create_focused_driver_data():
    """Generate position-time data for focused driver scenario"""
    # Data from the markdown table
    time_data = [
        0.00, 0.10, 0.20, 0.30, 0.40, 0.50, 0.60, 0.70, 0.80, 0.90,
        1.00, 1.10, 1.20, 1.30, 1.40, 1.50, 1.60, 1.70, 1.80, 1.90,
        2.00, 2.10, 2.20, 2.30, 2.40, 2.50, 2.60, 2.70, 2.80, 2.90,
        3.00, 3.10, 3.20, 3.30, 3.40, 3.50, 3.60, 3.70, 3.80, 3.90,
        4.00, 4.10, 4.20, 4.30, 4.40, 4.50, 4.60, 4.70, 4.80, 4.90, 5.00
    ]
    
    position_data = [
        0.0, 2.0, 4.0, 6.0, 8.0, 10.0, 12.0, 14.0, 16.0, 18.0,
        20.0, 22.0, 24.0, 26.0, 28.0, 30.0, 31.6, 33.1, 34.5, 35.8,
        37.0, 38.1, 39.1, 40.0, 40.8, 41.5, 42.1, 42.1, 42.1, 42.1,
        42.1, 42.1, 42.1, 42.1, 42.1, 42.1, 42.1, 42.1, 42.1, 42.1,
        42.1, 42.1, 42.1, 42.1, 42.1, 42.1, 42.1, 42.1, 42.1, 42.1, 42.1
    ]
    
    phases = ['Reaction'] * 15 + ['Transition'] + ['Braking'] * 11 + ['Stopped'] * 24
    
    return pd.DataFrame({
        'time': time_data,
        'position': position_data,
        'phase': phases
    })

def create_distracted_driver_data():
    """Generate position-time data for distracted driver scenario (3.0s reaction time)"""
    time_distracted = np.arange(0, 5.1, 0.1)
    position_distracted = []
    
    for t in time_distracted:
        if t <= 3.0:  # Reaction phase (3.0 seconds)
            pos = 20 * t
        elif t <= 4.1:  # Braking phase
            # x = x₀ + v₀(t-t₀) + ½a(t-t₀)²
            # x₀ = 60m, v₀ = 20 m/s, a = -8 m/s², t₀ = 3.0s
            pos = 60 + 20 * (t - 3.0) + 0.5 * (-8) * (t - 3.0)**2
        else:  # Stopped phase
            pos = 72.1
        
        position_distracted.append(pos)
    
    return pd.DataFrame({
        'time': time_distracted,
        'position': position_distracted
    })

def plot_focused_driver_analysis():
    """Create detailed analysis plot for focused driver"""
    df = create_focused_driver_data()
    
    fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(12, 10))
    
    # Main position-time graph
    colors = {'Reaction': 'blue', 'Transition': 'orange', 'Braking': 'red', 'Stopped': 'green'}
    
    for phase in df['phase'].unique():
        phase_data = df[df['phase'] == phase]
        ax1.plot(phase_data['time'], phase_data['position'], 
                color=colors[phase], linewidth=2, label=phase, marker='o', markersize=4)
    
    # Key points annotation
    ax1.annotate('A: Driver sees obstacle\n(0s, 0m)', 
                xy=(0, 0), xytext=(0.5, 5),
                arrowprops=dict(arrowstyle='->', color='black'),
                fontsize=10, ha='left')
    
    ax1.annotate('B: Driver begins braking\n(1.5s, 30m)', 
                xy=(1.5, 30), xytext=(1.0, 35),
                arrowprops=dict(arrowstyle='->', color='black'),
                fontsize=10, ha='center')
    
    ax1.annotate('C: Car stops\n(2.6s, 42.1m)', 
                xy=(2.6, 42.1), xytext=(3.2, 37),
                arrowprops=dict(arrowstyle='->', color='black'),
                fontsize=10, ha='left')
    
    ax1.set_xlabel('Time (s)')
    ax1.set_ylabel('Position (m)')
    ax1.set_title('Emergency Braking Scenario - Focused Driver', fontweight='bold', fontsize=14)
    ax1.legend()
    ax1.grid(True, alpha=0.3)
    ax1.set_xlim(0, 5)
    ax1.set_ylim(0, 50)
    
    # Velocity calculation subplot
    velocities = []
    times_vel = []
    
    for i in range(len(df) - 1):
        dt = df.iloc[i+1]['time'] - df.iloc[i]['time']
        dx = df.iloc[i+1]['position'] - df.iloc[i]['position']
        velocity = dx / dt if dt > 0 else 0
        velocities.append(velocity)
        times_vel.append(df.iloc[i]['time'])
    
    ax2.plot(times_vel, velocities, 'purple', linewidth=2, marker='s', markersize=3)
    ax2.axhline(y=20, color='blue', linestyle='--', alpha=0.7, label='Initial velocity (20 m/s)')
    ax2.axhline(y=0, color='red', linestyle='--', alpha=0.7, label='Final velocity (0 m/s)')
    ax2.axvline(x=1.5, color='orange', linestyle='--', alpha=0.7, label='Braking begins')
    
    ax2.set_xlabel('Time (s)')
    ax2.set_ylabel('Velocity (m/s)')
    ax2.set_title('Velocity vs Time - Calculated from Position Data', fontweight='bold')
    ax2.legend()
    ax2.grid(True, alpha=0.3)
    ax2.set_xlim(0, 5)
    
    plt.tight_layout()
    plt.savefig('focused_driver_analysis.png', dpi=300, bbox_inches='tight')
    plt.show()

def plot_comparison_analysis():
    """Create comparison plot between focused and distracted drivers"""
    df_focused = create_focused_driver_data()
    df_distracted = create_distracted_driver_data()
    
    fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(16, 6))
    
    # Position-time comparison
    ax1.plot(df_focused['time'], df_focused['position'], 
            'blue', linewidth=3, label='Focused Driver', marker='o', markersize=3)
    ax1.plot(df_distracted['time'], df_distracted['position'], 
            'red', linewidth=3, label='Distracted Driver', marker='s', markersize=3)
    
    # Key annotations
    ax1.axvline(x=1.5, color='blue', linestyle='--', alpha=0.7, label='Focused: Braking starts')
    ax1.axvline(x=3.0, color='red', linestyle='--', alpha=0.7, label='Distracted: Braking starts')
    
    ax1.fill_between([0, 1.5], 0, 80, alpha=0.2, color='blue', label='Focused reaction time')
    ax1.fill_between([0, 3.0], 0, 80, alpha=0.2, color='red', label='Distracted reaction time')
    
    ax1.set_xlabel('Time (s)')
    ax1.set_ylabel('Position (m)')
    ax1.set_title('Position vs Time: Focused vs Distracted Driver', fontweight='bold', fontsize=14)
    ax1.legend()
    ax1.grid(True, alpha=0.3)
    ax1.set_xlim(0, 5)
    ax1.set_ylim(0, 80)
    
    # Distance comparison bar chart
    distances = {
        'Focused Driver': {
            'Reaction Distance': 30.0,
            'Braking Distance': 12.1,
            'Total Distance': 42.1
        },
        'Distracted Driver': {
            'Reaction Distance': 60.0,
            'Braking Distance': 12.1,
            'Total Distance': 72.1
        }
    }
    
    categories = ['Reaction Distance', 'Braking Distance', 'Total Distance']
    focused_values = [distances['Focused Driver'][cat] for cat in categories]
    distracted_values = [distances['Distracted Driver'][cat] for cat in categories]
    
    x = np.arange(len(categories))
    width = 0.35
    
    bars1 = ax2.bar(x - width/2, focused_values, width, label='Focused Driver', color='blue', alpha=0.7)
    bars2 = ax2.bar(x + width/2, distracted_values, width, label='Distracted Driver', color='red', alpha=0.7)
    
    # Add value labels on bars
    for bars in [bars1, bars2]:
        for bar in bars:
            height = bar.get_height()
            ax2.annotate(f'{height:.1f}m',
                        xy=(bar.get_x() + bar.get_width() / 2, height),
                        xytext=(0, 3),  # 3 points vertical offset
                        textcoords="offset points",
                        ha='center', va='bottom', fontweight='bold')
    
    ax2.set_xlabel('Distance Components')
    ax2.set_ylabel('Distance (m)')
    ax2.set_title('Stopping Distance Comparison', fontweight='bold', fontsize=14)
    ax2.set_xticks(x)
    ax2.set_xticklabels(categories)
    ax2.legend()
    ax2.grid(True, alpha=0.3, axis='y')
    
    plt.tight_layout()
    plt.savefig('driver_comparison_analysis.png', dpi=300, bbox_inches='tight')
    plt.show()

def plot_physics_concepts():
    """Create educational plots showing physics concepts"""
    fig, ((ax1, ax2), (ax3, ax4)) = plt.subplots(2, 2, figsize=(16, 12))
    
    # 1. Linear motion during reaction phase
    t_reaction = np.linspace(0, 1.5, 16)
    x_reaction = 20 * t_reaction
    
    ax1.plot(t_reaction, x_reaction, 'blue', linewidth=3, marker='o')
    ax1.set_xlabel('Time (s)')
    ax1.set_ylabel('Position (m)')
    ax1.set_title('Reaction Phase: Linear Motion\n(Constant Velocity = 20 m/s)', fontweight='bold')
    ax1.grid(True, alpha=0.3)
    
    # Add slope annotation
    ax1.annotate(f'Slope = Velocity = 20 m/s', 
                xy=(0.75, 15), xytext=(0.3, 25),
                arrowprops=dict(arrowstyle='->', color='red'),
                fontsize=12, color='red', fontweight='bold')
    
    # 2. Quadratic motion during braking phase
    t_braking = np.linspace(1.5, 2.6, 12)
    x_braking = 30 + 20 * (t_braking - 1.5) + 0.5 * (-8) * (t_braking - 1.5)**2
    
    ax2.plot(t_braking, x_braking, 'red', linewidth=3, marker='s')
    ax2.set_xlabel('Time (s)')
    ax2.set_ylabel('Position (m)')
    ax2.set_title('Braking Phase: Quadratic Motion\n(Constant Deceleration = -8 m/s²)', fontweight='bold')
    ax2.grid(True, alpha=0.3)
    
    # 3. Velocity vs time
    t_all = np.linspace(0, 3, 100)
    v_all = []
    
    for t in t_all:
        if t <= 1.5:
            v = 20
        elif t <= 2.6:
            v = 20 - 8 * (t - 1.5)
        else:
            v = 0
        v_all.append(max(0, v))
    
    ax3.plot(t_all, v_all, 'green', linewidth=3)
    ax3.fill_between(t_all, v_all, alpha=0.3, color='green', label='Area = Distance')
    ax3.set_xlabel('Time (s)')
    ax3.set_ylabel('Velocity (m/s)')
    ax3.set_title('Velocity vs Time\n(Area under curve = Total distance)', fontweight='bold')
    ax3.grid(True, alpha=0.3)
    ax3.legend()
    
    # 4. Safety comparison chart
    scenarios = ['Focused\nDriver', 'Distracted\nDriver', 'Focused at\n30 m/s', 'Distracted at\n30 m/s']
    stopping_distances = [42.1, 72.1, 63.1, 93.1]  # Last two are calculated examples
    colors = ['green', 'orange', 'yellow', 'red']
    
    bars = ax4.bar(scenarios, stopping_distances, color=colors, alpha=0.7)
    ax4.set_ylabel('Total Stopping Distance (m)')
    ax4.set_title('Safety Impact of Distraction and Speed', fontweight='bold')
    ax4.grid(True, alpha=0.3, axis='y')
    
    # Add value labels
    for bar, distance in zip(bars, stopping_distances):
        ax4.annotate(f'{distance:.1f}m',
                    xy=(bar.get_x() + bar.get_width() / 2, distance),
                    xytext=(0, 3),
                    textcoords="offset points",
                    ha='center', va='bottom', fontweight='bold')
    
    plt.tight_layout()
    plt.savefig('physics_concepts_analysis.png', dpi=300, bbox_inches='tight')
    plt.show()

def generate_all_graphs():
    """Generate all graphs for the emergency braking analysis"""
    print("Generating focused driver analysis...")
    plot_focused_driver_analysis()
    
    print("Generating comparison analysis...")
    plot_comparison_analysis()
    
    print("Generating physics concepts visualization...")
    plot_physics_concepts()
    
    print("All graphs generated successfully!")
    print("\nFiles created:")
    print("- focused_driver_analysis.png")
    print("- driver_comparison_analysis.png") 
    print("- physics_concepts_analysis.png")

if __name__ == "__main__":
    # Generate all graphs
    generate_all_graphs()
    
    # Print summary statistics
    print("\n" + "="*50)
    print("EMERGENCY BRAKING ANALYSIS SUMMARY")
    print("="*50)
    
    df_focused = create_focused_driver_data()
    df_distracted = create_distracted_driver_data()
    
    print(f"Focused Driver:")
    print(f"  Reaction Distance: 30.0 m")
    print(f"  Braking Distance: 12.1 m") 
    print(f"  Total Stopping Distance: 42.1 m")
    print(f"  Reaction Time: 1.5 s")
    
    print(f"\nDistracted Driver:")
    print(f"  Reaction Distance: 60.0 m")
    print(f"  Braking Distance: 12.1 m")
    print(f"  Total Stopping Distance: 72.1 m") 
    print(f"  Reaction Time: 3.0 s")
    
    print(f"\nSafety Impact:")
    print(f"  Additional Distance Due to Distraction: 30.0 m")
    print(f"  Percentage Increase: {((72.1-42.1)/42.1)*100:.1f}%")
    
    print(f"\nPhysics Equations Demonstrated:")
    print(f"  Reaction Phase: x = v₀t = 20t")
    print(f"  Braking Phase: x = x₀ + v₀(t-t₀) + ½a(t-t₀)²")
    print(f"  Velocity: v = v₀ + a(t-t₀)")
