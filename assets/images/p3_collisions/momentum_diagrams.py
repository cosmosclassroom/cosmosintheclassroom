import matplotlib.pyplot as plt
import matplotlib.patches as patches
import numpy as np

def create_momentum_diagram(scenarios, title="Momentum Conservation", figsize=(12, 8)):
    """
    Create momentum conservation diagrams using rectangles.
    
    Parameters:
    scenarios: list of dicts with 'mass', 'delta_v', 'label', 'color' keys
    title: overall title for the figure
    figsize: figure size tuple
    """
    
    fig, ax = plt.subplots(figsize=figsize)
    
    # Calculate positions for rectangles
    x_start = 0
    x_spacing = 1.5
    max_height = max([scenario['delta_v'] for scenario in scenarios])
    max_width = max([scenario['mass'] for scenario in scenarios])
    
    rectangles = []
    
    for i, scenario in enumerate(scenarios):
        mass = scenario['mass']
        delta_v = scenario['delta_v']
        label = scenario['label']
        color = scenario.get('color', 'lightblue')
        
        # Create rectangle
        x_pos = x_start + i * (max_width + x_spacing)
        rect = patches.Rectangle((x_pos, 0), mass, delta_v, 
                               linewidth=2, edgecolor='black', 
                               facecolor=color, alpha=0.7)
        ax.add_patch(rect)
        rectangles.append(rect)
        
        # Add labels
        # Mass label (width)
        ax.annotate(f'{mass} kg', 
                   xy=(x_pos + mass/2, -max_height*0.1), 
                   ha='center', va='top', fontsize=12, fontweight='bold')
        
        # Delta-v label (height)
        ax.annotate(f'Δv = {delta_v} m/s', 
                   xy=(x_pos - 0.2, delta_v/2), 
                   ha='right', va='center', fontsize=12, fontweight='bold',
                   rotation=90)
        
        # Area label (momentum)
        momentum = mass * delta_v
        ax.text(x_pos + mass/2, delta_v/2, f'Area = {momentum}\nkg⋅m/s', 
                ha='center', va='center', fontsize=11, 
                bbox=dict(boxstyle="round,pad=0.3", facecolor='white', alpha=0.8))
        
        # Object label
        ax.text(x_pos + mass/2, delta_v + max_height*0.05, label,
                ha='center', va='bottom', fontsize=14, fontweight='bold')
    
    # Set axis properties
    ax.set_xlim(-0.5, x_start + len(scenarios) * (max_width + x_spacing))
    ax.set_ylim(-max_height*0.2, max_height*1.2)
    
    # Labels and title
    ax.set_xlabel('Mass (kg)', fontsize=14, fontweight='bold')
    ax.set_ylabel('Change in Velocity, Δv (m/s)', fontsize=14, fontweight='bold')
    ax.set_title(title, fontsize=16, fontweight='bold', pad=20)
    
    # Grid
    ax.grid(True, alpha=0.3)
    ax.set_axisbelow(True)
    
    plt.tight_layout()
    return fig, ax

def conservation_example():
    """Example showing momentum conservation between two objects"""
    
    # Before collision
    fig1, ax1 = create_momentum_diagram([
        {'mass': 3, 'delta_v': 4, 'label': 'Cart A', 'color': 'lightcoral'},
        {'mass': 6, 'delta_v': 2, 'label': 'Cart B', 'color': 'lightblue'}
    ], title="Before Collision - Individual Momentums")
    
    # After collision (conservation)
    fig2, ax2 = create_momentum_diagram([
        {'mass': 9, 'delta_v': 8/3, 'label': 'Combined System', 'color': 'lightgreen'}
    ], title="After Collision - Combined Momentum (Conservation)")
    
    return fig1, fig2

def multiple_examples():
    """Show multiple conservation scenarios"""
    
    examples = [
        [
            {'mass': 2, 'delta_v': 6, 'label': 'Object 1', 'color': 'lightcoral'},
            {'mass': 4, 'delta_v': 3, 'label': 'Object 2', 'color': 'lightblue'}
        ],
        [
            {'mass': 1, 'delta_v': 12, 'label': 'Light Object', 'color': 'lightyellow'},
            {'mass': 12, 'delta_v': 1, 'label': 'Heavy Object', 'color': 'lightgray'}
        ],
        [
            {'mass': 5, 'delta_v': 2.4, 'label': 'Medium Mass', 'color': 'lightpink'},
            {'mass': 3, 'delta_v': 4, 'label': 'Smaller Mass', 'color': 'lightcyan'}
        ]
    ]
    
    figures = []
    for i, scenario in enumerate(examples):
        fig, ax = create_momentum_diagram(scenario, 
                                        title=f"Conservation Example {i+1} - Equal Total Momentum")
        figures.append(fig)
    
    return figures

# Create the diagrams
if __name__ == "__main__":
    # Simple conservation example
    print("Creating conservation example...")
    fig1, fig2 = conservation_example()
    
    # Multiple examples
    print("Creating multiple examples...")
    example_figs = multiple_examples()
    
    # Single diagram example
    print("Creating single diagram...")
    single_fig, _ = create_momentum_diagram([
        {'mass': 3, 'delta_v': 4, 'label': '3kg Cart', 'color': 'lightblue'}
    ], title="Single Object - Momentum Visualization")
    
    # Show all plots
    plt.show()
    
    # Optional: Save figures
    # fig1.savefig('before_collision.png', dpi=300, bbox_inches='tight')
    # fig2.savefig('after_collision.png', dpi=300, bbox_inches='tight')
    # single_fig.savefig('single_object.png', dpi=300, bbox_inches='tight')