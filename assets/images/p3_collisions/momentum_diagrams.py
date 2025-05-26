import matplotlib.pyplot as plt
import numpy as np

def create_emergency_braking_from_data():
    """Create graph using the actual provided dataset"""
    
    fig, ax = plt.subplots(figsize=(10, 8))
    
    # Use key data points from the provided dataset
    # Reaction phase: 0 to 1.5s, linear from 0 to 30m
    time_reaction = np.array([0.0, 0.5, 1.0, 1.5])
    pos_reaction = np.array([0.0, 10.0, 20.0, 30.0])
    
    # Braking phase: 1.5 to 2.6s, from 30m to 42.1m
    time_braking = np.array([1.5, 1.8, 2.0, 2.2, 2.4, 2.6])
    pos_braking = np.array([30.0, 34.5, 37.0, 39.1, 40.8, 42.1])
    
    # Stopped phase: 2.6s onward at 42.1m
    time_stopped = np.array([2.6, 3.0, 4.0, 5.0])
    pos_stopped = np.array([42.1, 42.1, 42.1, 42.1])
    
    # Plot the three phases
    ax.plot(time_reaction, pos_reaction, 'b-', linewidth=3, label='Motion')
    ax.plot(time_braking, pos_braking, 'b-', linewidth=3)
    ax.plot(time_stopped, pos_stopped, 'b-', linewidth=3)
    
    # Mark key points
    ax.plot(0, 0, 'ro', markersize=8)
    ax.plot(1.5, 30, 'ro', markersize=8)  
    ax.plot(2.6, 42.1, 'ro', markersize=8)
    
    # Labels
    ax.text(0, 5, 'A: (0, 0)', ha='center', va='bottom', fontsize=12, fontweight='bold')
    ax.text(1.5, 35, 'B: (1.5, 30)', ha='center', va='bottom', fontsize=12, fontweight='bold')
    ax.text(2.6, 47, 'C: (2.6, 42.1)', ha='center', va='bottom', fontsize=12, fontweight='bold')
    
    # Styling
    ax.set_xlim(0, 5)
    ax.set_ylim(0, 50)
    ax.set_xlabel('Time (s)', fontsize=14, fontweight='bold')
    ax.set_ylabel('Position (m)', fontsize=14, fontweight='bold')
    ax.set_title('Emergency Braking Scenario', fontsize=16, fontweight='bold')
    ax.grid(True, alpha=0.4)
    
    plt.tight_layout()
    return fig

if __name__ == "__main__":
    fig = create_emergency_braking_from_data()
    plt.show()