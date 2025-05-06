import numpy as np

import matplotlib.pyplot as plt

# Set up the figure
plt.figure(figsize=(10, 8))

# Define triangle vertices (equilateral triangle with side 0.1m)
side = 0.1  # meters
height = side * np.sqrt(3) / 2
vertices = np.array([
    [0, 0],                    # Vertex 1 (+2μC)
    [side, 0],                 # Vertex 2 (-3μC)
    [side/2, height]           # Vertex 3 (+2μC)
])

# Calculate center point
center = vertices.mean(axis=0)

# Plot the triangle
plt.plot([vertices[0,0], vertices[1,0]], [vertices[0,1], vertices[1,1]], 'b-', label='Triangle sides')
plt.plot([vertices[1,0], vertices[2,0]], [vertices[1,1], vertices[2,1]], 'b-')
plt.plot([vertices[2,0], vertices[0,0]], [vertices[2,1], vertices[0,1]], 'b-')

# Plot charges with different colors and sizes based on charge
plt.scatter(vertices[0,0], vertices[0,1], c='r', s=200, label='+2μC')  # Vertex 1
plt.scatter(vertices[1,0], vertices[1,1], c='b', s=300, label='-3μC')  # Vertex 2
plt.scatter(vertices[2,0], vertices[2,1], c='r', s=200, label='+2μC')  # Vertex 3

# Plot center point
plt.scatter(center[0], center[1], c='g', s=100, label='Center')

# Add charge labels
plt.annotate('+2μC', (vertices[0,0]-0.01, vertices[0,1]-0.01))
plt.annotate('-3μC', (vertices[1,0]+0.01, vertices[1,1]-0.01))
plt.annotate('+2μC', (vertices[2,0], vertices[2,1]+0.01))
plt.annotate('Center', (center[0], center[1]-0.01))

# Set equal aspect ratio and add grid
plt.axis('equal')
plt.grid(True)
plt.legend()

# Add title and labels
plt.title('Electric Charges in Equilateral Triangle Configuration')
plt.xlabel('x (meters)')
plt.ylabel('y (meters)')

# Save the plot
plt.savefig('triangle_charges.png', dpi=300, bbox_inches='tight')
plt.close()