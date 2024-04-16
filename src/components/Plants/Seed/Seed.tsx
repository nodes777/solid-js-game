import styles from "../styles.module.css";
import { createSignal } from "solid-js";
import seed from "../../../assets/seedling.svg";

export const Seed = () => {
  const [isAnimating, setIsAnimating] = createSignal(true);
  setTimeout(() => setIsAnimating(false), 1000);

  return (
    <div class={isAnimating() ? styles.plantAnimate : styles.plant}>
      <svg
        width="16.844999"
        height="16.844999"
        viewBox="0 0 16.844999 16.844999"
        version="1.1"
        style="clip-rule:evenodd;fill-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2"
        id="svg20568"
      >
        <defs id="defs20572" />

        <g transform="matrix(0.24,0,0,0.24,-185.42796,-421.7322)" id="g20566">
          <g transform="matrix(62.5,0,0,62.5,764.804,1814.28)" id="g8880">
            <path
              d="M 0.687,0.21 C 0.653,0.21 0.621,0.204 0.591,0.191 0.561,0.178 0.535,0.161 0.513,0.139 0.491,0.117 0.474,0.091 0.461,0.061 0.448,0.031 0.441,-0.001 0.441,-0.035 c 0,-0.033 0.007,-0.064 0.019,-0.094 0.012,-0.03 0.03,-0.057 0.053,-0.08 0.011,-0.011 0.022,-0.023 0.034,-0.033 0.011,-0.011 0.023,-0.022 0.034,-0.034 v -0.25 h -0.14 c -0.034,0 -0.067,-0.006 -0.1,-0.017 C 0.309,-0.554 0.28,-0.57 0.253,-0.59 0.226,-0.61 0.202,-0.633 0.183,-0.661 0.163,-0.689 0.148,-0.719 0.138,-0.752 0.132,-0.773 0.128,-0.794 0.127,-0.815 0.126,-0.837 0.125,-0.858 0.125,-0.879 v -0.034 h 0.281 c 0.04,0 0.079,0.007 0.117,0.019 0.038,0.012 0.073,0.03 0.105,0.052 0.031,0.023 0.059,0.05 0.084,0.081 0.024,0.031 0.043,0.066 0.057,0.104 0.024,-0.015 0.051,-0.026 0.078,-0.034 0.028,-0.007 0.056,-0.011 0.085,-0.011 h 0.316 v 0.07 c 0,0.029 -0.004,0.057 -0.011,0.084 -0.008,0.027 -0.018,0.052 -0.032,0.075 -0.014,0.024 -0.031,0.045 -0.05,0.064 -0.019,0.02 -0.04,0.036 -0.064,0.05 -0.023,0.014 -0.048,0.024 -0.075,0.032 -0.027,0.007 -0.055,0.011 -0.084,0.011 h -0.14 v 0.04 l 0.012,0.011 c 0.017,0.017 0.034,0.033 0.05,0.049 0.015,0.016 0.029,0.033 0.04,0.051 0.011,0.017 0.02,0.037 0.027,0.058 0.007,0.021 0.01,0.045 0.01,0.073 C 0.931,0 0.925,0.031 0.912,0.061 0.899,0.091 0.882,0.117 0.86,0.139 0.838,0.161 0.812,0.179 0.782,0.191 0.752,0.204 0.72,0.21 0.687,0.21 Z"
              style="fill-rule:nonzero"
              id="path8870"
            />
            <path
              d="m 0.687,-0.281 c 0.023,0.024 0.047,0.047 0.071,0.069 0.024,0.023 0.047,0.046 0.068,0.072 L 0.805,0.039 H 0.578 L 0.547,-0.14 c 0.021,-0.026 0.044,-0.049 0.068,-0.072 0.024,-0.022 0.048,-0.045 0.072,-0.069 z"
              style="fill:#ca5010;fill-rule:nonzero"
              id="path8872"
            />
            <path
              d="M 0.651,-0.035 H 0.722 L 0.826,-0.14 c 0.012,0.015 0.02,0.032 0.026,0.05 0.006,0.018 0.009,0.037 0.009,0.056 0,0.024 -0.004,0.047 -0.013,0.068 C 0.839,0.055 0.826,0.073 0.81,0.089 0.794,0.105 0.776,0.117 0.754,0.126 0.733,0.136 0.711,0.14 0.687,0.14 0.662,0.14 0.64,0.136 0.619,0.126 0.597,0.117 0.579,0.105 0.563,0.089 0.547,0.073 0.535,0.055 0.525,0.034 0.516,0.013 0.512,-0.01 0.512,-0.034 c 0,-0.019 0.003,-0.038 0.009,-0.056 0.006,-0.018 0.014,-0.035 0.026,-0.05 z"
              style="fill:#f7894a;fill-rule:nonzero"
              id="path8874"
            />
            <path
              d="m 0.932,-0.632 h 0.246 c 0,0.034 -0.007,0.066 -0.02,0.096 -0.012,0.029 -0.03,0.055 -0.052,0.078 -0.023,0.022 -0.049,0.04 -0.078,0.052 -0.03,0.013 -0.062,0.02 -0.096,0.02 h -0.21 v 0.351 c 0,0.01 -0.004,0.018 -0.011,0.025 C 0.705,-0.003 0.696,0 0.687,0 0.677,0 0.668,-0.003 0.662,-0.01 0.655,-0.017 0.651,-0.025 0.651,-0.035 v -0.491 c 0,-0.01 -0.002,-0.019 -0.005,-0.028 C 0.642,-0.562 0.637,-0.57 0.631,-0.576 0.624,-0.582 0.617,-0.587 0.608,-0.591 0.6,-0.595 0.591,-0.597 0.581,-0.597 H 0.441 C 0.407,-0.597 0.375,-0.603 0.345,-0.616 0.315,-0.629 0.289,-0.646 0.267,-0.668 0.245,-0.691 0.227,-0.717 0.215,-0.747 0.202,-0.777 0.195,-0.808 0.195,-0.842 h 0.211 c 0.029,0 0.057,0.003 0.084,0.011 0.027,0.007 0.052,0.018 0.075,0.032 0.023,0.014 0.045,0.03 0.064,0.049 0.019,0.02 0.036,0.041 0.049,0.064 0.014,0.023 0.025,0.049 0.032,0.076 0.008,0.027 0.012,0.055 0.012,0.084 v 0.014 C 0.733,-0.531 0.746,-0.547 0.761,-0.562 0.776,-0.577 0.793,-0.589 0.811,-0.6 0.829,-0.61 0.849,-0.618 0.869,-0.624 0.89,-0.629 0.911,-0.632 0.932,-0.632 Z"
              style="fill:#bad80a;fill-rule:nonzero"
              id="path8876"
            />
            <path
              d="m 1.038,-0.562 c 0.009,0 0.017,0.004 0.024,0.011 0.007,0.007 0.011,0.015 0.011,0.025 0,0.009 -0.004,0.017 -0.011,0.024 -0.007,0.007 -0.015,0.011 -0.024,0.011 H 0.862 c -0.01,0 -0.018,-0.004 -0.025,-0.011 -0.007,-0.007 -0.01,-0.015 -0.01,-0.024 0,-0.01 0.003,-0.018 0.01,-0.025 0.007,-0.007 0.015,-0.011 0.025,-0.011 z m -0.527,-0.21 c 0.01,0 0.018,0.003 0.025,0.01 0.006,0.007 0.01,0.015 0.01,0.025 0,0.009 -0.004,0.017 -0.01,0.024 -0.007,0.007 -0.015,0.011 -0.025,0.011 H 0.335 c -0.009,0 -0.018,-0.004 -0.024,-0.01 C 0.304,-0.719 0.3,-0.728 0.3,-0.737 c 0,-0.01 0.004,-0.018 0.011,-0.025 0.007,-0.007 0.015,-0.01 0.024,-0.01 z"
              style="fill:#73aa24;fill-rule:nonzero"
              id="path8878"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
