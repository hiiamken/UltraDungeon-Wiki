# Season System

## Overview

The season system provides time-limited leaderboards with automatic rewards for top players.

## How It Works

1. A season runs for a configurable duration (e.g., 30 days)
2. Players earn season points from dungeon completions
3. When a season ends, top players receive rewards
4. A new season starts automatically

## Configuration

```yaml
season:
  duration-days: 30
  rewards:
    1:    # 1st place
      - "give %player% diamond 64"
      - "eco give %player% 10000"
    2:    # 2nd place
      - "give %player% diamond 32"
      - "eco give %player% 5000"
    3:    # 3rd place
      - "give %player% diamond 16"
      - "eco give %player% 2500"
```

## Viewing Season Info

- `/dungeon top` → Season tab shows current season progress
- Season start/end dates are displayed
- Current rankings update in real-time

## Database

Season data is stored in:
- `season_points` — Per-player per-season point totals
- `season_info` — Season metadata (ID, start/end dates, active flag)

The first season is auto-created when the plugin starts if none exists.
