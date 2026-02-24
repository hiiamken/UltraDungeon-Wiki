# Hệ thống Season

## Tổng quan

Hệ thống season cung cấp leaderboard giới hạn thời gian với reward tự động cho top người chơi.

## Cách hoạt động

1. Season chạy trong thời gian cấu hình (ví dụ: 30 ngày)
2. Người chơi kiếm season points từ hoàn thành dungeon
3. Khi season kết thúc, top người chơi nhận reward
4. Season mới bắt đầu tự động

## Cấu hình

```yaml
season:
  duration-days: 30
  rewards:
    1:    # Hạng 1
      - "give %player% diamond 64"
      - "eco give %player% 10000"
    2:    # Hạng 2
      - "give %player% diamond 32"
    3:    # Hạng 3
      - "give %player% diamond 16"
```
