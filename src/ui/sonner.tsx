import { PiUserCircleCheck, PiInfo, PiSpinnerBold } from 'react-icons/pi';
import { RiAlertLine } from 'react-icons/ri';
import { FiXOctagon } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      icons={{
        success: <PiUserCircleCheck className='size-4' />,
        info: <PiInfo className='size-4' />,
        warning: <RiAlertLine className='size-4' />,
        error: <FiXOctagon className='size-4' />,
        loading: <PiSpinnerBold className='size-4 animate-spin' />,
      }}
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
          '--border-radius': 'var(--radius)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
