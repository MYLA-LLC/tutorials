---
title: dIVa
displayed_sidebar: dIVaSidebar
---

<span className="center">
![dIVa](/images/dIVa/dIVa.png)

Elevate your aRPG experience with real-time statistics on Gold, Experience, and Speed Leveling!\
Designed for true enthusiasts, dIVa is your ultimate aRPG analytics companion!

Discover the most resource-efficient gameplay strategies across multiple games\
with in-game overlays that provide real-time updates on Gold, Experience, and Speed Leveling!\

Maximize your efficiency in every gaming session with dIVa!

</span>

## Games Supported

<div className="full-width-table">

| Game                   | [Speed Leveling](./speed-leveling-tracker) | [Meters](./meters) / [Log](./meter-log-and-history#meter-log) | Special                                     |
| ---------------------- | ------------------------------------------ | ------------------------------------------------------------- | ------------------------------------------- |
| Path of Exile 2        | ✓                                          | ✓                                                             | [Instance Alert](./instance-alert)          |
| Path of Exile          | ✓                                          | ✓                                                             | —                                           |
| Diablo IV              | ✓                                          | ✓                                                             | [Dungeons](./dungeons) / [Sigils](./sigils) |
| Diablo II: Resurrected | ✓                                          | X                                                             | —                                           |

</div>

## Changelog

### v2.6.0 - Lord of Hatred

- **Diablo IV:** Warlock class support has been added with updated character artwork.
- **Diablo IV - Leveling:** Main level cap support has been updated from 60 to 70.

### v2.5.0 - Path of Exile, Game Events Status & Leveling Enhancements

- **Path of Exile:**
  - Full support for Path of Exile alongside PoE2, D4, and D2R.
- **Game Event Status:** Overwolf Game Event Status API integration
  - Meter respect game event availability. Meter is disabled when events are unavailable.
  - Overwolf has confirmed the changes to **Diablo 2: Resurrected** were so extensive that the existing events are no longer usable and would need to be rebuilt from scratch. At this time, they do not have the capacity to work on rebuilding them, and there is no ETA on when game events will be available.
- **Leveling:**
  - New Leveling settings, milestone notifications, and "ahead of best" timer in Desktop and Overlay
- **Diablo:** Warlock class support added for Diablo II: Resurrected
- **Character Sidebar:** Quick Load for Last Character for faster layout switching.

#### v2.5.1 - Dungeons Layout & Sort

- **Diablo IV - Dungeons:** New layout toggle (vertical vs horizontal) and sort controls (Sort by Act, Sort Alphabetically) for the Nightmare Dungeons tier list.

#### v2.5.2 - Season of Slaughter

- **Diablo IV - Sigils:** Data has been updated for Season 12 - Season of Slaughter.

### v2.4.0 - Seasonal Game & Performance Updates

- **Improved Features Window Drag Enablement:** Enhanced detection on Feature's window open and drag enablement
- **Background Services Optimization:** Improved Layout, Subscription, and Translation services management for better performance and reliability

#### Diablo IV: Divine Intervention

- Updated Nightmare Dungeons data for Season 11

#### Path of Exile 2: The Last of the Druids

- **Druid Class Support:** Full support for the new Druid class with Oracle and Shaman ascendancy options

### v2.3.0 - History Date Filtering

- **Enhanced Filter Management:** Improved filter clearing and management for a better user experience. Date Range Filter is a new collapsible section in the History filter menu.
- **Date Range Filter:** Advanced date-based filtering for precise session analysis and historical data exploration. Persistent date range settings that remember your preferences across sessions
- **Total Meter Sessions Counter:** Real-time meter session count display for better tracking

### v2.2.0 - Enhanced Leveling System

- Data has been updated for **Diablo IV: Infernal Chaos**
- All of the following improvements are transparent to the user experience
  - Time segment tracking that adapts to your actual play sessions
  - Leveling data now breaks down into precise time segments based on when you start and pause your speed leveling tracker

### v2.1.0 - Advanced Analytics & History

- Data has been updated for **Diablo IV: Sins of the Horadrim**
- Experience Meter has been enhanced for Diablo 4 to now support Overwolf's introduction of **Paragon** experience. Meter is now enabled for the full leveling experience!
- As a thank you to the subscribers who support the dream of continuing to develop the application, **dIVa** is enhancing its premium experience by introducing new analytics features

#### Premium Experience Enhancements

- Introducing [Meter Log](./meter-log-and-history#meter-log) - a compact session tracking interface providing quick access to recent performance data with instant session analysis
- Custom tagging system allows you to organize and categorize gaming sessions for better data management
- Advanced filtering and sorting capabilities help you focus on specific session types, or performance metrics
- Session details are accessible through an intuitive popover showing total amounts, peak performance, and individual session management
- The streamlined interface expands into [History View](./meter-log-and-history#history) - a comprehensive historical database with paginated browsing through many sessions
- Enhanced search tools and bulk operations enable efficient data cleanup and long-term performance pattern analysis
- Detailed metrics display includes session totals, averages, peak values, and individual session management
- Smart settings allow character-specific filtering, timestamp visibility control, and automatic tag pinning for consecutive sessions

### v2.0.0 - dIVa v2

#### Major UI Overhaul

- Complete GUI redesign with unified single-window interface and sidebar navigation
- Settings toggle allows specific Features to open in a separate window (Diablo IV Dungeons & Sigils)
- Game Selector in top bar enables offline viewing and switching between supported games

#### Path of Exile 2

- New Instance Alert feature warns when town instances are at risk of expiring

### v1 Changelog

- Game-specific Themes and dynamic Theme switching
- Path of Exile 2: Class detection system, experience meter, and analytics
- Discord server for user discussion and feedback
- Expanded language support
- Draggable indicator on overlays
- Nightmare Dungeons Tier List and Sigil inventory systems
- Overlay for best Sigil to consume
- Notification viewer with search, categorization, and bulk actions
