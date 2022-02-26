declare namespace ResasApi {
  export type GetPrefecturesResponse = {
    message: string | null,
    result: {
      prefCode: number,
      prefName: string
    }[],
  }
}