import matplotlib.pyplot as plt
import matplotlib.patches as patches

def plot_blank_template(filename="blank_template.png"):
    fig, ax = plt.subplots(figsize=(6, 6))
    # Set limits for 1st quadrant
    ax.set_xlim(0, 10)
    ax.set_ylim(0, 10)

    # Remove top and right spines
    ax.spines['top'].set_visible(False)
    ax.spines['right'].set_visible(False)

    # Set ticks: 10 divisions, external, unlabeled
    ax.set_xticks([i for i in range(11)])
    ax.set_yticks([i for i in range(11)])
    ax.tick_params(axis='both', direction='out', length=8, labelbottom=False, labelleft=False)

    # Draw rectangles for unit labels at end of axes
    # X-axis rectangle
    rect_x = patches.Rectangle((9.5, -0.7), 1.0, 0.5, linewidth=1.5, edgecolor='black', facecolor='none')
    ax.add_patch(rect_x)
    # Y-axis rectangle
    rect_y = patches.Rectangle((-1.5, 9.5), 0.5, 1.0, linewidth=1.5, edgecolor='black', facecolor='none')
    ax.add_patch(rect_y)

    # Hide grid and ticks on top/right
    ax.grid(False)
    ax.xaxis.set_ticks_position('bottom')
    ax.yaxis.set_ticks_position('left')

    # Set aspect ratio to 1:1
    ax.set_aspect('equal', adjustable='box')

    # Remove axis labels
    ax.set_xlabel('')
    ax.set_ylabel('')

    plt.tight_layout()
    # Save as PNG at 800x800px
    fig.savefig(filename, dpi=800//6, bbox_inches='tight')
    plt.close(fig)

# Uncomment to test
# plot_blank_template()
