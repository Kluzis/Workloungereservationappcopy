# LOGIN PAGE - Figma Design Guide

## Overview
The login page is the first screen users see. It features a gradient background, clean form inputs, and clear branding. This is where Daniel starts his WorkLounge journey!

---

## STEP-BY-STEP INSTRUCTIONS

### **STEP 1: Create the Frame**

1. Press `F` (Frame tool)
2. Select **iPhone 14 Pro** (393 × 852px)
3. Rename: **"Login"**

---

### **STEP 2: Create Gradient Background**

1. Press `R` (Rectangle)
2. Size: **393 × 852** (full screen)
3. Position: X: 0, Y: 0
4. **Fill**: Create gradient
   - Click fill → "Solid" dropdown → **"Linear"**
   - First stop (top): **#2563EB** (blue)
   - Second stop (bottom): **#1E3A8A** (dark blue)
   - Angle: **180°** (top to bottom)
5. Rename: **"Background Gradient"**

---

### **STEP 3: Create Logo/Branding Section (Top Half)**

#### **3.1 Logo Container:**
1. Press `O` (Ellipse), hold Shift for perfect circle
2. Size: **96 × 96**
3. Fill: White with **20% opacity**
4. **Add blur effect**:
   - Right sidebar → Effects → + → **Background Blur**
   - Amount: **10**
5. Position: X: **148** (centered), Y: **120**

#### **3.2 Building Icon:**
1. Use Iconify → Search "lucide building-2"
2. Size: **64 × 64**
3. Color: **White**
4. Center inside the circle
5. Group circle + icon → Rename: **"Logo"**

#### **3.3 App Name:**
1. Press `T`, Type: **"WorkLounge"**
2. Settings:
   - Size: **36**
   - Weight: **Bold (700)**
   - Color: **White**
3. Position: X: **centered**, Y: **240**
4. Rename: **"App Name"**

#### **3.4 Subtitle:**
1. Press `T`, Type: **"Meeting Room Booking"**
2. Settings:
   - Size: **16**
   - Weight: Regular
   - Color: **#DBEAFE** (light blue)
3. Position: X: **centered**, Y: **285**

#### **3.5 AI Badge:**
1. Create rounded pill:
   - Rectangle: Auto-width (fit content), H: **28**
   - Corner radius: **14**
   - Fill: White with **20% opacity**
   - Backdrop blur: **10**

2. Add sparkles icon (16×16, White)
3. Add text: "AI-Powered Suggestions" (12px, White)
4. Center icon + text in pill
5. Position: X: **centered**, Y: **320**
6. Group → Rename: **"AI Badge"**

---

### **STEP 4: Create White Form Card (Bottom Half)**

#### **4.1 Card Container:**
1. Press `R`
2. Size: **393 × 480** (adjust height as needed)
3. Position: X: **0**, Y: **372**
4. Fill: **White**
5. **Round only top corners**:
   - Select rectangle
   - Right sidebar → "Corner radius" → Click individual corners icon
   - Top-left: **24**
   - Top-right: **24**
   - Bottom-left: **0**
   - Bottom-right: **0**
6. **Add shadow**:
   - Effects → + → **Drop shadow**
   - Y: **-4**, Blur: **20**, Color: Black **30%**
7. Rename: **"Form Card"**

---

### **STEP 5: Add Form Header**

1. **"Welcome Back" heading**:
   - Press `T`, Type: **"Welcome Back"**
   - Size: **24**, Weight: Semibold
   - Color: **#171717**
   - Position: X: **24**, Y: **396**

2. **Subtitle**:
   - Press `T`, Type: **"Sign in to continue booking"**
   - Size: **14**, Weight: Regular
   - Color: **#737373**
   - Position: X: **24**, Y: **428**

---

### **STEP 6: Create Email Input Field**

#### **6.1 Label:**
1. Press `T`, Type: **"Email Address"**
2. Size: **14**, Weight: Regular
3. Color: **#404040**
4. Position: X: **24**, Y: **468**

#### **6.2 Input Container:**
1. Rectangle:
   - W: **345** (393 - 48 for margins)
   - H: **48**
   - Corner radius: **8**
   - Fill: **White**
   - Stroke: **1px**, **#D4D4D4**
2. Position: X: **24**, Y: **492**

#### **6.3 Mail Icon:**
1. Iconify → "lucide mail"
2. Size: **20 × 20**
3. Color: **#A3A3A3**
4. Position: X: **36** (12px from left edge), Y: **506** (centered vertically)

#### **6.4 Placeholder Text:**
1. Press `T`, Type: **"your.email@company.com"**
2. Size: **16**, Weight: Regular
3. Color: **#A3A3A3**
4. Position: X: **68** (44px from left to clear icon), Y: **504**

#### **6.5 Focus State (Optional - Create Variant):**
- Duplicate input
- Change stroke: **2px**, **#2563EB** (blue)
- Add outer glow: Blue **20%**

#### **6.6 Group Everything:**
- Select label + container + icon + text
- Press `Cmd/Ctrl + G`
- Rename: **"Input - Email"**

---

### **STEP 7: Create Password Input Field**

Repeat Step 6 with these changes:

1. **Label**: "Password"
2. **Icon**: Use "lucide lock" instead of mail
3. **Placeholder**: "Enter your password"
4. **Add Eye Icon** (show/hide password):
   - Iconify → "lucide eye"
   - Size: **20 × 20**, Color: **#A3A3A3**
   - Position: Right side of input (X: **341**, Y: **566**)
5. Position: Y: **556** (below email input)
6. Group and rename: **"Input - Password"**

---

### **STEP 8: Add "Forgot Password" Link**

1. Press `T`, Type: **"Forgot Password?"**
2. Size: **14**, Weight: Regular
3. Color: **#2563EB** (blue)
4. Position: X: **right-aligned**, Y: **620**
5. Add underline on hover (create variant)

---

### **STEP 9: Create Sign In Button**

1. **Rectangle**:
   - W: **345**
   - H: **48**
   - Corner radius: **8**
   - Fill: **#2563EB** (blue)
2. Position: X: **24**, Y: **652**

3. **Button Text**:
   - "Sign In"
   - Size: **16**, Weight: Semibold
   - Color: **White**
   - Center in button

4. **Create Component** with variants:
   - **Default**: Blue background
   - **Hover**: Darker blue (**#1E40AF**) + shadow (Y: 4, Blur: 12)
   - **Loading**: Lighter blue (**#60A5FA**) + loading spinner
   - **Disabled**: Gray (**#D4D4D4**)

5. Group and rename: **"Button - Sign In"**

---

### **STEP 10: Create Loading Spinner (for Button)**

1. Press `O` (circle)
2. Size: **20 × 20**
3. No fill, Stroke: **2px**, **White**
4. **Make it a loading spinner**:
   - Delete a small arc (leave 270° of circle)
   - Rotate 45°
5. Add text: "Signing in..." next to spinner
6. Group → Rename: **"Loading State"**

---

### **STEP 11: Create Demo Login Button**

1. **Rectangle**:
   - W: **345**, H: **48**
   - Corner radius: **8**
   - Fill: **#FAF5FF** (purple light)
2. Position: X: **24**, Y: **716**

3. **Content**:
   - Sparkles icon (20×20, **#9333EA**)
   - Text: "Try Demo Login"
   - Size: **16**, Color: **#7C3AED**
   - Center both in button

4. **Hover state**: Darker purple background (**#F3E8FF**)
5. Group and rename: **"Button - Demo Login"**

---

### **STEP 12: Add Sign Up Link**

1. Text: **"Don't have an account?"** (14px, **#737373**)
2. Link: **"Sign Up"** (14px, **#2563EB***, Semibold)
3. Place them side by side
4. Position: X: **centered**, Y: **780**
5. Group → Rename: **"Sign Up Link"**

---

### **STEP 13: Add Footer Info**

#### **13.1 Divider Line:**
1. Rectangle: **345 × 1**
2. Fill: **#E5E5E5**
3. Position: X: **24**, Y: **812**

#### **13.2 Company Info:**
1. Text 1: **"WorkLounge Coworking Spaces"**
   - Size: **12**, Color: **#A3A3A3**
   - Position: X: **centered**, Y: **828**

2. Text 2: **"Prague • 7 Locations"**
   - Size: **11**, Color: **#D4D4D4**
   - Position: X: **centered**, Y: **844**

3. Group → Rename: **"Footer"**

---

### **STEP 14: Organize Layers**

```
📱 Login
  ├─ 🎨 Background Gradient
  ├─ 🏢 Branding Section
  │   ├─ Logo (circle + icon)
  │   ├─ App Name
  │   ├─ Subtitle
  │   └─ AI Badge
  ├─ 📋 Form Card
  │   ├─ Welcome Back (heading)
  │   ├─ Subtitle
  │   ├─ Input - Email
  │   ├─ Input - Password
  │   ├─ Forgot Password Link
  │   ├─ Button - Sign In
  │   ├─ Button - Demo Login
  │   ├─ Sign Up Link
  │   └─ Footer
  └─ 
```

---

### **STEP 15: Apply Auto Layout**

**For Form Card:**
1. Select all elements inside the white card
2. Press `Shift + A`
3. Direction: **Vertical**
4. Spacing: **16px**
5. Padding: **24px** (all sides)
6. This makes the form responsive!

**For Input Fields:**
1. Select elements in each input (label + field)
2. Press `Shift + A`
3. Direction: Vertical
4. Spacing: **8px**

**For Buttons:**
1. Select icon + text inside button
2. Press `Shift + A`
3. Direction: Horizontal
4. Spacing: **8px**
5. Center align

---

### **STEP 16: Create Input Component (Reusable)**

Make the input field a component so you can reuse it:

1. Select one complete input field
2. Right-click → **Create Component**
3. Name: **"Input/Text"**
4. Add variants:
   - **State = Default**: Normal border
   - **State = Focused**: Blue border + glow
   - **State = Error**: Red border + error message
   - **State = Filled**: Has text inside

**Properties:**
- Label (text)
- Placeholder (text)
- Icon (swap icon)
- Has right icon (boolean)

---

### **STEP 17: Add Micro-Interactions**

#### **Input Focus Animation:**
1. Select default input state
2. Prototype mode → While hovering
3. Change to: Focused state
4. Animation: Dissolve, 150ms

#### **Button Hover:**
1. Select Sign In button (default)
2. Prototype mode → While hovering
3. Change to: Hover state
4. Animation: Dissolve, 200ms

#### **Button Press:**
1. Select Sign In button
2. Prototype mode → While pressing
3. Change to: Pressed state (slightly smaller scale)
4. Animation: Instant

---

### **STEP 18: Create Prototyping Flow**

**Login Success Flow:**

1. **Select "Sign In" button**
2. Prototype mode → On click
3. Action: **Navigate to** → Home screen
4. Animation: **Dissolve** or **Push →**
5. Duration: **400ms**
6. Easing: Ease out

**Demo Login:**

1. **Select "Try Demo Login" button**
2. Same navigation as Sign In
3. This auto-fills credentials and logs in

**Sign Up Link:**

1. Select "Sign Up" text
2. Navigate to: Sign Up screen (create if needed)
3. Animation: Move in →

**Forgot Password:**

1. Select "Forgot Password?" link
2. Navigate to: Reset Password screen
3. Animation: Move in →

---

### **STEP 19: Add Input Validation States**

Create these variants for better UX:

#### **Email Error State:**
1. Duplicate email input
2. Change border to **red** (#EF4444)
3. Add error text below: "Please enter a valid email"
   - Size: **12px**, Color: **#EF4444**

#### **Empty State:**
1. Show when user tries to submit without filling

---

### **STEP 20: Add Keyboard (Optional - Advanced)**

For realistic mobile mockup:

1. Create rectangle at bottom: **393 × 270**
2. Fill: **#D1D5DB** (light gray)
3. Add keyboard keys layout
4. Or use keyboard mockup from Figma Community

---

## COLOR REFERENCE

```
GRADIENT:
Top: #2563EB (Blue)
Bottom: #1E3A8A (Dark Blue)

WHITE CARD:
Background: #FFFFFF
Shadow: Black 30%

TEXT COLORS:
Heading: #171717
Body: #737373
Placeholder: #A3A3A3
Link/Primary: #2563EB

BORDERS:
Default: #D4D4D4
Focused: #2563EB
Error: #EF4444

BUTTONS:
Primary BG: #2563EB
Primary Hover: #1E40AF
Demo BG: #FAF5FF
Demo Text: #7C3AED

ICONS:
Default: #A3A3A3
Active: #2563EB
```

---

## MEASUREMENTS SUMMARY

```
SCREEN: 393 × 852px
GRADIENT BG: 393 × 852px

TOP SECTION:
Logo size: 96 × 96
Logo position: Y = 120
App name size: 36px

FORM CARD:
Width: 393px (full width)
Height: ~480px
Corner radius: 24px (top only)
Position: Y = 372
Padding: 24px

INPUT FIELDS:
Width: 345px
Height: 48px
Corner radius: 8px
Icon size: 20 × 20
Label size: 14px
Text size: 16px
Spacing between inputs: 16px

BUTTONS:
Width: 345px
Height: 48px
Corner radius: 8px
Text size: 16px

SPACING:
Margins: 24px
Input spacing: 16px
Label to input: 8px
```

---

## KEYBOARD SHORTCUTS REMINDER

```
F           - Frame
R           - Rectangle
O           - Ellipse (circle)
T           - Text
Shift + A   - Auto Layout
Cmd/Ctrl + D - Duplicate
Cmd/Ctrl + G - Group
Cmd/Ctrl + / - Search plugins (Iconify)
```

---

## PRO TIPS

### **1. Make It Responsive:**
Use Auto Layout on the form card so it adapts to different content lengths

### **2. Component Library:**
Create components for:
- Input fields (reusable)
- Buttons (reusable)
- Form card wrapper

### **3. Dark Mode Version:**
Create a variant with:
- Dark background
- Light text
- Adjusted shadows

### **4. Accessibility:**
- Ensure text contrast meets WCAG standards
- Label sizes at least 14px
- Touch targets minimum 44×44px

### **5. Real Device Testing:**
- Share prototype link to phone
- Test actual tap interactions
- Check if text is readable

---

## VARIANTS TO CREATE

### **Input Field Component:**
- ✓ Default
- ✓ Focused (blue border)
- ✓ Error (red border + message)
- ✓ Filled (has text)
- ✓ Disabled (gray)

### **Button Component:**
- ✓ Default
- ✓ Hover (darker + shadow)
- ✓ Pressed (slightly smaller)
- ✓ Loading (spinner)
- ✓ Disabled (gray)

---

## OPTIONAL ENHANCEMENTS

### **1. Social Login Buttons:**
Add buttons for:
- Continue with Google
- Continue with Apple
- Use their brand colors and logos

### **2. Password Strength Indicator:**
- Weak (red bar)
- Medium (yellow bar)
- Strong (green bar)

### **3. Remember Me Checkbox:**
Add checkbox before Sign In button

### **4. Biometric Login:**
- Face ID icon
- Touch ID icon
- "Use biometric" button

---

## ANIMATION TIMELINE

```
USER ACTION:          ANIMATION:
────────────────────────────────────
Opens app         →   Fade in logo + form (400ms)
Types in field    →   Border color change (150ms)
Taps Sign In      →   Button scale down (100ms)
Loading           →   Spinner rotation (continuous)
Success           →   Dissolve to Home (400ms)
Error shake       →   Horizontal shake (300ms)
```

---

## COMMON MISTAKES TO AVOID

❌ Input fields too small (minimum 48px height)  
❌ Poor contrast between text and background  
❌ No clear focused state on inputs  
❌ Buttons without hover/press states  
❌ Forgot to lock background layer  
❌ Text not aligned properly  
❌ Inconsistent spacing  

✅ Use Auto Layout for consistent spacing  
✅ Create components for reusable elements  
✅ Test on actual mobile device  
✅ Add proper shadows for depth  
✅ Use grid system (8px or 4px)  

---

## FINAL CHECKLIST

Before presenting:

- [ ] All layers properly named
- [ ] Components created for reusable elements
- [ ] Prototype connections working
- [ ] Animations smooth (200-400ms)
- [ ] Text readable on mobile
- [ ] Touch targets minimum 44×44px
- [ ] Colors match brand (blue theme)
- [ ] Tested on real device via Figma app
- [ ] Error states designed
- [ ] Loading states designed

---

**Your Login Page is Complete!** 🎉

This professional login page includes:
- ✓ Beautiful gradient branding
- ✓ Clean, modern form design
- ✓ Interactive input fields
- ✓ Loading and error states
- ✓ Demo login for testing
- ✓ Smooth animations
- ✓ Mobile-optimized UX

**Next Steps:**
1. Connect Login → Home (on successful sign in)
2. Create Sign Up screen (similar layout)
3. Create Forgot Password screen
4. Add error animations (shake effect)

**Need help with any specific part?** Let me know! 🚀
