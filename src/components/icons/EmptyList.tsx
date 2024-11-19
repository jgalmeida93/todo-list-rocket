const EmptyList = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="56"
    height="56"
    fill="none"
    viewBox="0 0 56 56"
  >
    <path fill="url(#pattern0_4130_503)" d="M0 0h56v56H0z"></path>
    <defs>
      <pattern
        id="pattern0_4130_503"
        width="1"
        height="1"
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#image0_4130_503" transform="scale(.01)"></use>
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="image0_4130_503"
        width="100"
        height="100"
      ></image>
    </defs>
  </svg>
);

export default EmptyList;
