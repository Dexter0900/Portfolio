<script setup>
const loader = ref(null);

const { gsap } = useGsap();
const emitter = useEmitter();

emitter.on('shader:running', () => {
  gsap.to(loader.value, {
    autoAlpha: 0,
    pointerEvents: 'none',
    onComplete: () => emitter.emit('loader:end'),
  });
});
</script>

<template>
  <div ref="loader" class="loader">
    <svg
      class="loader__svg"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_403_730)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M 1.0423136 0.69453125 L 1.0423136 512.6948 L 513.04207 512.6948 L 513.04207 0.69453125 L 1.0423136 0.69453125 z M 111.74873 168.42279 L 172.72796 168.42279 C 180.89939 168.42279 188.76433 169.11595 196.3229 170.50225 C 203.88147 171.88855 210.52106 174.44797 216.24106 178.18034 C 222.0632 181.80607 226.65968 186.76474 230.0304 193.05643 C 233.50326 199.34815 235.23939 207.34616 235.23939 217.05032 C 235.23939 234.2192 230.02997 247.2825 219.6114 256.24017 C 209.29497 265.19785 194.17803 269.67656 174.26016 269.67656 L 124.00587 269.67656 L 124.00587 343.57748 L 111.74873 343.57748 L 111.74873 168.42279 z M 270.47858 168.42279 L 282.73571 168.42279 L 282.73571 264.71769 L 377.88184 168.42279 L 394.88856 168.42279 L 325.7889 238.48467 L 400.25102 343.57748 L 383.85719 343.57748 L 316.90262 247.92233 L 282.73571 282.4732 L 282.73571 343.57748 L 270.47858 343.57748 L 270.47858 168.42279 z M 124.00587 181.21943 L 124.00587 256.87993 L 174.71957 256.87993 C 183.29957 256.87993 190.60292 256.02661 196.62934 254.32039 C 202.65577 252.61416 207.55871 250.10832 211.338 246.80251 C 215.21944 243.49671 218.02846 239.44439 219.76488 234.64563 C 221.50131 229.74023 222.36937 224.0884 222.36937 217.69007 C 222.36937 209.90542 221.04187 203.61349 218.38615 198.81474 C 215.83257 194.01597 212.30847 190.33702 207.81419 187.77769 C 203.42204 185.11171 198.31479 183.35206 192.49264 182.49894 C 186.6705 181.64582 180.54221 181.21943 174.1072 181.21943 L 124.00587 181.21943 z "
          fill="var(--surface-color)"
        />
      </g>
      <defs>
        <clipPath id="clip0_403_730">
          <rect
            width="512"
            height="512"
            fill="white"
            transform="translate(0.536133 0.453735)"
          />
        </clipPath>
      </defs>
    </svg>
  </div>
</template>

<style lang="scss">
.loader {
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;

  pointer-events: all;

  &::after {
    --circle-size: 32%;

    content: '';

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;

    background: radial-gradient(
      circle at center,
      transparent var(--circle-size),
      var(--surface-color) calc(var(--circle-size) + 0.25%)
    );
    background-size: 100% 100%;
    background-position: 50% 50%;
  }

  &__svg {
    height: 100%;
    width: 100%;

    max-width: 100%;
    max-height: 100%;
  }

  &__text {
    position: absolute;
    top: 50%;
    left: 50%;

    margin: 0;

    transform: translate(-50%, -50%);

    &--primary {
      font-size: var(--step-5);

      color: transparent;
      -webkit-text-stroke: 1px white;
    }
  }
}
</style>
