import { APP_NAME } from '@/lib/constants';

const Footer = () => {
  return (
    <footer className='w-full border-t py-6'>
      <div className='wrapper text-center text-sm text-muted-foreground'>
        &copy; {new Date().getFullYear()} {APP_NAME}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
