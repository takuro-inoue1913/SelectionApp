declare namespace ResasApi {
  export type GetPrefecturesResponse = {
    message: string | null
    result: {
      prefCode: number
      prefName: string
    }[]
  }

  export type GetPopulationCompositionResponse = {
    message: string | null
    result: {
      boundaryYear: number
      data: {
        label: '総人口' | '年少人口' | '生産年齢人口' | '老年人口'
        data: PopulationComposition.TotalPopulation[]
      }[]
    }
  }
}

declare namespace PopulationComposition {
  export type TotalPopulation = {
    year: number
    value: number
  }
}
