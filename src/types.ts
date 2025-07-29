export interface InputOTPProps {
  length?: number;           // Default: 6
  onChange?: (value: string) => void;
  autoFocus?: boolean;       // Default: true
  className?: string;        // Custom styling
}
