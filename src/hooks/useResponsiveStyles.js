import { useWindowDimensions } from "react-native";

export default function useResponsiveStyles() {
  const { width } = useWindowDimensions();

  const isMobile = width < 500;
  const isTablet = width >= 500 && width < 900;
  const isDesktop = width >= 900;

  return {
    isMobile,
    isTablet,
    isDesktop,
  };
}
