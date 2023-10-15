function PlusSvg(props) {
  const { isPlusClicked } = props;
  return (
    <>
      {isPlusClicked ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="14"
          viewBox="0 0 15 10"
          fill="none"
        >
          <path
            d="M1.41421 3.50668L7.01181 9.10428L5.5976 10.5185L0 4.9209L1.41421 3.50668Z"
            fill="#108778"
          />
          <path
            d="M14.6999 1.41421L6.41427 9.6998L5.00005 8.28559L13.2856 0L14.6999 1.41421Z"
            fill="#108778"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path d="M4 0H6V10H4V0Z" fill="#f3bf05" />
          <path d="M10 4V6L0 6L8.74228e-08 4L10 4Z" fill="#f3bf05" />
        </svg>
      )}
    </>
  );
}

export { PlusSvg };
