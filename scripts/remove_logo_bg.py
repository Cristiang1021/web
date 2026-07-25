from collections import deque
from pathlib import Path
from PIL import Image

src = Path(r"c:\Users\andre\Desktop\web\public\branding\logo.png")
backup = src.with_name("logo-original-black-bg.png")
if not backup.exists():
    backup.write_bytes(src.read_bytes())

img = Image.open(backup).convert("RGBA")
pixels = img.load()
w, h = img.size


def near_black(r: int, g: int, b: int, a: int) -> bool:
    if a < 10:
        return True
    mx = max(r, g, b)
    # Black / dark gray background only (low chroma)
    return mx <= 48 and abs(r - g) <= 16 and abs(g - b) <= 16 and abs(r - b) <= 16


visited = [[False] * w for _ in range(h)]
q: deque[tuple[int, int]] = deque()

for x in range(0, w, 8):
    q.append((x, 0))
    q.append((x, h - 1))
for y in range(0, h, 8):
    q.append((0, y))
    q.append((w - 1, y))

cleared = 0
while q:
    x, y = q.popleft()
    if x < 0 or y < 0 or x >= w or y >= h or visited[y][x]:
        continue
    r, g, b, a = pixels[x, y]
    if not near_black(r, g, b, a):
        continue
    visited[y][x] = True
    pixels[x, y] = (0, 0, 0, 0)
    cleared += 1
    q.extend(((x + 1, y), (x - 1, y), (x, y + 1), (x, y - 1)))

# Soften leftover pure-black speckles
for y in range(h):
    for x in range(w):
        r, g, b, a = pixels[x, y]
        if max(r, g, b) <= 10:
            pixels[x, y] = (0, 0, 0, 0)

# Soft anti-alias: reduce alpha on very dark edge pixels adjacent to transparent
for y in range(1, h - 1):
    for x in range(1, w - 1):
        r, g, b, a = pixels[x, y]
        if a == 0:
            continue
        mx = max(r, g, b)
        if mx > 70:
            continue
        neighbors = [
            pixels[x + 1, y][3],
            pixels[x - 1, y][3],
            pixels[x, y + 1][3],
            pixels[x, y - 1][3],
        ]
        if any(n == 0 for n in neighbors) and near_black(r, g, b, a):
            pixels[x, y] = (0, 0, 0, 0)

img.save(src, "PNG")
static = Path(r"c:\Users\andre\Desktop\web\static\branding\logo.png")
static.parent.mkdir(parents=True, exist_ok=True)
img.save(static, "PNG")
print(f"done cleared={cleared} size={w}x{h}")
