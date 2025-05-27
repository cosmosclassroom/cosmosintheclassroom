import matplotlib.pyplot as plt
import numpy as np

# Create time array (0 to 8 seconds)
t = np.linspace(0, 8, 1000)

# Non-distracted driver scenario
# Quick reaction time (0.5s) then steady braking
reaction_time_alert = 0.5
initial_velocity = 20  # m/s (72 km/h)

# Non-distracted driver velocity profile
v_alert = np.zeros_like(t)
for i, time in enumerate(t):
    if time < reaction_time_alert:
        v_alert[i] = initial_velocity  # Constant speed during reaction
    else:
        # Linear deceleration after reaction
        decel_time = time - reaction_time_alert
        v_alert[i] = max(0, initial_velocity - 4 * decel_time)

# Distracted driver scenario  
# Longer reaction time (2.5s) then same braking
reaction_time_distracted = 2.5

# Distracted driver velocity profile
v_distracted = np.zeros_like(t)
for i, time in enumerate(t):
    if time < reaction_time_distracted:
        v_distracted[i] = initial_velocity  # Constant speed during longer reaction
    else:
        # Same deceleration rate after reaction
        decel_time = time - reaction_time_distracted
        v_distracted[i] = max(0, initial_velocity - 4 * decel_time)

# Non-distracted driver graph
plt.figure(figsize=(10, 8))
plt.fill_between(t, 0, v_alert, alpha=0.3, color='green', label='Momentum Area')
plt.plot(t, v_alert, 'green', linewidth=3)
plt.xlabel('Time (s)', fontsize=14)
plt.ylabel('Velocity (m/s)', fontsize=14)
plt.grid(True, alpha=0.3)
plt.xlim(0, 8)
plt.ylim(0, 25)
plt.tight_layout()
plt.savefig('alert_driver_momentum.png', dpi=300, bbox_inches='tight')
plt.show()

# Distracted driver graph
plt.figure(figsize=(10, 8))
plt.fill_between(t, 0, v_distracted, alpha=0.3, color='red', label='Momentum Area')
plt.plot(t, v_distracted, 'red', linewidth=3)
plt.xlabel('Time (s)', fontsize=14)
plt.ylabel('Velocity (m/s)', fontsize=14)
plt.grid(True, alpha=0.3)
plt.xlim(0, 8)
plt.ylim(0, 25)
plt.tight_layout()
plt.savefig('distracted_driver_momentum.png', dpi=300, bbox_inches='tight')
plt.show()
