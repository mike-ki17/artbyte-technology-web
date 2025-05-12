import React from 'react';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  variant?: 'dark' | 'light' | 'color';
}

const Logo: React.FC<LogoProps> = ({ size = 'medium', variant = 'color' }) => {
  const sizeClasses = {
    small: 'h-8',
    medium: 'h-12',
    large: 'h-18',
  };

  // Base styles for logos with different variants
  let colorClasses = {
    src: 'https://ik.imagekit.io/yjcg0b5mfartbyte/Logo%20Artbyte-Technology/Logo%20_%20ART%20BYTE_White.png?updatedAt=1747083516035'
  };

  // Adjust colors based on variant
  if (variant === 'light') {
    colorClasses = {
       src: 'https://ik.imagekit.io/yjcg0b5mfartbyte/Logo%20Artbyte-Technology/Logo%20_%20ART%20BYTE_White.png?updatedAt=1747083516035'
    };
  } else if (variant === 'dark') {
    colorClasses = {
       src: 'https://ik.imagekit.io/yjcg0b5mfartbyte/Logo%20Artbyte-Technology/Logo%20_ART_BYTE.png?updatedAt=1747082049841'
    };
  }

  return (
    <div className={`flex items-center ${sizeClasses[size]}`}>
     <img
        src={colorClasses.src}
        alt="Logo Artbyte Technology"
        className={`${sizeClasses[size]} w-auto`}
      />
    </div>
  );
};

export default Logo;