# AI SUGGESTIONS PAGE - Figma Design Guide

## Overview
This is a smart AI-powered page that suggests meeting rooms based on user behavior and preferences. It features gradient headers, confidence meters, and 1-tap booking.

---

## STEP-BY-STEP INSTRUCTIONS

### **STEP 1: Create the Frame**

1. Press `F` (Frame tool)
2. Select **iPhone 14 Pro** (393 × 852px)
3. Rename: **"AI Suggestions"**

---

### **STEP 2: Create Gradient Header**

**Background:**
1. Press `R` (Rectangle)
2. Size: **393 × 180**
3. Position: X: 0, Y: 0
4. **Fill**: Create gradient
   - Click fill color → Click "Solid" dropdown → Select "Linear"
   - First stop (left): **#9333EA** (purple)
   - Second stop (right): **#2563EB** (blue)
   - Angle: **90°** (left to right)
5. Rename: **"Header Gradient"**

---

### **STEP 3: Add Back Button**

1. Use Iconify plugin → Search "lucide arrow-left"
2. Size: **24 × 24**
3. Color: **White**
4. Position: X: **16**, Y: **16**
5. Add circle background:
   - Press `O` (circle), size: 40 × 40
   - Fill: White with **10% opacity**
   - Center icon inside
6. Group → Rename: **"Back Button"**

---

### **STEP 4: Add AI Icon & Title**

1. **Sparkles Icon**:
   - Iconify → "lucide sparkles"
   - Size: **24 × 24**, Color: White
   - Position: X: **68**, Y: **20**

2. **Title Text**:
   - Press `T`, Type: **"AI Suggestions"**
   - Size: **24**, Weight: Semibold
   - Color: White
   - Position: X: **100**, Y: **16**

---

### **STEP 5: Create Info Card in Header**

1. **Rectangle**:
   - W: **361**, H: **70**
   - Corner radius: **8**
   - Fill: White with **20% opacity**
   - Position: X: **16**, Y: **80**

2. **Description Text**:
   - "Smart recommendations based on your booking habits"
   - Size: **14**, Color: White
   - Position: X: **28**, Y: **92**

3. **Updated Label**:
   - Add trending-up icon (16×16) + text "Updated just now"
   - Size: **12**, Color: White (90% opacity)
   - Position: X: **28**, Y: **124**

---

### **STEP 6: Create White Content Area**

1. Press `R`
2. Size: **393 × 672** (rest of screen)
3. Position: X: 0, Y: **180**
4. Fill: **White**
5. Rename: **"Content Background"**

---

### **STEP 7: Create Info Banner**

1. **Rectangle**:
   - W: **361**, H: **60**
   - Corner radius: **8**
   - Fill: **#FAF5FF** (purple light)
   - Stroke: **1px**, **#E9D5FF** (purple border)
   - Position: X: **16**, Y: **196**

2. **Zap Icon**:
   - Iconify → "lucide zap"
   - Size: **20 × 20**, Color: **#9333EA**
   - Position: X: **28**, Y: **208**

3. **Banner Text**:
   - Line 1: "Quick Book in 1-Tap" (14px, Semibold, **#581C87**)
   - Line 2: "Tap 'Book Now' to instantly reserve..." (12px, Regular, **#7C3AED**)
   - Position: X: **56**, Y: **206**

---

### **STEP 8: Create First Suggestion Card (Best Match)**

#### **8.1 Card Container:**
1. Rectangle:
   - W: **361**, H: **320**
   - Corner radius: **8**
   - Fill: White
   - Stroke: **2px**, **#E5E5E5**
   - Position: X: **16**, Y: **272**

#### **8.2 Best Match Badge:**
1. Create shape in top-right corner:
   - Rectangle with rounded bottom-left corner only
   - W: **100**, H: **28**
   - Fill: Gradient (**#9333EA** → **#2563EB**)
   - Position: Top-right of card
2. Add Sparkles icon (12×12) + "Best Match" text (11px)
3. Color: White

#### **8.3 Confidence Bar:**
1. **Label Row**:
   - Text: "AI Confidence" (11px, left)
   - Text: "95%" (11px, right, **#9333EA**)
   - Position: Below badge, with 16px padding

2. **Background Bar**:
   - W: **329**, H: **6**
   - Corner radius: **3**
   - Fill: **#E5E5E5**

3. **Progress Bar**:
   - W: **312** (95% of 329)
   - H: **6**
   - Corner radius: **3**
   - Fill: Gradient (**#9333EA** → **#2563EB**)
   - Position: Overlay on background bar

#### **8.4 Room Info:**
1. **Room Name**: "Room 3" (16px, Semibold, **#171717**)
2. **Location**: Map pin icon + "Forum Karlín" (14px, **#737373**)

#### **8.5 Details Grid:**
Create 2×2 grid with icons + text:
- Calendar icon + "2025-12-05"
- Clock icon + "14:00"
- Users icon + "4 seats"
- Text: "60 min"

Each:
- Size: **14px**
- Color: **#737373**
- Icon size: **16 × 16**
- Spacing: **8px** between icon and text

#### **8.6 AI Reason Box:**
1. Rectangle:
   - W: **329**, H: **40**
   - Corner radius: **6**
   - Fill: **#FAF5FF** (purple light)
2. Sparkles icon (14×14, **#9333EA**)
3. Text: "You often book here on Thursday afternoons"
   - Size: **12px**, Color: **#581C87**

#### **8.7 Tags:**
Create pill-shaped tags:
- Rectangle: Auto-width, H: **24**, Corner radius: **12**
- Fill: **#DBEAFE** (blue light)
- Text: "Most Booked" (12px, **#1E40AF**)
- Space multiple tags with 8px gap

#### **8.8 Footer (Credits & Button):**
1. **Border line**: 1px, **#E5E5E5**, full width

2. **Credits Info** (left side):
   - Credit card icon (16×16)
   - "4 credits" (16px, **#171717**)
   - "✓ Available" (11px, **#10B981**)

3. **Book Now Button** (right side):
   - W: **100**, H: **36**
   - Corner radius: **6**
   - Fill: Gradient (**#9333EA** → **#2563EB**)
   - Text: "Book Now" (14px, White, Semibold)
   - Hover: Add shadow (Y: 4, Blur: 12, **#9333EA** 30%)

---

### **STEP 9: Create Additional Suggestion Cards**

1. **Select the entire first card**
2. Press `Cmd/Ctrl + D` to duplicate
3. Move down: Y: **608**
4. **Modify for second suggestion**:
   - Remove "Best Match" badge
   - Change confidence to **88%**
   - Update room: "Room 4"
   - Update location: "BCK Smíchov"
   - Update time: "10:00"
   - Update credits: "9 credits"
   - Update reason text
   - Update tags: "Team Size Match", "Available Now"

5. **Repeat for 2 more cards** (adjust Y positions and content)

---

### **STEP 10: Create "How AI Works" Section**

1. **Container**:
   - W: **361**, H: **auto**
   - Corner radius: **8**
   - Fill: **#FAFAFA**
   - Stroke: **1px**, **#E5E5E5**

2. **Heading**:
   - Sparkles icon (20×20, **#9333EA**) + "How AI Works"
   - Size: **16px**, Weight: Semibold

3. **Bullet List**:
   - 4 items with purple dot bullets
   - Text size: **14px**, Color: **#737373**
   - Each item:
     - "• Analyzes your booking history..."
     - "• Considers time of day..."
     - "• Checks real-time availability..."
     - "• Learns from your choices..."

---

### **STEP 11: Add "Manual Booking" Link**

1. Text: "Don't see what you need?" (14px, **#737373**)
2. Link: "Browse all rooms manually →" (14px, **#2563EB**)
3. Center aligned at bottom

---

### **STEP 12: Organize Layers**

```
📱 AI Suggestions
  ├─ 🎨 Header Gradient
  ├─ ← Back Button
  ├─ ✨ Title
  ├─ 💬 Info Card
  ├─ ⬜ Content Background
  ├─ 🔔 Info Banner
  ├─ 📋 Suggestion Card 1 (Best Match)
  │   ├─ Badge
  │   ├─ Confidence Bar
  │   ├─ Room Info
  │   ├─ Details Grid
  │   ├─ AI Reason
  │   ├─ Tags
  │   └─ Footer
  ├─ 📋 Suggestion Card 2
  ├─ 📋 Suggestion Card 3
  ├─ 📋 Suggestion Card 4
  ├─ ℹ️ How AI Works
  └─ 🔗 Manual Link
```

---

### **STEP 13: Apply Auto Layout**

**For Each Suggestion Card:**
1. Select all elements inside card
2. Press `Shift + A`
3. Direction: Vertical
4. Spacing: **12px**
5. Padding: **16px**

**For Tags Row:**
1. Select all tags
2. Press `Shift + A`
3. Direction: Horizontal
4. Spacing: **8px**

**For Details Grid:**
1. Create 2 rows with Auto Layout
2. Each row: Horizontal, spacing **16px**

---

### **STEP 14: Create Gradient Button Component**

Since you'll reuse this button:

1. Create the "Book Now" button
2. Right-click → **Create Component**
3. Name: "Button/AI Gradient"
4. Add variants:
   - Default (enabled)
   - Disabled (gray, no gradient)

---

### **STEP 15: Add Prototyping Interactions**

**From Home Screen:**
1. Select "AI Smart Suggestions" button
2. Prototype mode → Drag to AI Suggestions screen
3. Settings:
   - On click → Navigate to
   - Animation: **Move in →**
   - Duration: 300ms

**On AI Suggestions Screen:**
1. **Back button** → Home
   - Animation: **Move out ←**

2. **"Book Now" buttons** → Success overlay or back to Home
   - Animation: **Dissolve**
   - Duration: 200ms

3. **"Browse manually" link** → Booking Flow
   - Animation: **Move in →**

---

## COLOR REFERENCE

```
Purple Gradient Start: #9333EA
Blue Gradient End: #2563EB

Purple Light BG: #FAF5FF
Purple Light Border: #E9D5FF
Purple Text Dark: #581C87
Purple Text Medium: #7C3AED
Purple Accent: #9333EA

Blue Light: #DBEAFE
Blue Dark: #1E40AF

Neutral Dark: #171717
Neutral Medium: #737373
Neutral Light: #E5E5E5
Neutral BG: #FAFAFA

Success Green: #10B981
```

---

## MEASUREMENTS SUMMARY

- **Screen**: 393 × 852px
- **Header height**: 180px
- **Card width**: 361px
- **Card spacing**: 16px between cards
- **Corner radius**: 8px (cards), 6px (buttons)
- **Confidence bar height**: 6px
- **Tag height**: 24px
- **Button height**: 36px

---

## PRO TIPS

1. **Use blend modes** for overlay effects on gradient header
2. **Group suggestion cards** as components for easy editing
3. **Create confidence bar as component** with properties for percentage
4. **Use Smart Animate** between Home and AI Suggestions for smooth transition
5. **Test on mobile device** - gradients look different on screens!

---

## ADVANCED: Make Confidence Bar Dynamic

1. Create component with variants: 75%, 80%, 85%, 90%, 95%
2. Each variant has different progress bar width
3. Use component properties for easy switching

---

**You now have a complete AI Suggestions page!** 🎉✨

This page provides:
- ✓ Visual AI confidence indicators
- ✓ Smart recommendations
- ✓ 1-tap booking
- ✓ Educational "How it works" section
- ✓ Fallback to manual booking

**Want help with any specific element or animation?**
