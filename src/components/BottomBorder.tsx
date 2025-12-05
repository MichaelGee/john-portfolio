const BottomBorder = () => {
  return (
    <>
      {/* Bottom glow effect */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none w-[20rem] md:w-[32.0625rem]"
        style={{
          height: '1.5625rem', // 25px
          background: 'rgba(122, 155, 247, 0.41)',
          filter: 'blur(4.90625rem)', // 78.5px
        }}
      />

      {/* Bottom border line */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[43.28125rem]"
        style={{
          height: '0.0625rem', // 1px
          background: 'linear-gradient(90deg, #101520 0%, #A8B8E0 50%, #101520 100%)',
        }}
      />
    </>
  );
};

export default BottomBorder;
