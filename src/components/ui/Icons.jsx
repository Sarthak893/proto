const SvgIcon = ({ children, className, size = '1em', viewBox = '0 0 24 24', ...props }) => (
  <svg
    aria-hidden="true"
    focusable="false"
    width={size}
    height={size}
    viewBox={viewBox}
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
)

export const HeartIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
  </SvgIcon>
)

export const MenuIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
  </SvgIcon>
)

export const CloseIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M18.3 5.71 12 12l6.3 6.29-1.41 1.41L10.59 13.41 4.29 19.71 2.88 18.3 9.17 12 2.88 5.71 4.29 4.29l6.3 6.3 6.29-6.3 1.42 1.42z" />
  </SvgIcon>
)

export const ChevronDownIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M7.41 8.59 12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
  </SvgIcon>
)

export const ArrowForwardIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M12 4 10.59 5.41 16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
  </SvgIcon>
)

export const SparklesIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M12 2 9.9 8.1 4 10.2l5.9 2.1L12 18l2.1-5.7 5.9-2.1-5.9-2.1L12 2zm-6 13-1 3-3 1 3 1 1 3 1-3 3-1-3-1-1-3zm13 0-1 2.5-2.5 1L18 19.5l1 2.5 1-2.5 2.5-1-2.5-1-1-2.5z" />
  </SvgIcon>
)

export const InstagramIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 12 16.5 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 12 14.5 2.5 2.5 0 0 0 12 9.5zM17.75 6.25a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
  </SvgIcon>
)

export const WhatsappIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M12.04 2a9.86 9.86 0 0 0-8.45 14.95L2.5 22l5.18-1.36A9.93 9.93 0 1 0 12.04 2zm0 18.1a8.05 8.05 0 0 1-4.1-1.12l-.3-.18-3.07.8.82-2.99-.2-.31a8.03 8.03 0 1 1 6.85 3.8zm4.4-6.02c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.01-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.43-.58 1.63-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28z" />
  </SvgIcon>
)
