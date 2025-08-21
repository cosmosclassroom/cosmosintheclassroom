import matplotlib.pyplot as plt
import numpy as np
from matplotlib.patches import Rectangle, FancyBboxPatch
import matplotlib.patches as mpatches

# Set default figure size and DPI for all plots
plt.rcParams['figure.figsize'] = (10, 8)
plt.rcParams['savefig.dpi'] = 300

# Diagram 1: Position-Time Graph - Straight and Curved Lines
# def create_pt_graph_combined():
#     t = np.linspace(0, 10, 100)
    
#     # Straight line (constant velocity)
#     x_straight = 2 * t + 1
    
#     # Curved line (acceleration)
#     x_curved = 0.5 * t**2 + 1
    
#     plt.figure()
#     plt.plot(t, x_straight, 'b-', linewidth=3)
#     plt.plot(t, x_curved, 'r-', linewidth=3)
#     plt.xlabel('Time (s)', fontsize=14)
#     plt.ylabel('Position (m)', fontsize=14)
#     plt.grid(True, alpha=0.3)
#     plt.tight_layout()
#     plt.savefig('pt_graph_combined.png', bbox_inches='tight')
#     plt.show()

# Diagram 2: Position-Time Graph - Two Points for Slope
# def create_pt_graph_slope():
#     t = np.linspace(0, 8, 100)
#     # Line through points (2,4) and (6,12)
#     # Slope = (12-4)/(6-2) = 2
#     # y = 2x + b, using point (2,4): 4 = 2(2) + b, so b = 0
#     x_line = 2 * t
    
#     plt.figure()
#     plt.plot(t, x_line, 'g-', linewidth=3)
#     # Mark the specific points
#     plt.plot(2, 4, 'ro', markersize=10, label='Point (2, 4)')
#     plt.plot(6, 12, 'ro', markersize=10, label='Point (6, 12)')
#     plt.xlabel('Time (s)', fontsize=14)
#     plt.ylabel('Position (m)', fontsize=14)
#     plt.grid(True, alpha=0.3)
#     plt.xlim(0, 8)
#     plt.ylim(0, 16)
#     plt.tight_layout()
#     plt.savefig('pt_graph_slope.png', bbox_inches='tight')
#     plt.show()

# Diagram 3: Velocity-Time Graph - Area Under Curve
def create_vt_graph_area():
    t = np.linspace(0, 8, 100)
    v = np.full_like(t, 5)  # Constant 5 m/s
    
    plt.figure()
    # plt.fill_between(t, 0, v, alpha=0.3, color='blue')
    plt.plot(t, v, 'b-', linewidth=3)
    plt.xlabel('Time (s)', fontsize=14)
    plt.ylabel('Velocity (m/s)', fontsize=14)
    plt.grid(True, alpha=0.3)
    plt.ylim(0, 8)
    plt.tight_layout()
    plt.savefig('vt_graph_area.png', bbox_inches='tight')
    plt.show()

# Diagram 4: Velocity-Time Graph - Horizontal and Sloped Lines
# def create_vt_graph_combined():
#     t = np.linspace(0, 10, 100)
    
#     # Horizontal line (constant velocity)
#     v_constant = np.full_like(t, 6)
    
#     # Sloped line (acceleration)
#     v_accel = 2 + 0.8 * t
    
#     plt.figure()
#     plt.plot(t, v_constant, 'b-', linewidth=3)
#     plt.plot(t, v_accel, 'r-', linewidth=3)
#     plt.xlabel('Time (s)', fontsize=14)
#     plt.ylabel('Velocity (m/s)', fontsize=14)
#     plt.grid(True, alpha=0.3)
#     plt.tight_layout()
#     plt.savefig('vt_graph_combined.png', bbox_inches='tight')
#     plt.show()

# Diagram 5: Collision Diagram - Two Cars
# def create_collision_diagram():
#     fig, ax = plt.subplots()
    
#     # Draw road
#     road = Rectangle((0, 4), 10, 2, facecolor='gray', alpha=0.3)
#     ax.add_patch(road)
    
#     # Car A (moving right)
#     car_a = FancyBboxPatch((1, 4.2), 1.5, 1.6, boxstyle="round,pad=0.1", 
#                            facecolor='red', edgecolor='black', linewidth=2)
#     ax.add_patch(car_a)
    
#     # Car B (moving left)
#     car_b = FancyBboxPatch((7.5, 4.2), 1.5, 1.6, boxstyle="round,pad=0.1", 
#                            facecolor='blue', edgecolor='black', linewidth=2)
#     ax.add_patch(car_b)
    
#     # Arrows showing direction
#     ax.arrow(3, 5, 1.5, 0, head_width=0.3, head_length=0.3, fc='red', ec='red')
#     ax.arrow(7, 5, -1.5, 0, head_width=0.3, head_length=0.3, fc='blue', ec='blue')
    
#     # Labels
#     ax.text(1.75, 3.5, 'Car A', fontsize=14, ha='center', weight='bold')
#     ax.text(8.25, 3.5, 'Car B', fontsize=14, ha='center', weight='bold')
    
#     ax.set_xlim(0, 10)
#     ax.set_ylim(2, 8)
#     ax.set_aspect('equal')
#     ax.axis('off')
#     plt.tight_layout()
#     plt.savefig('collision_diagram.png', bbox_inches='tight')
#     plt.show()

# Diagram 6: Ice Skaters Pushing Off
# def create_ice_skaters_diagram():
#     fig, ax = plt.subplots()
    
#     # Ice surface
#     ice = Rectangle((0, 3), 10, 1, facecolor='lightblue', alpha=0.5)
#     ax.add_patch(ice)
    
#     # Skater A (left)
#     skater_a = plt.Circle((3, 5), 0.8, facecolor='orange', edgecolor='black', linewidth=2)
#     ax.add_patch(skater_a)
    
#     # Skater B (right)
#     skater_b = plt.Circle((7, 5), 0.8, facecolor='green', edgecolor='black', linewidth=2)
#     ax.add_patch(skater_b)
    
#     # Force arrows (action-reaction pair) - separated vertically to avoid overlap
#     ax.arrow(3.8, 5.3, 1.4, 0, head_width=0.2, head_length=0.2, fc='red', ec='red', linewidth=2)
#     ax.arrow(6.2, 4.7, -1.4, 0, head_width=0.2, head_length=0.2, fc='red', ec='red', linewidth=2)
    
#     # Movement arrows
#     ax.arrow(2, 6.5, -1, 0, head_width=0.2, head_length=0.2, fc='black', ec='black')
#     ax.arrow(8, 6.5, 1, 0, head_width=0.2, head_length=0.2, fc='black', ec='black')
    
#     # Labels
#     ax.text(3, 2.5, 'Skater A', fontsize=14, ha='center', weight='bold')
#     ax.text(7, 2.5, 'Skater B', fontsize=14, ha='center', weight='bold')
    
#     ax.set_xlim(0, 10)
#     ax.set_ylim(2, 8)
#     ax.set_aspect('equal')
#     ax.axis('off')
#     plt.tight_layout()
#     plt.savefig('ice_skaters_diagram.png', bbox_inches='tight')
#     plt.show()

# Generate all diagrams
if __name__ == "__main__":
    print("Generating physics quiz diagrams...")
    
    # create_pt_graph_combined()
    # print("✓ P-T Graph (Combined) saved as pt_graph_combined.png")
    
    # create_pt_graph_slope()
    # print("✓ P-T Graph (Slope) saved as pt_graph_slope.png")
    
    create_vt_graph_area()
    print("✓ V-T Graph (Area) saved as vt_graph_area.png")
    
    # create_vt_graph_combined()
    # print("✓ V-T Graph (Combined) saved as vt_graph_combined.png")
    
    # create_collision_diagram()
    # print("✓ Collision Diagram saved as collision_diagram.png")
    
    # create_ice_skaters_diagram()
    # print("✓ Ice Skaters Diagram saved as ice_skaters_diagram.png")
    
    print("\nAll diagrams generated successfully!")