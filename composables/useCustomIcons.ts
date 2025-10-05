// Custom icons from Figma design
export const customIcons = {
  home: "http://localhost:3845/assets/e98d95afa1d25822f3d185973bebf31fbb7f8d01.svg",
  marketplace: "http://localhost:3845/assets/912f5a5140b81ca1aaa37103623b5e900d642ac3.svg",
  tradeManager: "http://localhost:3845/assets/706935ec81472ab592b97981c7ee84495cd46d46.svg",
  agreements: "http://localhost:3845/assets/fe87a1491fd26534d23c3dff67d1d2332be6bb35.svg",
  locates: "http://localhost:3845/assets/8fc471fbc995cafe5b466cdfec2f1a3010104571.svg",
  analytics: "http://localhost:3845/assets/cd6e870e3d71b100fe251d64002df23e2e33c6ca.svg",
  reports: "http://localhost:3845/assets/fbfbebce66f6669752a99af216eb2475f4b6b321.svg",
  swaps: "http://localhost:3845/assets/96a14e995119e60cac33ab902d0beeff5023076d.svg",
  sparkle: "http://localhost:3845/assets/5016c70e92e52be53af2f0e79740a63f2a0a2701.svg",
  basket: "http://localhost:3845/assets/0e551058902c4701a620b8bf97a36cee20b1e532.svg",
  strategy: "http://localhost:3845/assets/dd5cc5b7b034a85d9302ec82bba0e805ec6f6484.svg",
  notificationBell: "http://localhost:3845/assets/2fdf77590e9bda7d1a0859430f111629f8d33db6.svg"
}

// Icon component for custom icons
export const CustomIcon = defineComponent({
  props: {
    name: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'w-5 h-5'
    },
    className: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const iconSrc = computed(() => customIcons[props.name])
    
    return {
      iconSrc
    }
  },
  template: `
    <img 
      :src="iconSrc" 
      :alt="name"
      :class="[size, className]"
      class="block"
    />
  `
})
