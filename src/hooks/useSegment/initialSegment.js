export const initialSegment = [
  {
    name: "distance",
    active: true,
    units: [
      {
        name: "kilometers",
        value: 0,
        ratio: 1000,
        max: 1000
      },
      {
        name: "meters",
        value: 0,
        ratio: 1,
        max: 999
      }
    ],
    sum: 0
  },
  {
    name: "time",
    active: true,
    units: [
      {
        name: "hours",
        value: 0,
        ratio: 3600,
        max: 100
      },
      {
        name: "minutes",
        value: 0,
        ratio: 60,
        max: 59
      },
      {
        name: "seconds",
        value: 0,
        ratio: 1,
        max: 59
      }
    ],
    sum: 0
  },
  {
    name: "speed",
    active: false,
    units: [
      {
        name: "meters-per-second",
        value: 0,
        ratio: 1,
        max: 1000,
        step: 0.1
      }
    ],
    sum: 0
  }
]
