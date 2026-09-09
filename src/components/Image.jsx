const Image = ({ src, alt, w = "lg:w-3xs w-sm" }) => {
  const style = `${w} rounded-lg border-2 shadow-lg`;

  return (
    <img
        src={src}
        alt={alt}
        loading="lazy"
        className={style}
    />
  );
};

export default Image;
