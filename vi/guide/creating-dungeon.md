# Tạo Dungeon

## Sử dụng Setup Wizard

Cách dễ nhất để tạo dungeon là qua GUI wizard trong game.

```
/dungeon create <tên>
```

Mở GUI inventory 6 hàng với tất cả cài đặt dungeon theo danh mục.

## Cài đặt bắt buộc

1. **Display Name** — Tên hiển thị cho người chơi (hỗ trợ `&` color codes)
2. **Spawn Point** — Vị trí teleport khi vào dungeon
3. **Waves** — Ít nhất 1 wave quái

## Cài đặt tùy chọn

- **Border Region** — Hai góc xác định khu vực chơi
- **Ticket System** — Yêu cầu ticket để vào
- **Permission Gate** — Giới hạn bằng permission node
- **HP Scaling** — Scale HP quái theo số người
- **Checkpoints** — Điểm hồi sinh trong dungeon
- **Entry Fee** — Phí Vault để vào (cần Vault)
- **Money Reward** — Tiền Vault khi hoàn thành (cần Vault)

## Hướng dẫn từng bước

### 1. Đặt Display Name
Click **Name Tag** → gõ tên trong chat. Hỗ trợ `&` color codes.

### 2. Đặt Spawn Point
Đứng tại vị trí spawn → click **Spawn Point** → chạy `/dungeon set`.

### 3. Đặt Border (Tùy chọn)
Click **Border Region** → đứng ở góc 1 → `/dungeon set` → đứng ở góc 2 → `/dungeon set`.

### 4. Cấu hình Waves
Click **Waves & Mobs** để mở wave editor. Xem [Waves & Mobs](/guide/waves) để biết chi tiết.

### 5. Thêm Rewards
Click **Rewards** để mở reward editor. Xem [Rewards](/guide/rewards) để biết chi tiết.

### 6. Lưu
Click **Create** (góc dưới phải). Status indicator cho biết đã cấu hình đủ chưa.

## Chỉnh sửa Dungeon

```
/dungeon edit <tên>
```

Load config dungeon vào wizard GUI. Tất cả cài đặt được giữ nguyên — chỉnh sửa và click **Save**.

::: warning
Nếu đóng wizard mà không lưu, thay đổi sẽ mất. Plugin sẽ nhắc bạn trong chat: `/dungeon continue <tên>`.
:::
