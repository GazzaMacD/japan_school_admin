import Image from 'next/image';
import Link from 'next/link';

const Logo = (): JSX.Element => {
  return (
    <div>
      <Link href="/">
        <a>
          <Image
            src="/images/xlingual_only_logo.svg"
            alt="XLingual Logo"
            width={300}
            height={68}
          />
        </a>
      </Link>
    </div>
  );
};

export { Logo };
