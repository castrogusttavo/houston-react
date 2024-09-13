import React from 'react'
import { Icon, IconProps } from '../Icon'

export function NoMeetingRoomIcon({
  iconName = 'no-meeting-room',
  ...props
}: IconProps) {
  return <Icon {...props} iconName={iconName} />
}
