---
title: Instance Alert
---

The Instance Alert feature helps you track instance timers with audio-visual notifications, ensuring you don't lose progress by staying too long in town.

The alert system provides both visual and audio cues as you approach the instance timeout.

<div className="side-by-side">

![Instance Alert (Desktop)](/images/dIVa/instance-alert/instance-alert.png)
![Instance Alert (Expired)](/images/dIVa/instance-alert/instance-alert-danger.png)

</div>

### How Instance Alert Works

1. The timer starts automatically when entering town.
   - Default timer duration is 8 minutes (per Game Tip, instances last 8-15 minutes in Path of Exile 2)
   - Countdown begins at 30 seconds remaining
   - The timer is reset when zoning back into the instance (e.g. taking town portal back out)
2. Visual and Audio Alerts:
   - A countdown sound plays during the final 30 seconds
   - This can be silenced using the mute control if needed, but the timer will keep running
   - An alarm triggers when time runs out
   - The timer display flashes after, indicating the instance is at risk of expiring
   - The timer can be reset at this point, and the countdown will restart next time you enter town
3. Overlay Mode:
   - Compact, draggable overlay for in-game visibility
   - Automatically expands and collapses, but can be manually locked to stay open
   - Toggle between automatic and manual modes

<div className="side-by-side">

![Overlay (Expanded)](/images/dIVa/instance-alert/ia-expanded.png)
![Overlay (Automatic)](/images/dIVa/instance-alert/ia-automatic.png)

</div>

:::info
**Monitoring Toggle:** Use the monitoring toggle to enable/disable town tracking

**Overlay Toggle:** Enable overlay in Settings, along with the other Meter Overlays
:::
