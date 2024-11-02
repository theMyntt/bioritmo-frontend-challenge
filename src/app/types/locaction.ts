export type TLocationDTO = {
  current_country_id: number
  locations: Array<TLocation>
  wp_total: number
  total: number
  success: boolean
}

export type TLocation = {
  id: number
  title: string
  content: string
  opened: boolean
  mask: string
  towel:string
  fountain: string
  locker_room: string
  schedules: Array<{
    weekdays: string
    hour: string
  }>
}