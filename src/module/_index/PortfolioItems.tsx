import Image from 'next/image';


export const PortfolioItems = ({ items }: any) => {
  return (
    <div className='flex pos-rel flex-wrap gap-2 pa-1'>
      {items.map((option: any, index: any) => {
        const { href, className, target, alt, src, width, height, additionalClassName } = option;
        return (
          <a href={`${href}`} className={`${className} ${additionalClassName}`} target={`${target}`} key={index}>
            <Image alt={`${alt}`} src={`${src}`} width={parseInt(`${width}`)}
              height={parseInt(`${height}`)} />
          </a>
        );
      })}
    </div>
  );
};
