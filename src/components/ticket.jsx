const Ticket = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <div className="flex flex-col ">
        <svg
          className="mx-auto "
          width="148px"
          height="148px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
              fill="#01c121"
            ></path>{" "}
          </g>
        </svg>

        <h1 className="mx-auto text-lg font-bold">Ticket Booked Successfully !</h1>
        <div className="flex flex-col bg-slate-200 my-3   px-11 py-14 shadow-md">
          <div className="flex flex-row text-2xl">
            <div className="flex pt-4 pr-4">Vasai</div>

            <svg
              className="flex "
              width="64px"
              height="64px"
              viewBox="0 -6.5 38 38"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>right-arrow</title> <desc>Created with Sketch.</desc>{" "}
                <g
                  id="icons"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="ui-gambling-website-lined-icnos-casinoshunter"
                    transform="translate(-1511.000000, -158.000000)"
                    fill="#1C1C1F"
                    fill-rule="nonzero"
                  >
                    {" "}
                    <g id="1" transform="translate(1350.000000, 120.000000)">
                      {" "}
                      <path
                        d="M187.812138,38.5802109 L198.325224,49.0042713 L198.41312,49.0858421 C198.764883,49.4346574 198.96954,49.8946897 199,50.4382227 L198.998248,50.6209428 C198.97273,51.0514917 198.80819,51.4628128 198.48394,51.8313977 L198.36126,51.9580208 L187.812138,62.4197891 C187.031988,63.1934036 185.770571,63.1934036 184.990421,62.4197891 C184.205605,61.6415481 184.205605,60.3762573 184.990358,59.5980789 L192.274264,52.3739093 L162.99947,52.3746291 C161.897068,52.3746291 161,51.4850764 161,50.3835318 C161,49.2819872 161.897068,48.3924345 162.999445,48.3924345 L192.039203,48.3917152 L184.990421,41.4019837 C184.205605,40.6237427 184.205605,39.3584519 184.990421,38.5802109 C185.770571,37.8065964 187.031988,37.8065964 187.812138,38.5802109 Z"
                        id="right-arrow"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>

            <div className="flex pt-4  pl-4">Borivali</div>
          </div>
          <div className="text-md mx-auto pr-4">
            Return
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
