// units need to be ordered from biggest to smallest

export const initialSegment = {
  calculable: false, // when at least two factors are bigger than 0
  factors: [
    {
      name: "distance",
      pretty: {
        en: "Distance",
        pl: "Dystans"
      },
      active: true,
      limit: 1000 * 1000 - 1,
      units: [
        {
          name: "kilometers",
          unit: "km",
          ratio: 1000,
        },
        {
          name: "meters",
          unit: "m",
          ratio: 1,
          max: 999
        }
      ],
      sum: 0,
      standards: [
        { 
          name: "marathon", 
          pretty: {
            en: "Marathon",
            pl: "Maraton",
          },
          value: 42195 
        },
        { 
          name: "half-marathon", 
          pretty: {
            en: "Half marathon",
            pl: "Półmaraton",
          },
          value: 21097 
        },
        { 
          name: "quarter-marathon", 
          pretty: {
            en: "Quarter marathon",
            pl: "Ćwierćmaraton",
          },
          value: 10549 
        },
      ]
    },
    {
      name: "time",
      pretty: {
        en: "Time",
        pl: "Czas",
      },
      active: true,
      limit: 1000 * 3600 - 1,
      units: [
        {
          name: "hours",
          unit: "h",
          ratio: 3600,
        },
        {
          name: "minutes",
          unit: "min",
          ratio: 60,
          max: 59
        },
        {
          name: "seconds",
          unit: "s",
          ratio: 1,
          max: 59
        }
      ],
      sum: 0
    },
    {
      name: "speed",
      pretty: {
        en: "Speed",
        pl: "Prędkość",
      },
      active: false,
      limit: 1000 * 1000 - 1,
      units: [
        {
          name: "kilometers-per-hour",
          unit: "km/h",
          ratio: 1000,
        },
        {
          name: "meters-per-hour",
          unit: "m/h",
          ratio: 1,
          max: 999
        }
      ],
      sum: 0,
      converter: 3600,
      // for summary - if true, factor is averaged
      // else it is a sum (for example distance in summary is added, not averaged)
      averaged: true,
      siblings: [
        {
          name: "tempo",
          pretty: {
            en: "Tempo",
            pl: "Tempo",
          },
          limit: 1000 * 60 - 1,
          units: [
            {
              name: "minutes-per-kilometers",
              unit: "min/km",
              ratio: 60,
            },
            {
              name: "seconds-per-kilometers",
              unit: "s/km",
              ratio: 1,
              max: 59
            }
          ],
          converter: 1000,
          transform: 'inverse'
        }
      ]
    }
  ]
};