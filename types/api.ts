export type TApiResponse<TValue = { [key: string]: any }> = {
  status: number
  error?: string
} & TValue
