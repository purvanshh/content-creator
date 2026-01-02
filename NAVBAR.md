# 🧭 Dynamic Glass Navbar

A modern, animated navigation bar with glassmorphism effects and dynamic behavior.

## ✨ Features

### 1. **Dynamic Scroll Behavior**
- Transparent when at top of page
- Becomes glass-morphic with blur on scroll
- Smooth transitions between states
- Adjusts padding dynamically

### 2. **Active Section Tracking**
- Automatically highlights current section
- Smooth animated indicator
- Updates based on scroll position

### 3. **Glassmorphism Design**
- Frosted glass effect with backdrop blur
- Subtle gradient borders
- Semi-transparent background
- Modern aesthetic

### 4. **Smooth Navigation**
- Smooth scroll to sections
- Offset for fixed navbar
- Mobile-friendly touch interactions

### 5. **Magnetic Interactions**
- Magnetic buttons that follow cursor
- Hover scale effects
- Spring-based animations

### 6. **Mobile Responsive**
- Hamburger menu for mobile
- Slide-down mobile menu
- Touch-optimized
- Overlay backdrop

### 7. **Animated Logo**
- Pulsing glow effect
- Gradient background
- Hover interactions

## 🎨 Visual Effects

### Scroll-Based Transformations
```tsx
- Background opacity: 0 → 0.8
- Backdrop blur: 0px → 20px
- Border color: transparent → purple
- Padding: 1.5rem → 1rem
```

### Active Section Indicator
- Animated background pill
- Smooth layout transitions
- Spring physics animation

### Mobile Menu
- Slide animation
- Staggered item reveals
- Backdrop blur overlay

## 📱 Responsive Breakpoints

- **Mobile**: < 1024px - Hamburger menu
- **Desktop**: ≥ 1024px - Full navigation

## 🎯 Navigation Items

Current sections:
1. Home
2. Expertise
3. Audience
4. Events
5. Podcast
6. Videos

## 🔧 Customization

### Adding New Nav Items
```tsx
const navItems = [
    { name: "Your Section", href: "#your-section" },
];
```

### Changing Colors
Update gradient colors in:
- Logo background
- CTA button
- Active indicator
- Border colors

### Adjusting Scroll Behavior
Modify `useTransform` values:
```tsx
const navbarBackground = useTransform(
    scrollY,
    [0, 100], // Scroll range
    ["rgba(10, 9, 8, 0.0)", "rgba(10, 9, 8, 0.8)"] // Values
);
```

## 🎭 Animations

1. **Initial Load**: Fade in with stagger
2. **Scroll**: Transform background and blur
3. **Hover**: Magnetic pull and scale
4. **Active**: Smooth pill indicator
5. **Mobile Menu**: Slide and fade

## 🚀 Performance

- GPU-accelerated transforms
- Optimized scroll listeners
- Debounced section tracking
- Efficient re-renders

## 💡 Usage Tips

1. Ensure all sections have matching IDs
2. Adjust scroll offset if needed (currently 80px)
3. Customize magnetic strength for different feels
4. Test on various screen sizes

## 🎨 Color Scheme

- **Primary**: Purple (#a855f7)
- **Secondary**: Pink (#ec4899)
- **Background**: Dark (#0a0908)
- **Text**: White with opacity variants

## 🔗 Dependencies

- Framer Motion (animations)
- Lucide React (icons)
- Next.js (Link component)
- Custom MagneticButton component
