import { base } from '@/styles/atoms/imageSvg.module.scss';
import Image from 'next/image';

const ImageSvg = ({ svgName, alt }) => {
    return (
        <div className={base}>
            <Image
                alt={alt}
                width="500"
                height="500"
                src={`https://paulserban.eu/assets/diagrams/${svgName}.svg`}
            />
        </div>
    );
};

export default ImageSvg;
